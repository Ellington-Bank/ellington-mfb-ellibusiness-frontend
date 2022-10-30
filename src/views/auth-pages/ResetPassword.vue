<template>
  <section class="main-container" id="reset-page">
      <div class="row">
          <div class="picture-side col s12 m6 pad0">
              <div class="picture-bg"></div>
          </div>
          <div class="form-side col s12 m6">
              <div class="auth-wrapper col s12 m7">
                <div class="icon-div col s12">
                  <img src="../../assets/images/airopay-icon.svg" alt="Airopay">
                </div>
                <div class="greeting-div col s12">
                    <h4 class="pry-color">
                        Reset Password
                        <img src="../../assets/images/fix-emoji.svg" alt="morning" class="greet-img">
                    </h4>
                </div>
                <div class="form-wrapper col s12">
                    <form action="#" id="reset-form">
                        <div class="reset-form-div">
                            <div class="input-field col s12 pad0">
                                <input id="email" type="email" class="validate* inp-field">
                                <label for="email">EMAIL</label>
                            </div>
                            <div class="button-div col s12 pad0">
                                <button type="submit" class="submit-btn sec-bg" id="reset-btn">SEND PASSWORD RESET EMAIL</button>
                            </div>
                        </div>
                        <div class="center reset-notice">
                            An email is on its way to you. Follow the instructions to reset your password.
                        </div>
                        <div class="col s12 center reg-lnk-div">
                            Remember your password?
                            <a href="/login" class="sec-lnk">Sign in</a>
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

        $("form#reset-form").submit(function(){
            $(".reset-form-div").hide();
            $(".reset-notice").show();
            $(this).preventDefault();
        })
    }
}
</script>

<style src="../../assets/css/auth.css"></style>

<style scoped>
img.greet-img {
    width: 25px;
    top: 0;
}
.reset-notice {
    margin: 20px 0;
    font-size: 14px;
    display: none;
}
</style>