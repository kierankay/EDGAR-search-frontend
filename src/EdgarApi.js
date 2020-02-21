import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

class EdgarApi {
  static async request(endpoint, data = {}, method = 'get') {
    try {
      return (await axios({
        method,
        url: `${BASE_URL}/api${endpoint}`,
        [method === "get" ? "params" : "data"]: data,
      })).data;
    } catch (err) {
      console.log(endpoint, BASE_URL);
      console.log('API ERROR:', err);
      const message = err.response ? err.response.data.message : err;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Forms Endpoints

  static async getByTicker(ticker) {
    const result = await this.request(`/forms/ticker/${ticker}`);
    return result;
  }

  static async getById(id) {
    const result = await this.request(`/forms/${id}`);
    return result;
  }

}

export default EdgarApi;