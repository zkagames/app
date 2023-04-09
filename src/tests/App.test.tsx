import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {App} from '../App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render( <BrowserRouter> 
    <App />
    </BrowserRouter> );
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
