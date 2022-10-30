<template>
  <div class="main-cont">
      <div class="row">
          <div class="col s12 m3 pad0 side-nav-wrapper">
            <SideNav />
          </div>
          <div class="col s12 m9 pad0 content-side-wrapper">
              <TopNav />

              <div class="content-container">
                    <div class="welcome-intro">
                        <h4 class="modal-trigger" data-target="session-expired">
                            <b class="greeting">Good Morning, </b>
                            <span class="first_name">Eniola </span>
                            <img src="../../assets/images/sun-icon.svg" alt="sun-icon">
                        </h4>
                    </div>
                    <div class="container h-container-1">
                        <div class="sub-nav">
                            <div class="currency-tab fg-1">
                                <ul class="currency-list">
                                    <li>
                                        <a href="#" class="active-currency">NGN</a>
                                    </li>
                                    <li>
                                        <a href="#">GHC</a>
                                    </li>
                                    <li>
                                        <a href="#">EUR</a>
                                    </li>
                                    <li>
                                        <a href="#">GDP</a>
                                    </li>
                                    <li>
                                        <a href="#">RWF</a>
                                    </li>
                                    <li>
                                        <a href="#">UGX</a>
                                    </li>
                                    <li>
                                        <a href="#">TZX</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="center tp-balance">
                                <button class="sec-color modal-trigger" data-target="top-up"> 
                                    <i class="material-icons">add</i> Top up balance
                                </button>
                            </div>
                            <div class="center tp-range">
                                <!-- Dropdown Trigger -->
                                <button class='dropdown-trigger' data-target='dropdown1'>
                                    This Year <i class="material-icons">keyboard_arrow_down</i>
                                </button>

                                <!-- Dropdown Structure -->
                                <ul id='dropdown1' class='dropdown-content'>
                                    <li><a href="#!">This Month</a></li>
                                    <li><a href="#!">This Week</a></li>
                                    <li><a href="#!">Today</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container h-container-2">
                        <div class="account-detials-grid">
                            <div class="account-details-item">
                                <div class="adi-heading">AVAILABLE BALANCE</div>
                                <div class="adi-amount">NGN 120,000.00</div>
                            </div>
                            <div class="account-details-item">
                                <div class="adi-heading">BANK ACCOUNT</div>
                                <div class="adi-acct-num" id="adi-acct-num">20749289341</div>
                                <div class="adi-bank-name">BLUEWHALES MICROFINANCE BANK</div>
                                <div class="copy-paste-icon-div" @click="CopyToClipboard('adi-acct-num')">
                                    <img src="../../assets/images/copy-paste-icon2.svg" alt="copy-paste-icon">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container h-container-3">
                        <div class="revenue-grid">
                            <div class="revenue-graph">
                                <div class="rg-header">
                                    <div class="rg-title fg-1"> 
                                        <h5>Reveune History</h5>
                                        <span>Total of balance </span>
                                    </div>
                                    <div class="rg-buttons">
                                        <button class="rg-update-btn update-active" @click="dailyUpdate">DAILY</button>
                                        <button class="rg-update-btn" @click="weeklyUpdate">WEEKLY</button>
                                        <button class="rg-update-btn" @click="monthlyUpdate">
                                            <img src="../../assets/images/calendar2.svg" alt="calendar-icon" class="cal-green">
                                            <img src="../../assets/images/calendar-3.svg" alt="calendar-icon" class="cal-white">
                                            April, 2021
                                        </button>
                                    </div>
                                </div>
                                <!--=== Graph gotten from : https://chartkick.com/vue ===-->
                                <area-chart
                                    :data="chartData"
                                    :colors="['#ADC959', '#022c81']"
                                ></area-chart>
                            </div>
                            <div class="revenue-blocks">
                                <div class="r-block">
                                    <div class="r-tile">REVENUE</div>
                                    <h4>₦182.271</h4>
                                    <div class="success-color gain-loss">
                                        <span>+18.01%</span>
                                        <i class="material-icons">trending_up</i>
                                    </div>
                                </div>
                                <div class="r-block">
                                    <div class="r-tile">EXPENSES</div>
                                    <h4>₦181.1</h4>
                                    <div class="fail-color gain-loss">
                                        <span>+18.01%</span>
                                        <i class="material-icons">trending_down</i>
                                    </div>
                                </div>
                                <div class="r-block">
                                    <div class="r-tile">LOAN PORTFOLIO</div>
                                    <h4>₦50,000,000</h4>
                                    <div class="fail-color gain-loss">
                                        <span>REPAYMENT: N120,000.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </div>
      <div class="modal-wrapper">
        <SessionExpired/>
        <TopUp/>
      </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue"
import TopNav from "@/components/TopNav.vue"
import SessionExpired from "@/components/pop-ups/SessionExpired.vue"
import TopUp from "@/components/pop-ups/TopUp.vue"

import M from 'materialize-css'
import $ from 'jquery'

export default {
    name: "Payroll",
    components: {
        SideNav,
        TopNav,
        SessionExpired,
        TopUp
    },
    data() {
        return {
            chartData: {
                "18/04": 1900,
                "19/04": 1000,
                "20/04": 180,
                "21/04": 1200,
                "22/04": 200,
                "23/04": 1500,
            },
        };
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
            
            M.toast({html: 'Account number copied', displayLength: 2000})
        },

        dailyUpdate() {
            this.chartData = {
                "18/04": 1000,
                "19/04": 900,
                "20/04": 800,
                "21/04": 700,
                "22/04": 600,
                "23/04": 500,
            };
        },
        weeklyUpdate() {
            this.chartData = {
                "18/04": 2000,
                "19/04": 800,
                "20/04": 1200,
                "21/04": 1700,
                "22/04": 800,
                "23/04": 900,
            };
        },
        monthlyUpdate() {
            this.chartData = {
                "18/04": 1900,
                "19/04": 1000,
                "20/04": 180,
                "21/04": 1200,
                "22/04": 200,
                "23/04": 1500,
            };
        },
    },
    mounted() {
        var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemsDropdown);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

        $('button.rg-update-btn').click(function(){
            $('button.rg-update-btn').removeClass('update-active')
            $(this).addClass('update-active')
        })
    }
}
</script>

<style scoped src="../../assets/css/home.css"></style>

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

<style>
div#chart-1 {
    margin-top: 30px;
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