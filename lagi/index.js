function tombol(){
    let pertama = document.getElementById("angka-pertama").value
    let kedua = document.getElementById("angka-kedua").value;
    
    let hasil = parseInt (pertama) + parseInt (kedua);
    
    let div = document.getElementById("hasil")

    div.innerHTML = "hasilnya adalah " + hasil;
}
