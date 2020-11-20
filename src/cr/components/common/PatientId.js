import React from 'react'
import
{
  Card,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormGroup,
  FormControlLabel
} from '@material-ui/core'

// import { } from '@m'
import { makeFieldName } from 'utils/formatters'
import data from './dataCommon.yaml'

const PatientField = props =>
{
  const { id, control, isRequired, ...rest } = props
  let required = isRequired && 'required'
  let _PatientField = () => <></>
  if (control == 'textfield')
  {

    _PatientField = () =>
      <TextField
        id={id}
        required
        {...rest}
        fullWidth
        margin="normal"
        // variant="outlined"
      />
  } else
  {
    _PatientField = () => <></>
  }
  return <_PatientField />
}
export const _Component = props =>
{
  return (
    <Card>
      <Grid
        container
        spacing={2}
        direction="row"
      >
        {
          Object.entries(data.patientId).map(
            ([k, v]) =>
            {

              const key = makeFieldName('patientId', k)
              console.log(v, k, key)
              return (
                <Grid item xs={12} sm={6}
                  key={key}
                >
                  <PatientField id={key} {...v} />
                </Grid>
              )
            }
          )
        }

      </Grid>
    </Card>
  )
}
