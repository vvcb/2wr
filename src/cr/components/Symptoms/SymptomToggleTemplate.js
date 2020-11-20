import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import CustomToggle from 'components/CustomRadio/CustomToggle'
import AccordionPanel from 'components/Accordion/AccordionPanel'
import Duration from 'components/Duration'
import { makeFieldName } from 'utils/formatters'
import FreeText from 'components/TextFields/TextFields'



const SymptomToggleTemplate = props =>
{
  const { data, makeSummary, classes, ...rest } = props
  const { id, is, ...fields } = data
  return (
    <AccordionPanel
      name={id}
      title={is.label}
      makeSummary={makeSummary}
      {...rest}
    >
      <Grid container spacing={1} classes={{ ...classes }}>
        <Grid item md={12}>
          <Duration parentId={id} />
        </Grid>
        {Object.entries(fields).map(([k, v]) =>
        {
          const fieldName = makeFieldName(id, k)
          return (
            <Grid item md={12} key={fieldName}>
              <CustomToggle fieldName={fieldName} {...v} />
            </Grid>
          )
        })}
        <Grid item md={12}> 
          <FreeText parentId={id} />
        </Grid>
      </Grid>
    </AccordionPanel>
  )
}

const styles = {
  root: {
    width: '100%',
    display: 'block',
  },
  item: {
    width: '100%',
  },
  container: {
    width: '100%',
  },
}

export default withStyles(
  styles
  // {name: 'MuiGrid'}
)(SymptomToggleTemplate)
