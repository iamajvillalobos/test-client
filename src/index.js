import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Client from './Client.js';
import DeviceList from './components/device_list.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { devices: [] }

    Client.getAllDevices((devices) => {
      this.setState({devices: devices});
    });
  }

  render() {

    return (
      <div>
        <DeviceList devices={this.state.devices} />
      </div>
    );
  };
}

ReactDOM.render(<App />,document.getElementById('container'));
