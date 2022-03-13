const productos=[
    {id: 1, title: "Dados 1", description: "descripción 1", price: "$1.500", image: "../assets/images/dados1.jpg", category: "dados"},
    {id: 2, title: "Dados 2", description: "descripción 2", price: "$1.300", image: "../assets/images/dados2.jpg", category: "dados"},
    {id: 3, title: "Dados 3", description: "descripción 3", price: "$1.450", image: "../assets/images/dados3.jpg", category: "dados"},
    {id: 4, title: "Manual 4", description: "descripción 4", price: "$3.000", image: "../assets/images/dados4.jpg", category: "manuales"},
    {id: 5, title: "Manual 5", description: "descripción 5", price: "$6.000", image: "../assets/images/dados5.jpg", category: "manuales"},
    {id: 6, title: "Manual 6", description: "descripción 6", price: "$2.200", image: "../assets/images/dados6.jpg", category: "manuales"},
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
