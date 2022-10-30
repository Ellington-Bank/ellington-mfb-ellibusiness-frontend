<template>
  <div class="payroll-table">
      <div class="table-title" id="table-title">Salary Payment - July 2021</div>
      <table id="user-table" class="display table-bordered nowrap" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>S/N</th>
                <th>STAFF NAME</th>
                <th>BANK NAME</th>
                <th>ACCOUNT NO</th>
                <th>BVN</th>
                <th>STATUS</th>
                <th>REASON</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td class="staff-name">Mykel King</td>
                <td>Zenith Bank</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="success-status tran-status">SUCCESS</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>2</td>
                <td class="staff-name">Bukola Akinfolarin</td>
                <td>UBA</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="failed-status tran-status">FAILURE</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>3</td>
                <td class="staff-name">Mykel King</td>
                <td>Zenith Bank</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="success-status tran-status">SUCCESS</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>4</td>
                <td class="staff-name">Bukola Akinfolarin</td>
                <td>UBA</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="failed-status tran-status">FAILURE</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>5</td>
                <td class="staff-name">Mykel King</td>
                <td>Zenith Bank</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="success-status tran-status">SUCCESS</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>6</td>
                <td class="staff-name">Bukola Akinfolarin</td>
                <td>UBA</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="failed-status tran-status">FAILURE</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>7</td>
                <td class="staff-name">Mykel King</td>
                <td>Zenith Bank</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="success-status tran-status">SUCCESS</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>8</td>
                <td class="staff-name">Bukola Akinfolarin</td>
                <td>UBA</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="failed-status tran-status">FAILURE</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>9</td>
                <td class="staff-name">Mykel King</td>
                <td>Zenith Bank</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="success-status tran-status">SUCCESS</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>10</td>
                <td class="staff-name">Bukola Akinfolarin</td>
                <td>UBA</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="failed-status tran-status">FAILURE</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>11</td>
                <td class="staff-name">Mykel King</td>
                <td>Zenith Bank</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="success-status tran-status">SUCCESS</span>
                </td>
                <td>User not defined</td>
            </tr>
            <tr>
                <td>12</td>
                <td class="staff-name">Bukola Akinfolarin</td>
                <td>UBA</td>
                <td>083930290</td>
                <td>**** **** 4231</td>
                <td>
                    <span class="failed-status tran-status">FAILURE</span>
                </td>
                <td>User not defined</td>
            </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
// import $ from 'jquery'
import M from 'materialize-css';

export default {
    name: "PayrollTable1",
    mounted(){
        M.AutoInit();
    }

}
</script>

<style scoped src="../assets/css/payroll.css"></style>

<style>
div#user-table_length > label {
    display: none;
}
div#user-table_filter label {
    height: calc(3rem + 5px);
    overflow: hidden;
    display: block;
    position: relative;
    width: 100%;
    padding: 0 2px;
}
div#user-table_filter input[type="search"] {
    height: 3rem;
    border: 1px solid rgba(0, 0, 0, .1);
    background: #EDF2F7;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    margin-top: -2rem;
    font-size: 14px;
    padding: 0 5px;
    width: calc(100% - 10px);
}
input:focus{
    border-bottom: 1px solid var(--sec-color) !important;
    box-shadow: 0 1px 0 0 var(--sec-color) i !important;
}
th.sorting {
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #8492A6;
}
.dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
    color: #333 !important;
    border: 1px solid rgb(151, 151, 151, 0.5);
    background: var(--pry-color);
    color: white !important;
    border-radius: 50%;
}
.dataTables_wrapper .dataTables_paginate .paginate_button{
    border-radius: 50%;
    font-size: 14px;
}
</style>

<style scoped>
.table-title {
    line-height: 3;
}
</style>