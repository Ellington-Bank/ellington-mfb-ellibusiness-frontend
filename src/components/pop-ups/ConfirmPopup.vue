<template>
  <!-- Modal Structure -->
  <div id="confirm-cancel" class="modal">
    <div class="modal-content center">
      <h4>Are you sure?</h4>
      <p>Note that progress would not be saved if you cancel this process.</p>

      <div class="form-btn-wrapper">
            <div class="grid-split-2">
                <router-link to="/" tag="button" class="sec-btn cancel-btn">Yes</router-link>
                <button class="submit-btn sec-bg modal-close">No</button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped src="../../assets/css/form-styles.css"></style>

<style scoped>
div#confirm-cancel {
    width: 30%;
    max-width: 380px;
    min-width: 200px;
}
.form-btn-wrapper {
    margin: 40px 0 20px;
}
button.submit-btn, button.cancel-btn {
    height: 42px;
}
.modal-content h4 {
    font-size: 2rem;
}
</style>