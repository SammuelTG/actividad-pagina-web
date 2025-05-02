//<script>

document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('foto-archivo');
    const fileName = document.getElementById('file-name');
    const publicarBtn = document.getElementById('publicar-btn');
    const previewContainer = document.getElementById('imagen-preview-container');
    const imagenPreview = document.getElementById('imagen-preview');
    
    // Elementos para mostrar la metadata
    const previewTitulo = document.getElementById('preview-titulo');
    const previewSubtitulo = document.getElementById('preview-subtitulo');
    const previewMetadata = document.getElementById('preview-metadata');
    const previewDescripcion = document.getElementById('preview-descripcion');

    // Mostrar nombre de archivo y previsualización
    fileInput.addEventListener('change', function(e) {
        if(this.files && this.files[0]) {
            fileName.textContent = this.files[0].name;
            
            // Crear previsualización de la imagen
            const reader = new FileReader();
            reader.onload = function(event) {
                imagenPreview.src = event.target.result;
                
                // Mostrar datos básicos inmediatamente
                const titulo = document.getElementById('foto-titulo').value || 'Sin título';
                previewTitulo.textContent = titulo;
                previewContainer.style.display = 'block';
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    // Procesar al hacer clic en PUBLICAR
    publicarBtn.addEventListener('click', function() {
        if(!fileInput.files || !fileInput.files[0]) {
            alert('Por favor selecciona una imagen');
            return;
        }
        
        // Obtener todos los valores del formulario
        const titulo = document.getElementById('foto-titulo').value || 'Sin título';
        const camara = document.getElementById('foto-camara').value;
        const software = document.getElementById('foto-software').value;
        const tecnica = document.getElementById('foto-tecnica').value;
        const descripcion = document.getElementById('foto-descripcion').value;
        
        // Mostrar toda la información en el preview
        previewTitulo.textContent = titulo;
        previewSubtitulo.textContent = tecnica || 'Fotografía técnica';
        
        // Construir metadata
        let metadata = [];
        if(camara) metadata.push(`Cámara: ${camara}`);
        if(software) metadata.push(`Software: ${software}`);
        previewMetadata.textContent = metadata.join(' | ');
        
        // Mostrar descripción
        previewDescripcion.textContent = descripcion || '';
        
        // Asegurarse de que el contenedor sea visible
        previewContainer.style.display = 'block';
        
        // Scroll suave a la imagen
        previewContainer.scrollIntoView({ behavior: 'smooth' });
    });
});

//</script>
