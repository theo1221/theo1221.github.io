// Timetable data
const timetable = [
    { datetime: "2025-04-01 08:30", subject: "Visual Art 1/2" },
    { datetime: "2025-04-02 08:30", subject: "Chinese 1" },
    { datetime: "2025-04-02 10:45", subject: "Chinese 2" },
    { datetime: "2025-04-03 08:30", subject: "English 1" },
    { datetime: "2025-04-03 11:00", subject: "English 2" },
    { datetime: "2025-04-05 09:15", subject: "English 3" },
    { datetime: "2025-04-07 08:30", subject: "Math 1" },
    { datetime: "2025-04-07 11:30", subject: "Math 2" },
    { datetime: "2025-04-08 08:30", subject: "CS" },
    { datetime: "2025-04-09 08:30", subject: "Ethics & Religious 1" },
    { datetime: "2025-04-09 11:00", subject: "Ethics & Religious 2" },
    { datetime: "2025-04-10 08:30", subject: "Chemistry 1" },
    { datetime: "2025-04-10 11:45", subject: "Chemistry 2" },
    { datetime: "2025-04-11 08:30", subject: "Health & Social Care 1" },
    { datetime: "2025-04-11 11:15", subject: "Health & Social Care 2" },
    { datetime: "2025-04-12 08:30", subject: "ICT 1" },
    { datetime: "2025-04-12 11:15", subject: "ICT 2" },
    { datetime: "2025-04-14 08:30", subject: "Biology 1" },
    { datetime: "2025-04-14 11:45", subject: "Biology 2" },
    { datetime: "2025-04-15 08:30", subject: "BAFS 1" },
    { datetime: "2025-04-15 10:15", subject: "BAFS 2" },
    { datetime: "2025-04-16 08:30", subject: "Physics 1" },
    { datetime: "2025-04-16 11:45", subject: "Physics 2" },
    { datetime: "2025-04-17 08:30", subject: "DAT 1" },
    { datetime: "2025-04-17 11:15", subject: "DAT 2" },
    { datetime: "2025-04-17 08:30", subject: "English Literature 1" },
    { datetime: "2025-04-17 13:30", subject: "English Literature 2" },
    { datetime: "2025-04-17 08:30", subject: "Technology & Living 1" },
    { datetime: "2025-04-17 10:45", subject: "Technology & Living 2" },
    { datetime: "2025-04-17 08:30", subject: "Music 1A" },
    { datetime: "2025-04-17 10:45", subject: "Music 1B" },
    { datetime: "2025-04-22 08:30", subject: "Chinese Literature 1" },
    { datetime: "2025-04-22 11:15", subject: "Chinese Literature 2" },
    { datetime: "2025-04-23 08:30", subject: "Physical Education 1" },
    { datetime: "2025-04-23 11:30", subject: "Physical Education 2" },
    { datetime: "2025-04-24 08:30", subject: "Geography 1" },
    { datetime: "2025-04-24 12:00", subject: "Geography 2" },
    { datetime: "2025-04-25 08:30", subject: "Tourism 1" },
    { datetime: "2025-04-25 10:45", subject: "Tourism 2" },
    { datetime: "2025-04-26 08:30", subject: "History 1" },
    { datetime: "2025-04-26 11:15", subject: "History 2" },
    { datetime: "2025-04-28 08:30", subject: "M1 / 2" },
    { datetime: "2025-04-29 08:30", subject: "Chinese History 1" },
    { datetime: "2025-04-29 11:30", subject: "Chinese History 2" },
    { datetime: "2025-04-30 08:30", subject: "Economics 1" },
    { datetime: "2025-04-30 10:15", subject: "Economics 2" }
];

// Function to update countdown timers
function updateCountdowns() {
    const now = new Date().getTime();
    timetable.forEach((item, index) => {
        const countDownDate = new Date(item.datetime).getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownText = distance < 0 ? "EXPIRED" : `${days}d ${hours}h ${minutes}m ${seconds}s`;

        document.getElementById(`timer-${index}`).innerHTML = countdownText;
    });
}

// Function to initialize the timetable
function initializeTimetable() {
    const tbody = document.getElementById('timetable').getElementsByTagName('tbody')[0];
    timetable.forEach((item, index) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerHTML = item.subject;
        cell2.innerHTML = `<span id="timer-${index}"></span>`;
    });

    // Update countdowns every second
    setInterval(updateCountdowns, 1000);
}

// Display the current time
setInterval(() => {
    document.getElementById("currentTime").innerHTML = "而家時間係: " + new Date().toLocaleString();
}, 1000);

// Initialize the timetable on page load
window.onload = initializeTimetable;