import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddTrip from './add-trip';
import FindTrip from './find-trip';
import { Helmet } from "react-helmet";

export default class App extends Component {
  render() {
    return (
      <div className="hero-body">
        <Helmet>
          <meta charSet="utf-8" />
          <title>tripaider | your personal travel buddy</title>
        </Helmet>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="notification action-box semi-transparent-background">
                <h2 className="heading title is-size-3 has-text-white has-text-weight-light page-heading">Add Trip</h2>
                <p className="has-text-white has-text-weight-light spacer">Sed quis volutpat nisi. Maecenas vestibulum quam nec mi elementum, consequat pulvinar ipsum malesuada.</p>
                <Link to="/add-trip" className="button is-warning is-outlined is-rounded is-pulled-right"><span className="fa-fw select-all fas"></span>&nbsp;Continue</Link>
                <div className="is-clearfix"></div>
              </div>
            </div>
            <div className="column">
              <div className="notification action-box semi-transparent-background">
                <h2 className="heading title is-size-3 has-text-white has-text-weight-light page-heading">Find Trip</h2>
                <p className="has-text-white has-text-weight-light spacer">Sed quis volutpat nisi. Maecenas vestibulum quam nec mi elementum, consequat pulvinar ipsum malesuada.</p>
                <Link to="/" className="button is-warning is-outlined is-rounded is-pulled-right"><span className="fa-fw select-all fas"></span>&nbsp;Continue</Link>
                <div className="is-clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}