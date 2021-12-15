// function showCountries() {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://restcountries.com/v2/all", true);
//     xhr.onload = function () {
//         if (xhr.status == 200) {
//             console.log("success");
//             let countries = JSON.parse(this.response);
//             countries.forEach((country) => {
//                 const countryCard = document.createElement("div");
//                 const countryCardImage = document.createElement("img");
//                 countryCard.innerHTML = country.name;
//                 countryCardImage.scr = country.flag;
//                 countryCard.appendChild(countryCardImage);
//                 document.getElementById("feed").appendChild(countryCard);
//             });
//         }
//     };
//     xhr.send();
// }
