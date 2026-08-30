import { render, screen } from '@testing-library/react';

jest.mock('./pages/Home', () => () => <div>Home page</div>);
jest.mock('./pages/Media', () => () => <div>Media page</div>);
jest.mock('./pages/Projects', () => () => <div>Projects page</div>);
jest.mock('./pages/Resume', () => () => <div>Resume page</div>);
jest.mock('./pages/AboutMe', () => () => <div>About Me page</div>);

import App from './App';

test('renders the home page route', () => {
  render(<App />);
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});
