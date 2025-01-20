// For Header
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); // Show/hide the menu
});

function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
     }

    function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    }

// Fungsi untuk menambahkan bar dengan warna sesuai jumlah
function createSkillBars(containerId, barCount, tooltipText) {
    const container = document.getElementById(containerId);

    for (let i = 0; i < barCount; i++) {
        const barWrapper = document.createElement("div");
        barWrapper.classList.add("relative");

        const bar = document.createElement("div");
        bar.classList.add("w-6", "h-3", "rounded-full");

        // Kondisi untuk menentukan warna
        if (barCount === 5) {
            bar.classList.add("bg-green-500");
        } else if (barCount === 4) {
            bar.classList.add("bg-lime-400");
        } else if (barCount === 3) {
            bar.classList.add("bg-yellow-200");
        } else if (barCount === 2) {
            bar.classList.add("bg-yellow-400");
        } else if (barCount === 1) {
            bar.classList.add("bg-orange-400");
        }

        // Menambahkan tooltip pada bar terakhir
        if (i === barCount - 1) {
            const tooltip = document.createElement("div");
            tooltip.classList.add(
                "absolute",
                "hidden",
                "group-hover:block",
                "bg-black",
                "text-white",
                "text-xs",
                "rounded",
                "py-1",
                "px-2",
                "top-6",
                "-left-2"
            );
            tooltip.textContent = tooltipText;
            barWrapper.appendChild(tooltip);
        }

        barWrapper.appendChild(bar);
        container.appendChild(barWrapper);
    }
}

// Menjalankan fungsi setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
    createSkillBars("skill-bars1", 1, "Expert");
    createSkillBars("skill-bars-modal1", 1, "Expert");

});

// Select container
const containerEdu = document.getElementById('education-container');
const containerExp = document.getElementById('experience-container');
const containerPub = document.getElementById('publication-container');
const containerCer = document.getElementById('certificate-container');
const containerCerVa = document.getElementById('certificate-container-va');

// Function to create and render an education item
function renderEducationItem(container, item) {
    // Create education item
    const educationItem = document.createElement('div');
    educationItem.className = 'mb-8 flex';
    educationItem.innerHTML = `
        <!-- Timeline Dot -->
        <div class="relative">
            <div class="absolute top-0 left-[-8px] w-3 h-3 bg-yellow-400 rounded-full border border-white"></div>
        </div>
        <!-- Content -->
        <div class="ml-10 flex items-start space-x-4">
            <!-- Logo -->
            <img src="${item.img_path}" alt="${item.school} Logo" class="w-12 h-12 rounded-full object-cover">
            <!-- Text Content -->
            <div>
                <p class="text-sm text-white">${item.start_date} - ${item.end_date}</p>
                <h3 class="text-xl font-semibold text-black">${item.school}</h3>
                <p class="text-gray-800">${item.field}</p>
                <p class="mt-2 text-white">Grade: ${item.grade}</p>
                <p class="mt-2 text-white">Thesis: ${item.thesis}</p>
            </div>
        </div>
    `;
    // Append to container
    container.appendChild(educationItem);
}

function renderExperienceItem(container, item) {
    const experienceItem = document.createElement('div');
    experienceItem.innerHTML = `
        <div class="bg-gray-400 shadow-lg rounded-xl p-8 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gray-500">
            <div class="flex items-center border-b border-gray-800 pb-4 mb-4">
                <img src="${item.img_path}" alt="${item.company} Logo" class="w-12 h-12 mr-4 rounded-full shadow-lg">
                <div class="flex-grow">
                    <h3 class="text-2xl font-semibold text-gray-800">${item.title}</h3>
                    <p class="text-sm text-gray-800">${item.company}</p>
                    <p class="text-xs text-gray-700">${item.location} • ${item.type}</p>
                </div>
                <span class="text-sm text-gray-800">${item.period.start} - ${item.period.end}</span>
            </div>
            <div>
                <h4 class="text-lg font-medium text-gray-800 mb-2">Highlights:</h4>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                    ${item.achievements.map(achievement => `
                        <li>${achievement}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    container.appendChild(experienceItem);
}
function renderPublicationItem(container, item) {
    // Function to truncate text
    const truncateText = (text, length = 150) => {
      if (text.length <= length) return text;
      return text.substring(0, length) + '...';
    };
  
    const publicationItem = document.createElement('div');
    publicationItem.innerHTML = `
      <!-- Card -->
    <div class="h-full bg-gray-300 rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
      <div class="p-8">
        <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
        <p class="text-sm text-gray-700 mt-2">Publisher: ${item.journal}</p>
        <p class="text-sm text-gray-700 mt-2">Date: ${item.date}</p>
        
        <!-- Abstract Section -->
        <p class="text-sm font-semibold text-gray-800 mt-4">Abstract:</p>
        <div class="relative">
          <p class="text-sm text-gray-700 mt-2 abstract-short"><i>${truncateText(item.abstract)}</i></p>
          <p class="text-sm text-gray-700 mt-2 abstract-full hidden"><i>${item.abstract}</i></p>
          <button class="text-yellow-600 text-sm mt-1 hover:text-yellow-700 abstract-toggle">View all</button>
        </div>

        <p class="text-sm font-semibold text-gray-700 mt-4">Other Contributor:</p>
        
        <!-- Other Contributors Section -->
        <div class="flex items-center justify-end mt-4">
          ${item.img_path.map((img, index) => `
            <img
              src="${img}"
              alt="Contributor ${index + 1}"
              class="w-10 h-10 rounded-full border-2 bg-white shadow-lg ${index > 0 ? '-ml-2' : ''}"
            >
          `).join('')}
        </div>

        <!-- Button -->
        <div class="flex justify-end mt-4">
          <a 
            href="${item.doi}" 
            target="_blank"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-yellow-400 border rounded-lg hover:bg-yellow-700"
          >
            Show credential
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="w-4 h-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    `;
  
    // Add click event listener for abstract toggle
    const toggleBtn = publicationItem.querySelector('.abstract-toggle');
    const shortAbstract = publicationItem.querySelector('.abstract-short');
    const fullAbstract = publicationItem.querySelector('.abstract-full');
  
    toggleBtn.addEventListener('click', () => {
      shortAbstract.classList.toggle('hidden');
      fullAbstract.classList.toggle('hidden');
      toggleBtn.textContent = toggleBtn.textContent === 'View all' ? 'Show less' : 'View all';
    });
  
    container.appendChild(publicationItem);
  }

function renderCertificateItem(container, containerVa, item, index, totalItems) {
    // Create certificate item for main container (only if index < 3)
    if (index < 3) {
      const certificateItem = document.createElement('li');
      certificateItem.innerHTML = `
        <div class="flex items-center justify-between w-full text-gray-900">
        <div class="flex items-center space-x-4">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img src="${item.img_path}" alt="${item.company} Logo" class="w-12 h-12 rounded-full object-contain">
          </div>
          <!-- Details -->
          <div class="flex flex-col">
            <h3 class="text-lg font-semibold text-gray-800">${item.title}</h3>
            <p class="text-sm font-semibold text-gray-700 mt-2">${item.company}</p>
            <p class="text-sm text-gray-700 mt-2">Issued: ${item.issued}</p>
            <p class="text-sm text-gray-700 mt-2"">Credential ID: ${item.credentialId}</p>
          </div>
        </div>
        <!-- Button -->
        <div class="flex items-center">
          <a 
            href="${item.link}" 
            target="_blank"
            class="inline-flex items-center px-4 py-2 text-sm font-semibold text-black bg-yellow-400 border rounded-lg hover:bg-yellow-700 w-32"
          >
            Show credential
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
      `;
      container.appendChild(certificateItem);
    }
    
    // Create certificate item for modal view (all items)
    const certificateItemVa = document.createElement('li');
    certificateItemVa.innerHTML = `
        <div class="flex items-center justify-between w-full text-gray-900">
        <div class="flex items-center space-x-4">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img src="${item.img_path}" alt="${item.company} Logo" class="w-12 h-12 rounded-full object-contain">
          </div>
          <!-- Details -->
          <div class="flex flex-col">
            <h3 class="text-lg font-semibold text-gray-800">${item.title}</h3>
            <p class="text-sm font-semibold text-gray-700 mt-2">${item.company}</p>
            <p class="text-sm text-gray-700 mt-2">Issued: ${item.issued}</p>
            <p class="text-sm text-gray-700 mt-2"">Credential ID: ${item.credentialId}</p>
          </div>
        </div>
        <!-- Button -->
        <div class="flex items-center">
          <a 
            href="${item.link}" 
            target="_blank"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-yellow-400 border rounded-lg hover:bg-yellow-700"
          >
            Show credential
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
      `;
    containerVa.appendChild(certificateItemVa);
}

// Fetch JSON data
fetch('data/dataEducation.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            // Use the function to render each education item
            renderEducationItem(containerEdu, item);
        });
    })
    .catch(error => console.error('Error loading data:', error));

fetch('data/dataExperience.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            // Use the function to render each experience item
            renderExperienceItem(containerExp, item);  // Changed from renderEducationItem to renderExperienceItem
        });
    })
    .catch(error => console.error('Error loading data:', error));

fetch('data/dataPublication.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            renderPublicationItem(containerPub, item);  // Ini yang benar
        });
    })
    .catch(error => console.error('Error loading data:', error));

    fetch('data/dataCertificate.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach((item, index) => {
        renderCertificateItem(containerCer, containerCerVa, item, index, data.length);
      });
    })
    .catch(error => console.error('Error loading data:', error));




