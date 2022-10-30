<template>
  <div class="main-cont">
      <div class="row">
          <div class="col s12 m3 pad0 side-nav-wrapper">
            <SideNav />
          </div>
          <div class="col s12 m9 pad0 content-side-wrapper">
              <TopNav />

              <div class="content-container">
                    <div class="welcome-intro flex-div">
                        <div class="fg-1">
                            <h4>
                                <span>Payroll </span>
                            </h4>
                            <p>See your payroll data</p>
                        </div>
                        <router-link to="/request-card" tag="button" class="submit-btn sec-bg">Download Report</router-link>
                    </div>
                    <div class="container b-container">
                        <div class="payroll-grid">
                            <div class="payroll-grid-item payroll-card-block">
                                <div class="payroll-balance-card">
                                    <div class="pbc1">
                                        <div class="payroll-acct-num">Account Number: 902839829002</div>
                                        <h4 class="payroll-balance">₦528,182</h4>
                                    </div>
                                    <div class="payroll-card-icon">
                                        <img src="../../assets/images/payroll-card-icon.svg" alt="icon">
                                    </div>
                                </div>
                            </div>

                            <div class="payroll-grid-item payroll-list-block">
                                <div class="center pli-title">Payroll History</div>
                                <div class="payroll-list-item">
                                    <img src="../../assets/images/history-circle.svg" alt="history">
                                    <div>JUNE 2021</div>
                                </div>
                                <div class="payroll-list-item">
                                    <img src="../../assets/images/history-circle.svg" alt="history">
                                    <div>MAY 2021</div>
                                </div>
                                <div class="payroll-list-item">
                                    <img src="../../assets/images/history-circle.svg" alt="history">
                                    <div>APRIL 2021</div>
                                </div>
                                <div class="payroll-list-item">
                                    <img src="../../assets/images/history-circle.svg" alt="history">
                                    <div>MARCH 2021</div>
                                </div>

                                <div class="payroll-load-more-div">
                                    <button class="payroll-load-more-btn submit-btn sec-bg">Load More ...</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--=== Remove the "hide" class to view empty payroll table ===-->

                    <div class="container pt-container hide">
                        <PayrollTable1/>

                        <div id="payroll-table-loader">
                            <img src="../../assets/images/loader-1.png" alt="loader" class="loader-img">
                        </div>
                    </div>

                    <!--=== Add the "hide" class here when viewing the empty table ===-->
                    <div class="container pt-container hid*e">
                        <PayrollTable2/>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue"
import TopNav from "@/components/TopNav.vue"
import PayrollTable1 from "@/components/PayrollTable(empty).vue"
import PayrollTable2 from "@/components/PayrollTable(filled).vue"

export default {
    name: "Payroll",
    components: {
        SideNav,
        TopNav,
        PayrollTable1,
        PayrollTable2
    },
    mounted() {}
}
</script>

<style scoped src="../../assets/css/payroll.css"></style>

<style scoped>
.welcome-intro {
    width: 95%;
    margin: auto;
    margin-bottom: 20px;
}
.welcome-intro h4 {
    margin-bottom: 0;
}
.welcome-intro p {
    margin-top: 5px;
    opacity: 0.8;
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
</style>