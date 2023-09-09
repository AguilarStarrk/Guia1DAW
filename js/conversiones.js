function convertirAPies() {
    const metros = parseFloat(prompt("Ingrese la longitud en metros:"));
    let convertirPiesDiv = document.getElementById('convertirPies');
    if (!isNaN(metros)) {
        const pies = metros * 3.28084;
        convertirPiesDiv.innerHTML = `
        La cantidad en metros que insertaste fue ${metros}
        y su conversion a pies fue: ${pies.toFixed(2)} pies`;
    }
    else {
        convertirPiesDiv.innerHTML = 'Webon mamon escriba un numero por favor';

    }
}

function convertirAPulgadas() {
    const metros = parseFloat(prompt("Ingrese la longitud en metros:"));
    let convertirPulgadasDiv = document.getElementById("convertirPulgadas");
    if (!isNaN(metros)) {
        const pulgadas = metros * 39.3701;
        convertirPulgadasDiv.innerHTML = `
        La cantidad en metros que insertaste fue ${metros}
        y su conversion a pulgadas fue: ${pulgadas.toFixed(2)} pulgadas`;
    }
    else {
        convertirPulgadasDiv.innerHTML = 'Webon mamon escriba un numero por favor';

    }
}

function convertirAYardas() {
    const metros = parseFloat(prompt("Ingrese la longitud en metros:"));
    let convertirYardasDiv = document.getElementById("convertirYardas");
    if (!isNaN(metros)) {
        const yardas = metros * 1.09361;
        convertirYardasDiv.innerHTML = `
        La cantidad en metros que insertaste fue ${metros}
        y su conversion a yardas fue: ${yardas.toFixed(2)} yardas`;
    }
    else {
        convertirYardasDiv.innerHTML = 'Webon mamon escriba un numero por favor';

    }
}