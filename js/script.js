const url = 'https://striveschool-api.herokuapp.com/api/movies/';
const params = new URLSearchParams(location.search)
const movieCategoryArr = ['Action', 'Drama', 'Horror', 'Comedy', 'Thriller']
let allMovies = [];


window.onload = async () => {
    await fetchMovies()
}


let fetchMovies = async () => {
    try {
        allMovies = [];
        for (const movieCategory of movieCategoryArr) {



            let respons = await fetch(url + movieCategory, {
                method: "GET",
                headers: new Headers({
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzQyMTA2OTksImV4cCI6MTY3NTQyMDI5OX0.bYI1jqZAAmnFwDAIiSHLS0F218F2pPpsBoLDVL__4L8",
                    'Content-Type': 'application/json'
                }),
            })
            allMovies.push(await respons.json())


        }
        console.log(allMovies)
        loadMovies(allMovies)

    } catch (error) {
        console.log(error)
    }
}



loadMovies = () => {


}


















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








