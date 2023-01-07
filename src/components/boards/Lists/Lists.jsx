import { cardStyle } from "./ReusableStyles"
import styled from 'styled-components'
import React from 'react'

export default function Lists() {
  return (
    <Section>
        <div class = "to-do">
            <h2> To Do </h2>
        </div>
        <div class = "doing">
            <h2> Doing </h2>
        </div>
        <div class = "done">
            <h2> Done </h2>
        </div>
    </Section>
  )
}

const Section = styled.div`
display:grid;
grid-template-columns: repeat(3, 1fr);
gap:1rem;
.to-do, .doing, .done{
    ${cardStyle};
    padding: 5rem;
    justify-content:space-evenly;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    margin: 10px;
}
`
