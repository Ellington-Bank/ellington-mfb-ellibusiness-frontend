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
                                <h5 class="window-title">HOW DO YOU WANT TO RECEIVE PAYMENTS?</h5>
                            </div>
                            <div class="window-form">
                                <router-link to="/bank-transfer-collection" tag="div" class="flex-div option-div">
                                    <div class="option-icon-div">
                                        <img src="../../assets/images/bank.svg" alt="icon" class="option-icon" />
                                    </div>
                                    <div class="option-desc-div">
                                        <span>By Bank Transfers</span>
                                    </div>
                                    <div class="next-icon-div">
                                        <img src="../../assets/images/next-arr.svg" alt="icon" class="arr-icon" />
                                    </div>
                                </router-link>

                                <router-link to="/pos-collection" tag="div" class="flex-div option-div">
                                    <div class="option-icon-div">
                                        <img src="../../assets/images/pos.svg" alt="icon" class="option-icon" />
                                    </div>
                                    <div class="option-desc-div">
                                        <span>By POS</span>
                                    </div>
                                    <div class="next-icon-div">
                                        <img src="../../assets/images/next-arr.svg" alt="icon" class="arr-icon" />
                                    </div>
                                </router-link>

                                <router-link to="/ussd-collection" tag="div" class="flex-div option-div">
                                    <div class="option-icon-div">
                                        <img src="../../assets/images/ussd.svg" alt="icon" class="option-icon" />
                                    </div>
                                    <div class="option-desc-div">
                                        <span>By USSD</span>
                                    </div>
                                    <div class="next-icon-div">
                                        <img src="../../assets/images/next-arr.svg" alt="icon" class="arr-icon" />
                                    </div>
                                </router-link>

                                <router-link to="/qrcode-collection" tag="div" class="flex-div option-div">
                                    <div class="option-icon-div">
                                        <img src="../../assets/images/qr-code.svg" alt="icon" class="option-icon" />
                                    </div>
                                    <div class="option-desc-div">
                                        <span>By QR Code</span>
                                    </div>
                                    <div class="next-icon-div">
                                        <img src="../../assets/images/next-arr.svg" alt="icon" class="arr-icon" />
                                    </div>
                                </router-link>
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
export default {
    name: "Collections",
    components: {
        SideNav
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