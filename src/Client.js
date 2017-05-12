function getAllDevices(callback) {
  return fetch(`https://datalink-test-api.herokuapp.com/api/v1/devices`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(callback);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.status}`);
  error.status = response.status;
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { getAllDevices };
export default Client;
