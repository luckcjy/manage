<template>
    <div>
用户栏
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