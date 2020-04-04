import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import CountryCard from './CountryCard'

export default function Global({ countryData }) {
  return (
    <ContentWrapper>
      <h2>Select a country for more information</h2>
      {countryData.map((country) => (
        <CountryCard key={country.country} country={country} />
      ))}
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  padding: 12px;
  overflow: scroll;
`
