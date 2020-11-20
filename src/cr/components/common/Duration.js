
import React from 'react'

import
{
  TextField,
  MenuItem

} from '@material-ui/core'
import { makeFieldName } from 'utils/formatters'


const durationUnits = {
  d: 'days',
  w: 'weeks',
  m: 'months',
  y: 'years'
}

export const Duration = props =>
{
  const { parentId, ...rest } = props
  const [durationUnits, setDurationUnits] = React.useState('w');

  const handleChange = event => {
    setDurationUnits(event.target.value);
  };
  return (

    <TextField
      id={makeFieldName(parentId, 'durationUnits')}
      select
      label='Duration'
      value={durationUnits}
          onChange={handleChange}
    >
      {Object.entries(durationUnits).map(([k, v]) => (
        <MenuItem key={k} value={k}>
          {v}
        </MenuItem>
      ))}

    </TextField>
  )
}