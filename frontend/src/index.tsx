import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './App';

import Theme from './resources/values/theme';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={Theme}>
      <App />
      <GlobalStyle />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
