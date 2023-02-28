const users = [
  { name: 'John', age: 25, occupation: 'gardener' },
  { name: 'Lenny', age: 51, occupation: 'programmer' },
  { name: 'Andrew', age: 43, occupation: 'teacher' },
  { name: 'Peter', age: 81, occupation: 'teacher' },
  { name: 'Anna', age: 43, occupation: 'teacher' },
  { name: 'Albert', age: 76, occupation: 'programmer' },
  { name: 'Adam', age: 47, occupation: 'teacher' },
  { name: 'Robert', age: 72, occupation: 'driver' },
];

// This is what we already know how to do.
function main() {
  //grab the div with the id of "vanilla-root"
  const vanillaRoot = document.querySelector('#vanilla-root');

  //create a new h1 element that says "USERS"
  const h1 = document.createElement('h1');
  h1.innerHTML = 'USERS';

  //append the h1 element to the root div
  vanillaRoot.appendChild(h1);

  //create a new ul element
  const ul = document.createElement('ul');

  //loop through the users array
  for (let i = 0; i < users.length; i++) {
    //create a new li element
    const li = document.createElement('li');

    //set the innerHTML of the li element to the name of the user
    li.innerHTML = users[i].name;

    //append the li element to the ul element
    ul.appendChild(li);
  }

  //append the ul element to the root div
  vanillaRoot.appendChild(ul);
}

//call the main function
main();

/**Now let's do the same thing in react, but in the "#root" from our index.html**/

// First we need to gain access to the React and ReactDOM modules.
import React, { createElement, Fragment } from 'react';
import { createRoot } from 'react-dom/client';

// isolate the DOM node
const domNode = document.querySelector('#root');
// create a root from ReactDOM/client using createRoot(domNode, options?)
const root = createRoot(domNode);

/***Demo Note 1:
 * For the first render use an <h1> with content of your choice.
 * example: root.render(<h1>Hello, cohort 2211-ftb-et-web-ft!</h1>);
 *
 * Then, comment it out or refactor it to use React.createElement to show the
 *  similarities with vanilla DOM manipulation.
 *
 * render(reactNode)
 * reactNode: A React node that you want to display. This will usually be a
 * piece of JSX like <App />, but you can also pass a React element constructed
 * with createElement(), a string, a number, null, or undefined.
 */

// 1. Create a new h1 element that says "USERS"
// createElement(type, props, ...children)
const reactH1 = createElement('h1', {}, 'USERS');

// 2. Create a new ul element
const reactUl = createElement('ul', {}, usersList());

// 3. Write a function to create the li elements for users
function usersList() {
  // use the Array.map method to generate new li elements with each user name
  return users.map((user) => {
    const li = createElement('li', {}, user.name);
    return li;
  });
}

// 4. Put it all together using a with a fragment
const reactFragment = createElement(Fragment, {}, reactH1, reactUl);

/**Well why should I care about using React if it does the same thing as JS?
 *
 * Glad you asked! Let's take a look at JSX!
 */

root.render(reactFragment);
