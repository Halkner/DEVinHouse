function sleep(valorQualquer){
    return new Promise((resolve) => {
        setTimeout(() => resolve(valorQualquer), 3 * 1000);
    });
}

sleep("Testando Promise").then((res) => console.log(res));