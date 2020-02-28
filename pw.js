let togglePW = 2;
let i = 1;

function unhidePW() {
    if (togglePW % 2 === 0) {
        document.getElementById('pw').type = document.getElementById('pw').value;
        document.getElementById("showPWButton").innerHTML = "Unhide Password";
        togglePW += 1;
    } else {
        document.getElementById('pw').type = 'password';
        document.getElementById('showPWButton').innerHTML = 'Hide Password';
        togglePW += 1;
    }
}

function getAccess() {
    if (document.getElementById('pw').value === "112358") {
        window.location.href = 'membersOnly.html';
    } else {
        document.getElementById("incorrect").innerHTML = "<h3>&#10060; Incorrect</h3>";
    }
}

function getAccessEnterKey(e) {
    if (e.key === 'Enter') {
        getAccess();
    }
}

function ael() {
    if (i === 1) {
        document.addEventListener('keydown', getAccessEnterKey); console.log('event listener added');
        i = 2;
    }
}