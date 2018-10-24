import store from '@/states'
import axios from 'axios'
axios.interceptors.request.use(config=>{
  let token = store.state.token;
  if (token){
    config.params = {
      token
    }
  }
  config.headers={
    'Content-Type':'application/x-www-form-urlencoded'
  };
  return config;
});
