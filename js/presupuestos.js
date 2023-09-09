var total;
var pediatria;
var dermatologia;
var traumotologia;

total = prompt("Cuanto es el presupuesto de el area de salud", "");
total = parseFloat(total);
if (!(isNaN(total))) { //Evalua si es un numero si es un numero lo hace y si no es un numero pasa al else

    var porcentajePresupuestoPediatria = parseFloat((total / 100) * 25);
    var porcentajePresupuestoDermatologia = parseFloat((total / 100) * 50);
    var porcentajePresupuestoTraumotologia = parseFloat((total / 100) * 25);

    pediatria = (total * 25) / 100;
    dermatologia = (total * 50) / 100;
    traumotologia = (total * 25) / 100;

    document.write(`
    <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kind_beim_arzt.JPEG/800px-Kind_beim_arzt.JPEG" class="card-img-top" alt="Imagen 1">
                <div class="card-body">
                    <h5 class="card-title">Pediatria</h5>
                    <p class="card-text">Este es el presupuesto para pediatria este año :${pediatria}$ y es el ${porcentajePresupuestoPediatria}%</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Dermatolog%C3%ADa_Quir%C3%BArgica.jpg/800px-Dermatolog%C3%ADa_Quir%C3%BArgica.jpg" class="card-img-top" alt="Imagen 2">
                <div class="card-body">
                    <h5 class="card-title">Dermatologia</h5>
                    <p class="card-text">Este es el presupuesto para dermatologia este año : ${dermatologia}$ y es el ${porcentajePresupuestoDermatologia}%</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Imagen_Bob_025.jpg/1024px-Imagen_Bob_025.jpg" class="card-img-top" alt="Imagen 3">
                <div class="card-body">
                    <h5 class="card-title">Traumologia</h5>
                    <p class="card-text">Este es el presupuesto para traumologia este año :${traumotologia}$ y es el ${porcentajePresupuestoTraumotologia}%</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    `);


}
else {
    document.write(`
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1>Y usted pa que chuchas escribe algo que no es un numero?</h1>
                <h4>Bueno aqui este video solo porque si mirelo si quiere</h4>
                <div class="embed-responsive embed-responsive-16by9">
                    
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IMQWfMBc5nQ?si=xVPLiAnGhsNqSl3_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
            </div>
        </div>
    </div>
`);
}

