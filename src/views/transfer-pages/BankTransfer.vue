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
                                <h5 class="window-title">Transfer to a Bank Account</h5>
                            </div>
                            <div class="window-form">
                                <form action="#" id="bank-transfer-form">
                                    <div class="input-field">
                                        <input id="amount" type="number" class="inp-field">
                                        <label for="amount">Amount</label>
                                    </div>
                                    <div class="input-field">
                                        <input id="account-num" type="tel" class="inp-field">
                                        <label for="account-num">Receipient Account Number</label>
                                    </div>
                                    <div class="input-field">
                                        <input type="text" id="personalized-note" class="inp-field">
                                        <label for="personalized-note">Personalized Note</label>
                                    </div>
                                    <div class="input-field mag0">
                                        <p class="mag0">
                                            <label>
                                                <input type="checkbox" class="filled-in" />
                                                <span>Add to Beneficiary</span>
                                            </label>
                                        </p>
                                    </div>
                                    <div class="button-div input-field">
                                        <button type="submit" class="submit-btn sec-bg modal-trigger" data-target="transfer-popup">Transfer</button>
                                    </div>
                                </form>
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
      <div class="modal-wrapper">
        <TransferPopup />
      </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue"
import TransferPopup from "@/components/pop-ups/TransferPopup.vue"

import M from 'materialize-css';
import $ from 'jquery'
export default {
    name: "BankTransfer",
    components: {
        SideNav,
        TransferPopup
    },
    mounted() {
      var elemsModal = document.querySelectorAll('.modal');
      M.Modal.init(elemsModal);

      $('#bank-transfer-form').submit(function(){
          $(this).preventDefault();
      })
    }
}
</script>

<style scoped src="../../assets/css/transfer.css"></style>

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