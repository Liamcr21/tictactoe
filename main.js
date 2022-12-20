async function getData(){
    const url = "https://dog.ceo/api/breeds/image/random"

    // const options = {
    //     method: "GET",
    //     headers: {
    //         'Accept' : 'application/json',
    //         'Content-Type' : 'application/json; charset=utf-8',
    //     }
    // };
    try{
        await fetch(url, {methode : 'GET'}).then(response => (response.json())).then(json => console.log(json))
    } catch (e) {
        (console.error(e))
}
;
}

getData();