document.addEventListener("DOMContentLoaded", function() {
    console.log("🚀 NexMedia Ready!");

    // Tự động cuộn slider tin tức
    let newsSlider = document.querySelector(".news-slider");
    setInterval(() => {
        newsSlider.scrollLeft += 300;
        if (newsSlider.scrollLeft >= newsSlider.scrollWidth - newsSlider.clientWidth) {
            newsSlider.scrollLeft = 0;
        }
    }, 3000);
});