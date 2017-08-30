import React from 'react'

import ButtonPage from 'pages/ButtonLayout'
import FormPage from 'pages/FormLayout'
import RichTextPage from 'pages/RichTextLayout'
import NavigationPage from 'pages/NavigationLayout'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

//React router
//Route config
const routes = [
  {
    path: '/button',
    component: ButtonPage,
    title: 'button screen'
  },
  {
    path: '/form',
    component: FormPage,
    title: 'form screen'
  },
  {
    path: '/richtext',
    component: RichTextPage,
    title: 'richtext screen'
  },
  {
    path: '/navigation',
    component: NavigationPage,
    title: 'navigation screen'
  }
]

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => {
      console.log(props);
      return(
        <route.component {...props} routes={route.routes}/>
      )
    }}/>
)

const RouteConfigExample = () => (
  <Router>
    <div>
      <ul><Link to="/button">Button Layout</Link></ul>
      <ul><Link to="/form">Form Layout</Link></ul>
      <ul><Link to="/richtext">RichText Layout</Link></ul>
      <ul><Link to="/navigation">Navigation Layout</Link></ul>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default RouteConfigExample
