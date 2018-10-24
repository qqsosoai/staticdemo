<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/test">test</router-link>
    <router-view/>
  </div>
</template>

<script>
  import init from '@/util/dingtalk'
export default {
  name: 'App',
  created(){
    /*this.$ajax('/api/getRequireCourse',{types:'XX'},{async:true})
      .then(json=>console.log(json))
      .catch(err=>console.log(err));*/
    init(dd=>{
      dd.biz.navigation.setTitle({
        title: '会议报告',//控制标题文本，空字符串表示显示默认文本
        onSuccess: function (result) {
        },
        onFail: function (err) {
        }
      });
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
