/**************/
/* FUNCTIONS  */
/**************/
getUrlParams = function(params) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.getAll(params);
}

/*******************/
/* DOCUMENT READY  */
/*******************/

$(document).ready(function() {

});