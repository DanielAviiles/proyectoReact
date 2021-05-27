import React from 'react';
import ReactDOM from 'react-dom';
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"; */

import Routerapp from './routes/Routerapp.jsx';

// import AdminLayout from "./layouts/Admin/Admin";

/* import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper"; */

ReactDOM.render(
  <>
    <Routerapp />
    {/* <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <Router>
          <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
        </Router>
      </BackgroundColorWrapper>
    </ThemeContextWrapper> */}
  </>,
  document.getElementById('root')
);
