const productos=[
    {id: 1, title: "título 1", description: "descripción 1", price: "price 1", image: "../assets/images/dados1.jpg"},
    {id: 2, title: "título 2", description: "descripción 2", price: "price 2", image: "../assets/images/dados2.jpg"},
    {id: 3, title: "título 3", description: "descripción 3", price: "price 3", image: "../assets/images/dados3.jpg"},
    {id: 4, title: "título 4", description: "descripción 4", price: "price 4", image: "../assets/images/dados4.jpg"},
    {id: 5, title: "título 5", description: "descripción 5", price: "price 5", image: "../assets/images/dados5.jpg"},
    {id: 6, title: "título 6", description: "descripción 6", price: "price 6", image: "../assets/images/dados6.jpg"},
]

export const getFetch = new Promise((resolve, reject) => {
    let llamadaApi = 'llamadaexample.com'
    if(llamadaApi === 'llamadaexample.com'){
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    } else {
        reject("noppes");
    }
})
