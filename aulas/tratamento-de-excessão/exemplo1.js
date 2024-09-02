try{
    let x = 5
    const y = 0
    y = 8
    console.log(x/y);

} catch(error){
    console.log(`Deu ruim...o erro foi esse ${error}`)
} finally {
    console.log("Fim do programa");
}

