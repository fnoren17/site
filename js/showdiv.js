$(document).ready(function(){
$(".single-project").click(function(){
    var box = $(this).attr("box")
    showDiv(box);
});
function showDiv(box){
    var clicked = $("#" + box);
    var visible = $(".more-details:visible");
    if(clicked.prop("id") == visible.prop("id"))
    {
    clicked.slideUp("slow");
    } else 
    {
    if(visible == undefined)
    {
        clicked.slideDown("slow");
    } else 
    {
        visible.slideUp("slow");
        clicked.slideDown("slow");
    }
    }
}
});