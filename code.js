var request = new XMLHttpRequest();
request.open('GET', 'http://api.weatherapi.com/v1/current.json?key=6150318f5f3b41d1ad1214617230302&q=Maraba&aqi=no', true);

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

