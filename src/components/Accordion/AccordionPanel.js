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

const _AccordionPanel = props => {
  const {
    name,
    title,
    makeSummary,
    classes,
    children,
    formik,
    ...passThroughProps
  } = props
  const formikValues = getIn(formik.values, name)

  return (
    <ExpansionPanel
      key={name}
      id={`panel-${name}`}
      {...passThroughProps}
      draggable
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-hdr-${name}`}
        id={`panel-hdr-${name}`}
      >
        <ExpansionPanelActions>
          <Field
            name={`${name}.is`}
            render={({ field }) => (
              <input
                type="checkbox"
                onClick={e => e.stopPropagation()}
                className={classes.toggle}
                checked={formikValues.is}
                {...field}
              />
            )}
          />
        </ExpansionPanelActions>
        <Typography
          className={classes.title}
          component="div"
          variant="overline"
          color={formikValues.is ? 'secondary' : 'textSecondary'}
        >
          {title}
        </Typography>
        <Typography
          variant="caption"
          hidden={!formikValues.is}
          className={classes.summary}
        >
          {makeSummary(formikValues)}
        </Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails className={classes.details}>
        <Typography variant="caption" hidden={formikValues.is}>
          Tick the checkbox above to see more options.
        </Typography>
        <div hidden={!formikValues.is} className={classes.root}>
          {children}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

_AccordionPanel.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  makeSummary: PropTypes.func,
  children: PropTypes.node.isRequired,
}

const styles = {
  root: {
    width: '100%',
  },

  summary: {
    width: '100%',
    textAlign: 'right',
    textTransform: 'lowercase',
  },
  title: {
    // flexBasis: '33.33%',
    // lineHeight:'2.5em',
    flexShrink: 0,
  },
  details: {},
  toggle: {
    marginTop: '-0.1em',
  },
}
const AccordionPanel = connect(_AccordionPanel)
export default withStyles(styles)(AccordionPanel)
