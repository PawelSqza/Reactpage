import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Wrapper} from '../../styledHelpers/Components';

const InnerWrapper = styled.div`
    background: ${Colors.white};
    margin-top:30px;
    padding-top:20px;
    padding-left:20px;
    padding-right:20px;
    h1{
        font-size:${fontSize[18]};
        color:red;
        margin-bottom:10px;

    }

    p{
        font-size:${fontSize[18]};
    }
`;

const Bottom = styled.div`
    margin:10px 0px;
    padding-bottom:20px;
    img{
        width:20px;
    }
    span{
        margin:0 10px;
    }
`;


export const SingleResumeYourWorkWindow: FC = () => {
    return (
        <InnerWrapper>
            <h1>World company SAS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing  </p>
            <Bottom>
                <img src="./media/logo.png"/>
                <span>abb. corp. </span>
                &#9679;
                <img src="./imgs/write.png"/>
                <span>Corporate</span>
                &#9679;
                Updated 1 days ago by Lee Ann

            </Bottom>
        </InnerWrapper>
    );
};