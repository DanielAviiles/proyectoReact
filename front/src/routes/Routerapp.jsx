import React from 'react';
import { Container } from 'react-bulma-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import App from '../App';
import FormModify from '../components/FormModify';

const Routerapp = () => {
  return (
    <Router>
      <Container mt="6">
        <Switch>
          <Route exact path='/' render={(props) => (<App {...props} />)} />
          <Route exact path='/pelicula/:idPeli'
              render={(props) => (<FormModify {...props} />)} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  )
}

export default Routerapp
