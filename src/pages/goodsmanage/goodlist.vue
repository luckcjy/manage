<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="商品条码" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.barcode }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
       <el-table-column label="商品类别">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.goodstype }}</span>
        </template>
      </el-table-column>
       <el-table-column label="商品价格">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.price }}</span>
        </template>
      </el-table-column>
       <el-table-column label="商品数量" >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.goodsnum }}</span>
        </template>
      </el-table-column>
       <el-table-column label="商品单位">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.goodsunit }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { getGood } from '../../api/mock'
import { goodList } from "../../api/http";
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    goodList().then(data => {
     this.tableData = data.goodlist
     console.log(data)
    });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>