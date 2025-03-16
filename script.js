async function fetchData() {
    const url = "https://script.google.com/macros/s/1X4v40_IUmPJj8ew5un6LAXE7Z8V4BorkJH0bFFV5WQXArp5tPHqG8qGd/exec"; // Replace with your actual Google Apps Script URL
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Update your HTML elements with live data
        document.querySelector(".text-63").innerText = data[1][1] + " Hours"; // Total Duration
        document.querySelector(".text-67").innerText = "IDR " + data[2][1] + "M"; // Total GMV
        document.querySelector(".text-71").innerText = data[3][1] + " Orders"; // Total Orders
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Auto-refresh every 5 seconds
setInterval(fetchData, 5000);
fetchData();
