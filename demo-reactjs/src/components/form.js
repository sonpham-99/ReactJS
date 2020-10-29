import React from 'react';
import { Form, Field } from 'react-advanced-form';
import { Button, Input, Checkbox } from 'react-advanced-form-addons';

const rules =  {
    type: {
      password: ({ value }) => value.length > 6,
    },
    name: {
      vatNumber: {
        format: ({ value }) => /^\d{8}$/.test(value),
        hashsum: ({ value }) => value[2] + value[5] === 12,
      },
    },
  }

const messages = {
    // general: {
    //   missing: 'Please provide the required field',
    //   invalid: 'The value you provided is invalid'
    // },
    type: {
        email: {
          missing: 'Please provide an e-mail',
        },
        password: {
            invalid: 'sai dinh dang mat khau',
          },
      },
    
      name: {
        confirmPassword: {
          missing: 'Please confirm the password',
          invalid: 'The passwords do not match',
        },
      },
  }
class BasicForm extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <Form rules={rules} messages={messages}>
        <h3>Basic</h3>
        <Input
          name="username"
          label="Username"
          onChange={onChange}
          required />
        <Input
          name="password"
          type="password"
          label="Password"
          onChange={onChange}
          required />

        <h4>Billing address</h4>
        <Field.Group name="billingAddress">
          <Input
            name="street"
            label="Street"
            onChange={onChange} />
          <Input
            name="houseNumber"
            label="House number"
            onChange={onChange} />
        </Field.Group>
        
        <Checkbox
          name="termsAndConditions"
          label="I agree to Terms and Conditions"
          onChange={onChange} />

        <Button primary>Submit</Button>
      </Form>
    );
  }
}

class Register extends React.Component {

    render() {
        return (
            <BasicForm />
            
        )
    }
}
export default Register