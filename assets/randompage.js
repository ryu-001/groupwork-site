/* navigates to a random page from the navbar */
function random_page()
{
    let nav = document.getElementById("navbarNav");
    let links = nav.getElementsByTagName("a");
    let inactive = [];
    for (let l of links)
    {
        if (!l.classList.contains("active"))
        {
            inactive.push(l.href);
        }
    }

    let idx = Math.floor(Math.random() * inactive.length);
    document.location = inactive[idx];
}

document.getElementById("random-page-btn").addEventListener("click", (el, ev) => random_page());