<template>
    <div>
      这是测试页面
    </div>
</template>

<script>
    import init from '@/util/dingtalk'
    export default {
        name: "test",
        created(){
          init(dd=>{
            dd.biz.navigation.setTitle({
              title: '测试页面',//控制标题文本，空字符串表示显示默认文本
              onSuccess: function (result) {
              },
              onFail: function (err) {
              }
            });
          })
        }
    }
</script>

<style scoped>

</style>
