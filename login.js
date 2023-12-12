function validateLogin() {
    var a = document.getElementById("u").value;
    var b = document.getElementById("p").value;
    var cU = "asdf";
    var cP = "ghjkl";

    if (a === cU && b === cP) {
        alert("DWH{W3LC0ME_H0M3}");
    } else {
        alert("Incorrect credentials. Go hard!");
    }
}