import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { FocusStyleManager } from '@blueprintjs/core';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import App from './App';
import './components/Background';
import store from './store';

// Focus styles will be hidden while the user interacts using the mouse
// and will only appear when the tab key is pressed to begin keyboard navigation.
// http://blueprintjs.com/docs/v2/#core/accessibility.focus-management
FocusStyleManager.onlyShowFocusOnTabs();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
