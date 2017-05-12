import React from 'react';

const DeviceListItem = ({device}) => {
  console.log(device);
  return (
    <tr>
      <td>{device.device_mac}</td>
      <td>{device.serial_no}</td>
      <td>{device.color}</td>
      <td>{device.name}</td>
      <td>{device.description}</td>
      <td>{device.building}</td>
      <td>{device.level}</td>
      <td>{device.device_threshold}</td>
    </tr>
  );
};

export default DeviceListItem;
