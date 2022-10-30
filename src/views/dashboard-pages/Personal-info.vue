<template>
  <div class="main-cont">
      <div class="row">
          <div class="col s12 m3 pad0 side-nav-wrapper">
            <SideNav />
          </div>
          <div class="col s12 m9 pad0 content-side-wrapper">
              <TopNav />

              <div class="content-container">
                  <div class="container">
                    <div class="welcome-intro center">
                        <h4>
                            <span>Personal Information</span>
                        </h4>
                    </div>
                    <div class="center-form-div container">
                      <form class="s12 pad0" action="/">
                        <div class="input-field">
                          <input id="bvn" type="tel" class="inp-field">
                          <label for="bvn">BVN</label>
                          <small class="sec-color">To get your BVN dial *565*0# on your registered mobile number.</small>
                        </div>
                        <div class="grid-split-2 input-field">
                          <div class="input-field m6 mag0">
                            <input id="first_name" type="text" class="inp-field">
                            <label for="first_name">First Name</label>
                          </div>
                          <div class="input-field m6 mag0">
                            <input id="last_name" type="text" class="inp-field">
                            <label for="last_name">Last Name</label>
                          </div>
                        </div>
                        <div class="input-field">
                          <input id="phone" type="tel" class="inp-field">
                          <label for="phone">Phone Number</label>
                        </div>
                        <div class="input-field">
                          <input id="dob" type="text" class="datepicker inp-field">
                          <label for="dob">Date of Birth</label>
                        </div>
                        <div class="file-field input-field">
                          <label for="" class="active">Upload ID</label>
                          <div class="fpw">
                            <div class="btn">
                              <span>Browse</span>
                              <input type="file">
                            </div>
                            <div class="file-path-wrapper">
                              <input class="file-path validate inp-field" type="text">
                            </div>
                          </div>
                          <small class="pry-color file-field-desc">
                            Please upload a valid means of identification: 
                            the file must be an image (.jpg, .png etc) less that 0MB.
                          </small>
                        </div>
                        <div class="form-btn-wrapper">
                          <div class="grid-split-2">
                            <button class="sec-btn cancel-btn modal-trigger" data-target="confirm-cancel">Cancel</button>
                            <button type="submit" class="submit-btn sec-bg">Save</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal-wrapper">
        <ConfirmPopup />
      </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue"
import TopNav from "@/components/TopNav.vue"
import ConfirmPopup from '@/components/pop-ups/ConfirmPopup.vue';

import M from 'materialize-css';
export default {
    name: "PersonalInfo",
    components: {
        SideNav,
        TopNav,
        ConfirmPopup
    },
    mounted() {
      var elemsDP = document.querySelectorAll('.datepicker');
      var elemsModal = document.querySelectorAll('.modal');
      M.Datepicker.init(elemsDP);
      M.Modal.init(elemsModal);
    }
}
</script>

<style scoped src="../../assets/css/form-styles.css"></style>

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