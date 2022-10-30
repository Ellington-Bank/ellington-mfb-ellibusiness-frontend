<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style src=".\assets\css\fonts.css"></style>
<style src=".\assets\css\style.css"></style>

<style>
  #app{
    min-height: 100vh;
    position: relative;
  }
</style>

<script>
import 'datatables.net'
import 'datatables.net-dt'
import "datatables.net-dt/css/jquery.dataTables.min.css"

import $ from 'jquery'
export default {
  data: function(){
      return {
          dataTable:null
      }
  },
  mounted(){
      $('#user-table, #invoice-table, #tranx-table, #refunds-table').DataTable({});
      
      $('#table-title').appendTo('#user-table_length'); 
      $('#user-table_filter input').attr("placeholder", "Search");
      
      // $('.active .tab-title').appendTo('#invoice-table_length'); 
      $('#invoice-table_filter input, #tranx-table_filter input, #refunds-table_filter input').attr("placeholder", "Search");

      $('#refunds-title').appendTo('#refunds-table_length'); 
  }
}
</script>
