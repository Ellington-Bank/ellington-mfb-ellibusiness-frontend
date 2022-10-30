<template>
  <div class="content-container">
      <form class="container rel">
        <div class="sect-title-header flex-div col s12">
          <h5 class="sect-title fg-1">Preferences</h5>
          <div>
            <button class="sec-bg submit-btn">SAVE</button>
          </div>
        </div>

        <div class="prefrences-wrapper col s12">
          <div class="col s12 pad0 preference-block">
            <div class="col s12 m6 question-side">
              <b>Who should pay the transaction fees?</b>
            </div>
            <div class="col s12 m6 options-side">
              <label>
                <input name="tranx-fees" type="radio" class="with-gap" />
                <span>Make customers pay for the transaction fee</span>
              </label>
              <label>
                <input name="tranx-fees" type="radio" class="with-gap" checked />
                <span>Charge me for the transaction fee</span>
              </label>
            </div>
          </div>
          <div class="col s12 pad0 preference-block">
            <div class="col s12 m6 question-side">
              <b>Transaction Emails</b>
            </div>
            <div class="col s12 m6 options-side">
              <label>
                <input name="tranx-emails" type="checkbox" class="filled-in" checked />
                <span>Email me for every transaction</span>
              </label>
            </div>
          </div>
          <div class="col s12 pad0 preference-block">
            <div class="col s12 m6 question-side">
              <b>Transaction Emails (Customers)</b>
            </div>
            <div class="col s12 m6 options-side">
              <label>
                <input name="customers-tranx-emails" type="checkbox" class="filled-in" checked />
                <span>Email customers for every transaction</span>
              </label>
            </div>
          </div>
          <div class="col s12 pad0 preference-block">
            <div class="col s12 m6 question-side">
              <b>Send notification Emails to other users</b>
            </div>
            <div class="col s12 m6 options-side">
              <label>
                <input name="notify-email" type="radio" class="with-gap" checked />
                <span>Send to the business email address only</span>
              </label>
              <label>
                <input name="notify-email" type="radio" class="with-gap" />
                <span>Send to all dashboard users</span>
              </label>
              <label>
                <input name="notify-email" type="radio" class="with-gap" />
                <span>Send to specific users only</span>
              </label>
            </div>
          </div>
          <div class="col s12 pad0 preference-block">
            <div class="col s12 m6 question-side">
              <b>Two Factor Authentication for Transfers</b>
            </div>
            <div class="col s12 m6 options-side">
              <label>
                <input name="two-factor-auth" type="checkbox" class="filled-in" checked />
                <span>Enable Two Factor Authentication for Transfers</span>
              </label>
            </div>
          </div>
          <div class="col s12 pad0 preference-block">
            <div class="col s12 m6 question-side">
              <b>Subscription Emails</b>
            </div>
            <div class="col s12 m6 options-side">
              <label>
                <input name="cancel-subscription" type="checkbox" class="filled-in" checked />
                <span>Allow customers cancel subscriptions</span>
              </label>
            </div>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
export default {
    name: "AccountSettings"
}
</script>

<style scoped src="../../assets/css/roles-settings.css"></style>

<style scoped>
.content-container{
    margin-top: 10px !important;
}
.content-container > .container.rel {
  min-height: calc(100vh - 134px - 3em);
  padding: 20px 30px 10px;
  border: none;
  box-shadow: 0px 5px 24px rgb(12 37 86 / 15%);
  margin: 0 auto;
  width: 100%;
  float: left;
}
.sect-title-header {
    margin-bottom: 20px;
}
[type="radio"]+span:before, [type="radio"]+span:after {
  margin-left: 0;
}
[type="checkbox"]+span:not(.lever) {
  padding-left: 35px !important;
}
[type="radio"]:not(:checked)+span:before, [type="radio"]:not(:checked)+span:after {
    border: 2px solid var(--sec-color);
}
[type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:before, [type="radio"].with-gap:checked+span:after {
    border: 2px solid var(--sec-color);
}
[type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:after {
    background-color: var(--sec-color);
}
</style>