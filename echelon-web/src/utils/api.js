import axios from 'axios';

import { API } from 'config/url.config';

function headers() {
  const token = localStorage.getItem('token');

  // axios.defaults.withCredentials = true;

  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer: ${token}`,
  };
}

function queryString(params) {
  const query = Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

export default {
  fetch(url, params = {}) {
    return axios.get(`${API}${url}${queryString(params)}`, {
      headers: headers(),
    });
  },

  post(url, data) {
    return axios
      .post(`${API}${url}`, data, { headers: headers(), withCredentials: true })
      .catch(error => error.response);
  },

  patch(url, data) {
    return axios.patch(`${API}${url}`, data, { headers: headers() });
  },

  delete(url) {
    return axios.delete(`${API}${url}`, { headers: headers() });
  },
};
