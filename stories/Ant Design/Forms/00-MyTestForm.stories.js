import React from "react"
import "antd/dist/antd.less"
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
  Card,
} from "antd"

export default {
  title: "Ant Design|Forms/My Test Form",
}

const GenderRadioGroup = props => (
  <Radio.Group {...props} buttonStyle="solid">
    <Radio.Button value="m" children="Male" />
    <Radio.Button value="f" children="Female" />
    <Radio.Button value="n" children="Non-binary" />
  </Radio.Group>
)

const FormItem = props => {
  const { fieldKey, fieldValue, getFieldDecorator } = props

  return (
    <Form.Item key={fieldKey} {...fieldValue.formItemOptions}>
      {getFieldDecorator(fieldKey, {
        ...fieldValue.fieldDecoratorOptions,
      })(<fieldValue.component {...fieldValue.props} />)}
    </Form.Item>
  )
}
const fieldData2 = {
  gender: {
    id: "gender",
    label: "Gender",
    component: GenderRadioGroup,
    props: {
      key: "gender",
      id: "gender",
      name: "gender",
    },
    fieldDecoratorOptions: {
      initialValue: "m",
      rules: [{ required: true, message: "Required field!" }],
    },
    formItemOptions: {
      colon: false,
      label: "Gender",
      required: true,
      labelCol: {
        sm: { span: 6 },
        md: { span: 6, order: 2 },
      },
      wrapperCol: {
        sm: { span: 18 },
        md: { span: 18, order: 1 },
      },
    },
    state: {},
  },
  age: {
    id: "age",
    label: "Age",
    component: Input,
    props: {
      key: "age",
      id: "age",
      name: "age",
    },
    fieldDecoratorOptions: {
      initialValue: 50,
      rules: "",
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
  prb: {
    id: "prb",
    label: "Rectal Bleeding",
    component: Switch,
    props: {
      key: "prb",
      id: "prb",
      name: "prb",
      checkedChildren: "Yes",
      unCheckedChildren: "No",
    },
    fieldDecoratorOptions: {
      initialValue: "m",
      rules: "",
    },
    formItemOptions: {
      colon: false,
      label: "Rectal Bleeding",
      required: true,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 20, push: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4, pull: 20 },
      },
    },
    state: {
      // checked: true,
    },
  },

  abh: {
    id: "abh",
    label: "Altered Bowels",
    component: Switch,
    props: {
      key: "abh",
      id: "abh",
      name: "abh",
      checkedChildren: "Yes",
      unCheckedChildren: "No",
    },
    fieldDecoratorOptions: {
      initialValue: "m",
      rules: "",
    },
    formItemOptions: {
      colon: false,
      label: "Altered Bowels",
      required: true,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 20, push: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4, pull: 20 },
      },
    },
    state: {
      // checked: true,
    },
  },
}

const NakedForm = Form.create({
  name: "HSC",
  mapPropsToFields(props) {
    const mappedFields = {}
    // fieldData.forEach(e =>
    // {
    //   mappedFields[e.key] = Form.createFormField({ ...props[e.key] })
    // })
    Object.keys(fieldData2).forEach(key => {
      mappedFields[key] = Form.createFormField({ ...props[key] })
    })
    console.debug("mappedFields", mappedFields)
    return mappedFields
  },
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields)
  },
  // onValuesChange(_, values){},
  // validateMessages:{}
})(props => {
  const { getFieldDecorator } = props.form
  return (
    <Form
      hideRequiredMark={false}
      labelAlign="left"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
      layout="horizontal"
      colon={false}
    >
      <Row type="flex" justify="start">
        <Col md={12}>
          <FormItem
            fieldKey="age"
            fieldValue={fieldData2["age"]}
            getFieldDecorator={getFieldDecorator}
          />
        </Col>
        <Col md={12}>
          <FormItem
            fieldKey="gender"
            fieldValue={fieldData2["gender"]}
            getFieldDecorator={getFieldDecorator}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormItem
            fieldKey="prb"
            fieldValue={fieldData2["prb"]}
            getFieldDecorator={getFieldDecorator}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormItem
            fieldKey="abh"
            fieldValue={fieldData2["abh"]}
            getFieldDecorator={getFieldDecorator}
          />
        </Col>
      </Row>
    </Form>
  )
})

class WrappedForm extends React.Component {
  constructor(props) {
    super(props)
    // let fieldStates = {}
    // Object.entries(fieldData2).forEach(([k, v]) => (fieldStates[k] = v.state))
    this.state = {
      // fields: fieldStates,
    }
    // console.debug("Constructor:state", this.state)
    this.handleFormChange = this.handleFormChange.bind(this)
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
        <Row gutter={24}>
          <Col sm={12}>
            <NakedForm {...fields} onChange={this.handleFormChange} />
          </Col>
          <Col sm={12}>
            <Row>
              <Col>
                <Card title="Recommendations">
                  <p>
                    The recommended tests will appear here alongwith the
                    evidence behind the Recommendations.
                  </p>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card title="Live updating data: will eventually become the clinic letter">
                  <pre className="language-bash">
                    {JSON.stringify(fields, null, 2)}
                  </pre>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
export const StoringData = () => <WrappedForm />

// Snippets
//  fieldDecoratorOptions: {
//         // getValueFromEvent: '',
//         // getValueProps: '',
//         initialValue: 'm',
//         // normalize: '',
//         // preserve: '',
//         rules: '',
//         // trigger: '',
//         // validateFirst: '',
//         // validateTrigger: '',
//         // valuePropName: '',

//     },

// formItemOptions: {
//       colon: false,
//       // extra: '',
//       // hasFeedback: '',
//       // help: '',
//       // htmlFor: '',
//       label: '',
//       labelCol: '',
//       required: '',
//       // validateStatus: '',
//       wrapperCol: '',
//     },
