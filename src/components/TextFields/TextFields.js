import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import { Field, Form, Formik, getIn, connect } from 'formik'
import {
  InputBase,
  Input,
  TextField,
  TextareaAutosize,
} from '@material-ui/core'
import classnames from 'classnames'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { makeFieldName } from 'utils/formatters'

import theme from 'themes/theme1'
import { minWidth } from '@material-ui/system'

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
  Input: {
    root: {
      width: '100%',
      // margin: 'auto',
      // textAlign: 'left',
      // padding: '5px 5px',
    },
    multiline: {
      // width: '100%',
      // margin: 'auto',
      // textAlign: 'left',
      // margin: '5px',
    },
    inputMultiline: {
      // border: '1px solid red !important',
      fontSize: '0.75rem',
      margin: '12px 0',
      width: '100%',
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
  <InputBase
    multiline
    rows={3}
    fullWidth
    // classes={{ ...classes }}
    {...props}
    inputProps={(classes = { ...classes })}
  />
))

let _FreeText = props => {
  const { parentId } = props

  const fieldName = makeFieldName(parentId, 'more')
  return (
    <Field
      name={fieldName}
      render={({ field, form }) => {
        return (
          <StyledButtonGroup size="small" component="div">
            <StyledButton disabled component="div" role="label">
              More...
            </StyledButton>
            <StyledButton
              component="div"
              role="input"
              children={
                <StyledInput
                  label="More details"
                  // outlined
                  {...field}
                />
              }
            />
          </StyledButtonGroup>
        )
      }}
    />
  )
}

// const FreeText = connect(_FreeText)

export default _FreeText
