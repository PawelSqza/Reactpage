import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

import { Wrapper } from '../../styledHelpers/Components';


const InnerWrapper = styled.div`
    width:20px;
    margin:10px 40px 0 0;
    border:2px solid red;

`;




export const Entities: FC = () => {
    return (
        <Wrapper>
            Entities
        </Wrapper>
    );
};
// const InnerWrapper = styled.div`
    /* border: 0px solid #f5f1f1; */
    /* min-height:20px; */
    /* text-align: center; */

// `;

// export const Entities: FC = () => {
    // return (
        // <Wrapper>
            {/* <InnerWrapper> */}
                {/* Prawa strona tekst */}
            {/* </InnerWrapper> */}

        {/* </Wrapper> */}
    // );
// };