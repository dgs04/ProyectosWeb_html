console.log("hola");
//alert("hola desde js!")
//confirm("quieres borrar todo?")
//prompt("Dime tu nombre")
const username = document.getElementById ("username");
const password = document.getElementById ("password");
const login = () => {
    //console.log(username.value, password.value);
    if (username.value === "diego" && password.value === "123"){
        sessionStorage.setItem("name", "Diego Gaitan")
        window.location = "/pages/home.html";
    
    } else{
        alert("credenciales incorrectas")
    }
};
const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", login);
password.addEventListener("keydown", (e) => {if (e.key === "Enter"){
    login()}
})