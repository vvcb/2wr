import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
} from '@material-ui/core'

class CustomRadio extends React.Component {
  render() {
    const { fieldName, label, data, classes } = this.props

    return (
      <Field
        name={fieldName}
        key={fieldName}
        render={({ field }) => {
          return (
            <FormControl variant="outlined" className={classes.formControl}>
              <FormLabel className={classes.label}>{label}</FormLabel>
              <RadioGroup
                // row={true}
                aria-label={label}
                {...field}>
                {Object.entries(data).map(([value, label]) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio size='small'/>}
                    label={label}
                    className={classes.radioLabel}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )
        }}
      />
    )
  }
}

CustomRadio.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

const styles = {
  label: {
    fontWeight: 500,
    // paddingRight: '6px',
  },
  radio: {
    fontSize: '0.8rem',
  },
  radioLabel: {
    fontSize: '0.8rem',
  },
  formControl: {
    margin: '0 5px 10px',
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap:'wrap'
  },
}

export default withStyles(styles)(CustomRadio)
