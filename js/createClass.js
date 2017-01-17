'use strict';

const numList = [
  { id: 1, name: "Daniel", age: 40 },
  { id: 2, name: "Scott", age: 41 },
  { id: 3, name: "Greg", age: 30 }
];


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

const contactList = numList.map(each => React.createElement(ListItem, each));

const rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Contacts'),
    React.createElement('div', {}, contactList)
  );

// Render rootElement to page
ReactDOM.render(rootElement, document.getElementById('react-app'));
