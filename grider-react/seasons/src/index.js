import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  constructor(props) {
    super(props);
    // The ONLY time we do direct assingnment
    // to this.state
    this.state = { lat: null, errorMessage: "" };
  }
  // state can also be defined like this:
  // state = { lat: null, errorMessage: "" };
  // We run this just after component is mounted
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        console.log(lat);
        this.setState({ lat });
      },
      (e) => this.setState({ errorMessage: e.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  //react says we have to define render
  render() {
    return (
      <div style={{ border: "10px solid grey" }}>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
