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
                                <span>Bank Details</span>
                            </h4>
                            <p>This is the primary bank account we send your settlements to. </p>
                        </div>
                        <div class="container copy-paste-div" @click="CopyToClipboard('bank-details'), CopyToast()">
                            <div class="cpd-title">Account Information</div>
                            <div class="cpd-img-div">
                                <img src="../../assets/images/copy-paste-icon.svg" alt="copy-paste">
                            </div>
                            <div id="bank-details">
                                <span class="account-number">3710063986 / </span>
                                <span class="bank-name">Bluewhales Microfinance Bank</span>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue"
import TopNav from "@/components/TopNav.vue"

import M from 'materialize-css'
export default {
    name: "BankDetails",
    components: {
        SideNav,
        TopNav
    },
    methods: {
        CopyToClipboard: function (containerid) {
            // Create a new textarea element and give it id='temp_element'
            const textarea = document.createElement('textarea')
            textarea.id = 'temp_element'
            // Optional step to make less noise on the page, if any!
            textarea.style.height = 0
            // Now append it to your page somewhere, I chose <body>
            document.body.appendChild(textarea)
            // Give our textarea a value of whatever inside the div of id=containerid
            textarea.value = document.getElementById(containerid).innerText
            // Now copy whatever inside the textarea to clipboard
            const selector = document.querySelector('#temp_element')
            selector.select()
            document.execCommand('copy')
            // Remove the textarea
            document.body.removeChild(textarea)
        },
        CopyToast: function() {
            M.toast({html: 'Account info copied', displayLength: 2000})
        }
    }
}
</script>

<style scoped>
.welcome-intro.center {
    margin-top: 7%;
}
.container.copy-paste-div {
    position: relative;
    background-color: #E2E8FA;
    width: 50%;
    padding: 30px;
    border-radius: 12px;
    font-size: 14px;
    cursor: pointer;
    margin-top: 50px;
    transition: all 2s;
}
.copy-paste-div:hover{
    transform: scale(1.05);
}
span.account-number {
    font-size: 21px;
    font-weight: 800;
}
.cpd-title {
    margin-bottom: 5px;
}
.cpd-img-div {
    position: absolute;
    right: 30px;
    top: 30px;
}
.cpd-img-div img {
    width: 21px;
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
    min-height: calc(100vh - 64px - 3em);
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