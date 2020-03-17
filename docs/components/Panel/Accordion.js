import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Field } from 'formik'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  panelTitle: {
    // fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  panelSubtitle: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

export const AccordionPanel = props => {
  const { parentId, children } = props
  const Switch = props.switch
  const classes = useStyles()
  return (
    <ExpansionPanel
      key={parentId}
      id={`accordion-panel-${parentId}`}
      expanded={props.expanded === props.parentId}
      onChange={props.onChange(parentId)}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`accordion-panel-summary-${parentId}`}
        id={`accordion-panel-summary-${parentId}`}
      >
        <ExpansionPanelActions style={{ marginTop: '-0.1em' }}>
          <Switch />
        </ExpansionPanelActions>

        <Typography className={classes.panelTitle}>{props.label}</Typography>
        {props.summary(props.formikState[parentId])}
      </ExpansionPanelSummary>

      <ExpansionPanelDetails id={`accordion-panel-content-${parentId}`}>
        <Typography variant="caption" hidden={props.formikState[parentId].is}>
          Tick the checkbox above to see more options.
        </Typography>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
