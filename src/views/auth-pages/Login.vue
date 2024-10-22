<template>
  <section class="main-container">
      <div class="row">
          <div class="picture-side col s12 m6 pad0">
              <div class="picture-bg"></div>
          </div>
          <div class="form-side col s12 m6">
              <div class="auth-wrapper col s12 m7">
                <div class="icon-div col s12">
                  <img src="../../assets/images/ellignton-pay-logo-black.png" alt="ElligntonPay">
                </div>
                <div class="greeting-div col s12">
                    <h4 class="pry-color">
                        Welcome Back!
                        <img src="../../assets/images/sun-icon.svg" alt="morning" class="greet-img sun-img">
                        <img src="../../assets/images/half-moon1.svg" alt="night" class="greet-img moon-img">
                    </h4>
                </div>
                <div class="form-wrapper col s12">
                    <form action="#">
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

                            <div class="right-align f-p-txt">
                                <router-link to="/reset-password">
                                    <i>forgot password?</i>
                                </router-link>
                            </div>
                        </div>
                        <div class="input-field col s12 pad0">
                            <p>
                                <label>
                                    <input type="checkbox" class="filled-in" />
                                    <span>Remember Me</span>
                                </label>
                            </p>
                        </div>
                        <div class="button-div col s12 pad0">
                            <button type="submit" class="submit-btn sec-bg">SIGN IN</button>
                        </div>
                        <div class="col s12 center reg-lnk-div">
                            Don’t have an account? 
                            <a href="/register" class="sec-color">Create One</a>
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
    name: "Login",
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

<style></style>