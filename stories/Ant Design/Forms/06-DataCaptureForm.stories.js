// @ts-nocheck
import React from "react"
import "antd/dist/antd.css"
import {
  Form,
  Collapse,
  Select,
  Input,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
} from "antd"

import { SimpleChecked } from "./Symptoms.stories"

export default {
  title: "Ant Design|Forms/Data Capture",
}

const CustomizedForm = Form.create({
  name: "global_state",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields)
  },
  mapPropsToFields(props) {
    const x = {
      username: Form.createFormField({
        ...props.username,
        // value: props.username.value,
      }),
      symptoms: Form.createFormField({
        ...props.symptoms,
      }),
    }
    console.log(x)
    return x
  },
  onValuesChange(_, values) {
    // console.log(values);
  },
})(props => {
  const { getFieldDecorator } = props.form
  return (
    <Form layout="horizontal">
      <Form.Item label="Username">
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Username is required!" }],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Symptoms">
        {getFieldDecorator("symptoms", {
          rules: [{ required: true, message: "Username is required!" }],
        })(<Switch />)}
      </Form.Item>
      <SimpleChecked />
    </Form>
  )
})

class Demo extends React.Component {
  state = {
    fields: {
      username: {
        value: "benjycui",
      },
      symptoms: {
        defaultChecked: true,
        checked: true,
      },
    },
  }

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }))
  }

  render() {
    const { fields } = this.state
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
      </div>
    )
  }
}
export const StoringData = () => <Demo />
