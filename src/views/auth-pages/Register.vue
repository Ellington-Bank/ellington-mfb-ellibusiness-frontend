<template>
  <section class="main-container" id="reg-page">
      <div class="row">
          <div class="picture-side col s12 m6 pad0">
              <div class="picture-bg"></div>
          </div>
          <div class="icon-div">
              <img src="../../assets/images/ellignton-pay-logo-black.png" alt="ElligntonPay">
          </div>
          <div class="form-side col s12 m6">
              <div class="auth-wrapper col s12 m8">
                <div class="greeting-div col s12">
                    <h4 class="pry-color">
                        Create an Account
                        <img src="../../assets/images/rocket-emoji.svg" alt="morning" class="greet-img">
                    </h4>
                </div>
                <div class="form-wrapper col s12">
                    <form action="/register-biz">
                        <div class="input-field col s12 pad0">
                            <div class="input-field col s12 m6 pad0-left">
                                <input id="first_name" type="text" class="inp-field">
                                <label for="first_name">FIRST NAME</label>
                            </div>
                            <div class="input-field col s12 m6 pad0-right">
                                <input id="last_name" type="text" class="inp-field">
                                <label for="last_name">LAST NAME</label>
                            </div>
                        </div>
                        <div class="input-field col s12 pad0">
                            <input id="email" type="email" class="validate* inp-field">
                            <label for="email">EMAIL</label>
                        </div>
                        <div class="input-field col s12 pad0">
                            <input id="password" type="password" class="validate* inp-field">
                            <label for="password">PASSWORD</label>
                            <span toggle="#password" class="field-icon toggle-password">
                                <img src="../../assets/images/opened-eye.svg" alt="opened-eye-icon" class="opened-eye-icon">
                                <img src="../../assets/images/closed-eye.svg" alt="closed-eye-icon" class="closed-eye-icon">
                            </span>
                        </div>
                        <div class="input-field col s12 pad0">
                            <input id="confirm-password" type="password" class="validate* inp-field">
                            <label for="confirm-password">CONFIRM PASSWORD</label>
                        </div>
                        <div class="button-div col s12 pad0">
                            <button type="submit" class="submit-btn sec-bg">SIGN UP</button>
                        </div>
                        <div class="col s12 center reg-lnk-div">
                            Already have an account? 
                            <a href="/login" class="sec-lnk">Sign in</a>
                        </div>
                        <div class="col s12 center terms-policy-div">
                            By signing in, you agree to our <br> 
                            <div>
                                <a href="#" class="underlined">Terms of Use</a> and 
                                <a href="#" class="underlined">Privacy Policy</a>
                            </div>
                        </div>
                    </form>
                </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import M from 'materialize-css';
import $ from 'jquery';
export default {
    name: "Register",
    mounted(){
        M.AutoInit();

        $(".toggle-password").click(function() {
            var input = $($(this).attr("toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
                $(this).find(".closed-eye-icon").show();
                $(this).find(".opened-eye-icon").hide();
            } else {
                input.attr("type", "password");
                $(this).find(".closed-eye-icon").hide();
                $(this).find(".opened-eye-icon").show();
            }
        });
    }
}
</script>

<style src="../../assets/css/auth.css"></style>

<style scoped>
.submit-btn {
    font-weight: 500;
}
.input-field > .input-field {
    margin: 0;
}
.icon-div {
    position: fixed;
    right: 50px;
    top: 20px;
}
.greeting-div h4 {
    font-size: 2.2rem;
}
img.greet-img {
    width: 33px;
}
</style>