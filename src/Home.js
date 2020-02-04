import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from './lib/data'
import Temtem from './components/Temtem'

const Home = () => {
    return (
        <Container>
            <h1>Hashas</h1>
            <Row>
                <Temtem data={data} />
                <Temtem data={data} />
            </Row>
        </Container>
    )
}

export default Home

const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #070240;
    color: #dedad3;
    min-height: 100vh;
`
const Row = styled.div`
    display: flex;
    justify-content: center;
`