<template>
  <div class="menu-wrapper">
    <el-card class="user">
      <div style="padding: 14px;">
        <span class="userName" >username</span>
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
          <span>{{ tree.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="item in tree.children"
            :index="item.index"
            :key="item.index"
          >{{ item.name }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      treelist: [
        {
          index: "1",
          cls: "el-icon-s-cooperation",
          title: "商品管理",
          role: [1],
          children: [
            { index: "/index/commodity", name: "商品管理" },
            { index: "/index/addcommodity", name: "添加管理" }
          ]
        },
        {
          index: "2",
          cls: "el-icon-s-goods",
          title: "账号管理",
          role: [1],
          children: [
            { index: "/index/account", name: "账号管理" },
            { index: "/index/changepwd", name: "修改密码" },
            { index: "/index/addaccount", name: "增加账号" }
          ]
        },
        {
          index: "3",
          cls: "el-icon-circle-plus",
          title: "进货管理",
          role: [1, 2],
          children: [
            { index: "/index/inventory", name: "库存管理" },
            { index: "/index/addinventory", name: "添加库存" }
          ]
        },
        {
          index: "4",
          cls: "el-icon-remove",
          title: "出货管理",
          role: [1, 2],
          children: [
            { index: "/index/clear", name: "销售列表" },
            { index: "/index/clearout", name: "商品出库" },
            { index: "/index/clearback", name: "商品退货" }
          ]
        },
        {
          index: "5",
          cls: "el-icon-s-data",
          title: "统计管理",
          role: [1],
          children: [
            { index: "/index/sta", name: "销售统计" },
            { index: "/index/stocksta", name: "进货统计" }
          ]
        },
        {
          index: "6",
          cls: "el-icon-s-custom",
          title: "会员管理",
          role: [1],
          children: [
            { index: "/index/vip", name: "账号管理" },
            { index: "/index/addvip", name: "添加账号" }
          ]
        }
      ],
      userInf: {
        username:"",
        role:""
      }
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logOut() {
      localStorage.removeItem("token")
      this.$router.replace("/login");
    }
  },
  computed:{
     
  },
  mounted() {
   
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