import React from "react"
import Layout from "components/Layout/DefaultLayout"
// import Page2 from "../../docs/clinicPage"
import FormikForm from "components/FormikForm/FormikForm"
import { Helmet } from "react-helmet"
export default () => (
  <Layout>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700|Source+Sans+Pro:300,400,600,700&display=swap" rel="stylesheet"></link>
    </Helmet>
    {/* <Page2 /> */}

    <FormikForm />
  </Layout>
)
