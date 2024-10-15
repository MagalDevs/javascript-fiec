const baseAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Accept": "application/json",
        "Authorization": "1234",
    }
})

baseAxios.interceptors.request.use(
    function(config) {
        console.log("interceptor Request");
        console.log(config);
        let headers = Object.keys(config.headers).map((key) => [key, config.headers[key]]);
        let existConfig = headers.filter((header) => header[0] === "Authorization");
        if(existConfig.length <= 0){
            alert("invalid")
        } else{
            return config;
        }
        return config;
    }
)

baseAxios.interceptors.response.use(
    function(response) {
        console.log("interceptor Response");
        return response;
    }
)