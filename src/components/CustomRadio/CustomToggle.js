import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import { Field, connect, getIn, setIn } from 'formik'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'

import theme from 'themes/theme1'

const styles = {
  ToggleButtonGroup: {
    root: {
      width: '100%',
      margin: '0 12px',
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
}

const StyledButton = withStyles(styles.ToggleButton)((props, classes) => (
  <ToggleButton disableRipple classes={{ ...classes }} {...props} />
))

const StyledButtonGroup = withStyles(styles.ToggleButtonGroup)(
  (props, classes) => <ToggleButtonGroup classes={{ ...classes }} {...props} />
)
const _Toggle = props => {
  const { fieldName, label, data, classes } = props
  const formikState = getIn(props.formik.values, fieldName)
  const [currentValue, setValue] = React.useState(formikState)
  const handleChange = (event, newValue) => {
    setValue(newValue)
    props.formik.setFieldValue(fieldName, newValue)
    console.log(getIn(props.formik.values, fieldName))
  }
  return (
    <>
      <StyledButtonGroup
        aria-label={label}
        exclusive
        size="small"
        value={currentValue}
        onChange={handleChange}
        id={fieldName}
        classes={{ ...classes }}
      >
        <StyledButton disabled>{label}</StyledButton>
        {Object.entries(data).map(([value, label]) => (
          <StyledButton key={value} aria-label={label} value={value}>
            {label}
          </StyledButton>
        ))}
      </StyledButtonGroup>
    </>
  )
}

_Toggle.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

let CustomToggle = connect(_Toggle)

export default CustomToggle
