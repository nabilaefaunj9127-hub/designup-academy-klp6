// ===== SE 1: baca harga paket x jumlah bulan =====
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function hitungBiaya() {
  var pilihan = document.getElementById("paket");
  var harga = parseInt(pilihan.value);
  var namaKelas = pilihan.options[pilihan.selectedIndex].text;
  var jumlah = parseInt(document.getElementById("jumlah").value);
  var kode = document.getElementById("promo").value.trim().toUpperCase();
  var hasil = document.getElementById("hasil");

  if (isNaN(jumlah) || jumlah < 1) {
    hasil.innerHTML = '<span style="color:#b3261e">Masukkan jumlah bulan akses minimal 1.</span>';
    return;
  }

  // Rumus: harga awal = harga paket x jumlah bulan
  var hargaAwal = harga * jumlah;

  // ===== SE 2: logika diskon (if / else) =====
  // Rumus: diskon = harga awal x 10%, total bayar = harga awal - diskon
  var diskon = 0;
  var keterangan = "Tidak ada diskon";

  if (kode === "DESIGN10") {
    diskon = hargaAwal * 0.10;
    keterangan = "Diskon kode DESIGN10 (10%)";
  } else if (jumlah >= 3) {
    diskon = hargaAwal * 0.10;
    keterangan = "Diskon akses 3 bulan atau lebih (10%)";
  } else if (kode !== "") {
    keterangan = "Kode promo tidak berlaku";
  }

  var total = hargaAwal - diskon;

  var baris = 'display:flex;justify-content:space-between;gap:16px;padding:3px 0;';
  hasil.innerHTML =
    '<div style="' + baris + '"><span>Kelas</span><span>' + namaKelas + ' (' + jumlah + ' bulan)</span></div>' +
    '<div style="' + baris + '"><span>Harga awal</span><span>' + formatRupiah(hargaAwal) + '</span></div>' +
    '<div style="' + baris + '"><span>' + keterangan + '</span><span>- ' + formatRupiah(diskon) + '</span></div>' +
    '<div style="' + baris + 'border-top:1px solid #ddddff;margin-top:8px;padding-top:10px;font-size:1.1rem;"><span>Total bayar</span><span>' + formatRupiah(total) + '</span></div>';
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-hitung").addEventListener("click", hitungBiaya);
});
