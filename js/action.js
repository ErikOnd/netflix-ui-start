const url = 'https://striveschool-api.herokuapp.com/api/movies/';
const params = new URLSearchParams(location.search)
const movieCategories = ['Action', 'Drama', 'Horror', 'Comedy', 'Thriller']
const movieCol = document.getElementById('movie-col')
const movieCategorys = document.getElementById('movie-categorys')
const carouselInner = document.getElementsByClassName('images-from-backOffice')[0]
const carouselInner2 = document.getElementsByClassName('images-from-backOffice2')[0]
let allMovies = [];

const options = {
    method: "GET",
    headers: new Headers({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzQyMTA2OTksImV4cCI6MTY3NTQyMDI5OX0.bYI1jqZAAmnFwDAIiSHLS0F218F2pPpsBoLDVL__4L8",
        'Content-Type': 'application/json'
    })
}

$('.carousel').carousel({
    interval: false,
});

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
    displayData(window.innerWidth)
}


const displayData = (screenWidth) => {


    carouselInner.innerHTML = '';

    allMovies[0].map((movie) => {

        carouselInner.innerHTML +=
            `
            <img src="${movie.imageUrl}"
                class=" mr-1" alt="...">
            
            `
    })

    allMovies[0].map((movie) => {

        carouselInner2.innerHTML +=
            `
            <img src="${movie.imageUrl}"
                class=" mr-1" alt="...">
            
            `
    })





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


$(window).resize(function () {
    //console.log($(window).width())
    displayData($(window).width())
});







/* 
2 Picture Carusel * 6
when smaller than 820px

                        <div class="carousel-item active">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMytOYW-z4x4AFFNEd-gbD2QXIylsVVgijDcfV1F4C0KFea0PLQ6m7TzjF0f39xy-jmuN5MwRRB90v-nLyIKGgw0ajxN_Yz-OHqfME8X2gqts-brdvRO0y_Ajb4sGee9Moeyxxje77b8lEnQ4nEg4BeEBvGHx8ngc4InTxt23fWg8sFASLWj3W8K6Hs0ls.jpg?r=123"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                        </div>

*/



/*
3 Picture Carusel * 4
when smaller than 1200

                        <div class="carousel-item active">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMytOYW-z4x4AFFNEd-gbD2QXIylsVVgijDcfV1F4C0KFea0PLQ6m7TzjF0f39xy-jmuN5MwRRB90v-nLyIKGgw0ajxN_Yz-OHqfME8X2gqts-brdvRO0y_Ajb4sGee9Moeyxxje77b8lEnQ4nEg4BeEBvGHx8ngc4InTxt23fWg8sFASLWj3W8K6Hs0ls.jpg?r=123"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                        </div>
                        

*/


/* 
4 Picture Caruse * 3
when smaller than 1570

                        <div class="carousel-item active">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMytOYW-z4x4AFFNEd-gbD2QXIylsVVgijDcfV1F4C0KFea0PLQ6m7TzjF0f39xy-jmuN5MwRRB90v-nLyIKGgw0ajxN_Yz-OHqfME8X2gqts-brdvRO0y_Ajb4sGee9Moeyxxje77b8lEnQ4nEg4BeEBvGHx8ngc4InTxt23fWg8sFASLWj3W8K6Hs0ls.jpg?r=123"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                        </div>

*/



/* 
6 Picture Caruse * 2

                        <div class="carousel-item active">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMytOYW-z4x4AFFNEd-gbD2QXIylsVVgijDcfV1F4C0KFea0PLQ6m7TzjF0f39xy-jmuN5MwRRB90v-nLyIKGgw0ajxN_Yz-OHqfME8X2gqts-brdvRO0y_Ajb4sGee9Moeyxxje77b8lEnQ4nEg4BeEBvGHx8ngc4InTxt23fWg8sFASLWj3W8K6Hs0ls.jpg?r=123"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                            <img src="http://occ-0-4415-3212.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABag4KpFOSF9l4FpdM5pl9sYm_6NdgepmoAnSCVWDwVaMBfvDgFHdvgfy_dHupRt8PHByd58w-53QM6N4lJWtQrGjH8iAx1_xhaM.jpg?r=8f3"
                                class=" mr-1" alt="...">
                        </div>

*/


