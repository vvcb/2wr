import React, { Component } from 'react'
import Layout from 'components/Layout/DefaultLayout'
import { Formik } from 'formik'

import theme from 'themes/theme1'

import MuiForm from 'rjsf-material-ui'
import { Helmet } from 'react-helmet'

import { Typography } from '@material-ui/core'

const schema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name",
      "default": ""
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
}



export default () =>
{
  return (
    <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700|Source+Sans+Pro:300,400,600,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      {/* <Page2 /> */}
      <Formik
        initialValues={{
          root_firstName: 'asdasd',
          age: 20,

        }}
        onSubmit={(values, actions) => console.log(values)}
        render={props =>
        {
          console.log(props)
          return (

            <div>
              <MuiForm
                schema={schema}
              />
              <div>
                <pre>
                  {JSON.stringify(props.values, null, 2)}
                </pre>
              </div>
            </div>
          )
        }
        }
      />



    </Layout>
  )
}