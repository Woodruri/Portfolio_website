// Projects array to reduce redundant code
const projectsArray = [
    {
        id: 1,
        title: "6502 Emulator",
        description: "6502 Microcontroller Emulator for NES Emulation",
        image: "",
        tags: ["Rust", "Microcontroller Architecture"],
        githubLink: "https://github.com/Woodruri/Emulator_6502",
    },
    {
        id: 2,
        title: "Multithreaded Prime Number Filter",
        description: "Highly efficient multithreaded, customizable prime number finder up to any number",
        image: "",
        tags: ["C", "Distributed Computing", "Multithreading"],
        githubLink: "https://github.com/Woodruri/Multi-threaded-primes-sieve",
    },
    {
        id: 3,
        title: "Weather Station Querying Tool",
        description: "Custom tool to scrape weather data",
        image: "",
        tags: ["Python", "Web Scraping", "Data Tool"],
        githubLink: "https://github.com/Woodruri/Daily_weather_project",
    },
    {
        id: 4,
        title: "Shape Net",
        description: "Multi-user drawing board that utilizes custom-made packets",
        image: "",
        tags: ["Python", "Internetworking Protocol", "Multithreading"],
        githubLink: "https://github.com/Woodruri/shape_net",
    },
    {
        id: 5,
        title: "Up or Down",
        description: "Simple C program to determine if a system's stack grows up or down",
        image: "",
        tags: ["C", "Systems Programming"],
        githubLink: "https://github.com/Woodruri/up_or_down",
    },
]

//Pass in a projectArray object
function createProjectCard(Project){
    return `
    <div class="project-card">
        <div class="project-image"></div>
            <div class="project-content">
            <h3>${Project.title}</h3>
            <p>${Project.description}</p>
            <div class="project-tags">
                ${Project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href=${Project.githubLink} target="_blank" rel="noopener noreferrer" class="project-link">Github Link</a>
        </div>
    </div>
    `
}

// Function to render all projects to the page
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (projectsGrid) {
        // Clear existing content (removes the placeholder cards)
        projectsGrid.innerHTML = '';
        
        // Generate HTML for all projects
        const projectsHTML = projectsArray.map(project => createProjectCard(project)).join('');
        
        // Insert into the page
        projectsGrid.innerHTML = projectsHTML;
        
        console.log(`Loaded ${projectsArray.length} projects`);
    } else {
        console.error('Could not find .projects-grid element');
    }
}

// Auto-run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
} else {
    renderProjects();
}