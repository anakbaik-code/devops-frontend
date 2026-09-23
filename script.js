document.getElementById('btnFetch').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Memuat data dari backend...";

    try {
        // Panggil relatif ke domain/host yang sedang dibuka browser (localhost)
        const response = await fetch('/api/hello'); 
        
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        resultDiv.innerHTML = `
            <strong>Status:</strong> ${data.status}<br>
            <strong>Pesan:</strong> ${data.message}<br>
            <strong>Waktu Server:</strong> ${data.timestamp}
        `;
    } catch (error) {
        resultDiv.innerHTML = `<span style="color:red">Error: ${error.message}</span>`;
    }
});