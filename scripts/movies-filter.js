// Array de usuarios
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      bs: "target end-to-end models",
    },
  },
];
// Array de peliculas
const movies = [
  {
    userId: 10,
    id: 1,
    title: "The Godfather",
    genre: "Thriller",
    watched: "2022-04-01 09:40:48",
    rate: 7.6,
    image: "images/thegodfather.jpg",
  },
  {
    userId: 7,
    id: 2,
    title: "The Texas Chain Saw Massacre",
    genre: "Horror",
    watched: "2020-05-25 13:11:24",
    rate: 7.4,
    image: "images/thetexascm.jpg",
  },
  {
    userId: 1,
    id: 3,
    title: "The Shining",
    genre: "Horror",
    watched: "2022-02-24 00:21:22",
    rate: 5.8,
    image: "images/the-shining.jpg",
  },
  {
    userId: 3,
    id: 4,
    title: "Toy Story",
    genre: "Animation|Children",
    watched: "2022-06-17 23:21:12",
    rate: 5.9,
    image: "images/toystory.jpg",
  },
  {
    userId: 8,
    id: 5,
    title: "Halloween: The Curse of Michael Myers",
    genre: "Horror|Thriller",
    watched: "2020-04-18 15:47:33",
    rate: 4,
    image: "images/halloween.jpg",
  },
  {
    userId: 5,
    id: 6,
    title: "Die Hard",
    genre: "Action|Thriller",
    watched: "2020-06-15 22:49:31",
    rate: 3.3,
    image: "images/diehard.jpg",
  },
  {
    userId: 2,
    id: 7,
    title: "The Dark Knight Rises",
    genre: "Action|Adventure",
    watched: "2022-11-16 04:22:21",
    rate: 4.7,
    image: "images/thedarkknight.jpg",
  },
  {
    userId: 3,
    id: 8,
    title: "Fight Club",
    genre: "Drama|Thriller",
    watched: "2022-10-26 07:04:17",
    rate: 4,
    image: "images/fightclub.jpg",
  },
  {
    userId: 5,
    id: 9,
    title: "Avengers: Infinity War",
    genre: "Action|Sci-Fi",
    watched: "2022-07-12 20:36:17",
    rate: 2.8,
    image: "images/avengers.jpg",
  },
  {
    userId: 7,
    id: 10,
    title: "The Hangover",
    genre: "Comedy",
    watched: "2020-08-13 01:17:10",
    rate: 1.4,
    image: "images/thehangover.jpg",
  },
  {
    userId: 4,
    id: 11,
    title: "Your Name",
    genre: "Animation|Romance",
    watched: "2020-10-06 00:08:50",
    rate: 1,
    image: "images/yourname.webp",
  },
  {
    userId: 9,
    id: 12,
    title: "How to Train Your Dragon",
    genre: "Adventure|Fantasy",
    watched: "2022-01-11 23:06:04",
    rate: 9.1,
    image: "images/dragon.jpg",
  },
  {
    userId: 8,
    id: 13,
    title: "Robin Hood",
    genre: "Adventure|Musical",
    watched: "2021-08-05 18:57:45",
    rate: 5.8,
    image: "images/robinhood.jpg",
  },
  {
    userId: 6,
    id: 14,
    title: "Whiplash",
    genre: "Drama|Musical",
    watched: "2022-04-23 00:44:02",
    rate: 0.7,
    image: "images/whiplash.jpg",
  },
  {
    userId: 5,
    id: 15,
    title: "Life Is Beautiful",
    genre: "Drama|War",
    watched: "2022-05-02 20:00:04",
    rate: 6.4,
    image: "images/lavidaesbella.jpg",
  },
];

const filterForm = document.getElementById("filter-form");
const fromDate = document.getElementById("from-date");
const toDate = document.getElementById("to-date");
const rate = document.getElementById("rate-select");
const userId = document.getElementById("user-id-select");

const moviesContainer = document.querySelector(".movies-container");
const usersContainer = document.querySelector(".users-container");

// Funcion para crear objetos de cada usuario con sus atributos y la pelicula que vio con su respectivo rate
const userMoviesObject = (users, movies) => {
  const userMovies = [];

  movies.forEach((movie) => {
    const user = users.find((user) => user.id === movie.userId);
    if (user) {
      const userMovie = {
        id: user.id,
        userName: user.name,
        email: user.email,
        address: `${user.address.street} - ${user.address.city}`,
        company: user.company.name,
        movieTitle: movie.title,
        rating: movie.rate,
      };
      userMovies.push(userMovie);
    }
  });

  // Funcion para crear el array de objetos userMovies en HTML

  const userMoviesHTML = () => {
    userMovies.forEach((user) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("user-movie");

      const nameElement = document.createElement("h2");
      nameElement.classList.add("user-title");
      nameElement.textContent = user.userName;

      const idElement = document.createElement("p");
      idElement.classList.add("user-atributes");
      idElement.textContent = `ID de usuario: ${user.id}`;

      const emailElement = document.createElement("p");
      emailElement.classList.add("user-atributes");
      emailElement.textContent = `Email: ${user.email}`;

      const addressElement = document.createElement("p");
      addressElement.classList.add("user-atributes");
      addressElement.textContent = `Direción: ${user.address}`;

      const companyElement = document.createElement("p");
      companyElement.classList.add("user-atributes");
      companyElement.textContent = `Compañía: ${user.company}`;

      const movieTitleElement = document.createElement("p");
      movieTitleElement.classList.add("user-atributes");
      movieTitleElement.textContent = `Película: ${user.movieTitle}`;

      const movieRateElement = document.createElement("p");
      movieRateElement.classList.add("user-atributes");
      movieRateElement.textContent = `Puntaje: ${user.rating}`;

      document.body.appendChild(movieDiv);

      movieDiv.append(
        nameElement,
        idElement,
        emailElement,
        addressElement,
        companyElement,
        movieTitleElement,
        movieRateElement
      );

      usersContainer.appendChild(movieDiv);
    });
  };

  userMoviesHTML();
};

// Funcion filterMovies con los parámetros que se piden en la consigna
const filterMovies = ({ users, movies, userId, fromDate, toDate, rate }) => {
  const filteredMoviesContainer = () => {
    filterForm.addEventListener("submit", (e) => {
      e.preventDefault();

      /* Filtrado por fecha, pasa la fecha seleccionada en los botones a milisigundos, al igual que la fecha de la propiedad watched de cada película y las compara, devolviendo las peliculas cuyas fechas se encuentren dentro de los valores de los botones */

      const fromDateMs = new Date(fromDate.value).getTime();
      const toDateMs = new Date(toDate.value).getTime();

      let filteredMovies = movies.filter((movie) => {
        return (
          new Date(movie.watched) >= fromDateMs &&
          new Date(movie.watched) <= toDateMs
        );
      });

      console.log("Movies after date filtering:", filteredMovies);

      /* Filtrado por rate, al array con las peliculas ya filtradas por fecha, se las filtra comparando el valor
      del puntaje de cada pelicula con el valor seleccionado en el boton. */

      filteredMovies = filteredMovies.filter(
        (movie) => Math.floor(movie.rate) == rate.value
      );

      console.log("Movies after rate filtering:", filteredMovies);

      /* Filtrado opcional que filtra el array de peliculas anterior en caso de que se proporcione un 
      ID numerico*/

      if (!isNaN(userId.value)) {
        filteredMovies = filteredMovies.filter(
          (movie) => movie.userId == userId.value
        );
      }

      console.log("Movies after userID filtering", filteredMovies);

      // Función que crea las películas filtradas en elementos HTML
      const createFilteredMovies = () => {
        moviesContainer.innerHTML = "";

        filteredMovies.forEach((movie) => {
          const movieDiv = document.createElement("div");
          movieDiv.classList.add("movie");

          const imageElement = document.createElement("img");
          imageElement.classList.add("movie-img");
          imageElement.src = movie.image;

          const titleElement = document.createElement("h2");
          titleElement.classList.add("movie-title");
          titleElement.textContent = movie.title;

          const genreElement = document.createElement("p");
          genreElement.classList.add("movie-genre");
          genreElement.textContent = `Género: ${movie.genre}`;

          const rateElement = document.createElement("p");
          rateElement.classList.add("movie-rate");
          rateElement.textContent = `Calificación: ${movie.rate}`;

          const userElement = document.createElement("p");
          userElement.classList.add("movie-userId");
          userElement.textContent = `Id de usuario: ${movie.userId}`;

          document.body.appendChild(movieDiv);

          movieDiv.append(
            imageElement,
            titleElement,
            genreElement,
            rateElement,
            userElement
          );

          moviesContainer.appendChild(movieDiv);
        });
      };
      createFilteredMovies();
    });
  };
  filterForm.reset();
  filteredMoviesContainer();
  userMoviesObject(users, movies);
};

console.log(filterMovies({ users, movies, userId, fromDate, toDate, rate }));
