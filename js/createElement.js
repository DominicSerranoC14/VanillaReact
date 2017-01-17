'use strict';

const numList = [
  { name: "Daniel", age: 40 },
  { name: "Scott", age: 41 },
  { name: "Greg", age: 30 }
];

// Iterate over array and create li's dynamically using react.createElement
const generateItemList = (list) => (
  list.map((each, i) => {
    let text = `Name: ${each.name}, Age: ${each.age}`;
    return React.createElement('li', { key: i }, text)
  })
);

// Create a root element using React.createElement
// createElement(string/ReactClass type, [object props], [children ...]) -> ReactElement
const rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My List'),
    React.createElement('ul', {}, generateItemList(numList))
  );

// Render rootElement to page
ReactDOM.render(rootElement, document.getElementById('react-app'));
