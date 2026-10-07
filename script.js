document.addEventListener("DOMContentLoaded", () => {

    /*
     * ÄNDERE DIESE URL ZU DEINEM ECHTEN DOWNLOAD.
     *
     * Beispiel:
     *
     * const DOWNLOAD_URL =
     *     "https://github.com/USERNAME/REPOSITORY/releases/latest";
     */

    const DOWNLOAD_URL =
        "https://github.com/solarclientofc/solarclient/releases/latest";


    const downloadButton =
        document.getElementById("downloadButton");


    if (downloadButton) {

        downloadButton.addEventListener(
            "click",
            (event) => {

                if (
                    DOWNLOAD_URL.includes(
                        "DEIN-USERNAME"
                    )
                ) {

                    event.preventDefault();

                    alert(
                        "Bitte ändere zuerst den DOWNLOAD_URL in script.js."
                    );

                    return;
                }

                window.open(
                    DOWNLOAD_URL,
                    "_blank"
                );
            }
        );

    }


    /*
     * Launch-Button Demo
     */

    const launchButton =
        document.querySelector(
            ".launch-button"
        );


    if (launchButton) {

        launchButton.addEventListener(
            "click",
            () => {

                launchButton.textContent =
                    "LAUNCHING...";

                setTimeout(() => {

                    launchButton.textContent =
                        "LAUNCH";

                }, 1500);

            }
        );

    }


    /*
     * Kleine Scroll-Reveal-Animation
     */

    const cards =
        document.querySelectorAll(
            ".feature-card"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    cards.forEach((card) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(20px)";

        card.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(card);

    });

});
