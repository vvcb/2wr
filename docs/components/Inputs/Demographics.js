import React from "react"
import FormItem from "../docs/FormikForm/FormItem"

import { Input, InputNumber, Radio, Row, Col } from "antd"

const GenderRadioGroup = props => (
  <Radio.Group {...props} buttonStyle="solid">
    <Radio.Button value="man" children="Male" />
    <Radio.Button value="woman" children="Female" />
    <Radio.Button value="person" children="Non-binary" />
  </Radio.Group>
)

const data = {
  gender: {
    id: "gender",
    component: GenderRadioGroup,
    componentProps: {
      key: "gender",
      id: "gender",
      name: "gender",
    },
    fieldDecoratorOptions: {
      rules: [{ required: true, message: "Required field!" }],
    },
    formItemOptions: {
      colon: false,
      label: "Gender",
      required: true,
      labelCol: {
        sm: { span: 6 },
        md: { span: 6 },
      },
      wrapperCol: {
        sm: { span: 18 },
        md: { span: 18 },
      },
    },
    state: {},
  },
  age: {
    id: "age",
    component: InputNumber,
    componentProps: {
      key: "age",
      id: "age",
      name: "age",
    },
    fieldDecoratorOptions: {
      // initialValue: 50,
      rules: [
        {
          required: true,
          type: "number",
          min: 16,
          max: 100,
          message: "Enter a value between 16 and 100.",
        },
      ],
    },
    formItemOptions: {
      colon: false,
      label: "Age",
      required: true,
      labelCol: {
        xs: 12,
        sm: 12,
      },
      wrapperCol: {
        xs: 12,
        sm: 12,
      },
    },
    state: {},
  },
}

const Demographics = props => {
  const { getFieldDecorator } = props

  return (
    <Row>
      <Col sm={12} xs={24}>
        <FormItem fieldData={data.age} getFieldDecorator={getFieldDecorator} />
      </Col>
      <Col sm={12} xs={24}>
        <FormItem
          fieldData={data.gender}
          getFieldDecorator={getFieldDecorator}
        />
      </Col>
    </Row>
  )
}

export default Demographics
