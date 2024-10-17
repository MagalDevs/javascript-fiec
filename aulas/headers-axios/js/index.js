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

const validCpf = async(cpf) => {
    try {
        let url = "https://api.invertexto.com/v1/validator?token=15772|28zq9TbjIuNI224TKotvlBvDIFEocgT4&value="
        url = url.concat(cpf);
        const response = await baseAxios.get(url) 
        console.log(response);

        if(response.data.valid){
            alert("CPF Válido!");
        }else{
            alert("CPF Inválido!");
        }

    } catch (error) {
        console.log(error);
        
    }
}

const form = document.querySelector("#postForm");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");
const validarCpf = document.querySelector("#validarCpf");
const limparCpf = document.querySelector("#limparCpf");
const cpf = document.querySelector("#cpf");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
        axios.post("/posts",
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

//EVENTOS   
limparCpf.addEventListener("click", (event) => {
    event.preventDefault();
    cpf.value = "";
})

validarCpf.addEventListener("click", (event) => {  
    event.preventDefault();
    validCpf(cpf.value);
}) 

//15772|28zq9TbjIuNI224TKotvlBvDIFEocgT4