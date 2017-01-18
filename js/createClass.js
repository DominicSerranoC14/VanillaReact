'use strict';

const numList = [
  { id: 1, name: "Daniel", age: 40 },
  { id: 2, name: "Scott", age: 41 },
  { id: 3, name: "Greg", age: 30 }
];

// ListItem class which creates a contact element from an array of contact obj's
const ListItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    age: React.PropTypes.number
  },
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('p', {}, `Name: ${this.props.name}, Age: ${this.props.age}`)
      )
    )
  }
});

// Empty contact object to pass to input form as prop
const newContact = { name: "", age: "", description: "" }

// ContactForm Class which renders a new contact form
const ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      React.createElement('form', {},
        React.createElement('input', {
          type: 'text', placeholder: 'Name', value: this.props.contact.name
        }),
        React.createElement('input', {
          type: 'text', placeholder: 'Age', value: this.props.contact.age
        }),
        React.createElement('textarea', {
          placeholder: 'Description', value: this.props.contact.description}),
        React.createElement('button', {type: 'submit'}, 'Submit')
      )
    )
  }
});

// Returns an array of React elements using ListItem class
const contactList = numList.map(each => React.createElement(ListItem, each));

// React elements to output
const rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Contacts'),
    React.createElement('div', {}, contactList),
    React.createElement(ContactForm, {contact: newContact})
  );

// Render rootElement to page
ReactDOM.render(rootElement, document.getElementById('react-app'));
