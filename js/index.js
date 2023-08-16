function peringatan(){
    alert("Sudah!");

}

function hitungLuasSegitiga(){
    var alas = document.getElementById('alas-input').value;
    var tinggi = document.getElementById('tinggi-input').value;
    var total = 0.5 * parseInt(alas) * parseInt(tinggi)
    document.getElementById('rumusLuas').innerHTML = "L = 1/2 x a x t"
    document.getElementById('hitungLuas').innerHTML = `L = 1/2 x ${alas} x ${tinggi}`; 
    document.getElementById('hasilLuas').innerHTML = "Luas = " + total;
}

function hitungKelilingSegitiga(){
    var sisi1 = document.getElementById('sisiA-input').value;
    var sisi2 = document.getElementById('sisiB-input').value;
    var sisi3 = document.getElementById('sisiC-input').value;
    var totalKeliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3)
    document.getElementById('rumusKeliling').innerHTML = 'K = S1 + S2 + S3'
    document.getElementById('hitungKeliling').innerHTML = `K = ${sisi1} + ${sisi2} + ${sisi3}`
    document.getElementById('hasilKeliling').innerHTML = "Keliling = " + totalKeliling;
}

function reset(){
    document.getElementById("rumusLuas").innerText=''
    document.getElementById("hitungLuas").innerText=''
    document.getElementById("hasilLuas").innerText=''
    document.getElementById("rumusKeliling").innerText=''
    document.getElementById("hitungKeliling").innerText=''
    document.getElementById("hasilKeliling").innerText=''
    document.getElementById("alas-input").value=''
    document.getElementById("tinggi-input").value=''
    document.getElementById("sisiA-input").value=''
    document.getElementById("sisiB-input").value=''
    document.getElementById("sisiC-input").value=''
    
}