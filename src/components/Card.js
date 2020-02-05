import React from 'react'
import styled from 'styled-components'
import { data } from '../lib/data'
import Multipliers from './multipliers'
import { images } from '../importer'

const Card = ({ temtem }) => {
    const info = data.filter(entry => entry.name === temtem)[0]
    return (
        <Container>
            <OwnTypes>
                <Image title={info.type1} alt={info.type1} src={images[`${info.type1}.png`]} />
                {info.type2 && <Image title={info.type1} alt={info.type1} src={images[`${info.type2}.png`]} />}
            </OwnTypes>
            <Portrait src={info.img} />
            <Multipliers type1={info.type1} type2={info.type2} />
        </Container>
    )
}

export default Card

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const OwnTypes = styled.div`
    display: flex;
    > img:first-child { margin-right: 8px }
`
const Image = styled.img`
    width: 28px;
    height: 36.58px;
`
const Portrait = styled.img`
    width: 150px;
    height: 150px;
    margin: 18px 18px 8px 0px;
`