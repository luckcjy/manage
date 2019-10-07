<template>
  <div>
    修改用户信息
    <p>
      用户头像:
      <input type="file" name="userHear" id="userHead" @change="showHeadImag" />
    </p>
    <img :src="headImag" alt width="100px" height="100px" />
    <button @click="updateHead">提交</button>
  </div>
</template>

<script>
// import { getGood } from '../../api/mock'
// import { goodList } from "../../api/http";
// goodList().then(data => {
//   console.log(data);
// });
import axios from "axios";
export default {
  data() {
    return {
      headImag: ""
    };
  },
  methods: {
    showHeadImag(e) {
      var typeArr = ["jpg", "png", "jpeg"];
      var file = e.target.files[0];
      var nameType = file.name
        .split(".")
        .pop()
        .toLowerCase();
      if (!typeArr.includes(nameType)) {
        e.target.value = ""
        this.headImag = ""
        alert("传入图片格式错误");
        return false;
      }
      this.headImag = window.URL.createObjectURL(file);
      console.log(file);
    },
    updateHead() {
      var params = new FormData();
      //   console.log(userHead.files)
      var file = userHead.files[0];
      console.log(file);

      params.append("file", file, file.name);
      var config = {
        headers: {
          "Content-Type": "multipart/form-data",
          token: localStorage.getItem("token")
        }
      };
      axios
        .post("http:127.0.0.1:5500", params, config)
        .then(() => {
          alert(1);
        })
        .catch(() => {
          alert(2);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>