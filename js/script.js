$('.carousel').carousel({
    interval: false,
});

let profilePicture = document.querySelectorAll('.d-lg-block')[3];
let accountInfo = document.getElementsByClassName('account-info')[0];
accountInfo.style.display = "none";

document.getElementById('manageProfiles').addEventListener('click', function () {
    window.open('profile.html', "_self")
})

document.getElementById('userAccount').addEventListener('click', function () {
    window.open('settings.html', "_self")
})


profilePicture.addEventListener('click', function () {
    if (accountInfo.style.display === 'none') {
        accountInfo.style.display = "block";
    } else {
        accountInfo.style.display = "none";
    }
})







