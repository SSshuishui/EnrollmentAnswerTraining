<template>
  <div class="info">
    <div class="info-detail">
      <table class="info-table">
        <tbody class="info-body">
        <tr>
          <td class="text-r">工号：</td>
          <td>2016303128</td>
        </tr>
        <tr>
          <td class="text-r">姓名：</td>
          <td>赵祥</td>
        </tr>
        <tr>
          <td class="text-r">所在学院：</td>
          <td>软件学院</td>
        </tr>
        <tr>
          <td class="text-r">身份类别：</td>
          <td>本科生</td>
        </tr>
        <tr>
          <td class="text-r">手机号码：</td>
          <td id="wxInfo">17629063945</td>
          <td class="modify">
            <el-button type="text" @click="open">修改</el-button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: "Information",
    props: {
      userInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        operationVisible: false
      };
    },
    methods: {
      ...mapActions(['modifyInfo']),
      open() {
        this.$prompt('请输入手机号码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^1[3456789]\d{9}$/,
          inputErrorMessage: '手机号码格式不正确'
        }).then(() => {
          this.modifyInfo().then(res => {
            this.$toast.show(res)
          })
        }).catch(() => {
          this.modifyInfo.then(res => {
            this.$toast.show('修改失败！')
          })
        })
      }
    }
  }
</script>

<style scoped>
  .info {
    width: 400px;
    height: 400px;
  }

  .info-detail {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .info-body tr > td {
    height: 40px;
    padding: 5px;
    margin: 15px;
  }

  .modify a {
    margin-left: 5px;
    color: #8c939d;
  }

  .text-r {
    font-size: 16px;
    color: black;
  }
</style>