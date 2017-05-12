import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Client from './Client.js';

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
        <table className="table">
          <thead>
            <tr>
              <th>Device MAC</th>
              <th>Serial No.</th>
              <th>Color</th>
              <th>Name</th>
              <th>Description</th>
              <th>Building</th>
              <th>Level</th>
              <th>Device Threshold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}

ReactDOM.render(<App />,document.getElementById('container'));
