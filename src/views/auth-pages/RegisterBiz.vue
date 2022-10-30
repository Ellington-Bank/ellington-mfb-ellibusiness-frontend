<template>
  <section class="main-container" id="reg-page">
      <div class="row">
          <div class="picture-side col s12 m6 pad0">
              <div class="picture-bg"></div>
          </div>
          <div class="icon-div">
              <img src="../../assets/images/airopay-icon.svg" alt="Airopay">
          </div>
          <div class="form-side col s12 m6">
              <div class="auth-wrapper col s12 m11">
                <div class="greeting-div col s12">
                    <h4 class="pry-color">
                        Tell us about your business
                    </h4>
                    <span>A few more things to help us set up your dashboard</span>
                </div>
                <div class="form-wrapper col s12">
                    <form action="#">
                        <div class="input-field col s12 pad0">
                            <div class="input-field col s12 m6 pad0-left">
                                <input id="biz_name" type="text" class="inp-field">
                                <label for="biz_name">Business/Company Name</label>
                            </div>
                            <div class="input-field col s12 m6 pad0-right">
                                <div class="form-notice">
                                    <img src="../../assets/images/alert(fill).svg" alt="alert" /> <br />
                                    <span>
                                        If your business is registered, please ensure that the business 
                                        name provided is the same name on your registration documents.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="input-field col s12 pad0">
                            <div class="fs-title">What type of business do you run?</div>
                            <div class="col s12 pad0">
                                <div class="project-type col s12 m10">
                                    <div class="checkbox">
                                        <input type="checkbox" id="indivdual-biz" name="type-of-biz" value="Individual">
                                        <label for="indivdual-biz" class="radio-div">
                                            <div class="radio-img-icon">
                                                <img src="../../assets/images/individual.svg" alt="individual">
                                            </div>
                                            <div class="radio-opt-desc">
                                                <span>Individual</span> <br />
                                                <small>An unregistered business e.g freeelancers and sole traders.</small>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 pad0">
                                <div class="project-type col s12 m10">
                                    <div class="checkbox">
                                        <input type="checkbox" id="registered-biz" name="type-of-biz" value="Registered">
                                        <label for="registered-biz" class="radio-div">
                                            <div class="radio-img-icon">
                                                <img src="../../assets/images/registered.svg" alt="registered">
                                            </div>
                                            <div class="radio-opt-desc">
                                                <span>Registered</span> <br />
                                                <small>A registered business with a corporate bank account.</small>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="input-field col s12"></div>

                        <div class="input-field col s12 pad0">
                            <div class="input-field col s12 m6 pad0-left">
                                <select id="country-base">
                                    <option value="1">Nigeria</option>
                                    <option value="2">Ghana</option>
                                    <option value="3">Togo</option>
                                    <option value="4">South Africa</option>
                                    <option value="5">Kenya</option>
                                </select>
                                <label for="country-base">What country are you based in?</label>
                            </div>
                            <div class="input-field col s12 m6 pad0-right">
                                <select id="business-size">
                                    <option value="1">0-10 employees</option>
                                    <option value="2">11-20 employees</option>
                                    <option value="3">21-30 employees</option>
                                    <option value="3">31+ employees</option>
                                </select>
                                <label for="business-size">Business Size</label>
                            </div>
                        </div>
                         <div class="input-field col s12 pad0">
                            <div class="input-field col s12 m6 pad0-left">
                                <select id="are-u-a-dev">
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                <label for="are-u-a-dev">Are you a software developer?</label>
                            </div>
                            <div class="input-field col s12 m6 pad0-right">
                                <input id="referral" type="text" class="inp-field">
                                <label for="referral">Referral Code</label>
                            </div>
                        </div>

                        <div class="button-div col s12 pad0 m8 offset-m2">
                            <button type="submit" class="submit-btn sec-bg">SUBMIT</button>
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
        
        $('.project-type input[type="checkbox"]').change(function(){
            // $(this).addClass('selected');
            if($(this).is(":checked")) {
                $(this).closest('.project-type').addClass("selected");
            } else {
                $(this).closest('.project-type').removeClass("selected");
            }
        });
    }
}
</script>

<style src="../../assets/css/auth.css"></style>

<style scoped src="../../assets/css/register-biz.css"></style>

<style>
.dropdown-content li>a, .dropdown-content li>span{
    color: var(--pry-color) !important;
}
.select-wrapper input.select-dropdown {
    border: 1px solid #D0D7E6 !important;
    border-radius: 10px !important;
    height: 48px !important;
    padding: 0 5px !important;
    width: calc(100% - 10px) !important;
}
.input-field.col>.select-wrapper+label{
    top: -34px;
    font-size: 13px;
    font-weight: 500;
}
.input-field.pad0-right.col>.select-wrapper+label, .input-field.pad0-right.col>label.active{
    left: 0.75rem !important;
}
.input-field.pad0-left.col>.select-wrapper+label {
    left: 0 !important;
}
</style>

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
.auth-wrapper {
    margin-top: 20px;
}

.form-notice {
    font-size: 11px;
    line-height: 1.3;
    background-color: #F8F9FA;
    padding: 9px;
    border-radius: 6px;
    margin-top: -15px;
}
</style>