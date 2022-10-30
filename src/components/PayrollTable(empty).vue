<template>
  <div class="payroll-table">
      <div class="table-title">Title</div>
      <div class="empty-table-notice center">
          <div class="empty-img">
              <img src="../assets/images/sleeping-dog.png" alt="sleeping-dog" class="sleeping-dog">
          </div>
          <div class="empty-notice-title">No existing upload for payments</div>
          <div class="empty-notice-txt">
              <p>Click on the add icon to upload your payroll files</p>
          </div>
      </div>
      <div class="upload-payroll-btn-div">
          <button class="upload-payroll-btn">
              <input type="file" id="upload-payroll-input">
              <img src="../assets/images/upload-circle.svg" alt="upload-icon">
          </button>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "PayrollTable1",
    mounted(){
        $("#upload-payroll-input").change(function(){
            $("#payroll-table-loader").show();
        })
    }
}
</script>

<style scoped src="../assets/css/payroll.css"></style>
