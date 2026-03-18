document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const processingArea = document.getElementById('processing-area');
    const progressFill = document.getElementById('progress-fill');
    const extractedDataContainer = document.getElementById('extracted-data');
    const launchBtn = document.getElementById('launch-workflow');

    let totalAmount = 0;
    let documentsAnalyzed = 0;

    // Drag and drop setup
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, () => {
            uploadArea.classList.add('dragover');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, () => {
            uploadArea.classList.remove('dragover');
        });
    });

    uploadArea.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    });

    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        if(files.length > 0) {
            startSimulatedProcessing(files[0].name);
        }
    }

    function startSimulatedProcessing(filename) {
        // Swap UI
        uploadArea.classList.add('hidden');
        processingArea.classList.remove('hidden');
        progressFill.style.width = '0%';

        // Simulate AI Processing
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if(progress > 100) progress = 100;
            
            progressFill.style.width = `${progress}%`;
            
            if(progress === 100) {
                clearInterval(interval);
                setTimeout(() => finishProcessing(filename), 500);
            }
        }, 300);
    }

    function finishProcessing(filename) {
        // Return to upload state (ready for more)
        processingArea.classList.add('hidden');
        uploadArea.classList.remove('hidden');

        // Inject fake extracted data
        addExtractedData(filename);
    }

    function addExtractedData(filename) {
        // Clear empty state if exists
        const emptyState = extractedDataContainer.querySelector('.empty-state');
        if(emptyState) {
            emptyState.remove();
            extractedDataContainer.classList.remove('empty');
        }

        // Generate fake data for demonstration
        const companies = ['Tech Nova Solutions', 'CyberData Systems', 'Global Reach Media', 'Agile Construct'];
        const company = companies[Math.floor(Math.random() * companies.length)];
        const amount = (Math.random() * 5000 + 500).toFixed(2);
        
        // Update stats
        totalAmount += parseFloat(amount);
        documentsAnalyzed++;
        updateStats();

        // Create HTML element
        const div = document.createElement('div');
        div.className = 'data-item';
        div.innerHTML = `
            <div class="data-row">
                <span class="data-label">Fichier</span>
                <span class="data-value">${filename}</span>
            </div>
            <div class="data-row">
                <span class="data-label">Client</span>
                <span class="data-value">${company}</span>
            </div>
            <div class="data-row">
                <span class="data-label">Montant à recouvrer</span>
                <span class="data-value amount">${amount.replace('.', ',')} €</span>
            </div>
             <div class="data-row">
                <span class="data-label">Adresse extraite</span>
                <span class="data-value">124 Avenue de l'Innovation, 75001 Paris</span>
            </div>
        `;
        
        // Add to top of list
        extractedDataContainer.insertBefore(div, extractedDataContainer.firstChild);

        // Enable Launch Button
        launchBtn.classList.remove('disabled');
        launchBtn.disabled = false;
    }

    function updateStats() {
        document.querySelectorAll('.stat-value')[0].textContent = totalAmount.toFixed(2).replace('.', ',') + ' €';
        document.querySelectorAll('.stat-value')[1].textContent = documentsAnalyzed;
    }

    launchBtn.addEventListener('click', () => {
        // Simple success animation
        launchBtn.innerHTML = '<i class="ri-check-line"></i> Relance Programmée !';
        launchBtn.classList.add('btn-success');
        launchBtn.style.background = 'var(--success)';
        document.querySelectorAll('.stat-value')[2].textContent = documentsAnalyzed;

        setTimeout(() => {
            launchBtn.innerHTML = '<i class="ri-rocket-line"></i> Lancer le workflow de relance';
            launchBtn.style.background = '';
            // Don't reset everything, just button state, to show it was processed.
        }, 3000);
    });
});
