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
                                <img src="../../assets/images/airopay-icon.svg" alt="transfer" />
                            </div>
                            <div class="window-title-div">
                                <div class="center">
                                    <img src="../../assets/images/bank.svg" alt="icon" class="title-icon">
                                </div>
                                <p>
                                    Share your account details with your clients to receive payments.
                                </p>
                            </div>
                            <div class="window-form">
                                <div class="copy-paste-div" @click="CopyToClipboard('bank-details'), CopyToast()">
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

                        <div class="secured-notice center">
                            <img src="../../assets/images/padlock.svg" alt="padlock-icon" />
                            <span> Secured by Airopay.com</span>
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
    name: "BankTransferCollection",
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
            M.toast({html: 'Account info copied', displayLength: 2000})
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