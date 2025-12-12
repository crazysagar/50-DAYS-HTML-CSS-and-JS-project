const result = document.getElementById("result");
const filter = document.getElementById("filter");

let listItems = [];

// Fetch users when page loads
getData();

async function getData() {
    const res = await fetch("https://randomuser.me/api/?results=100");
    const { results } = await res.json();

    // Clear loading text
    result.innerHTML = "";

    results.forEach(user => {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        listItems.push(li);
        result.appendChild(li);
    });
}

// Filter users as you type
filter.addEventListener("input", (e) => filterData(e.target.value));

function filterData(searchText) {
    searchText = searchText.toLowerCase();

    listItems.forEach(item => {
        const name = item.querySelector("h4").innerText.toLowerCase();
        const location = item.querySelector("p").innerText.toLowerCase();

        if (name.includes(searchText) || location.includes(searchText)) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });
}
