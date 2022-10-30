<template>
  <div class="main-cont">
      <div class="row">
          <div class="col s12 m3 pad0 side-nav-wrapper">
            <SideNav />
          </div>
          <div class="col s12 m9 pad0 content-side-wrapper">
              <TopNav />

              <div class="content-container">
                  <div class="container tab-cont">
                      <div class="col s12 tab-row pad0">
                            <ul class="tabs">
                                <li class="tab col s6">
                                    <a href="#savings-sect" class="active">Savings</a>
                                </li>
                                <li class="tab col s6 disabled">
                                    <a href="#investment-sect">Investments</a>
                                </li>
                            </ul>
                      </div>
                  </div>
                  <div class="container rel">
                      <div id="savings-sect" class="">
                          <div class="savings-grid">
                              <div class="add-savings-card sec-color modal-trigger" data-target="new-savings-plan">
                                  <div class="center">
                                      <b class="material-icons">add</b>
                                      <span>Create a new savings plan</span>
                                  </div>
                              </div>

                              <div class="savings-card">
                                  <div class="calendar-tag">
                                      <img src="../../assets/images/calendar3.svg" alt="calendar" />
                                      <span>18/09/2021</span>
                                  </div>
                                  <div class="savings-title">New Pumping Machine</div>
                                  <div class="savings-money-div flex-div">
                                        <h5 class="savings-amount fg-1">
                                            <sup>₦</sup>
                                            <span>1,000</span>
                                            <small>.00</small>
                                        </h5>
                                        <div class="savings-interests right-align">
                                            <h4 class="">6<small>%</small></h4>
                                            <span>Interest</span> <span>p.a</span>
                                        </div>
                                  </div>
                              </div>

                              <div class="savings-card">
                                  <div class="calendar-tag">
                                      <img src="../../assets/images/calendar3.svg" alt="calendar" />
                                      <span>18/09/2021</span>
                                  </div>
                                  <div class="savings-title">New Pumping Machine</div>
                                  <div class="savings-money-div flex-div">
                                        <h5 class="savings-amount fg-1">
                                            <sup>₦</sup>
                                            <span>1,000</span>
                                            <small>.00</small>
                                        </h5>
                                        <div class="savings-interests right-align">
                                            <h4 class="">6<small>%</small></h4>
                                            <span>Interest</span> <span>p.a</span>
                                        </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div id="investment-sect" class="empty-notice center">
                          <div class="empty-notice-img">
                              <img src="../../assets/images/investment.png" alt="vector image">
                          </div>
                          <div class="empty-notice-txt">
                              <h4>No Investments yet.</h4>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <NewSavingsPlan />
          <ConfirmSavings />
      </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue"
import TopNav from "@/components/TopNav.vue"
import NewSavingsPlan from "@/components/pop-ups/NewSavingsPlan.vue"
import ConfirmSavings from "@/components/pop-ups/ConfirmSavings.vue"

import M from 'materialize-css'
export default {
    name: "SaveInvest",
    components: {
        SideNav,
        TopNav,
        NewSavingsPlan,
        ConfirmSavings
    },
    mounted(){
        M.AutoInit();
    }
}
</script>

<style scoped src="../../assets/css/save-invest.css"></style>

<style>
.tabs .indicator {
    background-color: var(--sec-color) !important;
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
.content-container {
    margin-top: calc(64px + 1.2rem);
}
.content-container > .container.tab-cont {
    border: none;
    width: 100%;
    position: relative;
    height: 60px;
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