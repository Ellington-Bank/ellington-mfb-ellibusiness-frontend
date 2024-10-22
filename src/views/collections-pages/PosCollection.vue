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
                            <div class="window-title-div center">
                                <div class="">
                                    <img src="../../assets/images/pos.svg" alt="icon" class="title-icon">
                                </div>
                                <p>
                                    Click the button below to get your POS
                                </p>
                            </div>
                            <div class="window-form">
                                <div class="request-pos-btn-div">
                                    <button class="request-pos-btn sec-bg submit-btn">Request a POS</button>
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
export default {
    name: "PosCollection",
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

img.title-icon {
    width: 70px;
}
.window-form {
    margin-top: 30px;
}
.window-title-div p {
    margin: 20px 0;
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