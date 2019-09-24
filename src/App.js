import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 1, firstName: 'Joe', phone: '123-213-1233'},
      { id: 2, firstName: 'Mike', phone: '132-212-1233'},
      { id: 3, firstName: 'Jill', phone: '112-000-1233'}
    ]
  }

  render() {
    const { contacts } = this.state 
    return (
      <Container>
        <Header>
          React Contact List
        </Header>
        <ContactForm />
        <Image 
          src="https://images.unsplash.com/photo-1562101997-7bc9a0279b02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          bordered
          size='medium'
        />
        <ContactList contacts={contacts} />
      </Container>
    )
  }
}

export default App;
