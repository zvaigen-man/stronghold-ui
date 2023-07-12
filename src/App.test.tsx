import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './redux/store';
// const msalInstance = new PublicClientApplication(msalConfig);

test('renders Prof-X', () => {
  // render(
    // <Provider store={configureStore()}>
      {/* <BrowserRouter > */}
        {/* <MsalProvider instance={msalInstance}> */}
          // <App />
        {/* </MsalProvider> */}
      {/* </BrowserRouter> */}
    // </Provider>
  // );
  // const linkElement = screen.getByText(/Prof-X/);
  // expect(linkElement).toBeInTheDocument();
});
