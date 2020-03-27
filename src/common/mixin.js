import ValidateCode from "components/common/validateCode/ValidateCode";

export const FormValidate = {
  components: {
    ValidateCode
  },
  data() {
    // 检查手机号码
    let checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号码不能为空！'));
      }
      setTimeout(() => {
        if (!this.phoneStyle.test(value)) {
          callback(new Error('手机号码格式不合法！'));
        } else {
          callback()
        }
      }, 1000);
    };
    // 检查密码
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码！'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    // 检查验证码
    let checkVCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码！'));
      }else if(value !== this.code){
        callback(new Error('验证码输入错误！'))
      } else {
        callback()
      }
    }
    return {
      phoneStyle: /^1[3456789]\d{9}$/,
      code: '',
      ruleForm: {
        phone: '',
        pass: '',
        vCode: '',
      },
      rules: {
        phone: [
          {validator: checkPhone, trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        vCode: [
          {validator: checkVCode, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    // 获取子组件传过来的验证码
    getCode(code) {
      this.code = code
      return this.code
    }
  }
}