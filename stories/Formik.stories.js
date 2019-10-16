import React from 'react'
import Radio from 'antd/lib/radio/index'
import { Formik, Form, Field, ErrorMessage, withFormik } from "formik"
import "antd/lib/radio/style/index.js"

export default {
  title: "Formik Forms",
}

const Basic = () => (
  <>
    <Formik
      initialValues={{ gender: "male" }}
      
      onSubmit={(values, actions) =>
      {
        setTimeout(() =>
        {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
      render={(props) => (
        <Form>
          <Field id='gender' name='gender'
            render={({ field }) =>
            
              (<Radio.Group {...field}>
                <Radio.Button value='male'>Good</Radio.Button>
                <Radio.Button value='female'>Bad</Radio.Button>
              </Radio.Group>)
            
          } />

            

          
          <div>
            <pre>
              {JSON.stringify(props, null, 2)}
            </pre>
          </div>
        </Form>

      )}

    />
  </>
)

export const BasicForm = () => <Basic />

