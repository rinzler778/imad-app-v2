//counter
var button = document.getElementById('counter');

button.onclick = function() {
    
    //1
    var request = new XMLHttpRequest();
    
    
    //2
request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        
        if(request.status === 200) {
           var counter = request.responseText;
            var span = document.getElementById('count');
             span.innerHTML = counter.toString();
        }
    }
    
};
   
};