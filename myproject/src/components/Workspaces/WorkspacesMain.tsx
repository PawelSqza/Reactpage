import {FC} from 'react';
import * as React from 'react';
//import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { ResumeYourWork } from '../ResumeYourWork/ResumeYourWork';

interface props{
    type: string;
}

const data = [
    {
        id: 1,
        photo: './media/imgs/works1.jpg',
        name: 'Client contract',
        content: "Client contract looorem loorem",
        icon: "./media/imgs/write.png"
    },
    {
        id: 2,
        photo: './media/imgs/works2.jpg',
        name: 'Supplier contract',
        content: "Supplier contract loorem loorem",
        icon: "./media/imgs/write.png"
    },
    {
        id: 3,
        photo: './media/imgs/works3.jpg',
        name: 'Corporate',
        content: "Corporate loorem loorem",
        icon: "./media/icons/entities2.png"
    },
    {
        id: 4,
        photo: './media/imgs/works4.jpg',
        name: 'Group norms',
        content: "Group norms loorem loorem",
        icon: "./media/icons/book.png"
    },
    {
        id: 5,
        photo: './media/imgs/works1.jpg',
        name: 'Real estate contracts',
        content: "Real estate contracts loorem loorem",
        icon: "./media/imgs/write.png"
    }
]

export const WorkspacesMain: FC <props> = (props) => {

const Wrapper = styled.div`
    width:940px;
    margin:10px 40px 0 0;
`;

const Top = styled.div`
    background:${Colors.white};
    border-radius: 10px;


    .bgPhoto{
        height:180px;
        background-image: url(${data[parseInt(props.type)].photo});
        background-position: center;
        background-size: cover;
    }

    .bottomTopInfo{
        display: grid;
        padding-bottom:15px;
        grid-template-columns: 12% 1fr;
    }

    .leftImg{
        display: flex;
        align-items: center;
        margin:0 auto;

        img{
            width:35px;
        }
    }

    .rightContent{
        position: relative;

        h1{
            margin-top:15px;
            font-size: ${fontSize[16]};
            font-weight: bold;
        }

        p{
            color:${Colors.lightgrayOriginal};
            margin-top:20px;
        }

        .settingsIcon{
            cursor: pointer;
            width:20px;
            position: absolute;
            right:0;
            margin:5px 5px 0 0;
        }
    }

`;

const Middle = styled.div`
    margin-top: 20px;
    background:${Colors.lightgrayOriginal};
    padding:20px;

    #title{
        margin-bottom: 10px;
        color:${Colors.lightgray};
        font-weight: bold;
    }

    .boxesContainer{
        display: flex;
        column-gap: 10px;

}

`;

const Box = styled.div`
    width:310px;
    border:1px solid purple;
    background:${Colors.white};
    padding:10px;

    .imgInBoxes{
        width:30px;
    }

    h1{
        margin-top:20px;
        font-size: ${fontSize[20]};
    }

    p{
        margin:10px 0;
        font-size: ${fontSize[14]};
    }

`;


    return (
        <Wrapper>
            <Top>
                <div className="bgPhoto">
                </div>
                <div className="bottomTopInfo">
                    <div className="leftImg">
                        <img src={data[parseInt(props.type)].icon} alt="Right icon img"/>
                    </div>
                    <div className="rightContent">
                        <img src="./media/icons/settingsIcon.png" className="settingsIcon" alt="Settings Icon"/>
                        <h1>{data[parseInt(props.type)].name}</h1>
                        <p>{data[parseInt(props.type)].content}</p>
                    </div>
                </div>
            </Top>
            <Middle>
                <p id="title">Start working on corporate matters</p>
                <div className="boxesContainer">
                    <Box>
                        <img className="imgInBoxes" src="./media/icons/entities.png" alt="Entities icon"/>
                        <h1>Explore your entities</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.   harum dolores error illum eos..</p>
                    </Box>
                    <Box>
                        <img className="imgInBoxes" src="./media/imgs/structure.png" alt="Entities icon"/>
                        <h1>Structure the ownership</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo  asperiores eum corrupti error..</p>
                    </Box>
                    <Box>
                        <img className="imgInBoxes" src="./media/icons/entities.png" alt="Entities icon"/>
                        <h1>Define the calendar</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, saepe..</p>
                    </Box>
                </div>
            </Middle>
            <ResumeYourWork>

            </ResumeYourWork>

        </Wrapper>
    );
};