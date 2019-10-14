import React from "react"
import { Switch } from "antd"
import "antd/dist/antd.css"

export default {
  title: "Ant Design|Single Components/Switch",
}

export const TestSwitch = () => (
  <Switch
    autoFocus
    // checked
    checkedChildren="Yes"
    children="Children of Switch"
    defaultChecked
    key="test-switch"
    title="Test Switch"
    id="test-switch"
    name="test-switch"
    unCheckedChildren="No"
  />
)
