<template>
  <div class="login-container">
    <!-- 左侧 form  -->
    <div class="form-wrapper">
      <!-- 标题 -->
      <div class="title-box">
        <img class="login-logo" src="../../assets/login_icon.png" alt />
        <span class="title">黑马面面</span>
        <span class="line"></span>
        <span class="sub-title">用户登录</span>
      </div>
      <!-- 表单 -->
      <el-form>
          
      </el-form>
      <!-- 手机号 -->
      <!-- 密码 -->
      <!-- 验证码 -->
      <!-- 协议 -->
      <!-- 登录 注册按钮 -->
    </div>
    <!-- 右侧 图片 -->
    <img src="../../assets/login_banner_ele.png" alt class="banner" />
  </div>
</template>

<script>
export default {
    name: "login",
};
</script>

<style lang="less">
// 登录盒子
.login-container {
  display: flex;
  /* 上下居中 */
  align-items: center;
  /* 水平方向的对其方式 */
  justify-content: space-around;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(1, 198, 250, 1),
    rgba(20, 147, 250, 1)
  );
  .form-wrapper {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    padding-top: 48px;
    padding-left: 43px;
    padding-right: 41px;
    box-sizing: border-box;
    .title-box {
      display: flex;
      align-items: center;
      .login-logo {
        width: 22px;
        height: 17px;
        margin-right: 14px;
      }
      .title {
        font-size: 24px;
        margin-right: 14px;
      }
      .line {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 12px;
      }
      .sub-title {
        font-size: 22px;
      }
    }
    .phone-input {
      margin-top: 30px;
    }
    .password-input {
      margin-top: 25px;
    }
    .captcha-row {
      margin-top: 25px;
      .captcha {
        // width: 110px;
        width: 100%;
        height: 42px;
      }
    }

    // 协议
    .checkbox {
      color: #999;
      font-size: 14px;
      display: flex;
      align-items: center;
      margin-top: 32px;
      .el-checkbox__label {
        display: flex;
        align-items: center;
      }
    }
    // 按钮
    .login-btn,
    .reg-btn {
      width: 100%;
      margin-left: 0;
      margin-top: 27px;
    }
  }

  // 对话框中的 样式
  .captcha {
    height: 41px;
    width: 100%;
  }
  .captcha-btn {
    width: 100%;
  }
  // 对话框
  .reg-dialog .el-dialog {
    width: 602px;
  }
  .reg-dialog {
    // 头部
    .el-dialog__header {
      text-align: center;
      background: linear-gradient(to right, #01c5fa, #1394fa);
      .el-dialog__title {
        color: white;
      }
    }
    // 底部
    .dialog-footer {
      text-align: center;
    }
  }
}
</style>