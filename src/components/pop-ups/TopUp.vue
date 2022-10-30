<template>
  <!-- Modal Structure -->
  <div id="top-up" class="modal">
    <div class="modal-content">
        <div class="request-wrapper">
            <div class="request-desc">
                <h5 class="request-title">Top up Balance</h5>
                <p>
                    Top up your AiroBusiness account by transferring money directly from any Nigerian Bank to this account.👇🏽
                </p>
            </div>
            
            <div class="window-form">
                <div class="copy-paste-div" @click="CopyToClipboard('topup-acct-details'), CopyToast()">
                    <div class="cpd-title">Bluewhales MFB</div>
                    <div class="cpd-img-div">
                        <img src="../../assets/images/copy-paste-icon2.svg" alt="copy-paste">
                    </div>
                    <div id="topup-acct-details">
                        <span class="account-number">20749289341</span>
                    </div>
                </div>
            </div>

            <div class="form-btn-wrapper">
                <div class="grid-split-2">
                    <!--=== Note: Use the "modal-close" class to close the modal ===-->
                    <button class="sec-btn cancel-btn modal-close">Cancel</button>
                    <button class="submit-btn sec-bg modal-close">Done</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
    name: "TopUp",
    methods: {
        CopyToClipboard: function (containerid) {
            // Create a new textarea element and give it id='temp_element'
            const textarea = document.createElement('textarea')
            textarea.id = 'temp_element_2'
            // Optional step to make less noise on the page, if any!
            textarea.style.height = 0
            // Now append it to your page somewhere, I chose <body>
            document.body.appendChild(textarea)
            // Give our textarea a value of whatever inside the div of id=containerid
            textarea.value = document.getElementById(containerid).innerText
            // Now copy whatever inside the textarea to clipboard
            const selector2 = document.querySelector('#temp_element_2')
            selector2.select()
            document.execCommand('copy')
            // console.log(selector2)
            // Remove the textarea
            document.body.removeChild(textarea)
        },
        CopyToast: function() {
            M.toast({html: 'Account number copied', displayLength: 2000})
        }
    }
}
</script>


<style scoped>
.modal {
    width: 30%;
    max-width: 400px;
    min-width: 150px;
}
.form-btn-wrapper {
    margin: 40px 0 20px;
}
button.submit-btn, button.cancel-btn {
    height: 42px;
    font-size: 13px;
    border-radius: 4px;
}
.modal-content h4 {
    font-size: 1.7rem;
}
.grid-split-2 {
    display: grid;
    grid-template-columns: calc(50% - 8px) calc(50% - 8px);
    grid-gap: 20px;
}
button.submit-btn:hover, button.submit-btn:focus {
    background-color: var(--pry-color);
    border-color: var(--pry-color) !important;
}
</style>

<style scoped>
.request-desc {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 30px;
}
h5.request-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
}
.request-wrapper.center {
    margin: 20px 0;
}

.copy-paste-div {
    position: relative;
    background-color: #E2E8FA;
    padding: 25px;
    border-radius: 12px;
    font-size: 13px;
    cursor: pointer;
    transition: all 2s;
}
.copy-paste-div:hover{
    transform: scale(1.05);
}
span.account-number {
    font-size: 18px;
    font-weight: 800;
}
.cpd-title {
    margin-bottom: 5px;
}
.cpd-img-div {
    position: absolute;
    right: 25px;
    top: 25px;
}
.cpd-img-div img {
    width: 21px;
}
button.submit-btn, button.cancel-btn {
    width: 100%;
}

@media (min-width: 993px){
    #toast-container {
        top: 10%;
        right: 5%;
        max-width: 86%;
    }
}
</style>