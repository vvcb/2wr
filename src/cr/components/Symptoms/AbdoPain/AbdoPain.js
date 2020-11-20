// @ts-nocheck
import React from 'react'
import SymptomTemplate from 'cr/components/Symptoms/SymptomTemplate'
import SymptomToggleTemplate from 'cr/components/Symptoms/SymptomToggleTemplate'
// import allData from  'cr/data/symptoms.yaml'
// const data = allData.abdopain
import
{
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Grid,
} from '@material-ui/core'

import CustomRadio from 'components/CustomRadio'

import { Field, FieldArray } from 'formik'
import AccordionPanel from 'components/Accordion/AccordionPanel'

import { makeFieldName } from 'utils/formatters'

// import {Duration} from 'cr/components/common/Duration'
import Duration from 'components/Duration/Duration'
import { Severity } from 'cr/components/common/Severity'


import dataAbdoPain from './dataAbdoPain.yaml'
const data = dataAbdoPain.abdopain

const { id, is, ...fields } = data

function summariseLocation(values)
{
  const { u, c, l } = values
  let uT, cT, lT = 0
  let result = Array()
  if (u)
  {
    if (u.r + u.c + u.l == 3)
    {
      result = result.concat('upper abdomen')
      uT = 1
    }
    else if (u.r + u.l == 2)
    {
      result = result.concat('both upper quadrants')
    }
    else
    {
      result = result.concat(u.r && 'right upper quadrant')
      result = result.concat(u.l && 'left upper quadrant')
      result = result.concat(u.c && 'epigastrium')

    }
  }
  if (c)
  {
    if (c.r + c.c + c.l == 3)
    {
      result = result.concat('entire central abdomen')
      cT = 1
    }
    else if (c.r + c.l == 2)
    {
      result = result.concat('both flanks')
    }
    else
    {
      result = result.concat(c.r && 'right flank')
      result = result.concat(c.l && 'left flank')
      result = result.concat(c.c && 'central abdomen')
    }
  }
  if (l)
  {
    if (l.r + l.c + l.l == 3)
    {
      result = result.concat('lower abdomen')
      lT = 1
    }
    else if (l.r + l.l == 2)
    {
      result = result.concat('both iliac fossae')
    }
    else
    {
      result = result.concat(l.r && 'right iliac fossa')
      result = result.concat(l.l && 'left iliac fossa')
      result = result.concat(l.c && 'suprapubic region')
    }
  }

  result = result.filter(e => e)

  if (uT + cT + lT == 3)
  {
    return 'entire abdomen'
  }
  else if (result.length > 1)
  {
    console.log(result)

    let finalStr = result.pop()
    console.log(finalStr)
    finalStr = result.join(', ') + ' and ' + finalStr
    return finalStr
  }
  else if (result.length == 1)
  {
    if (result[0] == undefined)
    {
      return 'abdomen'
    }
    else
    {
      return result[0]
    }
  }
  else
  {
    return 'abdomen'
  }
}

export const makeSummary = values =>
{
  const { severity, location, onset, character, duration } = values
  const painLocation = summariseLocation(location)
  console.log(painLocation)
  const formattedMessage = `
      ${onset && onset + ' onset,'}  
      ${severity && severity + ', '} 
      ${character && character} pain
      ${painLocation && 'in ' + painLocation} 
      `
  return formattedMessage.toLowerCase()
}

const AbdoRegion = props =>
{
  const { value, label, ...rest } = props
  const fieldName = 'abdopain.location'
  const currentValue = `${fieldName}.${value}`

  return (
    <Field name={`${fieldName}.${value}`}
      render={({ field }) =>
      {
        return (
          <FormControlLabel
            key={currentValue}
            value={value}
            control={<Checkbox value={currentValue}  {...field} />}
          // label={label}
          // className={classes.radioLabel}
          />
        )
      }}
    />
  )
}
const Abdomen = props =>
{
  const { fieldName, label, classes } = props

  return (

    <FieldArray
      name={fieldName}
      key={fieldName}
      render={({ arrayHelpers }) =>
      {
        return (
          <FormControl
            variant="outlined"
          // className={classes.formControl}
          >
            <FormLabel
            // className={classes.label}
            >
              {label}</FormLabel>
            <FormGroup
              // row={true}
              aria-label={label}
              {...fields}>
              <Grid container spacing={0} direction="column">
                <Grid container spacing={0} direction="row">
                  <AbdoRegion value='u.r' label='RUQ' />
                  <AbdoRegion value='u.c' label='EPI' />
                  <AbdoRegion value='u.l' label='LUQ' />
                </Grid>
                <Grid container spacing={0} direction="row">
                  <AbdoRegion value='c.r' label='RFL' />
                  <AbdoRegion value='c.c' label='CEN' />
                  <AbdoRegion value='c.l' label='LFL' />
                </Grid>
                <Grid container spacing={0} direction="row">
                  <AbdoRegion value='l.r' label='RIF' />
                  <AbdoRegion value='l.c' label='SPU' />
                  <AbdoRegion value='l.l' label='LIF' />
                </Grid>
              </Grid>
            </FormGroup>
          </FormControl>
        )
      }}
    />

  )
}
export const _Component = props =>
{

  return (
    <>
      <AccordionPanel
        name={id}
        title={is.label}
        makeSummary={makeSummary}
      >
        <Duration parentId={id} />
        <Grid container spacing={2}>
          <Grid item xs={4} lg={4}>
            <CustomRadio fieldName={makeFieldName(id, 'onset')} {...fields['onset']} />
            <Severity parentId={id} />
          </Grid>
          <Grid item xs={4} lg={4}>
            <Abdomen fieldName={makeFieldName(id, 'location')} label='Location' />
          </Grid>
          <Grid item xs={4} lg={4}>
            <CustomRadio fieldName={makeFieldName(id, 'character')} {...fields['character']} />
          </Grid>
        </Grid>
      </AccordionPanel>

    </>
  )
}
