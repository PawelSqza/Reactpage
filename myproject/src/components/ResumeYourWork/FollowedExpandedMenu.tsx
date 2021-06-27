import { FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';




const Wrapper = styled.div`
    position: absolute;
    background: ${Colors.black};
    margin-top:130px;
    width:120px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding: 10px;
`;





export const FollowedExpandedMenu: FC = () => {


    return (
        <Wrapper>
            <input type="button" id="all" value="Followed" />
            <input type="button" id="all" value="All" />
            <input type="button" id="mine" value ="Mine" />
        </Wrapper>
    );
};