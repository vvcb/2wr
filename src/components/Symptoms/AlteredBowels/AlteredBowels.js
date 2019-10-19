import React from "react"
import SymptomTemplate from "components/Symptoms/SymptomTemplate"

import allData from "data/historyOptions.yaml"

const data = allData.abh

const { id, is, ...fields } = data

export const makeSummary = values => {
  const { severity, character, cause } = values
  const formattedMessage = `${severity && severity + ", "} 
  ${character && character} 
  ${cause && "; likely cause:" + fields.cause.data[cause]}`

  return formattedMessage
}

export const _Component = props => {
  return <SymptomTemplate data={data} makeSummary={makeSummary} {...props} />
}
