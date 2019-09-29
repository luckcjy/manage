<template>
    <div>
编辑商品
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