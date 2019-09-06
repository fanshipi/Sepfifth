<template>
  <div class="typer">
    <div class="typer-content">
      <!-- 动态变化的内容-->
      <p class="typer-dynamic">
        <span class="cut">
          <span class="word" v-for="(letter,index) in words" :key="index">{{letter}}</span>
        </span>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "myprint",
  data() {
    return {
      words: [], //字母数组push，pop的载体
      str: `我的名字：Lina， 
        出生地：广东陆河，
        出生月日：11月10日,
        爱好跑步、看小说，
        毕业于肇庆学院...
      `, //str初始化
      letters: [], //str分解后的字母数组
      order: 1 //表示当前是第几句话
    };
  },
  mounted() {
    //页面初次加载后调用begin()开始动画
    this.begin();
  },
  methods: {
    //开始输入的效果动画
    begin() {
      this.letters = this.str.split("");
      // console.log(this.letters);
      for (var i = 0; i < this.letters.length; i++) {
          setTimeout(this.write(i), i * 100);
      }
    },
  

    //输入字母
    write(i) {
      return () => {
        this.words.push(this.letters[i]);
      };
    }
  }
};
</script>


<style scoped lang="less">
// @thePink: #a9a9a9;
@thePink:#000;
.typer {
  margin-top: 6%;
  box-sizing: border-box;
}
.typer .typer-content {
  font-weight: bold;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  letter-spacing: 2px;
}
.typer-dynamic {
  position: relative;
}
.cut {
  color: @thePink;
}
</style>