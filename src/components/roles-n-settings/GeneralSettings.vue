<template>
  <div>
      <div class="content-container">
        <div class="container personal--info rel">
          <div class="row">
            <form action="">
              <div class="sect-title-header flex-div col s12">
                <h5 class="sect-title fg-1">Personal Information</h5>
                <div>
                  <button type="submit" class="sec-bg submit-btn">SAVE</button>
                </div>
              </div>
              <div class="col s12 m9">
                <div class="input-field col s12 m6 pad0">
                  <input id="first--name" type="text" class="inp-field">
                  <label for="first--name">FIRST NAME</label>
                </div>
                <div class="input-field col s12 m6 pad0">
                  <input id="last--name" type="text" class="inp-field">
                  <label for="last--name">LAST NAME</label>
                </div>
                <div class="input-field col s12 m6 pad0">
                  <input id="user--email" type="email" class="inp-field">
                  <label for="user--email">EMAIL</label>
                </div>
                <div class="input-field col s12 m6 pad0">
                  <input id="phone--number" type="tel" class="inp-field">
                  <label for="phone--number">PHONE</label>
                </div>

                <div class="col s12 pad0">
                  <h6 class="password-title">PASSWORD</h6>
                </div>
                <div class="input-field col s12 m6 password-sec pad0">
                  <input id="new-password" type="password" class="inp-field">
                  <label for="new-password">New Password</label>
                </div>
                <div class="input-field col s12 m6 password-sec pad0">
                  <input id="confirm-new-password" type="password" class="inp-field">
                  <label for="confirm-new-password">Confirm Password</label>
                </div>
                <div class="input-field col s12 pad0">
                  <button id="change-password-btn" type="button">CHANGE PASSWORD</button>
                </div>
              </div>
              <div class="col s12 m3"></div>
            </form>
          </div>
        </div>

        <div class="container bizness--info rel">
          <div class="row">
            <form action="">
              <div class="sect-title-header flex-div col s12">
                <h5 class="sect-title fg-1">Business Information</h5>
                <div>
                  <button type="submit" class="sec-bg submit-btn">SAVE</button>
                </div>
              </div>
              <div class="col s12 m9">
                <div class="input-field col s12 m6 pad0">
                  <input id="business--name" type="text" class="inp-field">
                  <label for="business--name">BUSINESS NAME</label>
                </div>
                <div class="input-field col s12 m6 pad0">
                  <input id="business--phone" type="tel" class="inp-field">
                  <label for="business--phone">BUSINESS PHONE NUMBER</label>
                </div>
                <div class="input-field col s12 m6 pad0">
                  <input id="business--email" type="email" class="inp-field">
                  <label for="business--email">BUSINESS EMAIL</label>
                </div>
                <div class="input-field col s12 m6 pad0">
                  <input id="business--address" type="text" class="inp-field">
                  <label for="business--address">BUSINESS ADDRESS</label>
                </div>
                <div class="input-field col s12 m6 pad0">
                  <input id="support--email" type="email" class="inp-field">
                  <label for="support--email">SUPPORT EMAIL</label>
                </div>
                <div class="input-field col s12 m6 pad0">
                  <input id="support--phone" type="tel" class="inp-field">
                  <label for="support--phone">SUPPORT PHONE NUMBER</label>
                </div>
              </div>
              <div class="col s12 m3">
                <div class="center">
                  <div class="input-field bizess-avatar-div"> 
                    <img src="../../assets/images/jr.png" alt="business avatar" class="bizness-avatar">
                    <p>Change business logo</p>
                    <div class="file-field input-field">
                      <div class="btn">
                          <span>
                              <i class="material-icons">add_box</i>
                              Select File
                          </span>
                          <input type="file">
                      </div>
                      <div class="file-path-wrapper">
                          <input class="file-path validate inp-field" type="text">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "GeneralSettings",
    mounted() {
      $("button#change-password-btn").click(function(){
        $(this).hide();
        $(".password-sec").slideDown();
      })
    }
}
</script>

<style scoped src="../../assets/css/roles-settings.css"></style>

<style scoped>
.content-container > .container.rel {
  min-height: initial;
  padding: 20px 30px 10px;
  border: none;
  box-shadow: 0px 5px 24px rgb(12 37 86 / 15%);
  margin: 0 auto;
  width: 100%;
}
button#change-password-btn {
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  padding: 10px 40px;
  border-radius: 8px;
  border: none;
  background: rgba(208, 215, 230, 0.7);
  color: var(--pry-txt-color);
  cursor: pointer;
}
.container.bizness--info.rel {
    margin-top: 40px;
}
.file-field .file-path-wrapper {
  display: none;
}
.file-field .btn {
    position: relative;
    width: 150px;
    font-size: 14px;
    line-height: 17px;
    float: none;
    background-color: rgb(197 197 197 / 30%);
    color: #252B33;
}
.btn i.material-icons {
    position: relative;
    top: 4px;
    line-height: 2;
}
</style>

<style>
.password-sec {
  display: none;
}
</style>