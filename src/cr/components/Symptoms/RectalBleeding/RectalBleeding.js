import React from 'react'
import SymptomTemplate from 'cr/components/Symptoms/SymptomTemplate'
import SymptomToggleTemplate from 'cr/components/Symptoms/SymptomToggleTemplate'
import allData from 'cr/data/symptoms.yaml'

const data = allData.prb
const { id, is, ...fields } = data

export const makeSummary = values => {
  const { severity, character, pain } = values
  const formattedMessage = `${severity && severity + ', '} 
  ${character && character} rectal bleeding  
  ${pain && 'with ' + fields.pain.data[pain]}.`

  return formattedMessage.toLowerCase()
}

export const _Component = props => {
  return (
    <>
      <SymptomTemplate data={data} makeSummary={makeSummary} {...props} />
      {/* <SymptomToggleTemplate data={data} makeSummary={makeSummary} {...props} /> */}
    </>
  )
}
