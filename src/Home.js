import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from './lib/data'
import Temtem from './components/Temtem'
import useScreenSize from './hooks/useScreenSize'

const Home = () => {
    const [width] = useScreenSize()
    return (
        <Container>
            <Title>Hashas</Title>
            <SubTitle>Quickly check the strengths and weaknesses of your opponents</SubTitle>
            <Row width={width}>
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
    padding: 16px;
`
const Title = styled.span`
    font-size: 36px;
    font-weight: bold;
`
const SubTitle = styled.span`
    text-align: center;
`
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.width > 750 ? 2 : 1}, 340px);
    grid-column-gap: 32px;
    grid-row-gap: 64px;
    margin-top: 36px;
`
