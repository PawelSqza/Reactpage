import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Wrapper} from '../../styledHelpers/Components';

const InnerWrapper = styled.div`
`;

const Box = styled.div`
    margin:20px 20px 20px 0;
    box-shadow: 1px 2px 10px };
`;

const CustomImage = styled.img`
    width:240px;
`;

const Icon = styled.div`

    img{
    width:60px;
    height:60px;
    padding:6px;
    background:${Colors.white};
    margin-top:-30px;
    margin-left:7px;
    box-shadow: 1px 2px 10px ;
    }
    p{
        font-size:${fontSize[18]};
        margin-left:90px;
        margin-top:-40px;
    }
`;

const AndUsers = styled.div`
    margin-left:12px;
    margin-top:40px;
    img{
        width:20px;
        margin-right:5px;
    }
    span{
        margin-left:10px;
        margin-right:20px;
    }
    p{
        margin-top:15px;
        margin-bottom:10px;
        color:blue;
    }

`;
export const SingleWorkspaceWindow: FC = () => {
    return (
        <InnerWrapper>
                <Box>
                    <CustomImage src="./imgs/write2.jpg"/>
                        <Icon>
                            <img src="./imgs/write.png"/>
                            <p>Client </p>
                        </Icon>
                        <AndUsers>
                            <img src="./imgs/write.png"/>
                            Contract
                            <span>&#9679;</span>
                            <img src="./icons/people.png"/>
                            100 users
                            <p>Last update 4 day ago</p>
                        </AndUsers>
                </Box>
        </InnerWrapper>
    );
};