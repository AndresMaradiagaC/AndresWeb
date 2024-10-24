document.getElementById("btn-login").addEventListener("click", login);

function validation(ptext) {
    swal.fire({
        /* icon: "error",*/
        title: "Verificacion de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://embed.lottiefiles.com/animation/62623"></iframe> <br><p>' + ptext + " </p>",
        
    });
}

function login() {
    let user_input = document.getElementById("in-usuario").value;
    let pass_input = document.getElementById("in-contraseña").value;
    let username = "cenfo";
    let password = "123";
    let input = [user_input, pass_input];
    let input_id = ["in-usuario", "in-contraseña"];
    let error_count = 0;
    let text = "";
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Los campos NO pueden estar vacios.";
            validation(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                //icon: "success",
                title: "Inicio de sesion correcto",
                showConfirmButton: false,
                timer: 5275,
                html: '<iframe width="320" height="240" src="https://lottie.host/?file=70147cb1-c22f-4fae-bda6-ad0ac19d7557/g93dssTbge.json"></iframe> <br><br><p>Un momento!</p>',

            }).then(() => {
                window.location.href = "https://ucenfotec.ac.cr/";
            });
        } else {
            text = "Datos invalidos, intentalo nuevamente.";
            validation(text);
        }
    }






}    
