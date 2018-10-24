import {get,post} from '@/http'
import vue from 'vue'
import vuex from 'vuex'
import dingtalk from 'dingtalk-javascript-sdk'
import module from '@/const'
vue.use(vuex);
var store = new vuex.Store({
  //所有的模块放入modules
  modules: {},
  state: {
    token: null,
    tokenTime: null,
    corpID: null,
    uid:null
  },
  mutations: {
    setToken(state, token = null) {
      state.token = token;
      state.tokenTime = new Date();
    },
    setCorp(state, corp = null) {
      state.corpID = corp;
    },
    setUid(state,uid=null){
      state.uid=uid;
    }
  },
  actions: {
    getCorpId(context) {
      return new Promise((resolve, reject) => {
        get("/ddParam").then(data => {
          context.commit('setCorp', data.datas.CorpID);
          context.dispatch("setToken").then(()=>resolve()).catch(err=>reject(err));
        }).catch(err => {
          reject(err);
        })
      });
    },
    setToken(context) {
      return new Promise((resolve,rejext)=>{
        dingtalk.ready(()=>{
          const dd = dingtalk.apis;
          dd.runtime.permission.requestAuthCode({
            corpId: context.state.corpID,
            onSuccess: function(result) {
              let code=result.code;
              post(module.jsMobilelogin,{code}).then(data=>{
                context.commit('setToken', data.datas.token);
                context.commit('setUid', data.datas.uid);
                resolve();
              }).catch(err=>{
                console.log(err);
                alert(err);
                rejext(err);
              })
            },
            onFail : function(err) {
              alert("用户授权登陆失败，请重新进入此应用。");
              console.log(JSON.stringify(err));
            }
          });
        })
      })
    }
  }
});
export default store;
