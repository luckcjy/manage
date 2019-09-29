<template>
  <div class="header-wrapper">
    <h1>
      <i class="el-icon-menu"></i>
      xxx管理系统
    </h1>
    <span class="time">{{ getTime }}</span>
  </div>
</template>
<script>
 var time = new Date()
export default {
  data() {
   
    return {
      time
    };
  },
  methods: {},
  //计算属性
  computed: {
   getTime(){
     setInterval(()=>{
       return time++
     },1000)

   }

  },
  mounted(){
     
  }
};
</script>
<style lang="less" Scoped>
.header-wrapper{
  width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    color: #fee;
    h1 {
      font-size: 26px;
      font-weight: normal;
      margin: 0;
      padding: 10px;
    }
  
}
</style>