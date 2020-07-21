import { handlebarRender } from './handlebars.js';
import { createProduct, addProduct } from './product.js';
import { shoppincgCartLogic } from './shoppingCart.js';


/** Creacion de Productos en existencia */
addProduct(createProduct("https://resources.claroshop.com/medios-plazavip/mkt/5c9e7f8fc5df0_elsa-negro-telar-1jpg.jpg", "Bolsa típica", (1530.05).toFixed(2)));
addProduct(createProduct("https://www.estilodf.tv/wp-content/uploads/2018/08/convocan-a-ninos-al-concurso-dibujo-la-muneca-amealco-696x465.jpg", "Muñeca Otomí", (500.00).toFixed(2)));
addProduct(createProduct("https://cdn.shopify.com/s/files/1/0362/6477/1716/products/DSC4196-2_590x.jpg?v=1588009872", "Familia Alebrijes", (7900.05).toFixed(2)));
addProduct(createProduct("https://i.pinimg.com/originals/89/c2/15/89c215d5561e532f00f9111d329d787d.jpg", "Tortillero", (207.99).toFixed(2)));
addProduct(createProduct("https://t4.ftcdn.net/jpg/02/23/47/09/240_F_223470913_HHkwpGgQRPy45n6pcmeLFdE8UVPEPA4W.jpg", "Xolo con elote", (1000.00).toFixed(2)));
addProduct(createProduct("https://http2.mlstatic.com/pulsera-chaquira-arte-huichol-fina-artesania-mexicana-D_NQ_NP_837866-MLM31956280532_082019-F.jpg", "Pulsera Huichol", (1030.55).toFixed(2)));
addProduct(createProduct("https://artesaniasmexicanas.online/wp-content/uploads/2019/01/arbol-de-la-vida-mepetec.png", "Árbol de la Vida", (10.10).toFixed(2)));
addProduct(createProduct("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcLTMOlOqD1tgi2Cj4JpyasiG7rtk3TOdw9w&usqp=CAU", "Catrinas", (666.66).toFixed(2)));

handlebarRender();

/** Con querySelectorAll y el forEach se hace que todos los botones de 'agregar carrito' tengan el listener*/
let btnAddShopCar = document.querySelectorAll('.btn-add-car');

btnAddShopCar.forEach(item => {
    item.addEventListener('click', shoppincgCartLogic);
});

/** Con querySelectorAll se agrega efecto hover a las imagenes */
let imagenProducto = document.querySelectorAll(".imagen-producto");

imagenProducto.forEach(item => {
    item.addEventListener('mouseover', function(event) {
        event.target.style.opacity = "0.5";
    });
});

imagenProducto.forEach(item => {
    item.addEventListener('mouseout', function(event) {
        event.target.style.opacity = "1";
    });
});

/** Hace clickeable el icono del carrito de compras */
let btnCarrito = document.getElementById('shop-car');
let shopList = document.getElementById('shop-list');
let isClicked = true;

btnCarrito.addEventListener('click', () => {
    if (isClicked) {
        shopList.style.display = 'flex';
        isClicked = false;
    } else {
        shopList.style.display = 'none';
        isClicked = true;
    }
});
