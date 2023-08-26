console.log("script loaded")


function dragstart_handler(event) {
    // Add the target element's id to the data transfer object
    console.log("drag start initiated")
    console.log(event.target.innerHTML)
    let text = event.target.innerHTML
    event.dataTransfer.setData("text/plain", text);
}
window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    const element = document.getElementById("clickable1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstart_handler);
});
        