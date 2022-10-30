<template>
  <div id="top-nav">
      <div class="row">
          <div class="col s12 pad0">
              <form class="col s12 m4">
                <div class="input-field flex-div">
                    <img src="../assets/images/search-icon.svg" alt="search icon" class="search-icon">
                    <input type="search" id="search-input" placeholder="Search something...">
                </div>
              </form>
              <div class="col s12 m8">
                  <ul class="flex-div right tn-list">
                      <li>
                          <a href="#" class="">
                              <img src="../assets/images/help.svg" alt="help" class="top-nav-icon">
                          </a>
                      </li>
                      <li>
                          <a href="#" class="">
                              <img src="../assets/images/bell.svg" alt="bell" class="top-nav-icon">
                          </a>
                      </li>
                      <li>
                          <div class="switch">
                            <span class="red-text">You are in test mode</span>
                            <label>
                                <!-- Off -->
                                <input type="checkbox" disabled>
                                <span class="lever"></span>
                                <!-- On -->
                            </label>
                          </div>
                      </li>
                      <li>
                          <router-link to="/login" class="logout-btn">
                              <span>Logout</span>
                          </router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TopNav'
}
</script>

<style scoped src="../assets/css/topnav.css"></style>