import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';
import MaterialIcon from 'material-icons-react';
import Tasks from './Tasks/index';
import Projects from './Projects/index';
import Schedule from './Schedule/index';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <section id="mainSection">
          <span id="settings">
            <MaterialIcon icon="menu"/>
            <ul>
              <li>Logout</li>
            </ul>
          </span>
          <Switch>
            <Route exact path="/" component={Tasks} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/projects" component={Projects} />
            <Route path="/schedule" component={Schedule} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default Content;