import React, { useState } from 'react'
import { calc } from '../calc'
import Autosuggest from 'react-autosuggest'
import styled from 'styled-components'
import './styles/auto-suggestions.scss'

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
    
    console.log(temtem)

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
                    <h1>{temtem}</h1>
                </Center>
            }
        </Container>
    )
}

export default Temtem

const Container = styled.div`
    margin: 0px 8px;
`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`