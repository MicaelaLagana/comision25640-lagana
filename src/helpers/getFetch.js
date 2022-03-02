import dados1 from '../components/assets/images/dados1.jpg'
import dados2 from '../components/assets/images/dados2.jpg'
import dados3 from '../components/assets/images/dados3.jpg'
import dados4 from '../components/assets/images/dados4.jpg'
import dados5 from '../components/assets/images/dados5.jpg'
import dados6 from '../components/assets/images/dados6.jpg'

const productos=[
    {id: 1, titulo: "titulo 1", description: "descripción 1", price: "price 1", image: {dados1}},
    {id: 2, titulo: "titulo 2", description: "descripción 2", price: "price 2", image: {dados2}},
    {id: 3, titulo: "titulo 3", description: "descripción 3", price: "price 3", image: {dados3}},
    {id: 4, titulo: "titulo 4", description: "descripción 4", price: "price 4", image: {dados4}},
    {id: 5, titulo: "titulo 5", description: "descripción 5", price: "price 5", image: {dados5}},
    {id: 6, titulo: "titulo 6", description: "descripción 6", price: "price 6", image: {dados6}},
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