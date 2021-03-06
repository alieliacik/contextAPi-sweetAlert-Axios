import './App.css'

import { LoadingProvider } from './LoadingContext'
import Header from './Header'
import Footer from './Footer'
import Axios from './Axios'
import Topics from './Topics'
import Grid from './GridNaming'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  & .swal-overlay {
    background-color: rgba(43, 165, 137, 0.45);
  }

  & .swal-modal {
    background-color: yellow;
    border: 13px solid blue;
  }
`

function App() {
  return (
    <Router>
      <LoadingProvider>
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/axios'>Axios</Link>
            </li>
            <li>
              <Link to='/header'>Header</Link>
            </li>
            <li>
              <Link to='/footer'>Footer</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/header' component={Header} />
          <Route path='/footer' component={Footer} />
          <Route path='/topics' component={Topics} />
          <Route path='/axios' component={Axios} />
          <Route path='/' component={Grid} />
        </Switch>
      </LoadingProvider>
    </Router>
  )
}

export default App
