import axios from 'axios'
import vue from "vue"
import qs from 'qs'
import server from '../../config/server.conf'
import '@/http/dangjian'
vue.prototype.$get=get;
vue.prototype.$post=post;
vue.prototype.$patch=patch;
vue.prototype.$put=put;
vue.prototype.$del=del;
vue.prototype.$ajax=ajax;
axios.defaults.timeout=20000;
axios.defaults.baseURL=server.requestPath;

export function ajax(url,data={},option={}) {
  var _option={...option,url,data};
  return new Promise((resolve,reject)=>{
    axios(_option).then(resp=>{
      if (resp.data.success)
        resolve(resp.data);
      else
        reject(resp.data.messages);
    })
  })
}
export function get(url,data={}) {
  return new Promise((resolve,reject)=>{
    axios({url,method:'get',params:data}).then(resp=>{
      if (resp.data.success){
        resolve(resp.data);
      }
      reject(resp.data.message);
    }).catch(err=>{
      reject(err);
    })
  })
}
export function post(url,data={}) {
  return new Promise((resolve,reject)=>{
    data=qs.stringify(data);
    axios({url,method:'post',data}).then(resp=>{
      if (resp.data.success){
        resolve(resp.data);
      }
      reject(resp.data.message);
    }).catch(err=>{
      reject(err);
    })
  })
}
export function patch(url,data={}) {
  return new Promise((resolve,reject)=>{
    axios({url,method:'patch',params:{...data}}).then(resp=>{
      if (resp.data.success){
        resolve(resp.data);
      }
      reject(resp.data.message);
    }).catch(err=>{
      reject(err);
    })
  })
}
export function put(url,data={}) {
  return new Promise((resolve,reject)=>{
    axios({url,method:'put',params:{...data}}).then(resp=>{
      if (resp.data.success){
        resolve(resp.data);
      }
      reject(resp.data.message);
    }).catch(err=>{
      reject(err);
    })
  })
}
export function del(url,data={}) {
  return new Promise((resolve,reject)=>{
    axios({url,method:'delete',params:{...data}}).then(resp=>{
      if (resp.data.success){
        resolve(resp.data);
      }
      reject(resp.data.message);
    }).catch(err=>{
      reject(err);
    })
  })
}
