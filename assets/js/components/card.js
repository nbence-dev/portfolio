export function createProjectCard(project) {
  return `
    <div class="bg-[#0d5a69] flex flex-col max-w-sm p-6 border border-gray-200 rounded-lg shadow-md h-full">
      <img class="rounded-lg w-full h-48 object-cover border-2 border-[#d2f4f9]" src="${project.image}" alt="${project.title}" />
      <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-[#062b32]">
        ${project.title}
      </h5>
      <p class="mb-6 text-[#d2f4f9] flex-grow line-clamp-3">
        ${project.description}
      </p>
      <a
        href="${project.link}"
        target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center justify-center text-[white] bg-[#1DC2DE] hover:bg-[#199eb6]  font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none mt-auto"
      >
        View Project
        <svg
          class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </a>
    </div>
  `;
}