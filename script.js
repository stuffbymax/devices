document.addEventListener("DOMContentLoaded", () => {
    fetch("devices.json")
        .then(response => response.json())
        .then(data => {
            const devices = data.Devices["My Room"];
            const container = document.getElementById("device-container");
            const connectivityCount = {};
            
            devices.forEach(device => {
                const div = document.createElement("div");
                div.className = "device";
                div.innerHTML = `<strong>${device.Device}</strong><br>Connectivity: ${device.Connectivity.join(", ")}`;
                container.appendChild(div);

                device.Connectivity.forEach(type => {
                    connectivityCount[type] = (connectivityCount[type] || 0) + 1;
                });
            });

            // Generate Bar Chart
            const ctxBar = document.getElementById("connectivityChart").getContext("2d");
            new Chart(ctxBar, {
                type: "bar",
                data: {
                    labels: Object.keys(connectivityCount),
                    datasets: [{
                        label: "Number of Devices",
                        data: Object.values(connectivityCount),
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });

            // Generate Pie Chart
            const pieCanvas = document.createElement("canvas");
            pieCanvas.id = "connectivityPieChart";
            document.body.appendChild(pieCanvas);
            const ctxPie = pieCanvas.getContext("2d");
            new Chart(ctxPie, {
                type: "pie",
                data: {
                    labels: Object.keys(connectivityCount),
                    datasets: [{
                        data: Object.values(connectivityCount),
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
                    }]
                },
                options: {
                    responsive: true
                }
            });
        });
});
