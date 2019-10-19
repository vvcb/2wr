import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import PropTypes from "prop-types"
import { Field } from "formik"
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
} from "@material-ui/core"

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
              <RadioGroup aria-label={label} {...field}>
                {Object.entries(data).map(([value, label]) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio className={classes.radioLabel} />}
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
    fontSize: "8px",
  },
  radioLabel: {
    fontSize: "1rem",
  },
  formControl: {
    margin: "0 5px 20px",
  },
}

export default withStyles(styles)(CustomRadio)
