import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ContactForm extends Component {
  state = { firstName: "", phone: "" }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { firstName, phone } = this.state
    return (
      <Form onSubmit={ this.handleSubmit }>
        <Form.Input
          fluid
          label="First Name"
          placeholder="First Name"
          name="firstName"
          value={ firstName }
          onChange={ this.handleChange }
        />
        <Form.Input
          fluid
          label="Phone"
          placeholder="Phone"
          name="phone"
          value={ phone }
          onChange={ this.handleChange }
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    ) 
  }
}

export default ContactForm