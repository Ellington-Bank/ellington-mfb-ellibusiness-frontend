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
                             <span>Welcome to your Dashboard!</span>
                             <img src="../../assets/images/star-emoji.svg" alt="star-emoji" />
                          </h4>
                          <p>
                              Your account is currently in <span class="red-text">test mode</span>, so 
                              there are a few more things to do before you can go live and start 
                              receiving payments. Follow the steps below to get activated.
                          </p>
                      </div>

                      <div class="task-table">
                          <div class="task-row">
                              <div class="task-icon">
                                  <img src="../../assets/images/email-step.svg" alt="task-icon">
                                  <!--=== Note: The commented image tag below should be what will be used for completed tasks. ===-->
                                  <!-- <img src="../../assets/images/check.svg" alt="task-icon" class="task-complete-icon"> -->
                              </div>
                              <div class="task-desc">
                                  <h5>Verify your email address</h5>
                                  <p>
                                      Click on the verification link we sent to your email address. 
                                      You can resend the link if you didn’t get it.
                                  </p>
                              </div>
                              <div class="task-progress">
                                  <div>
                                      <button class="sec-bg resend-link-btn">Resend link</button>
                                  </div>
                              </div>
                          </div>

                          <div class="task-row">
                              <div class="task-icon">
                                  <img src="../../assets/images/profile-step.svg" alt="task-icon">
                                  <!--=== Note: The commented image tag below should be what will be used for completed tasks. ===-->
                                  <!-- <img src="../../assets/images/check.svg" alt="task-icon" class="task-complete-icon"> -->
                              </div>
                              <div class="task-desc">
                                  <router-link to="/personal-info" tag="h5">Personal information</router-link>
                                  <p>
                                      Please provide a few details to help us verify your identity.
                                  </p>
                              </div>
                              <div class="task-progress">
                                  <div class="progress-status center">
                                      <!--=== Note: When the task is completed, add the class "sec-color" to make the text turn green  ===-->
                                      <span class="sec-color">100%</span>
                                  </div>
                              </div>
                          </div>

                          <div class="task-row">
                              <div class="task-icon">
                                  <img src="../../assets/images/business-step.svg" alt="task-icon">
                                  <!--=== Note: The commented image tag below should be what will be used for completed tasks. ===-->
                                  <!-- <img src="../../assets/images/check.svg" alt="task-icon" class="task-complete-icon"> -->
                              </div>
                              <div class="task-desc">
                                  <router-link to="/bank-info" tag="h5">Business information</router-link>
                                  <p>
                                      Please provide a few details about your business.
                                  </p>
                              </div>
                              <div class="task-progress">
                                  <div class="progress-status center">
                                      <!--=== Note: When the task is completed, add the class "sec-color" to make the text turn green  ===-->
                                      <span class="">0%</span>
                                  </div>
                              </div>
                          </div>

                          <div class="task-row">
                              <div class="task-icon">
                                  <img src="../../assets/images/bank-step.svg" alt="task-icon">
                                  <!--=== Note: The commented image tag below should be what will be used for completed tasks. ===-->
                                  <!-- <img src="../../assets/images/check.svg" alt="task-icon" class="task-complete-icon"> -->
                              </div>
                              <div class="task-desc">
                                  <router-link to="/bank-details" tag="h5">Bank details</router-link>
                                  <p>
                                      Please provide bank details of you preferred settlement account.
                                  </p>
                              </div>
                              <div class="task-progress">
                                  <div class="progress-status center">
                                      <!--=== Note: When the task is completed, add the class "sec-color" to make the text turn green  ===-->
                                      <span class="">0%</span>
                                  </div>
                              </div>
                          </div>

                          <div class="task-row">
                              <div class="task-icon">
                                  <img src="../../assets/images/tour-step.svg" alt="task-icon">
                                  <!--=== Note: The commented image tag below should be what will be used for completed tasks. ===-->
                                  <!-- <img src="../../assets/images/check.svg" alt="task-icon" class="task-complete-icon"> -->
                              </div>
                              <div class="task-desc">
                                  <router-link to="/" tag="h5">Dashboard tour (optional)</router-link>
                                  <p>
                                      Learn about the awesome things you can do on your new dashbaord.
                                  </p>
                              </div>
                              <div class="task-progress">
                                  <div class="progress-status center">
                                      <!--=== Note: When the task is completed, add the class "sec-color" to make the text turn green  ===-->
                                      <span class="">0%</span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="go-live-div center">
                          <!--=== Note: Remove the "disabled" attribute when tasks are completed ===-->
                          <button class="gol-live-btn" disabled>Request to go live</button>
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
export default {
    name: "Welcome",
    components: {
        SideNav,
        TopNav
    }
}
</script>

<style scoped>
.main-cont{
    height: 100vh;
}
.main-cont > .row{
    width: 100%;
    margin: 0;
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
</style>