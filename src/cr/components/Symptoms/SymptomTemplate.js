import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import CustomRadio from 'components/CustomRadio'
import AccordionPanel from 'components/Accordion/AccordionPanel'
import Duration from 'components/Duration'
import { makeFieldName } from 'utils/formatters'

const SymptomTemplate = props => {
  const { data, makeSummary, ...rest } = props
  const { id, is, ...fields } = data
  return (
    <AccordionPanel
      name={id}
      title={is.label}
      makeSummary={makeSummary}
      {...rest}
    >
      {/* <Duration fieldName={makeFieldName(id, 'duration')}/> */}
      <Duration parentId={id}/>
      <Grid container spacing={2}>
        {Object.entries(fields).map(([k, v]) => {
          const fieldName = makeFieldName(id, k)
          return (
            <Grid item sm={6} md={6} lg={4} key={fieldName}>
              <CustomRadio fieldName={fieldName} {...v} />
            </Grid>
          )
        })}
      </Grid>
    </AccordionPanel>
  )
}

export default SymptomTemplate
