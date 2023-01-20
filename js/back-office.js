const url = 'https://striveschool-api.herokuapp.com/api/movies/';
const params = new URLSearchParams(location.search)
const id = params.get("id")
const movieName = document.getElementById('movieName');
const movieDescription = document.getElementById('movieDescription');
const movieCategory = document.getElementById('movieCategory');
const movieImageUrl = document.getElementById('movieImageUrl');
const movieRow = document.getElementById('movieRow')
const movieCategoryArr = ['Action', 'Drama', 'Horror', 'Comedy', 'Thriller']
let movieToEdit = {};
let allMovies = [];
let movieID = null;



window.onload = async () => {
    await fetchMovies()
}

let editMovie = (id) => {

    movieID = id;
    document.getElementById('CreateAndEdit').innerText = 'Edit Movie';
    location.hash = "backOfficePage";

    console.log(allMovies)

    for (const singeCategory of allMovies) {

        let movie = singeCategory.find(movie => movie._id === id)

        if (movie !== undefined) {
            movieToEdit = movie
        }
    }
    movieName.value = movieToEdit.name
    movieDescription.value = movieToEdit.description;
    movieCategory.value = movieToEdit.category;
    movieImageUrl.value = movieToEdit.imageUrl;
}





let createMovie = async (submitEvent) => {
    try {
        submitEvent.preventDefault()
        const movie = {
            name: movieName.value,
            description: movieDescription.value,
            category: movieCategory.value,
            imageUrl: movieImageUrl.value,
        }
        console.log(movie);
        const options = {
            method: "POST",
            headers: new Headers({
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzQyMTA2OTksImV4cCI6MTY3NTQyMDI5OX0.bYI1jqZAAmnFwDAIiSHLS0F218F2pPpsBoLDVL__4L8",
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(movie)
        }
        if (movieID !== null) {
            options.method = 'PUT';
            console.log(options)
            console.log(url + movieID)
            let respons = await fetch(url + movieID, options)
            if (respons.ok) {
                console.log('test');
                movieID = null;
                document.getElementById('CreateAndEdit').innerText = 'Create Movie';
                fetchMovies()
            }
        }
        else {
            let respons = await fetch(url, options)
            if (respons.ok) {
                movieID = null;
                document.getElementById('CreateAndEdit').innerText = 'Create Movie';
                fetchMovies()

            }
        }
    } catch (error) {
        console.log(error)
    }
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

const loadMovies = (allMovies) => {
    movieRow.innerHTML = ''
    for (const singeCategory of allMovies) {

        singeCategory.map((movie) => {
            return movieRow.innerHTML +=
                `
        <div class="col mb-4 movie-col">
            <div class="card h-100">
                <img src="${movie.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title">${movie.name}</h2>
                    <p>Category: ${movie.category}</p>
                    <p class="card-text">Description:${movie.description}</p>
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <a type="button" onclick='editMovie("${movie._id}")' class='btn btn-primary'> Edit </a>
                        <a type="button" class="btn btn-danger"  onclick='deleteMovie("${movie._id}")'>Delete</a>
                    </div>
                </div>
            </div>
        </div>
  `
        })
    }
}

const deleteMovie = async (idToDelete) => {

    try {
        let respons = await fetch(url + "/" + idToDelete, {
            method: "DELETE",
            headers: new Headers({
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzQyMTA2OTksImV4cCI6MTY3NTQyMDI5OX0.bYI1jqZAAmnFwDAIiSHLS0F218F2pPpsBoLDVL__4L8",
                'Content-Type': 'application/json'
            }),
        })

        console.log(respons)
        if (respons.ok) {
            console.log('success');
            await fetchMovies()
        }
    } catch (error) {
        console.log('fail');
        console.log(error)
    }
}