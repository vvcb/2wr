import React from "react"
import PropTypes from "prop-types"
import { Field } from "formik"
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core"

export class CustomRadio extends React.Component {
  render() {
    const { parentId, fieldName, label, data, classes } = this.props
    const name = `${parentId}.${fieldName}`

    return (
      <Field
        name={name}
        render={({ field }) => {
          return (
            <FormControl>
              <FormLabel component="legend">{label}</FormLabel>
              <RadioGroup aria-label={label} {...field} row>
                {Object.entries(data).map(([value, label]) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={label}
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
  parentId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}
