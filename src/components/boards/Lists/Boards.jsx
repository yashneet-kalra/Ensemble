import React from 'react';
import Lists from './Lists';
import styled from 'styled-components';

const Boards = () => {
    return (
        <>
            <Section>
                <div class = "Cards"> <Lists/> </div>
            </Section>
        </>
    );
}

const Section = styled.div`
margin-top: 1.2rem;
padding: 1rem;
height: 100%;
.grid{
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
`

export default Boards;
