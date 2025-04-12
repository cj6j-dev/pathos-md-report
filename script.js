// Check if the user is visiting for the first time
if (!localStorage.getItem('username')) {
    // Prompt for username
    const username = prompt("Enter your username:");
    localStorage.setItem('username', username);
}

// Display the username in the sidebar
document.getElementById('username').textContent = `Username: ${localStorage.getItem('username')}`;

// Load the list of reports dynamically
const reportsList = document.getElementById('reports-list');

// Simulate fetching report file names (You would typically use a server-side solution for this)
const reports = ['report1.html', 'report2.html', 'report3.html']; // Example files in the reports folder

function displayReports() {
    reportsList.innerHTML = '';
    reports.forEach(report => {
        const reportItem = document.createElement('div');
        reportItem.classList.add('report-item');
        reportItem.textContent = report;
        reportItem.onclick = () => openReport(report);
        reportsList.appendChild(reportItem);
    });
}

// Filter reports based on search input
function filterReports() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const reportItems = document.querySelectorAll('.report-item');

    reportItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Open the selected report
function openReport(report) {
    window.open(`reports/${report}`, '_blank');
}

// Initially display the reports
displayReports();
