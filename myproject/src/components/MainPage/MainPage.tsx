import React,{FC} from 'react';
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}   from "react-router-dom";



import {TopBar} from '../TopBar/TopBar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Publications} from '../Publications/Publications';
import {Workspaces} from '../Workspaces/Workspaces';
import {ResumeYourWork} from '../ResumeYourWork/ResumeYourWork';

import {Entities} from '../Entities/Entities';
import {Profile} from '../Profile/Profile';
import {WorkspacesMain} from '../Workspaces/WorkspacesMain';
import {Mock} from '../Mock/Mock';

const Wrapper = styled.section`
    background: #F5F7F9;
    font-family: Arial,  sans-serif;
`;

const Content = styled.div`
    max-width:1200px;
    display:flex;
    margin: 0  auto;
`;

const RightSide = styled.div`
`;

const MainPage: FC = () => {
    return (
        <Router>
            <Wrapper>
                <TopBar/>
                <Content>
                    <LeftMenu/>
                        <RightSide>
                            <Switch>
                                <Route path="/entities">
                                    <Entities/>
                                </Route>
                                <Route path="/profile">
                                    <Profile/>
                                </Route>
                                <Route path="/workspaces">
                                    <WorkspacesMain/>
                                </Route>
                                <Route path="/mock">
                                    <Mock/>
                                </Route>
                                <Route path="/">
                                    <Publications/>
                                    <Workspaces/>
                                    <ResumeYourWork/>
                                </Route>
                            </Switch>
                        </RightSide>
                </Content>
            </Wrapper>
        </Router>
    );
};

export default MainPage;
// import {TopBar} from '../TopBar/TopBar';
// import {LeftMenu} from '../LeftMenu/LeftMenu';
// import {Articles} from '../Articles/Articles';
// import {Workspaces} from '../Workspaces/Workspaces';
// 
// const Wrapper = styled.section`
// `;
// 
// const Content = styled.div`
    /* margin-top:4px; */
// `;
// 
// const MainPage: FC = () => {
    // return (
        // <Wrapper>
            {/* <TopBar/> */}
            {/* <Content> */}
                {/* <LeftMenu/> */}
                {/* <Articles/> */}
                {/* <Workspaces/> */}
            {/* </Content> */}
        {/* </Wrapper> */}
    // );
// };
// 
// export default MainPage;