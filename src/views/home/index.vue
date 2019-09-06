<template>
  <div>
    <el-container class="my-container">
      <el-header class="my-header">
        <el-container class="my-header-container">
          <el-header class="my-header-title">
            <el-row class="my-header-row">
              <a href="#about">关于我</a>
              <a href="#contact">联系吧</a>
              <a href="#more">更多待续</a>
            </el-row>
          </el-header>
          <el-main class="my-header-main">
            <el-row>
              <el-col :span="6">
                <div class="demo-image__lazy">
                  <el-image :src="url" lazy></el-image>
                </div>
              </el-col>
              <el-col :span="12" :offset="1">
                <span>
                  <span class="aboutme">关于我</span>
                  <myprint></myprint>
                </span>
              </el-col>
            </el-row>
            <el-row></el-row>
          </el-main>
        </el-container>
      </el-header>
      <el-main class="my-main">
        <el-container>
          <el-aside width="200px">
            <el-menu
              :router = true
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#f6f6f6"
              text-color="#000"
              active-text-color="#ea542b"
              :unique-opened="true"
            >
              <el-menu-item index="/charactor">
                <i class="el-icon-menu"></i>
                <span slot="title">人物</span>
              </el-menu-item>
             <el-menu-item index="/animal">
                <i class="el-icon-document"></i>
                <span slot="title">动物</span>
              </el-menu-item>

              <el-menu-item index="/scenery">
                <i class="el-icon-document"></i>
                <span slot="title">风景</span>
              </el-menu-item>
              <el-menu-item index="/architect">
                <i class="el-icon-setting"></i>
                <span slot="title">建筑</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import myprint from "../../components/mycanvas";
export default {
  components: {
    myprint
  },
  data() {
    return {
      url: "http://img2.3png.com/b38f6f5176d0fa3fe67d9bbbbac0d918cfe7.png"
    };
  }
};
</script>

<style lang='less' escoped>
// @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
.my-container {
  margin: 0 auto;
  height: 100%;
  background: #f6f6f6;
  padding-left: 12%;
  // background: #efefe7;
  .my-header {
    height: 100% !important;
    .my-header-title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 0 30px;
      a {
        font-size: 20px;
        color: #000;
        font-family: "Dancing Script", cursive, Comic Sans MS, Cambria, Cochin,
          Georgia, Times, "Times New Roman", serif;
        display: inline-block;
        margin-right: 30px;
      }
    }
    .my-header-main {
      span {
        font-family: "Dancing Script", cursive, Comic Sans MS, Cambria, Cochin,
          Georgia, Times, "Times New Roman", serif;
      }
      span.aboutme {
        // color: #969696;
        color: #000;
        font-size: 42px;
        margin: 0px 0 20px;
      }
    }
  }
 
  .el-main .el-menu-item,.el-submenu__title {
    font-family: "Dancing Script",cursive, Comic Sans MS, Cambria, Cochin, Georgia, Times,
      "Times New Roman", serif !important;
  }
}
</style>