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
                            <span>Business Information</span>
                        </h4>
                    </div>
                    <div class="center-form-div container">
                      <form class="s12 pad0" action="/">
                        <div class="input-field">
                          <input id="biz-purpose" type="text" class="inp-field">
                          <label for="biz-purpose">What do you do at Thrift9ja?</label>
                          <small class="">
                              For example: Soles n Shades sells different types of shoes, 
                              slippers, sandals and sun glasses on instagram and our website.
                          </small>
                        </div>
                        <div class="input-field m6 mag0">
                          <input id="biz-email" type="email" class="inp-field">
                          <label for="biz-email">Business Email</label>
                        </div>
                        <div class="input-field">
                          <input id="biz-phone" type="tel" class="inp-field">
                          <label for="biz-phone">Business Phone number</label>
                        </div>
                        <div class="input-field">
                          <input id="biz-address" type="text" class="inp-field">
                          <label for="biz-address">Business Address</label>
                        </div>
                        <div class="grid-split-2 input-field">
                          <div class="input-field m6 mag0">
                            <select id="biz-state">
                                <option value="1" selected disabled>Select State</option>
                                <option value="2">Lagos</option>
                                <option value="3">Ogun</option>
                                <option value="4">Anambra</option>
                                <option value="5">Abuja</option>
                            </select>
                            <label for="biz-state">State</label>
                          </div>
                          <div class="input-field m6 mag0">
                            <input id="biz-city" type="text" class="inp-field">
                            <label for="biz-city">City</label>
                          </div>
                        </div>
                        <div class="input-field">
                          <input id="cac-num" type="text" class="inp-field">
                          <label for="cac-num">Business CAC Number</label>
                        </div>
                        <div class="input-field">
                          <select id="biz-category">
                                <option value="1" selected disabled>Select Category</option>
                                <option value="2">Agriculture</option>
                                <option value="3">Information and Communication Technology</option>
                                <option value="4">Retail</option>
                                <option value="5">Branding and Advertising</option>
                                <option value="6">Marketing</option>
                          </select>
                          <label for="biz-category">Business Category</label>
                        </div>
                        <div class="file-field input-field">
                          <label for="" class="active">Business Logo (optional)</label>
                          <div class="fpw">
                            <div class="btn">
                              <span>
                                  <img src="../../assets/images/select-file.png" alt="select-file" class="select-file-img">
                              </span>
                              <input type="file">
                            </div>
                            <div class="file-path-wrapper hide">
                              <input class="file-path validate inp-field" type="text">
                            </div>
                            <small class="pry-color file-field-desc">
                                We use your logo on payment pages to increase the credibility for your 
                                customers. Please upload a square image of your logo not larger than 0MB.
                            </small>
                          </div>
                        </div>
                        <div class="input-field">
                          <input id="fb-biz-page" type="text" class="inp-field">
                          <label for="fb-biz-page">Facebook Business Page Link (optional)</label>
                        </div>
                        <div class="input-field">
                          <input id="ig-biz-page" type="text" class="inp-field">
                          <label for="ig-biz-page">Instagram Business Page Link (optional)</label>
                        </div>
                        <div class="input-field">
                          <input id="tw-biz-page" type="text" class="inp-field">
                          <label for="tw-biz-page">Twitter Business Page Link (optional)</label>
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
    name: "BankInfo",
    components: {
        SideNav,
        TopNav,
        ConfirmPopup
    },
    mounted() {
      M.AutoInit();
      var elemsDP = document.querySelectorAll('.datepicker');
      var elemsModal = document.querySelectorAll('.modal');
      var elemsSelect = document.querySelectorAll('select');
      M.Datepicker.init(elemsDP);
      M.Modal.init(elemsModal);
      M.Select.init(elemsSelect);
    }
}
</script>

<style scoped src="../../assets/css/form-styles.css"></style>

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
    color: rgba(0, 0, 0, 0.6);
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

label[for="biz-state"], label[for="biz-category"] {
    top: -34px;
    font-size: 13px;
    font-weight: 500;
    left: 0 !important;
}
.hide{
    display: none;
}
.file-field.input-field {
    margin: 32px 0;
}
.fpw {
    width: 100%;
    height: auto;
    padding: 0;
    display: flex;
    border: none;
}
.file-field .fpw .btn {
    background-color: transparent;
    float: left;
    height: auto;
    line-height: 0;
    padding: 0;
    width: 80px;
    border-radius: 0;
    box-shadow: none;
}
small.pry-color.file-field-desc {
    position: relative;
    /* top: -20px; */
    padding: 10px;
    padding-top: 4%;
}
img.select-file-img {
    width: 100%;
    margin-right: 10px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
}
</style>