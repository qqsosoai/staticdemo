import dingtalk from 'dingtalk-javascript-sdk'
import {post} from '@/http'
export default function init(fun) {
  dingtalk.ready(()=>{
    console.log(location.href);
    const dd = dingtalk.apis;
    post('/ddConfig',{uri:location.href}).then(data=>{
      dingtalk.config({
        agentId: data.datas.agentID, // 必填，微应用ID
        corpId: data.datas.corpId,//必填，企业ID
        timeStamp: data.datas.timeStamp, // 必填，生成签名的时间戳
        nonceStr: data.datas.nonceStr, // 必填，生成签名的随机串
        signature: data.datas.signature, // 必填，签名
        type:0,//选填，0表示微应用的jsapi，1表示服务窗的jsapi，不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
        jsApiList : ['device.notification.alert','biz.navigation.close','biz.util.openLink',
          'biz.user.get','biz.util.datepicker','device.notification.confirm',
          'biz.util.uploadImageFromCamera','biz.ding.post','device.geolocation.get',
          'biz.navigation.setMenu','biz.contact.complexPicker','biz.contact.complexPicker','device.geolocation.start','device.geolocation.get','device.geolocation.stop','device.geolocation.status',
          'biz.map.search','biz.util.uploadImage','device.audio.startRecord','device.audio.translateVoice','device.audio.stopRecord','device.audio.onRecordEnd','biz.ding.create',
          'biz.customContact.multipleChoose','biz.customContact.choose','biz.chat.openSingleChat','biz.telephone.call','biz.telephone.showCallMenu'

        ] // 必填，需要使用的jsapi列表，注意：不要带dd。
      });
      console.log("dd鉴权成功");
    }).catch(err=>console.log(err));
    fun(dd);
  })
}
