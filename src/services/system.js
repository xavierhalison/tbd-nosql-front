const getSystemInformation = (field) =>
  fetch("http://localhost:3000/system/" + field)
    .then((data) => data.json())
    .catch((error) => error);

export { getSystemInformation };
