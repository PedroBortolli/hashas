import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from './data'
import { calc } from './calc'
import Autosuggest from 'react-autosuggest'

const Home = () => {
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

    const inputProps = {
        placeholder: 'Search for a Temtem',
        value,
        onChange
    }
console.log(temtem)
    return (
        <Container>
            <h1>Hashas</h1>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={() => setTemtem(value)}
            />
            {temtem && 
                <div>
                    <h1>{temtem}</h1>
                </div>
            }
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