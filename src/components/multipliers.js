import React from 'react'
import styled from 'styled-components'
import { calc } from '../calc'
import { images } from '../importer'

const types = ['Neutral', 'Fire', 'Water', 'Nature', 'Electric', 'Earth', 'Mental', 'Wind', 'Digital', 'Melee', 'Crystal', 'Toxic']
const colors = {
    0.25: '#ff0004',
    0.5: '#a31719',
    1: '',
    2: '#23a174',
    4: '#29d99b'
}

const Multipliers = ({ type1, type2 }) => {
    const damages = calc(type1, type2)
    return (
        <React.Fragment>
            <Label>Types defense</Label>
            <Container>
                {types.map(type => {
                    return (
                        <Column key={type}>
                            <Image title={type} alt={type} src={images[`${type}.png`]} />
                            <span style={{color: colors[damages[type]], fontWeight: damages[type] > 1 ? 'bold' : ''}}>{damages[type]}</span>
                        </Column>
                    )
                })}
            </Container>
        </React.Fragment>
    )
}

export default Multipliers

const Container = styled.div`
    background-color: rgba(59, 41, 117, 0.6);
    padding: 12px;
    border-radius: 6px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 24px;
    grid-row-gap: 16px;
`
const Image = styled.img`
    width: 28px;
    height: 36.58px;
`
const Label = styled.span`
    font-size: 16px;
    margin: 24px 0px 12px;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`