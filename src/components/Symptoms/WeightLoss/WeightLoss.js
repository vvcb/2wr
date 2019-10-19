import React from "react"
import SymptomTemplate from "components/Symptoms/SymptomTemplate"

import allData from "data/historyOptions.yaml"

const data = allData.wtloss
const { id, is, ...fields } = data

const makeSummary = values => {
  const { severity, cause } = values

  const causeStr = cause => {
    switch (cause) {
      case "intentional":
        return "intentional weight loss"
      case "unintentional":
        return "un-intentional weight loss"
      case "alternative":
        return "weight loss with a clear cause"
      default:
        return ""
    }
  }

  const formattedMessage = `${severity && severity + ", "} 
  ${causeStr(cause)}`

  return formattedMessage
}

export const _Component = props => {
  return <SymptomTemplate data={data} makeSummary={makeSummary} {...props} />
}
