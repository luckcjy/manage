<template>
  <div class="menu-wrapper">
    <el-card class="user">
      <!-- <img src="../assets/images/head.jpg" class="image" /> -->
      <div style="padding: 14px;">
        <span class="userName">username</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">个人信息</el-button>
          <el-button type="text" class="button" @click="logOut">注销</el-button>
        </div>
      </div>
    </el-card>
    <el-menu
      :default-active="$route.path"
      class="menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
    >
      <!-- 遍历 -->
      <el-submenu v-for="tree in treelist" :index="tree.index" :key="tree.index">
        <template slot="title">
          <span>{{ tree.meta.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="item in tree.children"
            :index="item.path"
            :key="item.path"
          >{{ item.meta.title }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logOut() {
      localStorage.removeItem("token");
      this.$router.replace("/login");
    }
  },
  computed: {
    treelist() {
      return this.$store.getters.showList;
    }
  }
};
</script>
<style lang="less" Scoped>
.menu-wrapper {
  .user {
    margin-top: 30px;
    background-color: rgb(84, 92, 100);
    box-shadow: none;
    border: none;
    .el-card__body {
      padding: 10;
    }
    img {
      height: 100px;
      width: 100px;
      border-radius: 100%;
    }
    .userName {
      color: #fff;
    }
  }

  ul {
    border: none !important;
  }
}
</style>