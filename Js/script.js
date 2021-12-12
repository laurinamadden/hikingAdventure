$(document).ready(function(){
$(".accordion h1").click(function(){
    var id = this.id;  /* getting heading id */

    /* looping through all elements which have class .accordion-content */
    $(".accordion-content").each(function(){

        if($("#"+id).next()[0].id != this.id){
            $(this).slideUp();
        }

    });
/* Selecting div after h1 */
    $(this).next().toggle(); 
});
});
/* from validate*/
function validateForm() {
  let x = document.forms["myForm"]["fname"]["email"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}