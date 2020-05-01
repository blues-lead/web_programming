$("#show").mousedown(function() {
    $("#password").attr("type","text");
});
$(document).mouseup(function(){
    $("#password").attr("type","password");
})
$("#send_button").click(function(){
    var mail_regex = /^[a-zA-Z0-9]+[\w\.\-\_]+\@[\w\_\-]+\.[a-zA-Z]{2,4}$/;
    var phone_regex = /^\+/
    var email = $("#email").val();
    var phone = $("#tel").val();
    var test = mail_regex.test(email); /*REMEMBER regexp.test NOT variable.test(regex)!!!!*/
    if (!test) {
        alert("Vitut!")
    }
    
})