<template>
    <div>
      <mt-header class="header" title="视频" v-model="selected">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="jump('/')">返回</mt-button>
        </router-link>

      </mt-header>
      <div class="video" id="video" >
        <div>
          <video controls>
          <source src="../assets/ll.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
          <div class="videoIntro">
            <p>小狗摔跤</p>
          </div>
        </div>
        <video controls>
          <source src="../assets/ll.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>

      </div>
    </div>

</template>

<script>
    export default {
        name: "videowatch",
      data: function() {
        return {
          selected: "视频"
        }
      },

      methods:{
        routerPush(path){
          if (path == "/")
            this.selected = "首页";
          this.$router.push({path:path})
        },
        jump(path){
          window.location.href = path;
        }
      }
    }
</script>

<style scoped>
  .header{
    background-color: #ED9EBF;
  }
  .videoIntro{
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video{
    height: 100%;
    width: auto;
    padding-top: 20px;
  }
  video{
    width: 40%;
    float: left;
    border: 5px;
    border-radius: 15px;
    margin-left: 5%;
    height: 100px;
  }

</style>
