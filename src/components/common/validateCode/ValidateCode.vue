<template>
  <div class="divIdentifyingCode" @click="refreshCode()">
    <span v-for="(item,index) in codeList" :key="index"  :style="getStyle(item)">{{item.code}}</span>
  </div>
</template>

<script>
  export default {
    name: "ValidateCode",
    props: {
      length: {
        type: Number,
        default: 4
      }
    },
    data() {
      return {
        codeList: []
      }
    },
    mounted() {
      this.createdCode()
    },
    methods: {
      // 刷新验证码
      refreshCode() {
        this.createdCode()
      },
      // 生成验证码
      createdCode() {
        const len = this.length
        const list = []
        const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
        const charsLen = chars.length
        // 生成
        for (let i = 0; i < len; i++) {
          const rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)] //随机生成颜色
          list.push({
            code: chars.charAt(Math.floor(Math.random() * charsLen)), // 随机码
            color: `rgb(${rgb})`, // 随机颜色
            fontSize: `1${[Math.floor(Math.random() * 10)]}px`, // 随机字号
            padding: `${[Math.floor(Math.random() * 10)]}px`, // 随机内边距
            transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)` // 随机旋转角度
          })
        }
        // 指向
        this.codeList = list

        // 将当前数据派发给父组件
        this.$emit('getCode', list.map(item => item.code).join(''))
      },
      // 动态绑定样式
      getStyle(data){
        return `color: ${data.color};
                  font-size: ${data.fontSize};
                  padding: ${data.padding};
                  transform: ${data.transform}
                  background-color: #f2f2f2`
      }
    }
  }
</script>

<style scoped>
  .divIdentifyingCode {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    width: 102px; /*设置图片显示的宽*/
    height: 40px; /*图片显示的高*/
    background: #e2e2e2;
    margin: 0;
  }

</style>