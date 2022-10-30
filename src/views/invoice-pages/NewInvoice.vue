<template>
  <div class="main-cont">
      <div class="row">
          <div class="col s12 m3 pad0 side-nav-wrapper">
            <SideNav />
          </div>
          <div class="col s12 m9 pad0 content-side-wrapper">
              <TopNav />

              <div class="content-container">
                  <div class="cont-title">New Invoice</div>
                  <div class="container">
                      <form action="#">
                          <div class="invoice-details-1">
                              <div class="flex-div">
                                  <div class="file-field input-field fg-1">
                                        <!-- <label for="" class="active">Business Logo</label> -->
                                        <div class="fpw">
                                            <span>
                                                <img src="../../assets/images/select-logo-file.png" alt="select-file" class="select-file-img">
                                            </span>
                                        </div>
                                  </div>
                                  <div class="text-inputs">
                                    <div class="input-field">
                                        <input id="invoice-number" type="text" class="inp-field">
                                        <label for="invoice-number">Invoice Number</label>
                                    </div>
                                    <div class="input-field">
                                        <textarea id="invoice-description" class="materialize-textarea inp-field"></textarea>
                                        <label for="invoice-description">Invoice Description</label>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <div class="invoice-details-2">
                              <div class="table-div">
                                  <table id="add-invoice-table">
                                      <thead>
                                          <tr>
                                              <th>ITEM DESCRIPTION</th>
                                              <th>QUANTITY</th>
                                              <th>DISCOUNT (%)</th>
                                              <th>AMOUNT</th>
                                              <!-- <th>TAX (%)</th> -->
                                              <th>ACTION</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td class="item-desc-td">
                                                  <div class="input-field">
                                                    <textarea id="item-description" placeholder="Item Description" class="materialize-textarea inp-field"></textarea>
                                                  </div>
                                              </td>
                                              <td class="item-qty-td">
                                                  <div class="input-field">
                                                    <input id="item-quantity" placeholder="0" type="number" class="inp-field">
                                                  </div>
                                              </td>
                                              <td class="item-disc-td">
                                                  <div class="input-field">
                                                    <input id="item-discount" placeholder="0" type="number" class="inp-field">
                                                  </div>
                                              </td>
                                              <td class="item-amt-td">
                                                  <div class="input-field">
                                                    <input id="item-amount" placeholder="0" type="number" class="inp-field">
                                                  </div>
                                              </td>
                                              <!-- <td class="item-tax-td">
                                                  <div class="input-field">
                                                    <input id="item-tax" placeholder="0" type="number" class="inp-field">
                                                  </div>
                                              </td> -->
                                              <td class="action-td">
                                                  <div class="input-field">
                                                    <button class="table-action" type="reset">
                                                        <img src="../../assets/images/trash.svg" alt="delete-icon" class="action-icon">
                                                    </button>
                                                  </div>
                                              </td>
                                          </tr>
                                      </tbody>
                                      <div class="table-btn-div">
                                          <button class="btn-add-row submit-btn sec-bg">Add New Item</button>
                                      </div>
                                  </table>

                                  <div class="total-wrapper">
                                      <div class="total-div flex-div">
                                          <div class="total-title fg-1">SUB-TOTAL:</div>
                                          <div class="total-amount" id="sub-total">
                                              NGN <span>0.00</span>
                                          </div>
                                      </div>
                                      <div class="total-div flex-div">
                                          <div class="total-title fg-1">V.A.T (7.5%):</div>
                                          <div class="total-amount" id="vat">
                                              NGN <span>0.00</span>
                                          </div>
                                      </div>
                                      <div class="total-div flex-div l-blue">
                                          <div class="total-title fg-1">TOTAL:</div>
                                          <div class="total-amount" id="total">
                                              NGN <span>0.00</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="invoice-details-3">
                              <div class="form-div">
                                  <div class="input-field">
                                      <input id="client-email" placeholder="enter email" type="email" class="inp-field validate">
                                      <label for="client-email">Client Email</label>
                                  </div>
                                  <div class="input-field">
                                      <input id="due-date" placeholder="select date" type="text" class="inp-field datepicker">
                                      <label for="due-date">Due Date</label>
                                  </div>
                                  <div class="input-field">
                                      <select id="currency">
                                            <option value="1" selected disabled>Select Currency</option>
                                            <option value="2">NIGERIAN NAIRA - NGN</option>
                                            <option value="3">GHANIAN CEDIS - GHC</option>
                                            <option value="4">US DOLLARS - USD</option>
                                            <option value="5">BRITISH POUNDS - GBP</option>
                                      </select>
                                      <label for="currency">Currency</label>
                                  </div>
                              </div>

                              <div class="form-submit-div center">
                                  <button class="submit-btn sec-bg modal-trigger" data-target="invoice-pre-send">Send Invoice</button>
                              </div>
                          </div>
                          <div class="modal-wrapper">
                              <InvoicePreConfirm />
                              <InvoiceConfirmed />
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue"
import TopNav from "@/components/TopNav.vue"
import InvoicePreConfirm from '@/components/pop-ups/InvoicePreConfirm.vue'
import InvoiceConfirmed from '@/components/pop-ups/InvoiceConfirmed.vue'

import M from 'materialize-css'
export default {
    name: "NewInvoice",
    components: {
        SideNav,
        TopNav,
        InvoicePreConfirm,
        InvoiceConfirmed
    },
    mounted() {
        M.AutoInit();
        var elemsDP = document.querySelectorAll('.datepicker');
        var elemsSelect = document.querySelectorAll('select');
        M.Datepicker.init(elemsDP);
        M.Select.init(elemsSelect);
    }
}
</script>

<style scoped src="../../assets/css/invoice.css"></style>

<style scoped>
.main-cont{
    height: 100vh;
}
.main-cont > .row{
    width: 100%;
    margin: 0;
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
textarea.inp-field {
    min-width: 180px;
}
#add-invoice-table .input-field {
    margin-top: -1rem;
}
#add-invoice-table td {
    padding-bottom: 0;
}
.select-wrapper+label {
    left: 0;
    top: -30px;
}
</style>