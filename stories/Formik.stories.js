import React from "react"
import { Formik, Form, Field, ErrorMessage, withFormik } from "formik"
import { Switch } from "antd"
import "antd/dist/antd.css"

export default {
  title: "Formik Forms",
}

const Basic = () => (
  <div>
    <h1>Formik Form</h1>
    <Formik
      initialValues={{ age: "", gender: "male", switch: false }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="age" />
          <Field name="gender" />
          <Switch name="switch" />

          <button type="submit" disabled={isSubmitting}>
            Submit`
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

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
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  )
}

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ name: "" }),

  // Custom sync validation
  validate: values => {
    const errors = {}

    if (!values.name) {
      errors.name = "Required"
    }

    return errors
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: "BasicForm",
})(MyForm)

export const BasicForm = () => <Basic />
export const withFormikForm = () => <MyEnhancedForm />
