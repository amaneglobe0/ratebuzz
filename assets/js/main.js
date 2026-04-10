 /**
 * GLOBAL DATA & STATE
 * Moved to top-level scope so all functions can access them.
 */
const myHotel = [
    {
        name: "Grand Heritage",
        room: "Superior Room",
        prices: {
            "1 April": 5200,
            "2 April": 5250,
            "3 April": 5180,
            "4 April": 5300,
            "5 April": 5350,
            "6 April": 5400,
            "7 April": 5450
        },
        otas: [
            {
                name: "Goibibo.com",
                prices: {
                    "1 April": 5100,
                    "2 April": 5150,
                    "3 April": 5080,
                    "4 April": 5200,
                    "5 April": 5250,
                    "6 April": 5300,
                    "7 April": 5350
                }
            },
            {
                name: "Makemytrip.com",
                prices: {
                    "1 April": 5200,
                    "2 April": 5220,
                    "3 April": 5190,
                    "4 April": 5280,
                    "5 April": 5320,
                    "6 April": 5380,
                    "7 April": 5420
                }
            },
            {
                name: "Booking.com",
                prices: {
                    "1 April": 5320,
                    "2 April": 5350,
                    "3 April": 5300,
                    "4 April": 5380,
                    "5 April": 5450,
                    "6 April": 5500,
                    "7 April": 5550
                }
            },
            {
                name: "Agoda.com",
                prices: {
                    "1 April": 5050,
                    "2 April": 5100,
                    "3 April": 5000,
                    "4 April": 5150,
                    "5 April": 5200,
                    "6 April": 5250,
                    "7 April": 5300
                }
            },
            {
                name: "Expedia.com",
                prices: {
                    "1 April": 5010,
                    "2 April": 5050,
                    "3 April": 4990,
                    "4 April": 5100,
                    "5 April": 5150,
                    "6 April": 5200,
                    "7 April": 5250
                }
            }
        ]
    }
];

const hotelGroups = [
    {
        name: "Surya Grand Hotel",
        room: "Superior Room",
        prices: {
            "1 April": 3200,
            "2 April": 3250,
            "3 April": 3180,
            "4 April": 3300,
            "5 April": 3350,
            "6 April": 3400,
            "7 April": 3450
        },
        otas: [
            {
                name: "Goibibo.com",
                prices: {
                    "1 April": 3100, "2 April": 3150, "3 April": 3080,
                    "4 April": 3200, "5 April": 3250, "6 April": 3300, "7 April": 3350
                }
            },
            {
                name: "Makemytrip.com",
                prices: {
                    "1 April": 3200, "2 April": 3220, "3 April": 3190,
                    "4 April": 3280, "5 April": 3320, "6 April": 3380, "7 April": 3420
                }
            },
            {
                name: "Booking.com",
                prices: {
                    "1 April": 3320, "2 April": 3350, "3 April": 3300,
                    "4 April": 3380, "5 April": 3450, "6 April": 3500, "7 April": 3550
                }
            },
            {
                name: "Agoda.com",
                prices: {
                    "1 April": 3050, "2 April": 3100, "3 April": 3000,
                    "4 April": 3150, "5 April": 3200, "6 April": 3250, "7 April": 3300
                }
            },
            {
                name: "Expedia.com",
                prices: {
                    "1 April": 3010, "2 April": 3050, "3 April": 2990,
                    "4 April": 3100, "5 April": 3150, "6 April": 3200, "7 April": 3250
                }
            }
        ]
    },

    {
        name: "Leela Hotel",
        room: "Standard Room",
        prices: {
            "1 April": 4200,
            "2 April": 4250,
            "3 April": 4180,
            "4 April": 4300,
            "5 April": 4350,
            "6 April": 4400,
            "7 April": 4500
        },
        otas: [
            {
                name: "Goibibo.com",
                prices: {
                    "1 April": 4100, "2 April": 4150, "3 April": 4080,
                    "4 April": 4200, "5 April": 4250, "6 April": 4300, "7 April": 4350
                }
            },
            {
                name: "Makemytrip.com",
                prices: {
                    "1 April": 4200, "2 April": 4220, "3 April": 4190,
                    "4 April": 4280, "5 April": 4320, "6 April": 4380, "7 April": 4450
                }
            },
            {
                name: "Booking.com",
                prices: {
                    "1 April": 4320, "2 April": 4350, "3 April": 4300,
                    "4 April": 4380, "5 April": 4450, "6 April": 4500, "7 April": 4550
                }
            },
            {
                name: "Agoda.com",
                prices: {
                    "1 April": 4050, "2 April": 4100, "3 April": 4000,
                    "4 April": 4150, "5 April": 4200, "6 April": 4250, "7 April": 4300
                }
            },
            {
                name: "Expedia.com",
                prices: {
                    "1 April": 4010, "2 April": 4050, "3 April": 3980,
                    "4 April": 4100, "5 April": 4150, "6 April": 4200, "7 April": 4250
                }
            }
        ]
    },

    {
        name: "Heaven Hotel",
        room: "Premium Room",
        prices: {
            "1 April": 12000,
            "2 April": 12150,
            "3 April": 11900,
            "4 April": 12200,
            "5 April": 12400,
            "6 April": 12500,
            "7 April": 12700
        },
        otas: [
            {
                name: "Goibibo.com",
                prices: {
                    "1 April": 11050, "2 April": 11200, "3 April": 10900,
                    "4 April": 11300, "5 April": 11500, "6 April": 11600, "7 April": 11800
                }
            },
            {
                name: "Makemytrip.com",
                prices: {
                    "1 April": 11250, "2 April": 11400, "3 April": 11100,
                    "4 April": 11500, "5 April": 11700, "6 April": 11850, "7 April": 12000
                }
            },
            {
                name: "Booking.com",
                prices: {
                    "1 April": 11150, "2 April": 11300, "3 April": 11050,
                    "4 April": 11450, "5 April": 11650, "6 April": 11800, "7 April": 11950
                }
            },
            {
                name: "Agoda.com",
                prices: {
                    "1 April": 12050, "2 April": 12100, "3 April": 11950,
                    "4 April": 12250, "5 April": 12450, "6 April": 12600, "7 April": 12800
                }
            },
            {
                name: "Expedia.com",
                prices: {
                    "1 April": 12010, "2 April": 12150, "3 April": 11850,
                    "4 April": 12200, "5 April": 12400, "6 April": 12550, "7 April": 12750
                }
            }
        ]
    }
];

const competitors = [
    { name: "Ajanta Hotel", price: 5400, change: 2.1, status: 'up' },
    { name: "BloomRooms Hotel", price: 4850, change: -1.5, status: 'down' },
    { name: "Leela Hotel", price: 6100, change: 0.0, status: 'flat' },
    { name: "Heaven Hotel", price: 4300, change: -3.2, status: 'down' }
];

// Chart Instances
let myChart = null;
let otaChart = null;
let predictionChart = null;

/**
 * INITIALIZATION & AUTH
 */
window.onload = () => {
    loadData();
    if (localStorage.getItem('loggedIn') === 'true') {
        renderApp();
        // Dashboard load hote hi chart dikhega
        setTimeout(initOTACompareChart, 500); 
    }
};

function handleLogin() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    if (u === 'admin' && p === 'admin') {
        localStorage.setItem('loggedIn', 'true');
        renderApp();
    } else {
        alert("Use admin/admin");
    }
}

function handleLogout() {
    localStorage.clear();
    location.reload();
}

function renderApp() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('app-header').classList.remove('hidden');
    document.getElementById('main-scroll-area').classList.remove('hidden');
    document.getElementById('app-nav').classList.remove('hidden');
    renderHome();
}

/**
 * DATA RENDERING
 */
function loadData() {
    // Hum "1 April" ka price default dikhayenge
    const selectedDate = "1 April"; 

    // My Hotel List
    const containerMyHotel = document.getElementById("otaList-myHotel");
    if (containerMyHotel) {
        containerMyHotel.innerHTML = myHotel.map(hotel => `
            <div class="hotel-group">
                <div class="hotel-header">
                    <div class="row" style="border:none; padding: 5px 0;">
                        <div class="ota-details">
                            <div class="ota-name" style="font-size: 1.1rem; color: var(--dark-green);">${hotel.name}</div>
                            <div class="room-type-text">${hotel.room}</div>
                        </div>
                        <div class="price">₹${hotel.prices[selectedDate]}</div>
                    </div>
                </div>
                <div class="ota-items">
                    ${hotel.otas.map(ota => `
                        <div class="row">
                            <div class="ota-details" style="padding-left: 15px;">
                                <div class="ota-name" style="font-weight: 400; font-size: 0.9rem;">${ota.name}</div>
                            </div>
                            <div class="price" style="font-size: 0.95rem;">₹${ota.prices[selectedDate]}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Competitor Group List
    // Competitor Group List
    const containerGroup = document.getElementById("otaList");
    if (containerGroup) {
        containerGroup.innerHTML = hotelGroups.map(group => `
            <div class="hotel-group">
                <div class="hotel-header">
                    <div class="row" style="border:none; padding: 5px 0;">
                        <div class="ota-details">
                            <div class="ota-name" style="font-size: 1.1rem; color: var(--dark-green);">${group.name}</div>
                            <div class="room-type-text">${group.room}</div>
                        </div>
                        <div class="price">₹${group.prices[selectedDate]}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

/**
 * NAVIGATION LOGIC
 */
function switchTab(tabId, el) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    el.classList.add('active');

    const tabs = ['home', 'full-report', 'revenue', 'reports', 'channels'];
    tabs.forEach(t => {
        const target = document.getElementById('tab-' + t);
        if (target) target.classList.add('hidden');
    });

    const currentTab = document.getElementById('tab-' + tabId);
    if (currentTab) currentTab.classList.remove('hidden');

    // HOME Tab logic updated
    if (tabId === 'home') {
        renderHome();
        // Home par Chart dikhane ke liye yaha trigger karein
        setTimeout(initOTACompareChart, 200); 
    }

    if (tabId === "full-report") {
    renderFullReport();
}
    
    
}

/**
 * TAB: HOME LOGIC
 */
function renderHome() {
    const grid = document.getElementById('comp-render');
    if (grid) {
        grid.innerHTML = competitors.map(c => `
            <div class="comp-card">
                <div class="comp-name">${c.name}</div>
                <div class="comp-price">₹${c.price.toLocaleString()}</div>
                <div class="trend ${c.status}">${c.status === 'up' ? '▲' : '▼'} ${Math.abs(c.change)}%</div>
            </div>
        `).join('');
    }

    const avg = competitors.reduce((s, c) => s + c.price, 0) / competitors.length;
    document.getElementById('insight-text').innerText = "Market average is ₹" + Math.round(avg) + ". Stay below to win bookings.";
    document.getElementById('target-price').innerText = "Suggested: ₹" + Math.round(avg - 150);

    // Pehle se chalne wala chota chart
    initPriceTrendChart(); 
}

function initPriceTrendChart() {
    const ctx = document.getElementById('priceChart')?.getContext('2d');
    if (!ctx) return;
    if (myChart) myChart.destroy();

    const chartColors = ['#1F3D2B', '#2E5E3E', '#4CAF50', '#A0A0A0', '#d93025'];
    const datasets = competitors.map((hotel, index) => ({
        label: hotel.name,
        data: [hotel.price - 100, hotel.price + 50, hotel.price - 20, hotel.price + 100, hotel.price],
        borderColor: chartColors[index % chartColors.length],
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 2
    }));

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1 Apr', '2 Apr', '3 Apr', '4 Apr', '5 Apr'],
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { boxWidth: 10, font: { size: 9 } } } },
            scales: { y: { ticks: { font: { size: 9 } } }, x: { ticks: { font: { size: 9 } } } }
        }
    });
}

function initOTACompareChart() {
    const canvas = document.getElementById('otaComparisonChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (otaChart !== null) otaChart.destroy();

    const dates = ["1 April", "2 April", "3 April", "4 April", "5 April", "6 April", "7 April"];

    const colors = [
        '#1a73e8', '#f9ab00', '#9334e6', '#e52592', '#d93025',
        '#34a853', '#ff6d01', '#46bdc6', '#7cb342', '#5e35b1'
    ];

    let colorIndex = 0;

    // 🔥 Create dataset for each HOTEL + OTA
    const datasets = [];

    hotelGroups.forEach(group => {
        group.otas.forEach(ota => {
            datasets.push({
                label: `${group.name} - ${ota.name}`, // ✅ hotel + OTA name
                data: dates.map(date => ota.prices[date]), // ✅ date-wise prices
                borderColor: colors[colorIndex % colors.length],
                backgroundColor: 'transparent',
                tension: 0.3,
                borderWidth: 2,
                pointRadius: 3
            });
            colorIndex++;
        });
    });

    otaChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates, // ✅ X-axis = dates
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { boxWidth: 8, font: { size: 10 } }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ₹${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        font: { size: 10 },
                        callback: (v) => '₹' + v
                    }
                },
                x: {
                    ticks: { font: { size: 10 } }
                }
            }
        }
    });
}


function initPredictionChart() {
    const ctx = document.getElementById('predictionChart')?.getContext('2d');
    if(!ctx) return;
    if(predictionChart) predictionChart.destroy();

    predictionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: forecastData.map(d => d.day),
            datasets: [{
                label: 'Predicted Demand',
                data: [60, 65, 78, 85, 94, 98, 80],
                backgroundColor: forecastData.map(d => d.demand === 'high' ? '#2E5E3E' : '#A0A0A0'),
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { display: false }, x: { grid: { display: false } } }
        }
    });
}



/**
 * NOTIFICATIONS
 */
function toggleNotif(show) {
    const overlay = document.getElementById('notif-overlay');
    const badge = document.querySelector('.badge-count');
    if(overlay) overlay.classList.toggle('active', show);
    if(show && badge) badge.style.display = 'none';
}

// _____________



// full report

function renderFullReport() {
    const container = document.getElementById("tab-full-report");
    if (!container) return;

    const dates = ["1 April","2 April","3 April","4 April","5 April","6 April","7 April"];

    let html = `
        <div class="card">
            <h3 class="section-title">Full Price Report</h3>

            <div class="price-table-wrapper">
                <table class="price-table">
                    <thead>
                        <tr>
                            <th>Hotel / OTA</th>
                            ${dates.map(d => `<th>${d}</th>`).join('')}
                        </tr>
                    </thead>

                    <tbody>
    `;

    hotelGroups.forEach(group => {

        // 🔥 HOTEL HEADER ROW (NO COLSPAN - FIXED)
        html += `
            <tr class="group-head">
                <td>${group.name}</td>
                ${dates.map(date => `<td>₹${group.prices[date]}</td>`).join('')}
            </tr>
        `;

        // 🔥 OTA ROWS
        group.otas.forEach(ota => {
            html += `
                <tr>
                    <td style="padding-left:20px; color:#555;">
                        ${ota.name}
                    </td>
                    ${dates.map(date => `<td>₹${ota.prices[date]}</td>`).join('')}
                </tr>
            `;
        });

    });

    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;

    container.innerHTML = html;
}
