const downloadButton = document.querySelector('.download_button');
const loading = document.querySelector('.loading-image');


downloadButton.addEventListener('click', function(){
    downloadButton.classList.toggle("ocultar");
    loading.classList.toggle("actived");
    setTimeout(() => {
      fetch('http://144.126.212.48:1103/api/docs/gen-doc')
      .then(response => response.blob())
      .then(blob => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `${Math.random()}.pdf`;

      downloadLink.click();

      URL.revokeObjectURL(downloadLink.href);
      }).catch(error => {
      console.error('Error al descargar el archivo PDF:', error);
      });

      loading.classList.remove("actived");
      downloadButton.classList.remove("ocultar");
    }, 3000)
});