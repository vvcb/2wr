import React from 'react'
import { Field } from 'formik'
import
{
  Checkbox,
  FormControlLabel
} from '@material-ui/core'

export const FrmkChkBox = (props) =>
{
  const { fieldName, label } = props
  return (
    <Field
      name={fieldName}
      key={fieldName}
      render={({ field }) =>
      {
        return (<FormControlLabel
          control={
            <Checkbox
              color="primary"
              {...field}
            />
          }
          label={label}
        />)
      }} />
  )
}

