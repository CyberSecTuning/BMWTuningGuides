document.getElementById('Coding-Example').addEventListener('click', function() {
    showPDF('pdfs/Coding-Example.pdf');
});

document.getElementById('Tools-Install').addEventListener('click', function() {
    showPDF('pdfs/Tools-Install.pdf');
});

function showPDF(pdfPath) {
    const iframe = document.getElementById('pdf-iframe');
    const pdfViewer = document.getElementById('pdf-viewer');
    iframe.src = pdfPath;
    pdfViewer.style.display = 'block';  // Show the PDF viewer
}