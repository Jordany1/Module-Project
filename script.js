function music() {
    var textAreaInput = document.getElementById("text").value;
    var output = document.getElementById("output");
    var result = document.getElementById('text').value.match( /[^.!?]+[.!?]+/g );
    var words = textAreaInput.split(" ");    
    for (i = 0; i < result.length; i++) {
        if (i <= 2) {

        }
    output.innerHTML += result[i];
    }
    // output.innerHTML = result[0].split(" ").length;   
}

