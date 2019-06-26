function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make a HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  //captures the "this" context into a var for later use 
  let self = this;

  this.http.onload = function() {
    //using self instead of this here because this would refer to the function
    if(self.http.status === 200) {
      callback(self.http.responseText);
    }
  }

  this.http.onload = function() {

  }

  this.http.send();
}
//Make a HTTP POST request

//Make a HTTP PUT request

//Make a HTTP DELETE request