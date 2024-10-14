document.addEventListener('DOMContentLoaded', () => {
    // Function to show project details
    function showProjectDetails(title, projectFiles, projectNames) {
        // Set the title
        document.getElementById('LAB1').innerText = title;
        
        // Clear the project list and then add the files
        const projectList = document.getElementById('LAB2');
        projectList.innerHTML = ''; // Clear previous entries
        
        projectFiles.forEach((file, index) => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = file;  // Add correct URL or file download link here
            link.textContent = projectNames[index];  // Project name
            li.appendChild(link);
            projectList.appendChild(li);
        });

        // Show the project details
        const projectDetails = document.getElementById('project-details');
        projectDetails.classList.remove('hidden');
        projectDetails.style.display = 'block'; // Ensure it's shown

        // Center the modal
        centerElement(projectDetails);
    }

    // Function to close project details
    function closeProjectDetails() {
        const projectDetails = document.getElementById('project-details');
        projectDetails.style.display = 'none'; // Hide the modal
    }

    // Function to show experience details
    // Show the experience details
function showExperienceDetails(title, company, date, responsibilities) {
    // Populate the experience details
    document.getElementById('job-title').innerText = title;
    document.getElementById('company-name').innerText = company;
    document.getElementById('job-date').innerText = date;
    document.getElementById('job-responsibilities').innerText = responsibilities;

    // Show the experience details section
    document.getElementById('experience-details').classList.remove('hidden');
}

// Close the experience details modal
function closeExperienceDetails() {
    document.getElementById('experience-details').classList.add('hidden');
}


    // Function to close experience details
    function closeExperienceDetails() {
        const experienceDetails = document.getElementById('experience-details');
        experienceDetails.style.display = 'none'; // Hide the modal
    }

    // Function to center elements on the page
    function centerElement(element) {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const elementHeight = element.offsetHeight;
        const elementWidth = element.offsetWidth;

        element.style.position = 'fixed';
        element.style.top = `${(windowHeight - elementHeight) / 2}px`;
        element.style.left = `${(windowWidth - elementWidth) / 2}px`;
    }

    // Make the functions globally accessible
    window.showProjectDetails = showProjectDetails;
    window.closeProjectDetails = closeProjectDetails;
    window.showExperienceDetails = showExperienceDetails;
    window.closeExperienceDetails = closeExperienceDetails;
});
