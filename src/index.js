import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import './index.css'

const rootEl = document.getElementById('root');

const render = (RootComponents) => {
  ReactDOM.render(
    <App />,
    rootEl
  )
}

render(App)

if (module.hot) {
  module.hot.accept('components/App', () => {
    const NextApp = require('components/App').default;
    render(NextApp)
  });
}
