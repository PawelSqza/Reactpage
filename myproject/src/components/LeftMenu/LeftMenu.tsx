import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

import { Wrapper } from '../../styledHelpers/Components';
import { LeftNav } from '../LeftNav/LeftNav';

const Wrapper1 = styled.div`
    max-width:220px;
    margin:0 40px 0 0;
`;




const InnerWrapper = styled.div`
    border-radius: 10px;
    width: 220px;
    min-height: 240px;
    text-align: center;
    background: ${Colors.white};
    
`;

const PersonInfo = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    align-items:center;

    #foto{
    padding-top:12px;
    padding-bottom:14px;
    width:100px;
    border-radius: 0px;
    margin:0 auto;
    }

    #name{
    margin-top:7px;
    margin-bottom:7px;
    color:#fa063b;
    font-weight:bold;
    }

    #job{
    color:grey;
    padding-bottom:20px;
    border-bottom:1px solid lightgray;
    }
`;

const PersonDetails = styled.div`
    display:grid;
    margin-top:10px;
 padding-bottom:10px;
    grid-template-columns:20% 60% 20%;
    align-items:center;
    .leftImgs{
        grid-column:1;
        margin-left:14px;
        margin-top:5px;
        margin-bottom:5px;
    }
    .middle{
        grid-column:2;
        text-align:left;
        margin-top:5px;
        margin-bottom:5px;
    }
    .rightImgs{
        grid-column:3;
        border:0px solid black;
        padding:4px;
        border-radius:6px;
        margin-top:5px;
        margin-bottom:5px;
        
    }

`;



export const LeftMenu: FC = (props) => {
    return (
        <Wrapper1>
            <InnerWrapper>
                <PersonInfo>
                    <img id="foto" src="./media/icons/wick.jpg" />
                    <span id="name">John Wick</span>
                    <span id="job"> Company</span>
                </PersonInfo>
                <PersonDetails>
                    <img className="leftImgs" src="./icons/network.png" />
                    <span className="middle">Your network</span>
                    <img className="rightImgs" src="./icons/user-plus.png" />

                    <img className="leftImgs" src="./media/icons/publications.png" />
                    <span className="middle">Your Publications</span>
                    <img className="rightImgs" src="./media/icons/plus.png" />
                </PersonDetails>
            </InnerWrapper>
            <LeftNav>

            </LeftNav>
        </Wrapper1>
    );
};