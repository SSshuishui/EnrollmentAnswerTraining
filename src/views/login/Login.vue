<template>
  <div class="loginBox">
    <div class="header">
      <h4>欢迎登录答题培训系统</h4>
    </div>
    <div class="main">
      <div>
        <div class="inpBox">
          <input type="text" placeholder="用户名/手机号码" v-model="account" />
        </div>
        <div class="inpBox">
          <input type="password" placeholder="密码" v-model="password" />
        </div>
        <div class="inpBox">
          <input type="password" placeholder="密码" v-model="assure" />
          <img src="" alt="">
        </div>
      </div>

      <button class="submit" @click="loginHandle">立即登录</button>
    </div>

    <div class="register">
      <router-link to="/register">立即注册</router-link>|
      <a>忘记密码</a>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        account: '',
        password: '',
        assure: ''
      }
    },
    methods: {
      // 登录  表单校验 + 校验验证码正确性
      loginHandle() {

      }
    }
  }
</script>

<style lang='less'>
  @C1: #666;
  @C2: #d3d3d3;

  .loginBox {
    align-content: center;
    padding-top: 12%;
    height: 100%;
    font-size: 0.28rem;
    background: url("~assets/img/login/loginBg.png") no-repeat;
    background-size: 100%;

    .header,
    .main,
    .register,
    .other {
      margin: 0 auto;
      width: 40%;
    }

    .header {
      margin-bottom: 0.2rem;

      h4 {
        line-height: 1.6rem;
        font-size: 1.7rem;
        text-align: center;
        font-weight: normal;
        margin-bottom: 2rem;
      }
    }

    .main {
      .inpBox {
        position: relative;
        font-size: 1rem;
        height: 3rem;
        border-bottom: 0.1rem solid @C2;

        input {
          border: none;
          width: 50%;
          height: 2.85rem;

          &.short {
            width: 60%;
          }
        }

        a {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          color: #c49c63;

          &.noClick {
            color: @C1;
          }
        }
      }

      .submit {
        display: block;
        margin-top: 1rem;
        width: 100%;
        height: 2rem;
        line-height: 1rem;
        text-align: center;
        font-size: 0.9rem;
        color: #fff;
        border: none;
        border-radius: 0.7rem;
        background: linear-gradient(to right, #e4bb7e, #d1a96e);
        box-shadow: 0 0.08rem 0.04rem @C2;
      }

      .changeBtn {
        margin-top: 0.5rem;
        line-height: 1.5rem;
        font-size: 1rem;
        text-align: center;
        color: @C1;
      }
    }

    .register {
      margin-top: 0.5rem;
      line-height: 1.5rem;
      font-size: 1rem;
      text-align: center;

      a {
        padding: 0 0.6rem;
        margin-top: 0.5rem;
        line-height: 1.5rem;
        color: @C1;
      }
    }

    .other {
      margin-top: 0.4rem;

      span {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        color: @C1;

        &:before,
        &:after {
          content: "";
          height: 0;
          width: 20%;
          border: 0.01rem solid @C2;
        }
      }

      div {
        margin-top: 0.3rem;
        text-align: center;
        font-size: 0;

        a {
          display: inline-block;
          margin: 0 0.15rem;
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          background: url("~assets/img/login/icons_type.png") no-repeat;
          background-size: 2.8rem;

          &:nth-child(1) {
            background-color: #ed9090;
            background-position: -0.92rem 0.03rem;
          }

          &:nth-child(2) {
            background-color: #6bb6ea;
            background-position: -1.5rem 0.03rem;
          }

          &:nth-child(3) {
            background-color: #00be00;
            background-position: -2.2rem 0.03rem;
          }
        }
      }
    }

    .footer {
      margin-top: 0.8rem;
      line-height: 0.5rem;
      text-align: center;
      color: @C1;

      span {
        margin: 0 0.15rem;
      }
    }
  }
</style>