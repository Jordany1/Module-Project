var entry = document.getElementById("entry");
var output = document.getElementById("output");

function Music() {
    output.innerHTML = ""
    var array = entry.value.split(". ");

    for(var i=0; array.length > i; i++) {
        var color = ""
        
        if(i==array.length-1) {var str = array[i]}
        else {var str = array[i]+".";}
        
        var length = str.split(" ").length

        if(length < 3) {color = "tiny"}
        else if(length < 6) {color = "short"}
        else if(length < 14) {color = "medium"}
        else {color = "long"}

        output.innerHTML = output.innerHTML+"<font class='"+color+"'>"+str+"</font><br>"
    }
}
