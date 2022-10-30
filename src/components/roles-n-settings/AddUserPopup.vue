<template>
  <!-- Modal Structure -->
  <div id="add-user-modal" class="modal">
    <div class="modal-content center">
        <div class="request-wrapper">
            <div class="request-desc">
                <h5 class="request-title">Invite New User</h5>
                <p>
                    Enter the email address of the user you want to invite, 
                    and choose the role they should have.
                </p>
            </div>

            <form action="">
                <div class="">
                    <div class="input-field">
                        <input id="user-email" type="email" class="inp-field">
                        <label for="user-email">Email</label>
                    </div>
                    <div class="input-field">
                        <select id="user-role">
                            <option value="1">Owner</option>
                            <option value="2">Administrator</option>
                            <option value="3">Developer</option>
                            <option value="4">Guest</option>
                        </select>
                        <label for="user-role">Role</label>
                    </div>
                </div>
                <div class="form-btn-wrapper">
                    <div class="grid-split-2">
                        <!--=== Note: Use the "modal-close" class to close the modal ===-->
                        <button class="sec-btn cancel-btn modal-close" type="button">Cancel</button>
                        <button class="submit-btn sec-bg" type="submit">Invite User</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AddUserPopup"
}
</script>

<style scoped src="../../assets/css/form-styles.css"></style>

<style scoped>
.modal{
    width: 30%;
    max-width: 380px;
    min-width: 200px;
    max-height: 80%;
}
.form-btn-wrapper {
    margin: 30px 0 10px;
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
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
}
</style>

<style scoped>
.request-desc {
    font-size: 14px;
    color: #676B71;
    margin-bottom: 40px;
}
h5.request-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.3px;
    color: #252B33;
    margin-top: 10px;
}
.request-cta-btn-div {
    margin: 30px 0;
}
button.request-cta-btn.sec-btn {
    padding: 15px 45px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}
button.request-cta-btn.sec-btn:focus, button.request-cta-btn.sec-btn:hover {
    color: white;
    background-color: var(--sec-color);
}
.request-wrapper.center {
    margin: 10px 0;
}
h5.request-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-top: 10px;
}
.dropdown-content li>a, .dropdown-content li>span {
    font-size: 14px;
    padding: 12px 14px;
}
.select-wrapper+label {
    left: 0 !important;
    top: -34px;
    font-size: 11px;
    font-weight: 500;
}
.input-field>label.active {
    font-size: 14px;
    font-weight: 500;
}
</style>

<style>
#add-user-modal .select-wrapper input.select-dropdown,
#add-user-modal .dropdown-content li>span {
    font-size: 14px;
}
</style>