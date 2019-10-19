import React from "react"
import { Formik, Form, Field } from "formik"
import { Grid, Box, Switch, Paper, Typography } from "@material-ui/core"
import Accordion from "components/Accordion"
// import RectalBleeding from "components/Symptoms/RectalBleeding/RectalBleeding"
import { AlteredBowels, WeightLoss, RectalBleeding } from "components/Symptoms"

import { makeSummary as prbSummary } from "components/Symptoms/RectalBleeding/RectalBleeding"

import { initialValues } from "components/Symptoms"
import { withStyles } from "@material-ui/styles"
const DataDisplay = ({ values }) => (
  <Box color="text.primary">
    <pre>{JSON.stringify(values, null, 2)}</pre>
  </Box>
)

const ClinicLetter = ({ values }) => {
  const { prb, abh, wtloss } = values

  return (
    <Typography color="textPrimary">
      <pre>
        {`Dear Doctor,

Thank you for referring this patient to the surgical clinic on the 2-week pathway.

They present with a history of ${prbSummary(prb)}.`}
      </pre>
    </Typography>
  )
}

class FormikForm extends React.Component {
  render(props) {
    const { classes } = this.props
    return (
      <>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) =>
            console.debug("Formik::onSubmit", values)
          }
          render={props => (
            <>
              <Grid container spacing={2} className={classes.topHalf}>
                <Grid item sm={12} md={8} lg={6}>
                  <Paper className={classes.paper}>
                    <Form>
                      <Accordion>
                        {RectalBleeding}
                        {AlteredBowels}
                        {WeightLoss}
                      </Accordion>
                    </Form>
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4} lg={6}>
                  <Paper className={classes.paper}>
                    <DataDisplay values={props.values} />
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={2} className={classes.bottomHalf}>
                <Grid item sm={12} md={8} lg={6}>
                  <Paper className={classes.paper} elevation={1}></Paper>
                </Grid>
                <Grid item sm={12} md={4} lg={6}>
                  <Paper className={classes.paper}>
                    <ClinicLetter values={props.values} />
                  </Paper>
                </Grid>
              </Grid>
            </>
          )}
        />
      </>
    )
  }
}

const styles = {
  topHalf: {
    height: "50%",
  },
  bottomHalf: {
    height: "auto",
  },
  paper: {
    height: "100%",
    margin: "4px",
    padding: "12px",
  },
}

export default withStyles(styles)(FormikForm)
