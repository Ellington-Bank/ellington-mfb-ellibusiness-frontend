<template>
  <div class="main-cont">
      <div class="row">
          <div class="col s12 m3 pad0 side-nav-wrapper">
            <SideNav />
          </div>
          <div class="col s12 m9 pad0 content-side-wrapper">
              
              <div class="content-container">
                    <div class="content-window">
                        <div class="cont">
                            <div class="window-icon right-align">
                                <img src="../../assets/images/ellignton-pay-logo-black.png" alt="transfer" />
                            </div>
                            <div class="window-title-div">
                                <div class="center">
                                    <img src="../../assets/images/ussd.svg" alt="icon" class="title-icon">
                                </div>
                                <p>
                                    Share your USSD dial code details below with your clients to receive payments.
                                </p>
                            </div>
                            <div class="window-form">
                                <div class="copy-paste-div" @click="CopyToClipboard('ussd-details'), CopyToast()">
                                    <div class="cpd-title">USSD Information</div>
                                    <div class="cpd-img-div">
                                        <img src="../../assets/images/copy-paste-icon.svg" alt="copy-paste">
                                    </div>
                                    <div id="ussd-details">
                                        <span class="account-number">*595*100*56789132# </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="secured-notice center">
                            <img src="../../assets/images/padlock.svg" alt="padlock-icon" />
                            <span> Secured by ElligntonPay.com</span>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue"

import M from 'materialize-css'
export default {
    name: "UssdCollection",
    components: {
        SideNav
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
            M.toast({html: 'USSD code copied', displayLength: 2000})
        }
    }
}
</script>

<style scoped src="../../assets/css/transfer.css"></style>

<style scoped>
.content-window {
    width: 46%;
}
h5.window-title {
    font-size: 1.5rem;
    font-weight: 600;
}

img.title-icon {
    width: 70px;
}
.copy-paste-div {
    position: relative;
    background-color: #E2E8FA;
    padding: 25px;
    border-radius: 12px;
    font-size: 13px;
    cursor: pointer;
    transition: all 2s;
}
.copy-paste-div:hover{
    transform: scale(1.05);
}
span.account-number {
    font-size: 18px;
    font-weight: 800;
}
.cpd-title {
    margin-bottom: 5px;
}
.cpd-img-div {
    position: absolute;
    right: 25px;
    top: 25px;
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
/* .center-form-div.container {
    width: 50%;
}
.content-container {
    margin-top: calc(64px + 1.2rem);
}
.content-container > .container{
    min-height: calc(100vh - 64px - 3em);
} */
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