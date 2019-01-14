// ==UserScript==
// @name         Drupal Checked Permissions
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Only show current permissions
// @author       You
// @match        https://<drupalsite>/admin/people/permissions
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


var checkboxes = document.querySelectorAll('input[type="checkbox"].real-checkbox');

var modules = document.querySelectorAll('.module');

// set table width for readability/screenshots
var permTable = document.getElementById('permissions');
permTable.setAttribute("style", "width:500px;");

function checkRow(e){

  //hide all module rows for quick view
    modules.forEach(module => {
    module.closest('tr').setAttribute("style", "display:none");
  })
  //show only checked permissions
  checkboxes.forEach(checkbox => {
   const isChecked = checkbox.checked;

   if(!isChecked){
    console.count;
    checkbox.closest('tr').setAttribute("style", "display:none");
    // it'd be nice to have the td.header for active boxes show...

   }

  })
}

checkRow();

})();
