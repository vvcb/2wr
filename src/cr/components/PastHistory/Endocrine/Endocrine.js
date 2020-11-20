// @ts-nocheck
import React from 'react'
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
import { FrmkChkBox } from 'components/Formik/Checkbox'


import dataEndocrine from './dataEndocrine.yaml'
const data = dataEndocrine.endocrine

const { id, is, ...fields } = data
export const makeSummary = values =>
{
  // const { severity, location, onset, character, duration } = values
  // const formattedMessage = `
  //     ${onset && onset + ' onset,'}  
  //     ${severity && severity + ', '} 
  //     ${character && character} pain
  //     ${painLocation && 'in ' + painLocation} 
  //     `
  // return formattedMessage.toLowerCase()
  return ''
}

const SubComponent = props =>
{
  const { fieldName, fieldData, classes } = props
  return (
    <FormGroup>
      {/* <FrmkChkBox fieldName={fieldName} label={label}/> */}
      <CustomRadio fieldName={fieldName} {...fieldData} />
    </FormGroup>
  
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
        <Grid container spacing={2}>
          
          <SubComponent
            fieldName='endocrine.diabetes'
            fieldData={fields['diabetes']}
          />
           <SubComponent
            fieldName='endocrine.thyroid'
            fieldData={fields['thyroid']}
          />
          <SubComponent
            fieldName='endocrine.other'
            fieldData={fields['other']}
          />
          </Grid>
        </AccordionPanel>

      </>
      )
    }
