import axios from "axios";

const baseURL = "http://192.168.1.172:8080";

const createMyAxios = () => {
  const api = axios.create({
    baseURL: baseURL,
    timeout: 5000, // Thời gian chờ tối đa cho yêu cầu (ms)
    headers: {
      "Content-Type": "application/json", // Định dạng dữ liệu gửi đi
    },
  });

  const get = (endpoint) => {
    return api
      .get(endpoint)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(`GET request to ${endpoint} failed: ${error.message}`);
      });
  };

  const post = (endpoint, data) => {
    return api
      .post(endpoint, data)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(`POST request to ${endpoint} failed: ${error.message}`);
      });
  };

  // Thêm các phương thức khác như put, delete, patch tương tự

  // Ví dụ về phương thức tùy chỉnh
  const customRequest = (method, endpoint, data) => {
    return api
      .request({
        method: method,
        url: endpoint,
        data: data,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(
          `${method} request to ${endpoint} failed: ${error.message}`
        );
      });
  };

  return {
    get,
    post,
    customRequest,
  };
};

export default createMyAxios;
