const url = 'https://striveschool-api.herokuapp.com/api/movies/';
const params = new URLSearchParams(location.search)
const movieCategories = ['Action', 'Drama', 'Horror', 'Comedy', 'Thriller']
const movieCol = document.getElementById('movie-col')
const movieCategorys = document.getElementById('movie-categorys')
let allMovies = [];

const options = {
    method: "GET",
    headers: new Headers({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzQyMTA2OTksImV4cCI6MTY3NTQyMDI5OX0.bYI1jqZAAmnFwDAIiSHLS0F218F2pPpsBoLDVL__4L8",
        'Content-Type': 'application/json'
    })
}

window.onload = async () => {
    createMovieCategoryDrop()
    await loadMovieData()
}

const loadMovieData = async () => {
    try {

        for (const movieCategory of movieCategories) {

            let respons = await (fetch(url + movieCategory, options))
            allMovies.push(await respons.json())
        }

    } catch (error) {
        console.log(error)
    }
    displayData()
}


const displayData = () => {
    console.log(allMovies[0]);
    let actionCategory = allMovies[0];
    actionCategory.forEach(movie => {
        movieCol.innerHTML +=
            `
       <img src="${movie.imageUrl}" alt="">
       `
    });
}


const createMovieCategoryDrop = () => {
    for (const movieCategory of movieCategories) {
        movieCategorys.innerHTML +=
            `
    <a class="dropdown-item" href="${movieCategory}.html">${movieCategory}</a>
    `
    }
}


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