function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbxPCX5maUfukYKVQalTG6-U70A3uIreWld1JHCI_Owfj2ev72Cs2lVCMdFS-x1trkZh/exec"

    // Fetch itu kalau gak salah menjemput objek Promise, jadi agar bisa dipakai harus diubah dulu menjadi objek lainnya.
    // Dalam hal ini diubah ke JSON menggunakan json().
    // getElementById.textContent dipakai untuk menambahkan teks ke suatu kontainer dengan Id "app".
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent= d[0].status;
        });

}

// Event listener agar tombol button ketika diklik melaksanakan function testGS()
document.getElementById("btn").addEventListener("click", testGS); 