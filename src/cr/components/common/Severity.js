
import React from 'react'

import CustomRadio from 'components/CustomRadio' 
import { makeFieldName } from 'utils/formatters'

const dataSeverity = {
  data: {
    mild: "Mild",
    moderate: "Moderate",
    severe: "Severe"
  },
    label: "Severity",
    initialValue: ""
}

export const Severity = props =>
{
  const { parentId, ...rest } = props
  return (

    <CustomRadio fieldName={makeFieldName(parentId, 'severity')} {...dataSeverity} />
  )
}