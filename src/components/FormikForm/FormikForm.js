import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Grid, Box, Switch, Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import Accordion from 'components/Accordion'
// import RectalBleeding from "components/Symptoms/RectalBleeding/RectalBleeding"
import
{
  AlteredBowels,
  WeightLoss,
  RectalBleeding,
  AbdoPain,
  Anaemia
}
  from 'cr/components/Symptoms'

import
{
  Endocrine
}
  from 'cr/components/PastHistory'

import
{
  PatientId
}
  from 'cr/components/common'

import { makeSummary as prbSummary } from 'cr/components/Symptoms/RectalBleeding/RectalBleeding'
import { initialValues } from 'cr/components/Symptoms'



const DataDisplay = ({ values }) => (
  <Box color="text.primary">
    <pre>{JSON.stringify(values, null, 2)}</pre>
  </Box>
)

const ClinicLetter = ({ values }) =>
{
  const { prb, abh, wtloss } = values

  return (
    <>
      <p>Dear Doctor,</p>
      <p>Thank you for referring this patient to the surgical clinic on the 2-week pathway.</p>
      <p>{`They present with a history of ${prbSummary(prb)}.`}</p>
    </>
  )
}

class FormikForm extends React.Component
{
  render(props)
  {
    const { classes } = this.props
    return (
      <>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) =>
            console.debug('Formik::onSubmit', values)
          }
          render={props => (
            <Grid item sm={12}>
              <Grid container spacing={2} className={classes.topHalf}>
                <Grid item sm={12} md>
                  <Paper className={classes.paper} elevation={0}>
                    <Form>
                      <>
                        <Accordion>
                          {PatientId}
                          {RectalBleeding}
                          {AlteredBowels}
                          {WeightLoss}
                          {AbdoPain}
                          {Anaemia}
                        </Accordion>
                        <Accordion>
                          {Endocrine}
                          {Endocrine}
                        </Accordion>
                      </>
                    </Form>
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4} lg={6}>
                  <Paper className={classes.paper} elevation={0}>
                    <ClinicLetter values={props.values} />
                  </Paper>
                </Grid>
                <Grid item sm={12} md={2} lg={2}>
                  <Paper className={classes.paper} elevation={0}>
                    <DataDisplay values={props.values} />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          )}
        />
      </>
    )
  }
}

const styles = {
  topHalf: {
    height: '50%',
    display: 'flex',
  },
  bottomHalf: {
    height: 'auto',
  },
  paper: {
    height: '100%',
    margin: '4px',
    padding: '12px',
  },
  raw: {
    overflow: 'auto',
  },
  clinicLetter: {
    fontSize: '0.875rem',
    lineHeight: '1.3',
  },
  clearfix: {
    '&::after': {
      content: '',
      clear: 'both',
      display: 'table',
    },
  },
}

export default withStyles(styles)(FormikForm)
