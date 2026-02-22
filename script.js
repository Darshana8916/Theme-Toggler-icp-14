const toggleBtn = document.getElementById("toggleTheme");
const body =document.body;

body.classList.add("light");

toggleBtn.addEventListener("click")=> {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    if (body.classList.contains("dark")){
        toggleBtn.textContent="Light Mode";
    } else {
        toggleBtn.textContent="Dark Mode";
    }
    }
};