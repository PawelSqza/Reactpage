import React,{FC} from 'react';
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route,
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
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif, Helvetica, sans-serif;
`;

const Content = styled.div`
    max-width:1200px;
    display:flex;
    margin: 0 auto;
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
                                <Route path="/entities" exact>
                                    <Entities/>
                                </Route>
                                <Route path="/profile" exact>
                                    <Profile/>
                                </Route>
                                <Route path="/client_contract" exact>
                                    <WorkspacesMain type="0"/>
                                </Route>
                                <Route path="/supplier_contract" exact>
                                    <WorkspacesMain type="1"/>
                                </Route>
                                <Route path="/corporate" exact>
                                    <WorkspacesMain type="2"/>
                                </Route>
                                <Route path="/group_norms" exact>
                                    <WorkspacesMain type="3"/>
                                </Route>
                                <Route path="/real_estate_contracts" exact>
                                    <WorkspacesMain type="4"/>
                                </Route>
                                <Route path="/mock" exact>
                                    <Mock/>
                                </Route>
                                <Route path="/" exact>
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