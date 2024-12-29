/* Buttons */

let work_btn = document.getElementById("work_btn");
let about_btn = document.getElementById("about_btn");
let contact_btn = document.getElementById("contact_btn");

function redirect_to_page(page_name)
{
    window.location.href = "pages/" + page_name + ".html";
}

work_btn.addEventListener("click", () => redirect_to_page("work"))
about_btn.addEventListener("click", () => redirect_to_page("about"))
contact_btn.addEventListener("click", () => redirect_to_page("contact"))
