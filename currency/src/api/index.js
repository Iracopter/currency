

async function get_Info(){
    const url=('https://v6.exchangerate-api.com/v6/5708c252d21ba1cb98cc5c3f/latest/UAH');
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}

export default get_Info;