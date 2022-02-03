const fetchResults = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => {
      if (!response.ok) {
        throw Error("Sorry, something went wrong, but we are working on this.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      const html = data.results
        .map((result) => {
          return `
            <div class="card">
              <figure class="card-media">
                <img class="card-media__image" src="${result.picture.large}" alt="picture of ${result.name.first} ${result.name.last}">
                <figcaption class="card-media__caption">${result.name.first}</figcaption>
              </figure>
              <ul class="card__items">
                <li class="card__item"><strong>Name:</strong> ${result.name.first} ${result.name.last}</li>
                <li class="card__item"><strong>Address:</strong>
                  <span>${result.location.city},</span>
                  <span>${result.location.street.number} ${result.location.street.name}</span>
                </li>
                <li class="card__item"><strong>Country:</strong> ${result.location.country}</li>
                <li class="card__item"><strong>Phone:</strong> ${result.phone}</li>
              </ul>
            </div>`;
        })
        .join("");
      document.querySelector(".cards").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchResults();
