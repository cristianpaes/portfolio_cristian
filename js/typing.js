const typingText = document.getElementById("typing-text");

if (typingText) {

    const titles = [

        "Database Administrator",
        "Performance Tuning Specialist",
        "SQL Server Expert",
        "T-SQL Developer",
        "Microsoft SQL Server DBA",
        "Database Performance Engineer"

    ];

    let title = 0;

    function changeTitle() {

        typingText.style.opacity = 0;

        setTimeout(() => {

            typingText.textContent = titles[title];

            typingText.style.opacity = 1;

            title++;

            if (title >= titles.length) {

                title = 0;

            }

        },300);

    }

    setInterval(changeTitle,3000);

}