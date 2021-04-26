import React,{FC} from 'react';
import styled from 'styled-components';

import {TopBar} from '../TopBar/TopBar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Articles} from '../Articles/Articles';
import {Workspaces} from '../Workspaces/Workspaces';

const Wrapper = styled.section`
`;

const Content = styled.div`
    margin-top:4px;
`;

const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <Articles/>
                <Workspaces/>
            </Content>
        </Wrapper>
    );
};

export default MainPage;