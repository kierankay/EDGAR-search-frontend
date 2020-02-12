import axios from 'axios';
let BASE_URL = process.env.REACT_APP_API_URL

class EdgarApi {
  static async request(endpoint, data = {}, method = 'get') {
    data.token = localStorage.getItem('token');
    try {
      return (await axios({
        method,
        url: `${BASE_URL}/api${endpoint}`,
        [method === "get" ? "params" : "data"]: data
      })).data
    } catch (err) {
      console.log(endpoint, data, method)
      console.log("API ERROR:", err);
      let message = err.response ? err.response.data.message : err;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Forms Endpoints

  static async getByTicker(ticker) {
    let result = await this.request(`/forms/ticker/${ticker}`);
    return result;
  }

  static async getById(id) {
    let result = await this.request(`/forms/${id}`);
    return result;
  }

}

export default EdgarApi;