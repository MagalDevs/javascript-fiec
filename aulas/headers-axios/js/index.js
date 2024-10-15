const getData = async () => {
    try {
        const response = await baseAxios.get("/users", 
            {
                headers: {
                    "Accept": "application/json",
                    "Authorization": "1234"
                }
            }
        )
        console.log(response.data);
    } catch (error) {
        console.log(error);
        
    }
}

getData();

const form = document.querySelector("#postForm");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
        axios.post("https://jsonplaceholder.typicode.com/posts",
        {
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1234
        }
    )
    } catch (error) {
        console.log(error);
    }
})