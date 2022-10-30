<template>
  <div class="main-cont">
      <div class="row">
          <div class="col s12 m3 pad0 side-nav-wrapper">
            <SideNav />
          </div>
          <div class="col s12 m9 pad0 content-side-wrapper">
              <TopNav />

              <div class="content-container">
                    <div class="welcome-intro">
                        <h4>
                            <span>Loans </span>
                        </h4>
                        <p>Apply for Loan here </p>
                    </div>
                    <div class="container">
                        <div class="loan-applicant flex-div">
                            <div class="loan-user-img">
                                <img src="../../assets/images/user.svg" alt="user" class="user-pic">
                            </div>
                            <div class="loan-user-details">
                                <b class="loan-user-name">Godson Imule</b> <br>
                                <span class="loan-user-bvn">BVN: 2269348902</span>
                            </div>
                        </div>
                        <form class="loan-form-wrapper" id="loan-form">
                            <div class="file-field input-field">
                                <label for="" class="active">
                                    UPLOAD SUPPORTING DOCUMENTS (PDF) 
                                    <small class="sec-color pointer">SEE REQUIRED DOCUMENTS*</small>
                                </label>
                                <div class="fpw">
                                    <div class="btn">
                                        <span>
                                            <i class="material-icons">cloud_upload</i>
                                            Browse
                                        </span>
                                        <input type="file">
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate inp-field" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="grid-split-2 input-field">
                                <div class="input-field m6 mag0">
                                    <input id="how-much" type="text" class="inp-field">
                                    <label for="how-much">HOW MUCH DO YOU WANT?</label>
                                </div>
                                <div class="input-field m6 mag0">
                                    <input id="tenor" type="number" class="inp-field" max="24">
                                    <label for="tenor">TENOR (MONTHS)</label>
                                </div>
                            </div>

                            <div class="form-btn-wrapper">
                                <button type="submit" class="submit-btn sec-bg modal-trigger" data-target="loan-popup">SUBMIT</button>
                            </div>
                        </form>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal-wrapper">
        <LoanPopup />
      </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue"
import TopNav from "@/components/TopNav.vue"
import LoanPopup from '@/components/pop-ups/LoanPopup.vue';

import M from 'materialize-css';
import $ from 'jquery';
export default {
    name: "Loans",
    components: {
        SideNav,
        TopNav,
        LoanPopup
    },
    mounted() {
      var elemsModal = document.querySelectorAll('.modal');
      M.Modal.init(elemsModal);

      $('#loan-form').submit(function(){
          $(this).preventDefault();
      })
    }
}
</script>

<style scoped src="../../assets/css/form-styles.css"></style>

<style scoped>
.welcome-intro {
    width: 95%;
    margin: auto;
    margin-bottom: 20px;
}
.welcome-intro h4 {
    margin-bottom: 0;
}
.welcome-intro p {
    margin-top: 5px;
    opacity: 0.8;
}
.loan-applicant.flex-div {
    padding: 15px 0;
}
.loan-user-img {
    margin-right: 10px;
}
img.user-pic {
    position: relative;
    top: 3px;
}
span.loan-user-bvn {
    opacity: 0.8;
    font-size: 14px;
}
form.loan-form-wrapper {
    margin: 60px 0 20px;
}
.input-field {
    margin: 45px 0;
}
.form-btn-wrapper button.submit-btn.sec-bg {
    width: 40%;
    margin-left: 30%;
}
i.material-icons {
    position: relative;
    line-height: 1;
    top: 5px;
}
</style>

<style scoped>
.main-cont{
    height: 100vh;
}
.main-cont > .row{
    width: 100%;
    margin: 0;
}
.center-form-div.container {
    width: 50%;
}
.content-container {
    margin-top: calc(64px + 1.2rem);
}
.content-container > .container{
    min-height: calc(100vh - 200px);
}
.side-nav-wrapper.col.m3 {
    width: 20% !important;
    position: relative;
}
.content-side-wrapper.col.m9 {
    width: 80% !important;
    position: relative;
    height: 100vh;
    overflow: auto;
}
.input-field span {
  font-size: 14px;
}
</style>