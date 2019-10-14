import React from "react"
import { withFormik } from "formik"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Switch from "@material-ui/core/Switch"

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props
  return (
    <form onSubmit={handleSubmit}>
      <FormControlLabel
        control={<Switch onChange={handleChange} onBlur={handleBlur} />}
        label="Rectal Bleeding"
        name="prb"
      />
      {errors.prb && touched.prb && <div id="feedback">{errors.prb}</div>}
      <button type="submit">Submit</button>
    </form>
  )
}

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ prb: false }),

  // Custom sync validation
  validate: values => {
    const errors = {}

    return errors
  },

  handleSubmit: (values, { setSubmitting }) => {
    console.log(values)
  },

  displayName: "BasicForm",
})(MyForm)

export default MyEnhancedForm
