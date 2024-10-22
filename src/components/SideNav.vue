<template>
  <div id="side-nav">
      <div class="user-div sn-padded">
          <img src="../assets/images/default-user.svg" alt="user" class="user-img" />
          <span class="user-name">Thrift 9ja</span>
      </div>

      <!-- <hr class="nav-divider" /> -->
      
      <div class="nav-list-div">
          <div>
              <ul class="side-nav-list sn-padded tier-1">
                  <li class="side-nav-item">
                      <router-link to="/" class="active">
                          <img src="../assets/images/getting-started.svg" alt="nav-icon" />
                          <span>Getting Started</span>
                      </router-link>
                  </li>
                  <li class="side-nav-item">
                      <router-link to="/home">
                          <img src="../assets/images/dashboard.svg" alt="nav-icon" />
                          <span>Dashboard</span>
                      </router-link>
                  </li>
                  <li class="side-nav-item">
                      <router-link to="/transactions">
                          <img src="../assets/images/transactions.svg" alt="nav-icon" />
                          <span>Transactions</span>
                      </router-link>
                  </li>
              </ul>

              <!-- <hr class="nav-divider" /> -->

              <ul class="side-nav-list sn-padded tier-2">
                  <li class="side-nav-item">
                      <router-link to="/wallet">
                          <img src="../assets/images/wallet.svg" alt="nav-icon" />
                          <span>Wallet & Card</span>
                      </router-link>
                  </li>
                  <li class="side-nav-item">
                      <router-link to="/invoice">
                          <img src="../assets/images/invoicing.svg" alt="nav-icon" />
                          <span>Invoicing</span>
                      </router-link>
                  </li>
                  <li class="side-nav-item">
                      <router-link to="/payroll">
                          <img src="../assets/images/payroll.svg" alt="nav-icon" />
                          <span>Payroll</span>
                      </router-link>
                  </li>
                  <li class="side-nav-item">
                      <router-link to="/loans">
                          <img src="../assets/images/loan-icon.svg" alt="nav-icon" />
                          <span>Loan</span>
                      </router-link>
                  </li>
                  <li class="side-nav-item">
                      <router-link to="/collections">
                          <img src="../assets/images/collections.svg" alt="nav-icon" />
                          <span>Collections</span>
                      </router-link>
                  </li>
                  <li class="side-nav-item">
                      <router-link to="/save-and-invest">
                          <img src="../assets/images/save-invest.svg" alt="nav-icon" />
                          <span>Save & Invest</span>
                      </router-link>
                  </li>
              </ul>

              <!-- <hr class="nav-divider" /> -->

              <ul class="side-nav-list sn-padded tier-3">
                  <li class="side-nav-item">
                      <router-link to="/roles-and-settings">
                          <img src="../assets/images/settings.svg" alt="nav-icon" />
                          <span>Roles & Settings</span>
                      </router-link>
                  </li>
                  <li class="side-nav-item">
                      <router-link to="/support">
                          <img src="../assets/images/support.svg" alt="nav-icon" />
                          <span>Help & Support</span>
                      </router-link>
                  </li>
              </ul>

              <div class="side-nav-footer">
                  <img src="../assets/images/ellignton-pay-logo-white.png" alt="ElligntonPay">
                  <span>© ElligntonPay</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SideNav'
}
</script>

<style scoped src="../assets/css/sidenav.css"></style>
<style scoped></style>
