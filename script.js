// নোটিশ ডেটা লোড করার ফাংশন
async function loadCSTNotices() {
    const grid = document.getElementById('notice-grid');

    try {
        // এখানে আপনার ব্যাকেন্ড API লিঙ্ক হবে: /api/notices
        // এখন আমরা ডেমো ডেটা ব্যবহার করছি
        const notices = [
            { title: "CST Workshop on AI", date: "Dec 28, 2025", desc: "Join us for a specialized workshop on Artificial Intelligence in the CST Lab." },
            { title: "Semester Break Notice", date: "Dec 30, 2025", desc: "The department will remain closed for the winter holidays starting next week." },
            { title: "New Lab Equipment Arrival", date: "Jan 05, 2026", desc: "New high-performance workstations have been installed in Lab 3." }
        ];

        grid.innerHTML = ''; // লোডিং মেসেজ মুছে ফেলা

        notices.forEach(item => {
            const card = `
                <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition shadow-lg">
                    <span class="text-xs font-bold text-blue-400 uppercase">${item.date}</span>
                    <h3 class="text-xl font-bold text-white mt-2">${item.title}</h3>
                    <p class="text-slate-400 text-sm mt-3">${item.desc}</p>
                    <button class="mt-4 text-blue-400 text-sm font-semibold hover:underline">See More</button>
                </div>
            `;
            grid.innerHTML += card;
        });
    } catch (err) {
        grid.innerHTML = '<p class="text-red-500">Failed to load notices!</p>';
    }
}

// পেজ লোড হলে ফাংশনটি চলবে
document.addEventListener('DOMContentLoaded', loadCSTNotices);
