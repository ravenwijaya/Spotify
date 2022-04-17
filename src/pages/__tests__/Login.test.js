/* eslint-disable no-undef */
import React from 'react';
import Login from '../Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  const mockProps = {
    login: jest.fn(),
    getHashParams: jest.fn(),
    handleRedirect: jest.fn(),
  };

  render(
    <Router>
      <Login {...mockProps} />
    </Router>
  );
});

it('renders spotify text', () => {
  expect(screen.getByText('Spotify')).toBeInTheDocument();
});

it('should call redirect function', async () => {
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('LINK YOUR SPOTIFY ACCOUNT');
  userEvent.click(button);

  // await waitFor(() => {
  //   expect(window.location.href).toEqual('accounts.spotify.com');
  // });
});
