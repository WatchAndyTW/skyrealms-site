let t;
$(document).ready(()=>{
    t = $(".download").html();
})
$(document).on("click",".download",()=>{
    let copy = document.createElement("textarea");
    copy.style.position = "absolute";
    copy.style.left = "-99999px";
    copy.style.top = "0";
    copy.setAttribute("id", "ta");
    document.body.appendChild(copy);
    copy.textContent = "mc.skyrealms.tk";
    copy.select();
    document.execCommand("copy");
    $(".download").html("<span class='extrapad'>IP已複製!</span>");
    setTimeout(function(){
        $(".download").html(t);
        var copy = document.getElementById("ta");
        copy.parentNode.removeChild(copy);
    },800);
});
