// skills array to reduce redundant code
const skillsArray = [
    {
        id:1,
        title: "Cybersecurity",
        skills: [
            "Pentesting",
            "Malware Reverse Engineering",
            "Web and Cloud Security"
        ]
    },
    {
        id:2,
        title: "Systems Programming",
        skills: [
            "C, C++, Rust Proficiency",
            "RISC-V",
            "Operating Systems Experience"
        ]
    },
    {
        id:3,
        title: "Web Development",
        skills: [
            "HTML",
            "CSS/SCSS",
            "Javascript"
        ]
    },
    {
        id:4,
        title: "Scripting",
        skills: [
            "Bash",
            "Python",
        ]
    },
    {
        id:5,
        title: "Linux",
        skills: [
            "Ubuntu",
            "Kali",
            "Bare Metal Server"
        ]
    },
]

// Pass in a skillsArray object and create HTML
function createSkillCard(skill) {
    return `
        <div class="skills-card">
            <h3>${skill.title}</h3>
            <ul class="skill-list">
                ${skill.skills.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Function to render all skills to the page
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    
    if (skillsGrid) {
        // Clear existing content (removes the placeholder cards)
        skillsGrid.innerHTML = '';
        
        // Generate HTML for all skills
        const skillsHTML = skillsArray.map(skill => createSkillCard(skill)).join('');
        
        // Insert into the page
        skillsGrid.innerHTML = skillsHTML;
        
        console.log(`Loaded ${skillsArray.length} skill categories`);
    } else {
        console.error('Could not find .skills-grid element');
    }
}

// Auto-run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSkills);
} else {
    renderSkills();
}