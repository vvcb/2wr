import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { connect, getIn, Field } from 'formik'
import withStyles from '@material-ui/core/styles/withStyles'
export const AccordionPanel = props => {
  const {
    name,
    title,
    makeSummary,
    classes,
    children,
    ...passThroughProps
  } = props
  const formikValues = getIn(props.formik.values, name)

  return (
    <ExpansionPanel key={name} id={`panel-${name}`} {...passThroughProps}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-hdr-${name}`}
        id={`panel-hdr-${name}`}
      >
        <ExpansionPanelActions>
          <Field
            name={`{name}.is`}
            render={({ field }) => (
              <input
                type="checkbox"
                onClick={e => e.stopPropagation()}
                className={classes.toggle}
              />
            )}
          />
        </ExpansionPanelActions>
        <Typography className={classes.title}>{title}</Typography>
        {makeSummary(formikValues)}
      </ExpansionPanelSummary>

      <ExpansionPanelDetails className={classes.details}>
        <Typography variant="caption" hidden={formikValues.is}>
          Tick the checkbox above to see more options.
        </Typography>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

AccordionPanel.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  makeSummary: PropTypes.func,
  children: PropTypes.node.isRequired,
}

const styles = {
  root: {
    width: '100%',
  },
  title: {
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  details: {},
  toggle: {},
}

export default withStyles(styles)(connect(AccordionPanel))
