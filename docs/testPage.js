import React from "react"
import Layout from "../docs/Layout/DefaultLayout"
import { Formik, Form, Field } from "formik"
import { connect, getIn } from "formik"

const DataDisplay = connect(props => {
  const values = getIn(props.formik, props.name)
  return (
    <>
      <div>{JSON.stringify(props, null, 2)}</div>
      <div>{JSON.stringify(values, null, 2)}</div>
    </>
  )
})

const Form1 = () => (
  <Form name="form1">
    <Field name="name" />
  </Form>
)

const Form2 = () => (
  <Form name="form2">
    <Field name="email" />
  </Form>
)
export default () => (
  <>
    <Formik
      initialValues={{ name: "", email: "" }}
      onSubmit={(values, actions) => console.log("Formik::onSubmit", values)}
    >
      <>
        <Layout topLeft={<Form1 />} topRight={<Form2 />} />
        <DataDisplay />
      </>
    </Formik>
  </>
)
