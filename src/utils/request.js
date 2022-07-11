import axios from "axios";

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 3000
})

instance.interceptors.request.use(config => config)

instance.interceptors.response.use(
  response => {
    if (response.status === 200 ) {
      const { data } = response
      console.log('-----data-----', data);
      return data
    } else {
      console.log('-----res-----', response);
      return response
    }
  },
  err => {
    return err
  }
)
export default instance
