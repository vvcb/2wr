import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import { Field, Form, Formik, getIn, connect } from 'formik'
import { InputBase, Input } from '@material-ui/core'
import classnames from 'classnames'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { makeFieldName } from 'utils/formatters'

import theme from 'themes/theme1'
import { minWidth } from '@material-ui/system'

const styles = {
  ToggleButtonGroup: {
    root: {
      width: '100%',
      margin: '12px 0',
    },
  },
  ToggleButton: {
    root: {
      backgroundColor: '#fff',
      border: `1px solid ${theme.palette.grey.A100}`,
      borderLeft: `1px solid ${theme.palette.grey.A100}`,
      overflow: 'hidden',
      padding: '0 3px',
      width: '100%',
      margin: 'auto',
      '&:hover': {
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.grey.A50,
      },
    },
    label: {
      fontSize: '0.75rem',
      minWidth: 'fit-content',
      padding: '0 10px',
      textTransform: 'none',
    },
    selected: {
      backgroundColor: theme.palette.grey.A50,
      borderBottom: '2px solid red',
    },
    disabled: {
      textTransform: 'none',
      color: theme.palette.common.black + '!important',
      maxWidth: '25%',
      borderRight: `2px dotted ${theme.palette.common.black}`,
    },
  },
  Input: {
    root: {
      border: 'inherit !important',
    },
    input: {
      minWidth: '70px',
      textAlign: 'right',
      '&:focus': {
        borderBottom: `1px dotted  ${theme.palette.primary.dark}`,
        backgroundColor: '#fff',
      },
    },
    
  },
}

const StyledButton = withStyles(styles.ToggleButton)((props, classes) => (
  <ToggleButton disableRipple classes={{ ...classes }} {...props} />
))

const StyledButtonGroup = withStyles(styles.ToggleButtonGroup)(
  (props, classes) => <ToggleButtonGroup classes={{ ...classes }} {...props} />
)

const StyledInput = withStyles(styles.Input)((props, classes) => (
  <Input
    type="number"
    disableUnderline
    fullWidth
    classes={{ ...classes }}
    {...props}
  />
))

let _Units = props => {
  const { parentId } = props
  const fieldName = makeFieldName(parentId, 'units')
  const formikState = getIn(props.formik.values, fieldName)
  const [durationUnits, setDurationUnits] = React.useState(formikState)

  const handleUnitChange = (event, newValue) => {
    setDurationUnits(newValue)
    props.formik.setFieldValue(fieldName, newValue)
  }

  return (
    <StyledButtonGroup
      exclusive
      size="small"
      id={fieldName + '.units'}
      onChange={handleUnitChange}
      value={durationUnits}
    >
      {['days', 'weeks', 'months', 'years'].map(value => (
        <StyledButton key={value} value={value}>
          {value}
        </StyledButton>
      ))}
    </StyledButtonGroup>
  )
}

const Units = connect(_Units)

let _Duration = props => {
  const { parentId } = props

  const fieldName = makeFieldName(parentId, 'duration')
  const formikState = getIn(props.formik.values, fieldName + '.value')
  const [durationValue, setDurationValue] = React.useState(formikState)

  const handleValueChange = event => {
    const newValue = event.target.value
    setDurationValue(newValue)
    props.formik.setFieldValue(fieldName + '.value', newValue)
    console.log('handleValueChange', newValue)
  }

  return (
    <StyledButtonGroup component="div" size="small">
      <StyledButton disabled component="div" role="label">
        Duration
      </StyledButton>
      <StyledButton
        size="small"
        style={{ align: 'right' }}
        component="div"
        role="input-wrapper"
      >
        <StyledInput
          id={fieldName + '.value'}
          value={durationValue}
          onChange={handleValueChange}
          endAdornment={<Units parentId={fieldName} />}
        />
      </StyledButton>
    </StyledButtonGroup>
  )
}

const Duration = connect(_Duration)

export default Duration
