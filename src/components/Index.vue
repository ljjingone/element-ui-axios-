<template>
  <div class="hello" >
      <!-- <div v-for="blog in blogs" :key="blog.id">
        <span>{{blog.title}}</span>
        <span>{{blog.author}}</span>
        <span></span>
      </div> -->
      <div>
        <button @click="$store.commit('reduce')">-</button>
        <span>{{$store.state.count}}</span>
        <button @click="$store.commit('add',10)">+</button>
        <span>{{$store.state.haha}}</span>
        <button @click="$store.commit('became')">became</button>
      </div>
      <el-table
        v-loading.fullscreen.lock="fullscreenLoading"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="日期"
          width="180">
        </el-table-column>
       
         <el-table-column
          prop="title"
          label="姓名"
          width="180">
        </el-table-column>
        
        <el-table-column
          prop="author"
          label="地址">
        </el-table-column>
       
      </el-table>

      <div class="block">
        <span class="demonstration">显示总数</span>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          layout="total, prev, pager, next"
          :total="totalCount">
        </el-pagination>
      </div>

      
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'HelloWorld',
 data(){
    return{
      blogs:[],
      //表格当前页数据
      tableData: [],
      //请求的URL
      url:'http://127.0.0.1:3001/posts',
      //默认每页数据量
      pagesize: 4,
      //当前页码
      currentPage: 1,
      //默认数据总数
      totalCount: 20,
      fullscreenLoading: true
    }
  },
  store,
  created(){
    var _self=this;
    // this.$ajax.get('http://127.0.0.1:3001/mian').then(function(response){
    //   _self.tableData=response.data;
    // })
    // this.$ajax.get('http://127.0.0.1:3001/posts?_page=2&_limit=3').then(function(response){
    //   _self.blogs=response.data;
    // })
    this.loadData( _self.currentPage, _self.pagesize)
  },
  methods:{
    loadData: function( pageNum, pageSize){ 
        var _self=this;                 
        this.$ajax.get(_self.url).then(function(res){
            _self.tableData = res.data.slice((pageNum-1)*pageSize,pageNum*pageSize);
            _self.totalCount=res.data.length;
            
            setTimeout(function(){
               _self.fullscreenLoading = false;
            },1000)
            
            
           console.log(_self.tableData)
        },function(){
            console.log('failed');
        });                 
    },
   

    //页码变更
    handleCurrentChange: function(val) {
        this.currentPage = val;
        this.loadData( this.currentPage, this.pagesize);
    }, 
   
      
  }
}
</script>
document.cookie="octo=GH1.1.199588470.1519270684";
document.cookie="_ga=GA1.2.2106961083.1519270684";
document.cookie="tz=Asia%2FShanghai";
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #048b4e;
}
</style>
