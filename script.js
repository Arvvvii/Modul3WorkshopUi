document.getElementById('himaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        nama: document.getElementById('nama').value,
        nim: document.getElementById('nim').value,
        dept: document.getElementById('pilihan').value,
        tgl: document.getElementById('tglWawancara').value
    };

    const display = document.getElementById('displayData');
    display.innerHTML = `
        <p><strong>Nama:</strong> ${data.nama}</p>
        <p><strong>NIM:</strong> ${data.nim}</p>
        <p><strong>Pilihan:</strong> ${data.dept}</p>
        <p><strong>Tanggal Wawancara:</strong> ${data.tgl}</p>
    `;

    document.getElementById('resultArea').classList.remove('hidden');
    window.scrollTo(0, document.body.scrollHeight);
});