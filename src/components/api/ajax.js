class httpLibrary {
  // Get Request
  async get(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    return respData;
  }

  // Post Request
  async post(url, data) {
    const dataBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(data),
    };

    const resp = await fetch(url, dataBody);
    const respData = await resp.json();
    return respData;
  }

  // Put Request
  async put(url, data) {
    const dataBody = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(data),
    };

    const resp = await fetch(url, dataBody);
    const respData = await resp.json();
    return respData;
  }

  // Delete Request
  async delete(url) {
    const dataBody = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      // body: JSON.stringify(data) Since we are deleting a resource no body to send
    };
    const resp = await fetch(url, dataBody);
    const respData = await resp.json();
    return `User ${respData.name} with id ${
      respData.id
    } has been deleted...  + ${JSON.stringify(respData)}`;
  }
}
