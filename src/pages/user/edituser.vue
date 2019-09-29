<template>
    <div>
        修改用户信息
    </div>
</template>

<script>
// import { getGood } from '../../api/mock'
import {goodList} from '../../api/http'
goodList().then(data=>{
  console.log(data)
})
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>