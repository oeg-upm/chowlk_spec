var dragDropArea = document.getElementById("drag-drop-area")
var submitButton = document.getElementById("submit")
var dragText = document.getElementById("drag-text")
var fileElem = document.getElementById("fileElem")
let fileLoaded = false;
let file = false;


// Function to send file to the Chowlk backend

function sendFile(file){
    const uri = "http://0.0.0.0:5000/api";
    const xhr = new XMLHttpRequest();
    const fd = new FormData();

    xhr.open("POST", uri);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            response = xhr.responseText;
            console.log(response)
        }
    }
    fd.append("data", file);
    xhr.send(fd);
}


// Drag and drop section

function dropHandler(ev){
    console.log("File(s) dropped");

    ev.preventDefault();

    if(ev.dataTransfer.items){
        for(var i = 0; i < ev.dataTransfer.items.length; i++){
            if(ev.dataTransfer.items[i].kind === "file"){
                file = ev.dataTransfer.items[i].getAsFile();
                fileLoaded = true;
                dragText.innerHTML = '<b>"' + file.name + '"</b>' + " selected";
            }
        }
    } else{
        for (var i=0; i<ev.dataTransfer.files.length; i++){
            dragText.innerHTML = '<b>"' + ev.dataTransfer.files[i].name + '"</b>' + " selected";
        }
    }
}

dragDropArea.addEventListener("drop" ,function(event){
    dropHandler(event);
    dragDropArea.style.backgroundColor = "white"
})

dragDropArea.addEventListener("dragover", function(event){
    event.preventDefault();
    dragDropArea.style.backgroundColor = "#ECECEC";
})

dragDropArea.addEventListener("dragleave", ()=>{
    dragDropArea.style.backgroundColor = "white";
})

dragDropArea.addEventListener("mouseover", ()=>{
    dragDropArea.style.cursor = "pointer";
})


// Click file selection section

dragDropArea.addEventListener("click", ()=>{
    if (fileElem){
        fileElem.click();
    }
}, false)

fileElem.addEventListener("change", handleFiles);

function handleFiles(){
    file = this.files[0];
    fileLoaded = true;
    dragText.innerHTML = '<b>"' + file.name + '"</b>' + " selected"
}

fileElem.addEventListener("click", ()=>{
    fileElem.value = null;
})


// Button event to send data to the Chowlk backend
submitButton.addEventListener("click", ()=>{
    if (fileLoaded == true){
        sendFile(file);
        fileLoaded = false;
        dragText.innerHTML = "Drag and drop your diagram or click to choose your file."
    } else{
        console.log("File not updloaded")
    }
})