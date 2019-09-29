<template>
   <div id="index">
    <el-container>
      <el-aside>
        <is-menu></is-menu>
      </el-aside>
      <el-container>
        <el-header>
          <is-header></is-header>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          <p>&copy;COPYRIGHT xxxx-xxxx  xxxx</p>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "../../components/Menu";
import Header from "../../components/Header";
export default {
    created () {
    },
      components: {
    "is-menu": Menu,
    "is-header": Header
  },
};
</script>

<style lang="less" scoped>

#index {
  height: 100%;
  section,
  aside,
  main {
    height: 100%;
  }
  aside {
    flex: 0 0 200px;
    background-color: rgb(84, 92, 100);
  }
   h3 {
    margin: 0;
  }
  .el-header {
    background-color: RGB(48, 65, 86);
    height: 50px !important;    
  }
  .el-footer {
    background-color: RGB(48, 65, 86);
    height: 30px !important;
    p {
      text-align: center;
      color: #fff;
      margin: 0;
      line-height: 30px;
    }
  }
}

</style>