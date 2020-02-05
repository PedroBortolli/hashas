import React, { useState } from 'react'
import { calc } from '../calc'
import Autosuggest from 'react-autosuggest'
import styled from 'styled-components'
import './styles/auto-suggestions.scss'
import Card from './Card'

const Temtem = ({ data }) => {
    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [temtem, setTemtem] = useState(null)

    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase()
        const inputLength = inputValue.length

        return inputLength === 0 ? [] : data.filter(temtem =>
            temtem.name.toLowerCase().slice(0, inputLength) === inputValue
        )
    }

    const getSuggestionValue = temtem => temtem.name

    const renderSuggestion = temtem => <div>{temtem.name}</div>

    const onChange = (event, { newValue }) => {
        setValue(newValue)
    }

    const changeTemtem = (temtem) => {
        setValue('')
        setTemtem(temtem)
    }

    const inputProps = {
        placeholder: 'Search for a Temtem',
        value,
        onChange
    }

    return (
        <Container>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={(_, {suggestion}) => changeTemtem(suggestion.name)}
            />
            {temtem && 
                <Center>
                    <Title>{temtem}</Title>
                    <Card temtem={temtem} />
                </Center>
            }
        </Container>
    )
}

export default Temtem

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.span`
    font-size: 36px;
    font-weight: bold;
    margin: 16px 0px 0px;
`