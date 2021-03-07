import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render page loads', () => {
  render(<App />);
  expect(document.querySelector(".App")).toBeInTheDocument();
});


test('render random-button is clicked', ()=>{
  render(<App/>);
  expect(document.querySelector("Button")).toBeInTheDocument();
})

test('render when the category dropdown value changes', ()=>{
  render(<App/>);
  expect(document.querySelector("select")).toBeInTheDocument();
})
