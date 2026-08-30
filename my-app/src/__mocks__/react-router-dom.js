import React from 'react';

export const useNavigate = () => jest.fn();

export const BrowserRouter = ({ children }) => <div>{children}</div>;

export const Routes = ({ children }) => {
  const routes = React.Children.toArray(children);
  const homeRoute = routes.find((route) => route?.props?.path === '/');
  return homeRoute?.props?.element ?? null;
};

export const Route = () => null;

export const Navigate = () => null;
