//mengubah konten html
document.getElementById('judul').innerHTML = "<h1> javaCript </h1>";

//variable
let nama = "Sanjaya";
let umur = 17;
document.getElementById('nama').innerHTML = "Nama saya : "+ nama;
document.getElementById('umur').innerHTML = `umur saya : ${umur} tahun`;

let mahasiswa = ["Christian","Kolin","Savero"];
console.log(mahasiswa);
mahasiswa.forEach( (mhs)=> {
    document.getElementById('mahasiswa').innerHTML += `<li> ${mhs} </li>`;
})

let nilai = [
    {nama : "Kelvin" , nilai : "A" },
    {nama : "Kolin" , nilai : "A" },
    {nama : "Savero" , nilai : "A" },
];

console.log(nilai);
nilai.forEach( (n)=> {
    document.getElementById('nilai').innerHTML += 
    `<tr> 
        <td> ${n.nama} </td>
        <td> ${n.nilai } </td>
    </tr>`;
  
})

// public Api data gempa BMKG
fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json')
.then(respone => respone.json())
.then( data => {
    //console.log(data);
    console.log(data.Infogempa.gempa);
    data.Infogempa.gempa.forEach( (data) => {
    document.getElementById('gempa').innerHTML += `<li>
        ${data.Wilayah} ${data.Tanggal} ${data.Jam} ${data.Potensi}
    </li>`
    })
})

console.log(gempa);
nilai.forEach( (g)=> {
    document.getElementById('gempa').innerHTML += 
    `<tr> 
        <td> ${g.Wilayah} </td>
        <td> ${g.Tanggal} </td>
        <td> ${g.Jam} </td>
        <td> ${g.Potensi} </td>
    </tr>`;
  
})