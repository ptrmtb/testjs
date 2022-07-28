const url = "https://script.google.com/macros/s/AKfycbxPCX5maUfukYKVQalTG6-U70A3uIreWld1JHCI_Owfj2ev72Cs2lVCMdFS-x1trkZh/exec"

function testGS() {

    // Fetch itu kalau gak salah menjemput objek Promise, jadi agar bisa dipakai harus diubah dulu menjadi objek lainnya.
    // Dalam hal ini diubah ke JSON menggunakan json().
    // getElementById.textContent dipakai untuk menambahkan teks ke suatu kontainer dengan Id "app".

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent= d[0].status;
        });

}


function addGS() {
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit, ini gak butuh sebenernya
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name:"John"}) // body data type must match "Content-Type" header
      })
}

// Event listener agar tombol button ketika diklik melaksanakan function testGS()
document.getElementById("btn").addEventListener("click", testGS); 
document.getElementById("btn2").addEventListener("click", addGS); 