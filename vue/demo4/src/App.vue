<template>
  <div id="app">
    <link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
<!--    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">-->

    <router-view/>
    <mt-tabbar style="position: fixed" class="footer" v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="./assets/home.png" @click="routerPush('/')">
        首页
      </mt-tab-item>
      <mt-tab-item id="视频" >
        <img slot="icon" src="./assets/vedio.png" @click="routerPush('/videowatch')">
        视频
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/mine2.png" @click="routerPush('/mine')">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selected: "首页"
    }
  },
  methods:{
    routerPush(path){
      this.$router.push({path:path})
    }
  },
  created : function(){
    console.log("Create");
    console.log(this.$route.path)
    if (this.$route.path === "/")
      this.selected = "首页";
    else if(this.$route.path === "/videowatch")
      this.selected = "视频";
    else if(this.$route.path === "/mine")
      this.selected = "我的";
    else
      this.selected = "";
  },
  watch:{
    selected:function (val, oldval) {
      console.log("val",val);
      console.log("oldval",oldval);
    }
  }

}
</script>

<style>
  .footer{
    background-color: #ED9EBF;
  }
body{
  margin:0 0 55px 0;
  padding:0;


}
</style>
