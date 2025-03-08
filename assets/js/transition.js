document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("visible");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            if (link.hostname === window.location.hostname) {
                e.preventDefault();
                document.body.classList.remove("visible");
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        });
    });
});
