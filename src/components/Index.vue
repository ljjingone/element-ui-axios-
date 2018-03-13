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
      <!-- <el-table
        v-loading.fullscreen.lock="fullscreenLoading"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="airdrop"
          label="airdrop">
        </el-table-column>
       
         <el-table-column
          prop="bid_bond"
          label="bid_bond">
        </el-table-column>
        
        <el-table-column
          prop="fullname"
          label="fullname">
        </el-table-column>
        <el-table-column
          prop="name"
          label="name">
        </el-table-column>
        
         <el-table-column
          prop="poll"
          label="poll">
        </el-table-column>
         <el-table-column
          prop="name"
          label="name">
        </el-table-column>
         <el-table-column
          prop="user_count"
          label="user_count">
        </el-table-column>
         <el-table-column
          prop="name"
          label="name">
        </el-table-column>
         <el-table-column
          prop="name"
          label="name">
        </el-table-column>




      </el-table> -->

      <!-- <div class="block">
        <span class="demonstration">显示总数</span>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          layout="total, prev, pager, next"
          :total="totalCount">
        </el-pagination>
      </div> -->
    <div style="margin:20px 0;">
      <table class="hovertable" >
        <tr>
          <th>airdrop</th><th>bid_bond(保证金)</th><th>fullname</th><th>name</th><th>得分</th><th>票数</th><th>人数</th><th>support_nodes（支持节点）</th><th>support_percent</th>
        </tr>
        <tr v-for="(item,key) in tableData" :key="key" onmouseover="this.style.backgroundColor='#ffff66';" onmouseout="this.style.backgroundColor='#d4e3e5';">
          <td>{{ item.airdrop }}</td>
          <td>{{item.bid_bond}}</td>
          <td>{{item.fullname}}</td>
          <td>{{item.name}}</td>
          <td>{{ item.score }}</td>
          <td>{{item.poll}}</td>
          
          <td>{{ item.user_count }}</td>
          <!-- <td ><span v-for="(items1,key) in item.recomend_nodes" :key="key">{{items1.name}},</span></td> -->
          <td ><span v-for="(items2,key) in item.support_nodes" :key="key">{{items2.name}},</span></td>
          
        
          <td>{{ item.support_percent }}</td>
        </tr>
        
      </table>
    </div>
    <!-- <div class="list">

      <ul>
        <li >
          <span>airdrop</span>
          <span>bid_bond</span>
          <span>fullname </span>
          <span>name </span>
          <span>poll </span>
           <span>bid_bond </span>
          <span>bid_bond </span>
          <span>score</span>
          <span>bid_bond </span>
          <span>bid_bond </span>
        </li>
        <li v-for="(item,key) in tableData" :key="key">
          <span>{{ item.airdrop }}</span>
          <span>{{ item.bid_bond }}</span>
          <span>{{ item.fullname }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.poll }}</span>
          <span v-for="(items1,key) in item.recomend_nodes" :key="key">
            {{items1.name}}
          </span>
         <span v-for="(items2,key) in item.support_nodes" :key="key">
             {{items2.name}}
          </span>
          <span>{{ item.score }}</span>
          <span>{{ item.user_count }}</span>
        </li>
      </ul>
    </div> -->
      
  </div>
</template>
<script>
// import Data from '@/data.json'
import store from '@/store'
export default {
  name: 'HelloWorld',
 data(){
    return{
      blogs:[],
      //表格当前页数据
      tableData: [],
      //请求的URL
      // url:'https://api.hadax.com/vote/open/vote/get?r=2czkhbdmsfv&sort_by=poll',
      //默认每页数据量
      // pagesize: 4,
      //当前页码
      // currentPage: 1,
      //默认数据总数
      // totalCount: 20,
      // fullscreenLoading: true
    }
  },
  store,
  created(){
    var _self=this;
    this.$ajax.get(_self.$host+'/get?r=2czkhbdmsfv&sort_by=poll').then(function(response){
        console.log(response);
        _self.tableData = response.data.data.items;
    })
    // this.$ajax.get('http://127.0.0.1:3001/posts?_page=2&_limit=3').then(function(response){
    //   _self.blogs=response.data;
    // })
    // this.loadData( _self.currentPage, _self.pagesize)
    // this.tableData=Data.data.items;
     this.$store.commit('became');
  },
  methods:{
    
    loadData: function( pageNum, pageSize){ 
    
        var _self=this;                 
        var ws = new WebSocket("ws://game.stormfives.com:10001/ws");
        ws.onopen = function(evt) {
          console.log("Connection open ...");
          ws.send("aa");
        };

        ws.onmessage = evt => {
          
          var json=JSON.parse(evt.data);
          console.log("Received Message: " ,json.data.items);
          _self.tableData = json.data.items;
          _self.totalCount=json.data.items.length;
          _self.fullscreenLoading = false;
        };

        ws.onclose = evt => {
          console.log("Connection closed.");
          // this.init();
        };
        ws.onerror = evt => {
          console.log("Connection error.");
          // this.init();
        };           
    },
   

    //页码变更
  //   handleCurrentChange: function(val) {
  //       this.currentPage = val;
  //       this.loadData( this.currentPage, this.pagesize);
  //   }, 
  //  getData:function(data){
  //    console(data)
  //  }
      
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #048b4e;
}
.list{
  padding: 10px 0;

}
.list ul li{
  list-style: none;
  /* display: flex;
  flex-direction:row; */
}
.list ul li::after{
  display: table;
  content: '';
  clear: both;
}
.list ul li span{
  padding: 0 10px;
  display: block;
  float: left;
}
table.hovertable {
	width: 100%;
	font-family: verdana,arial,sans-serif;
	font-size:11px;
	color:#333333;
	border-width: 1px;
	border-color: #999999;
	border-collapse: collapse;
}
table.hovertable th {
	background-color:#c3dde0;
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #a9c6c9;
}
table.hovertable tr {
	background-color:#d4e3e5;
}
table.hovertable td {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #a9c6c9;
}
</style>
