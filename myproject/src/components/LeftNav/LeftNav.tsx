import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';

const InnerWrapper = styled.div`
    width: 250px;
    display:grid;
    grid-template-columns:25% 75%;
    align-items:center;
    margin-top:10px;
    margin-bottom:10px;
    margin-left: 0px;

    .imgs{
        grid-column:1;
        margin-left: 10px;
        margin-top:7px;
        margin-bottom:7px;
    }

    .titles{
        grid-column:2;
        margin-top:7px;
        margin-bottom:7px;
    }
`;


export const LeftNav: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <img className="imgs" src="./media/icons/publications.png"/>
                <span className="titles">Publications</span>

                <img className="imgs" src="./media/icons/ecosystem.png"/>
                <span className="titles">Ecosystem</span>

                <img className="imgs" src="./media/icons/entities.png"/>
                <span className="titles">Entities</span>

            </InnerWrapper>
        </Wrapper>
    );
};