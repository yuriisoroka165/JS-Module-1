import fetchData from "./fetchData";

fetchData().then(photos => {
	
});

// const API_KEY = "";

// refs = {
//     block: document.querySelector(".result"),
//     searchButton: document.querySelector(".search-button"),
// }

// refs.searchButton.addEventListener("click", addDataToPage());

// const block = document.querySelector(".result");

// function fetchPhotos() {
// 	console.log(fetchData());
// }

// fetchPhotos();

// function listItemsMarkup(items) {
// 	return items
// 		.map((item) => {
// 			return `<ul>
//             <li>${item}</li>
//         </ul>`;
// 		})
// 		.join("");
// }

// function addDataToPage() {
// 	refs.block.insertAdjacentHTML("beforeend", listItemsMarkup(items));
// }
