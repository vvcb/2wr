import React, { useState } from 'react'

import { Grid } from '@material-ui/core'
import CustomRadio from 'components/CustomRadio'
import AccordionPanel from 'components/Accordion/AccordionPanel'
import Duration from 'components/Duration'
import { makeFieldName } from 'utils/formatters'


// import SymptomTemplate from 'components/Symptoms/SymptomTemplate'
import allData from  'cr/data/symptoms.yaml'

const data = allData.anaemia
const { id, is, ...fields } = data

export const makeSummary = values =>
{
  const { type, severity, cause} = values
  const formattedMessage = `${severity && severity + ', '} 
  ${type && fields.type.data[type]} anaemia  
  ${cause && 'related to ' + fields.cause.data[cause]}.`

  return formattedMessage.toLowerCase()
}

const SymptomTemplate = props =>
{
  const { data, makeSummary, ...rest } = props
  const { id, is, ...fields } = data
  return (
    <AccordionPanel
      name={id}
      title={is.label}
      makeSummary={makeSummary}
      {...rest}
    >
      <Duration fieldName={makeFieldName(id, 'duration')}/>
      <Grid container spacing={2}>
        {Object.entries(fields).map(([k, v]) =>
        {
          const fieldName = makeFieldName(id, k)
          return (
            <Grid item sm={4} md={3} key={fieldName}>
              <CustomRadio fieldName={fieldName} {...v} />
            </Grid>
          )
        })}
      </Grid>
    </AccordionPanel>
  )
}
export const _Component = props =>
{
  return (
    <>
      <SymptomTemplate data={data} makeSummary={makeSummary} {...props} />
      {/* <SymptomToggleTemplate data={data} makeSummary={makeSummary} {...props} /> */}
    </>
  )
}
