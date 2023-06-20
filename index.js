function tombol(){
    let pertama = document.getElementById("angka-pertama").value
    let kedua = document.getElementById("angka-kedua").value;
    
    let hasil = parseInt (pertama) + parseInt (kedua);
    
    document.write("hasilnya adalah " + hasil);
}
