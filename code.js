var request = new XMLHttpRequest();
request.open('GET', 'https://cors-anywhere.herokuapp.com/api.hgbrasil.com/weather?woeid=455881', true);

request.onload = function (){
    if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        console.log(data);
    }else{
        
    }


}

request.onerror = function(){

}

request.send();

