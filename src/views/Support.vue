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
                                <img src="../assets/images/airopay-icon.svg" alt="transfer" />
                            </div>
                            <div class="window-title-div">
                                <h5 class="window-title">How can we help?</h5>
                                <p>Reach out to our support team and we’ll get back to you shortly</p>
                            </div>
                            <div class="window-form">
                                <form action="#">
                                    <div class="input-field">
                                        <input id="support-user-name" type="text" class="inp-field">
                                        <label for="support-user-name">Name</label>
                                    </div>
                                    <div class="input-field">
                                        <input id="support-user-email" type="email" class="inp-field validate">
                                        <label for="support-user-email">Email</label>
                                    </div>
                                    <div class="input-field">
                                        <textarea id="support-message" class="materialize-textarea inp-field"></textarea>
                                        <label for="support-message">Message / Request</label>
                                    </div>
                                    <div class="file-field input-field">
                                        <label for="" class="active">
                                            Upload relevant document / Screenshot
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
                                    <div class="submit-btn-div">
                                        <button type="submit" class="submit-btn sec-bg">SEND</button>
                                    </div>
                                </form>
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
export default {
    name: "Support",
    components: {
        SideNav
    }
}
</script>

<style scoped src="../assets/css/form-styles.css"></style>
<style scoped src="../assets/css/support.css"></style>

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