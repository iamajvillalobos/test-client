import React from 'react';
import DeviceListItem from './device_list_item.js';

const DeviceList = ({devices}) => {
  const deviceItems = devices.map((device) => {
    return <DeviceListItem
      key={device.id}
      device={device.attributes}
    />
  });

  return (
    <div>
      <table className="table table-sm table-striped">
        <thead className="thead-inverse">
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
          {deviceItems}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceList;
