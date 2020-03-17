import React from 'react'
import SymptomTemplate from 'cr/components/Symptoms/SymptomTemplate'
import SymptomToggleTemplate from 'cr/components/Symptoms/SymptomToggleTemplate'
import allData from  'cr/data/symptoms.yaml'

const data = allData.abdopain
const { id, is, ...fields } = data

export const makeSummary = values => {
  const { severity, location, onset, character, duration } = values
  const formattedMessage = `${severity && severity + ', '} 
  ${character && character} rectal bleeding  
  ${location && 'with ' + fields.location.data[location]}.`

  return formattedMessage.toLowerCase()
}

export const _Component = props => {
  return (
    <>
      {/* <SymptomTemplate data={data} makeSummary={makeSummary} {...props} /> */}
      <SymptomToggleTemplate data={data} makeSummary={makeSummary} {...props} />
    </>
  )
}
