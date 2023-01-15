$('.carousel').carousel({
    interval: false,
});


let profilePicture = document.querySelectorAll('.d-lg-block')[3];
let accountInfo = document.getElementsByClassName('account-info')[0];

profilePicture.addEventListener('mouseover', function () {
    accountInfo.style.opacity = "1";
})

profilePicture.addEventListener('mouseleave', function () {
    accountInfo.style.opacity = "0";
})
