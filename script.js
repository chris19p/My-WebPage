function load() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            results = JSON.parse(this.responseText);
            document.getElementById("repo1").innerHTML = results[0].name;
        }
    }
}
xhttp.open("GET", "https://api.github.com/users/chris19p/repos", true);
xhttp.send();