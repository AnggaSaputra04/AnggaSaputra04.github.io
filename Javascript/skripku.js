function Login(){
    let user = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if(user=="mimin" && pass=="mimin123"){
        alert("Selamat  Datang Mimin, Anda Administrator");
       
       
    } else if(user=="budi" && pass=="budi123"){
        alert("Selamat  Datang Budi, Anda Operator");
    }  
    else{
        alert(" Anda Gagal Login"); 
    }  
}
// alert("Selamat  Datang Budi, Anda Operator");