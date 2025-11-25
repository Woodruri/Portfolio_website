// Projects array to reduce redundant code
const projectsArray = [
    {
        id: 1,
        title: "6502 Emulator",
        description: "asdf",
        image: "",
        tags: ["Rust", "microcontroller architecture"],
        githubLink: "https://github.com/Woodruri/Emulator_6502",
    }
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