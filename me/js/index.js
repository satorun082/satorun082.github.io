try{Typekit.load({ async: true });}catch(e){}

$(function () {
    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }

        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        
        if (!results) return null;
        if (!results[2]) return '';

        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    
    if(getParameterByName('email') == "success"){
        document.getElementById("mailer").style.pointerEvents = "none";
        document.getElementById("mailer").style.filter= "blur(2px)";
        document.getElementById("contactwas").style.display = "block";
    }
});