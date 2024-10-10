const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data
    } catch (error) {
        console.log(error);
    }
}

const data = getData().then((data) => {
    data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("tableData");

        const id = document.createElement("p")
        id.innerText = item.id;

        const name = document.createElement("p")
        name.innerText = item.name;

        const username = document.createElement("p")
        username.innerText = item.username;

        const phone = document.createElement("p")
        phone.innerText = item.phone;

        div.appendChild(id);
        div.appendChild(name);
        div.appendChild(username);
        div.appendChild(phone);

        usersTable.appendChild(div);
    });
});

const usersTable = document.querySelector("#userTable");
const buscarBtn = document.querySelector("#buscarBtn");
const pegarUsuarios = document.querySelector("#pegar_usuarios");
const resultContainer = document.querySelector("#resultContainer");
const voltarBtn = document.querySelector("#voltarBtn")

function showOrHideResult() {
    pegarUsuarios.classList.toggle("hide")
    resultContainer.classList.toggle("hide");
}

buscarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showOrHideResult();
});

voltarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showOrHideResult();
  });