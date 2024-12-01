const htmlinput =  document.querySelector(".html-editor textarea");
const cssinput =  document.querySelector(".css-editor textarea");
const jsinput =  document.querySelector(".js-editor textarea");
const save = document.getElementById("save");
const outputContainer = document.querySelector(".output-container");
const output = document.getElementById("output");
const full = document.getElementById("full");
const copy = document.querySelectorAll(".copy");

// Run the Output
save.addEventListener("click", () => {
    output.contentDocument.body.innerHTML = htmlinput.value;
    output.contentDocument.head.innerHTML = `<style>${cssinput.value}</style>`;
    output.contentWindow.eval(jsinput.value);
});

// Full screen
full.addEventListener("click", () => {
    outputContainer.classList.toggle("output-full-active");
    if(outputContainer.classList.contains("output-full-active")){
        full.style.transform = "rotate(180deg)";
    }
    else{
        full.style.transform = "rotate(0deg)";
    }
});

// Copy the Code
copy.forEach((e) => {
    e.addEventListener("click", () => {
        if(e.classList.contains("copy-html")){
            navigator.clipboard.writeText(htmlinput.value);
        }
        else if(e.classList.contains("copy-css")){
            navigator.clipboard.writeText(cssinput.value);
        }
        else{
            navigator.clipboard.writeText(jsinput.value);
        }
    })
})