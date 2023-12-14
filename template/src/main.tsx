import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './app/styles/tailwind.css';
import store from "./app/redux/store.ts";
import {Provider} from "react-redux";
import i18n from "./i18n.ts";
import {I18nextProvider} from "react-i18next";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <I18nextProvider i18n={i18n}>
              <App />
          </I18nextProvider>
      </Provider>
  </React.StrictMode>,
)
