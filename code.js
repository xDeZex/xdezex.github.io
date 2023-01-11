function recommend() {
    var username = document.getElementById('username').value;
    fetch("http://localhost:3333/test?name=" + username).then(function(response) {
      return response.json();
    }).then(function(data) {
      document.getElementById('rec').innerHTML = data;
    }).catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}
