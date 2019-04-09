<template>
  <div class="hello">
    <mt-header class="header" fixed title="首页"></mt-header>
    <div   class="intro">
      <div class="introImg"><img src="../assets/intro.png" width="100%"  height="auto" ></div>

    </div>
    <mt-swipe class="swipebox" :auto="4000">
      <mt-swipe-item class="swipe">1</mt-swipe-item>
      <mt-swipe-item class="swipe">2</mt-swipe-item>
      <mt-swipe-item class="swipe">3</mt-swipe-item>
    </mt-swipe>


  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        selected: 2,
      }
    },
    methods:{
      handleClose:function () {
        console.log("beibei");
      }
    }
  }
</script>


<style scoped>
  .intro{
    height: 150px;
    margin-top: 40px;
    font-family: 幼圆;
    font-size: xx-large;
    background-color: #ED9EBF;

  }
  .introImg{

    border-radius: 15px;


  }
  .header{

    background-color: #ED9EBF;
  }
  .swipebox{
    height: 200px;
    width: 100%;
  }
  .swipe:nth-child(3n+0){
    background-color: #ED9EBF;
  }
  .swipe:nth-child(3n+1){
    background-color: #ED9EBF;
  }
  .swipe:nth-child(3n+2){
    background-color: #ED9EBF;
  }

</style>
