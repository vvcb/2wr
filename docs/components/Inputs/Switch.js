import React from 'react'
import { Switch } from 'antd'

export default props => (
  <Switch {...props} onClick={(checked, event) => event.stopPropagation()} />
)
