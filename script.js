document.addEventListener("DOMContentLoaded", () => {
    const devices = [
        { name: "Acer N19H1", connectivity: ["Wi-Fi", "Bluetooth"] },
        { name: "HP ProBook 640 G1", connectivity: ["LAN", "Wi-Fi"] },
        { name: "PS3 Slim CECH-3003A", connectivity: ["Wi-Fi", "Bluetooth"] },
        { name: "PS3 Slim CECH-2503A", connectivity: ["Wi-Fi", "Bluetooth"] },
        { name: "Samsung TV UE22H5000AK", connectivity: ["None"] },
        { name: "HP ProBook 440 G3", connectivity: ["Wi-Fi", "Bluetooth"] },
        { name: "PS3 Controllers (2x)", connectivity: ["Bluetooth Proprietary"] },
        { name: "PS4", connectivity: ["Wi-Fi", "Bluetooth"] },
        { name: "PS2", connectivity: ["LAN (Extension Required)"] },
        { name: "Xbox One Elite Controller", connectivity: ["Proprietary"] },
        { name: "Xbox One", connectivity: ["Wi-Fi"] },
        { name: "Philips GoGear SA060", connectivity: ["None"] },
        { name: "Toshiba Satellite L650", connectivity: ["Wi-Fi"] },
        { name: "ASUSTeK X509MA", connectivity: ["Wi-Fi", "Bluetooth"] },
        { name: "Samsung Galaxy A12", connectivity: ["Wi-Fi"] }
    ];

    const container = document.getElementById("device-container");
    
    devices.forEach(device => {
        const div = document.createElement("div");
        div.className = "device";
        div.innerHTML = `<strong>${device.name}</strong><br>Connectivity: ${device.connectivity.join(", ")}`;
        container.appendChild(div);
    });
});
