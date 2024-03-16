const name = document.getElementById("name");
const firsSurname = document.getElementById("first_surname");
const seconeSurname = document.getElementById("second_surname");
const btnSave = document.getElementById("save");

const result = document.getElementById("result");


btnSave.addEventListener('click',()=>{

    if (name.value.length == 0 || firsSurname.value === '' || seconeSurname.value.length == 0) {
        console.log("You should full all the fields.")
        alert("You should full all the fields.");
    }else{
        const datos = name.value + firsSurname.value + seconeSurname.value;
        // document.cookie = datos;
        const fecha = new Date();

            fecha.setDate(fecha.getDate() + 3);
        document.cookie = datos +';' + 'expires=' + fecha.toUTCString();
        // mostrar datos finales

        result.value = document.cookie;

    }
})