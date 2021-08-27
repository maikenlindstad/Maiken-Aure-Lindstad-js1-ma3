// Q2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";
const apiKey = "99286cfe718e48d992a2e367e9ae0554";

const urlApiKey = url + apiKey;

const resultsContainer = document.querySelector(".result");

async function getInfo() {
    try {
        //fetch

        const response = await fetch(urlApiKey);

        const results = await response.json();

        const facts = results.results;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {
            resultsContainer.innerHTML += `
            <div class="result">
                <table>
                    <tr class="border">
                        <td>Name:</td>
                        <td>Rating:</td>
                        <td>Amount of facts:</td>
                    </tr>
                    <tr>
                        <td>${facts[i].name}</td>
                        <td>${facts[i].rating}</td>
                        <td>${facts[i].tags.length}</td>
                    </tr>
                </table>
            </div>`;

            if (i === 7) {
                break;
            }
        }
    }
    catch (error) {
        console.log("An error occurred", error);
        resultsContainer.innerHTML = displayError("An error occurred");
    }
}

getInfo();