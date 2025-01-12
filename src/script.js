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
        <p class="mt-2 text-white">GPA: ${item.grade}</p>
        <p class="mt-2 text-white">Thesis: ${item.thesis}</p>
      </div>
    </div>
  `;

  // Append to container
  container.appendChild(educationItem);
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





