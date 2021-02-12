// select segmento
const select_tipo = document.getElementsByClassName('select-tipo');
const btn_articulo = document.getElementById('btn-articulo');
const btn_marca = document.getElementById('btn-marca');
const btn_producto = document.getElementById('btn-prod');
const aplicarArticulo = document.getElementById("aplicarArticulo");
const titMar = document.getElementById("titMar");
const titMod = document.getElementById("titMod");
const name_articulo = document.getElementById("nameArt");
const resultadoTotal = document.getElementById("resultadoTotal");
const contenedor_articulos = document.getElementById("select-productos");

var option_articulo = document.getElementsByClassName("articulo");
var contenedor_titulo = document.getElementById("tituloOpcion");

var contenedorResultados = document.getElementById("resultados");

var contadorTotalProductos = 0;

var dataArticuloFiltro;
var categoriasUnicas;
var marcasUnicas;
var productosUnicos;
var resultados;


  var modal = document.getElementById("myModal");
  var modalDelete = document.getElementById("myModalDelete");
  var modalMensaje = document.getElementById("myModalmMensaje");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

            

            // When the user clicks on <span> (x), close the modal
            for (let index = 0; index < span.length; index++) {
                
            
            span[index].onclick = function() {
                modal.style.display = "none";
                modalDelete.style.display = "none";
                modalMensaje.style.display = "none";
                document.body.style.overflow = "auto" ;
            }
        }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal || event.target == modalDelete || event.target == modalMensaje) {
                    modalDelete.style.display = "none";
                    modal.style.display = "none";
                    modalMensaje.style.display = "none";
                    document.body.style.overflow = "auto" ;
                }
            }


/* ********************* */
/* click tipo de usuario */
/* ********************* */
for (let i = 0; i < select_tipo.length; i++) {
    select_tipo[i].addEventListener("click", onReactionClickTipo);
}

function onReactionClickTipo() {
    
    for (let i = 0; i < select_tipo.length; i++) {
        select_tipo[i].classList.remove("active");
    }
    
    this.classList.add("active");
    const tipoCliente_compra =  this.dataset.value;

    
    /* filtro todos los Articulos por tipo de usuario*/
    dataArticuloFiltro =  productos.filter(
        function(data){
            return data.clientes.toLowerCase().includes(tipoCliente_compra.toLowerCase())
        }
    );

    /**********************/
    /* categorias unicas */  
    /**********************/
    var categorias = {};    
    categoriasUnicas = dataArticuloFiltro.filter(function (e) { 
        return categorias[e.categoria.toLowerCase()] ? false : (categorias[e.categoria.toLowerCase()] = true);
    });


    
    limpiaSelects();

    contenedor_titulo.innerHTML = "Articulo";
    contenedor_articulos.style.display = "block";


}
/* Fin click tipo de usuario */



/* ****************** */
/* click btn articulo */
/* ****************** */
btn_articulo.addEventListener("click", (e)=>{
if (btn_articulo.dataset.active=="true"){
    let options = document.getElementById("inputsOptions");
    options.innerHTML = "";

    categoriasUnicas.forEach( (articulo)=> {
            console.log(articulo.categoria);
             let div = document.createElement("div");
             div.className = "selectInput articulo";
             div.dataset.value = articulo.categoria;
        div.innerHTML = `
                    <p style="pointer-events: none;">
                            ${articulo.categoria}
                        </p>
                    `;

        options.appendChild(div);
    });

    contenedor_titulo.innerHTML = "Articulo";
   
    /* MODAL */
    modal.style.display = "block";

    
    document.body.style.overflow = "hidden" ;
    option_articulo = document.getElementsByClassName("articulo");

     /* CLICK AL BOTON LIMPIAR */
    Array.prototype.forEach.call(option_articulo, function (articulo) {
        articulo.addEventListener("click", (e)=>{
                
        name_articulo.innerHTML = `
                    ${articulo.dataset.value} <span id="contArt"></span>
                    `;
            /* ACA VA TODO EL FILTRO */

                   var dataMarcas = dataArticuloFiltro.filter(
                                function (data) {
                                    return data.categoria.toLowerCase().includes(articulo.dataset.value.toLowerCase())
                                }
                            );
                        
        let dataTipoProd = {};
            marcasUnicas = dataMarcas.filter(function (e) {
                return dataTipoProd[e.marca.toLowerCase()] ? false : (dataTipoProd[e.marca.toLowerCase()] = true);
            });  


            titMar.style.color = "#ffffff"; 
            btn_marca.style.color = "#ffffff";
            btn_marca.style.border = "1px solid #1F80E6";
            btn_marca.style.backgroundImage = " url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTQ3LDczLjdMNi41LDMzLjJDNC44LDMxLjUsNC41LDI4LjgsNiwyN2MxLjctMi4xLDQuOC0yLjIsNi43LTAuM0w0Nyw2MWMxLjYsMS42LDQuMywxLjYsNS45LDBsMzQuMy0zNC4zICAgYzEuOC0xLjgsNC42LTEuOCw2LjQsMGMxLjgsMS44LDEuOCw0LjYsMCw2LjRMNTMsNzMuN0M1MS4zLDc1LjQsNDguNyw3NS40LDQ3LDczLjd6Ij48L3BhdGg+PC9nPjwvc3ZnPg==)";

            btn_marca.style.cursor = "pointer";
            modal.style.display = "none";
            document.body.style.overflow = "auto" ;

            /* restablece los botones de color */
            titMod.style.color = "#34343480"; 
            btn_producto.style.color = "#343434";
            btn_producto.style.border = "1px solid #343434";
            
            /* resetea los botones */
            btn_articulo.dataset.active = "true";
            btn_marca.dataset.active="true";
            btn_producto.dataset.active="false";
            aplicarArticulo.dataset.active="false";


             btn_marca.innerHTML = `<p id="nameMar" style="margin:0; pointer-events: none;">Marca <span id="countMarca">(${marcasUnicas.length})</span></p>`;

            /* restablece los contenidos  de marca*/        
            btn_producto.innerHTML = ` <p id="nameProd" style="margin:0; pointer-events: none;">Modelo <span id="countModelo">(-)</span></p>`;
            btn_producto.style.cursor = "no-drop";

            aplicarArticulo.style.background = "transparent";
            aplicarArticulo.style.cursor = "no-drop";

        })
    })
}
})


/* ******************* */
/* selecciona la marca */
/* ******************* */
btn_marca.addEventListener("click", (e)=>{
if (btn_marca.dataset.active=="true"){
    contenedor_titulo.innerHTML = "Marca";
    
    let options = document.getElementById("inputsOptions");
    options.innerHTML = "";

    marcasUnicas.forEach( (marca)=> {
            console.log(marca.marca);
             let div = document.createElement("div");
             div.className = "selectInput marca";
             div.dataset.value = marca.marca;
        div.innerHTML = `
                    <p style="pointer-events: none;">
                            ${marca.marca}
                        </p>
                    `;

        options.appendChild(div);
    });

   
    /* MODAL */
    modal.style.display = "block";
    
    document.body.style.overflow = "hidden" ;
    option_marca = document.getElementsByClassName("marca");

     /* CLICK AL BOTON LIMPIAR */
    Array.prototype.forEach.call(option_marca, function (marca) {
        marca.addEventListener("click", (e)=>{
            
        var name_marca = document.getElementById("nameMar");
                
        name_marca.innerHTML = `
                    ${marca.dataset.value} <span id="countMarca"></span>
                    `;
            /* ACA VA TODO EL FILTRO */
            
        productosUnicos = dataArticuloFiltro.filter(
                            function (data) {
                                
                                return data.marca.toLowerCase().includes(marca.dataset.value.toLowerCase())
                            }
                
                            );       
                        
                
            titMod.style.color = "#ffffff"; 
            btn_producto.style.color = "#ffffff";
            btn_producto.style.border = "1px solid #1F80E6";
            btn_producto.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTQ3LDczLjdMNi41LDMzLjJDNC44LDMxLjUsNC41LDI4LjgsNiwyN2MxLjctMi4xLDQuOC0yLjIsNi43LTAuM0w0Nyw2MWMxLjYsMS42LDQuMywxLjYsNS45LDBsMzQuMy0zNC4zICAgYzEuOC0xLjgsNC42LTEuOCw2LjQsMGMxLjgsMS44LDEuOCw0LjYsMCw2LjRMNTMsNzMuN0M1MS4zLDc1LjQsNDguNyw3NS40LDQ3LDczLjd6Ij48L3BhdGg+PC9nPjwvc3ZnPg==)";

            btn_producto.style.cursor = "pointer";
        
            modal.style.display = "none";
            document.body.style.overflow = "auto" ;

            /* resetea los botones */
            btn_articulo.dataset.active = "true";
            btn_marca.dataset.active="true";
            btn_producto.dataset.active="true";
            aplicarArticulo.dataset.active="false";

            /* restablece los contenidos  de marca*/            
            btn_producto.innerHTML = ` <p id="nameProd" style="margin:0; pointer-events: none;">Modelo <span id="countModelo">(${productosUnicos.length})</span></p>`;

            aplicarArticulo.style.background = "transparent";
            aplicarArticulo.style.cursor = "no-drop";
            

        })
    })  
}
})


/* *************************** */
/* selecciona modelo(producto) */
/* *************************** */
btn_producto.addEventListener("click", (e)=>{
if (btn_producto.dataset.active=="true"){
    contenedor_titulo.innerHTML = "Modelo";
    
    let options = document.getElementById("inputsOptions");

    options.innerHTML = "";
    
    productosUnicos.forEach( (producto)=> {
        let div = document.createElement("div");
        div.className = "selectInput producto";
        div.dataset.value = producto.producto;
        div.dataset.precioLista = producto.precio_lista;
        div.dataset.precioClub = producto.precio_club;
        div.dataset.id = producto.id;
        div.innerHTML = `
        <p style="pointer-events: none;">
        ${producto.producto}
        </p>
        `;
        
        options.appendChild(div);
    });
    
    
    /* MODAL */
    modal.style.display = "block";
    aplicarArticulo.style.cursor = "pointer";
    aplicarArticulo.style.background = "#1F80E6";
    aplicarArticulo.dataset.active = true;



    document.body.style.overflow = "hidden" ;

    


    let option_producto = document.getElementsByClassName("producto");

     /* CLICK AL BOTON LIMPIAR */
    Array.prototype.forEach.call(option_producto, function (producto) {
        producto.addEventListener("click", (e)=>{
            
        var name_producto = document.getElementById("nameProd");
        
        name_producto.dataset.precioLista = producto.dataset.precioLista;
        name_producto.dataset.precioClub = producto.dataset.precioClub;
        name_producto.dataset.id = producto.dataset.id;

        name_producto.innerHTML = `
                    ${producto.dataset.value} <span id="countModelo"></span>
                    `;
      
            modal.style.display = "none";
            document.body.style.overflow = "auto" ;
        
        resultados =  productosUnicos.filter(
            function(data){
                return data.id.includes(producto.dataset.id)
            }
        );

        })
    })
}
})

/* ***************************** */
/* agrega el articuo a la lista  */
/* ***************************** */
aplicarArticulo.addEventListener("click", (e)=>{
   
    if (aplicarArticulo.dataset.active=="true"){
         /* restablece los botones de color */
         limpiaSelects();
         contadorTotalProductos++;


        let template = `<div id="resultado-cont${contadorTotalProductos}" style="border-bottom: 1px solid rgb(112, 112, 112); padding: 20px 0;">
                <div class="datos" style="color: white;display: flex;justify-content: space-between;">
                    <div>
                        <span>
                            ${resultados[0].categoria}
                        </span>
                        <h2>
                           ${resultados[0].marca.trim()}
                        </h2>
                        <p>${resultados[0].producto}</p>
                    </div>

                    <div style="display: flex;"> 
                        <div style="width: 214px;height: 90px;border-radius: 6px 6px 0px 0px;opacity: 1;color: white;">
                            <p
                                style="padding:10px 20px 0 20px;margin: 0;text-align: left;font: normal normal 400 14px/24px Roboto;letter-spacing: 0px;color: #707070;opacity: 1;">
                                Precio Lista
                            </p>
                            <h2 
                                style="padding:10px 20px 0 20px;margin: 0;text-align: left;font: normal normal 400 32px/24px Roboto; font-weight: 200; letter-spacing: 0px;color: #ffffff;opacity: 1;">
                                $ ${formatNumber(resultados[0].precio_lista)}</h2>
                        </div>
                        <div style="width: 214px;height: 90px;border-radius: 6px 6px 0px 0px;opacity: 1;color: white;">
                            <p
                                style="padding:10px 20px 0 20px;margin: 0;text-align: left;font: normal normal 400 14px/24px Roboto;letter-spacing: 0px;color: #707070;opacity: 1;">
                                Descuento
                            </p>
                            <h2 id="resultado-ahorro${contadorTotalProductos}" data-precio="${resultados[0].precio_lista - resultados[0].precio_club}"
                                style="padding:10px 20px 0 20px;margin: 0;text-align: left;font: normal normal 400 32px/24px Roboto; font-weight: 200; letter-spacing: 0px;color: #ffffff;opacity: 1;">
                                $ ${formatNumber(resultados[0].precio_lista - resultados[0].precio_club) }</h2>
                        </div>
                    </div>


                </div>
                <div class="beneficio">
                    <div style="display: flex; justify-content: flex-end;">
                        <div style="width: 214px;height: 90px;border-radius: 6px 6px 0px 0px;opacity: 1;color: white;">
                            <p style="padding:10px 20px 0 20px;margin: 0;text-align: left;font: normal normal 400 14px/24px Roboto;letter-spacing: 0px;color: #707070;opacity: 1;">
                                Precio Holcim
                            </p>
                            <h2  style="padding:10px 20px 0 20px;margin: 0;text-align: left;font: normal normal 400 32px/24px Roboto; font-weight: 200; letter-spacing: 0px;color: #ffffff;opacity: 1;">
                                $ ${formatNumber(resultados[0].precio_club)}</h2>
                        </div>
                        <div style="width: 214px;height: 90px;border-radius: 6px 6px 0px 0px;opacity: 1;color: white;">
                            <p style="padding:10px 20px 0 20px;margin: 0;text-align: left;font: normal normal 400 14px/24px Roboto;letter-spacing: 0px;color: #707070;opacity: 1;">
                                Beneficio
                            </p>
                            <h2  id="resultado-total${contadorTotalProductos}" class="resultadoAsumarAhorro"
                                style="padding:10px 20px 0 20px;margin: 0;text-align: left;font: normal normal 400 32px/24px Roboto; font-weight: 200; letter-spacing: 0px;color: #50DE36;opacity: 1;">
                                $ ${formatNumber(resultados[0].precio_lista - resultados[0].precio_club)}</h2>
                        </div>
                    </div>

                </div>
                <div class="botones">
                    <div style="margin-bottom: 15px; display: inline-flex; justify-content: space-around;align-items: baseline;width: 164px;padding:20px 0;border: 1px solid #207fe6;border-radius: 6px;text-align: center;font: normal normal 500 16px/19px Roboto;letter-spacing: 0px;color: #FFFFFF;opacity: 1; background: #000000;">
                        <p style="padding: 0; margin: 0; font: normal normal 400 10px Roboto;">Cantidad</p>
                        <input  type="number" data-tot="${contadorTotalProductos}" placeholder="Ingrese Cantidad" value="1" class="inputNumx" name=inputnum min="1" required autocomplete="off" style="width: 30%;border: unset!important;text-align: center;font: normal normal 500 16px/19px Roboto;letter-spacing: 0px;color: #FFFFFF;opacity: 1; background: #000000;">
                    </div>    
                    <input class="verDetalles" type="button" value="Ver detalles" data-marca="${resultados[0].marca.trim()}" data-mod="${resultados[0].producto}" data-descrip="${resultados[0].descripcion}"
                        style="cursor:pointer; width: 188px;padding:20px 0;border: 1px solid #207fe6;border-radius: 6px;text-align: center;font: normal normal 500 16px/19px Roboto;letter-spacing: 0px;color: #FFFFFF;opacity: 1; background: #000000;">
                    <input class="eliminarProducto" type="button" data-marca="${resultados[0].marca.trim()}" data-mod="${resultados[0].producto}" data-id="resultado-cont${contadorTotalProductos}" value="Eliminar de la lista"
                            style="cursor:pointer; float:right;border: 1px solid #E71618; width: 200px;padding:20px 0;border-radius: 6px;text-align: center;font: normal normal 500 16px/19px Roboto;letter-spacing: 0px;color: #FFFFFF;opacity: 1;background-color: #E71618;">
                </div>
            </div>`;
    
        let div = document.createElement("div");
             div.className = "resultado-cont";
             div.dataset.id = resultados.id;
            div.innerHTML = template;
        
        contenedorResultados.appendChild(div);

        contenedorResultados.style.display = "block";

        const eliminarProducto = document.getElementsByClassName("eliminarProducto"); 


        /* borrar productos */
        Array.prototype.forEach.call(eliminarProducto, function (btnDelete) {
            btnDelete.addEventListener("click", (e)=>{
                 /* MODAL */
                modalDelete.style.display = "block";
                document.body.style.overflow = "hidden" ;
                option_articulo = document.getElementsByClassName("articulo");
                window['eliminarDefinitivo'].dataset.id = btnDelete.dataset.id;
                window["articuloNameMod"].innerHTML = btnDelete.dataset.mod.toLowerCase();

            })
        })

        const btnDescripcion = document.getElementsByClassName('verDetalles')
         /* Ver detalles */
        Array.prototype.forEach.call(btnDescripcion, function (btnMensaje) {
            btnMensaje.addEventListener("click", (e)=>{
                 /* MODAL */
                modalMensaje.style.display = "block";
                document.body.style.overflow = "hidden";

                window['descripcionTitulo'].innerHTML = btnMensaje.dataset.marca;
                window['descripcionModelo'].innerHTML = btnMensaje.dataset.mod;
                window['descripcionDescripcion'].innerHTML = btnMensaje.dataset.descrip;
            
            })
        })

        const inputNum = document.getElementsByClassName('inputNumx');
        
         /* calcular costos */
        Array.prototype.forEach.call(inputNum, function (inputN) {
            inputN.addEventListener("keyup", (e)=>{
                
                let to = 0 ;
                if (inputN.value>0) {
                    to = window["resultado-ahorro"+inputN.dataset.tot].dataset.precio
                    window["resultado-total"+inputN.dataset.tot].innerHTML = `$ ${formatNumber(to * inputN.value)}`;
                    totaahorro();
                    totalEstimado();                    
                }

            })
        })

        /* mostrar resultados */
        resultadoTotal.style.display = "block";
        contenedor_articulos.style.display = "none";
        agregar_otro.style.display = "flex";
        totaahorro();
        totalEstimado();                    

    }
   
})

/* eliminar definitivo */
const btnDeleteDef = document.getElementById('eliminarDefinitivo')

btnDeleteDef.addEventListener("click", (e)=>{
    /* MODAL */
    let divDelete = document.getElementById(btnDeleteDef.dataset.id);
    
    divDelete.parentNode.removeChild(divDelete); 
    totaahorro();
    totalEstimado();                    
    
    modalDelete.style.display = "none";
    document.body.style.overflow = "auto" ;
})


/* ********************* */
/* agregar otro elemento */
const agregar_otro = document.getElementById('agregar-otro');
const btn_nuevoArticulo = document.getElementById('btn-nuevoArticulo');
const btn_ocultar = document.getElementById('ocultar');

agregar_otro.addEventListener("click", (e)=>{
    /* MODAL */
    btn_nuevoArticulo.style.display = "flex";
    btn_nuevoArticulo.style.justifyContent = "space-between";
    btn_ocultar.style.display = "flex";
    aplicarArticulo.style.width = "47%";
    contenedor_articulos.style.display = "block";
    agregar_otro.style.display = "none";

})

btn_ocultar.addEventListener("click", (e)=>{
    /* MODAL */
    contenedor_articulos.style.display = "none";
    agregar_otro.style.display = "flex";
    limpiaSelects();

})


function limpiaSelects(){
   titMar.style.color = "#34343480"; 
    btn_marca.style.color = "#343434";
    btn_marca.style.border = "1px solid #343434";
    titMod.style.color = "#34343480"; 
    btn_producto.style.color = "#343434";
    btn_producto.style.border = "1px solid #343434";
    
    /* resetea los botones */
    btn_articulo.dataset.active = "true";
    btn_marca.dataset.active="false";
    btn_producto.dataset.active="false";
    aplicarArticulo.dataset.active="false";


    /* restablece los contenidos  de marca*/
    btn_marca.innerHTML = `<p id="nameMar" style="margin:0; pointer-events: none;">Marca <span id="countMarca">(-)</span></p>`;
    btn_marca.style.cursor = "no-drop";
    btn_marca.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMzQzNDM0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTQ3LDczLjdMNi41LDMzLjJDNC44LDMxLjUsNC41LDI4LjgsNiwyN2MxLjctMi4xLDQuOC0yLjIsNi43LTAuM0w0Nyw2MWMxLjYsMS42LDQuMywxLjYsNS45LDBsMzQuMy0zNC4zICAgYzEuOC0xLjgsNC42LTEuOCw2LjQsMGMxLjgsMS44LDEuOCw0LjYsMCw2LjRMNTMsNzMuN0M1MS4zLDc1LjQsNDguNyw3NS40LDQ3LDczLjd6Ij48L3BhdGg+PC9nPjwvc3ZnPg==)";
    
    btn_producto.innerHTML = ` <p id="nameProd" style="margin:0; pointer-events: none;">Modelo <span id="countModelo">(-)</span></p>`;
    btn_producto.style.cursor = "no-drop";
    btn_producto.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMzQzNDM0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTQ3LDczLjdMNi41LDMzLjJDNC44LDMxLjUsNC41LDI4LjgsNiwyN2MxLjctMi4xLDQuOC0yLjIsNi43LTAuM0w0Nyw2MWMxLjYsMS42LDQuMywxLjYsNS45LDBsMzQuMy0zNC4zICAgYzEuOC0xLjgsNC42LTEuOCw2LjQsMGMxLjgsMS44LDEuOCw0LjYsMCw2LjRMNTMsNzMuN0M1MS4zLDc1LjQsNDguNyw3NS40LDQ3LDczLjd6Ij48L3BhdGg+PC9nPjwvc3ZnPg==)";

    aplicarArticulo.style.background = "transparent";
    aplicarArticulo.style.cursor = "no-drop";
    name_articulo.innerHTML = `
            Articulos <span id="contArt">(${categoriasUnicas.length})</span>
    `;
}

 /* total ahorro */
function totaahorro() {
    
    let totalEstimado = 0;
    
    let resultadoAhorro = document.getElementsByClassName("resultadoAsumarAhorro")
    for (let index = 0; index < resultadoAhorro.length; index++) {
        console.log(resultadoAhorro[index].innerHTML, vol_promedio_compra_mes.value);
        totalEstimado += parseFloat(resultadoAhorro[index].innerHTML.trim().replace(/,/g, "").substring(2, resultadoAhorro[index].innerHTML.length));
    }


    window["holcimahorroAnual"].innerHTML = "$ " + formatNumber(totalEstimado); 
    window["holcimahorroTone"].innerHTML = "$ " + formatNumber(totalEstimado / vol_promedio_compra_mes.value); 

    
    
}