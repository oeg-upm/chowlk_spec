var dragDropArea = document.getElementById("drag-drop-area")
var submitButton = document.getElementById("submit")
var downloadButton = document.getElementById("download")
var dragText = document.getElementById("drag-text")
var fileElem = document.getElementById("fileElem")
var responseText = document.getElementById("response")
var errorReport = document.getElementById("error-report")
let fileLoaded = false;
let file = false;


var conceptsItem = document.getElementById("concepts-item");
var conceptsBody = document.getElementById("concepts-body");

var attributesItem = document.getElementById("attributes-item");
var attributesBody = document.getElementById("attributes-body");

var arrowsItem = document.getElementById("arrows-item");
var arrowsBody = document.getElementById("arrows-body");

var ellipsesItem = document.getElementById("ellipses-item");
var ellipsesBody = document.getElementById("ellipses-body");

var namespacesItem = document.getElementById("namespaces-item");
var namespacesBody = document.getElementById("namespaces-body");

var metadataItem = document.getElementById("metadata-item");
var metadataBody = document.getElementById("metadata-body");

var rhombusesItem = document.getElementById("rhombuses-item");
var rhombusesBody = document.getElementById("rhombuses-body");

var individualItem = document.getElementById("individual-item");
var individualBody = document.getElementById("individual-body");

var syntaxItem = document.getElementById("syntax-item");
var syntaxBody = document.getElementById("syntax-body");

var newNamespaces = document.getElementById("new-namespaces");

// Function to download a file

function downloadFile(filename, text){
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8, " + encodeURIComponent(text));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


// Function to send file to the Chowlk backend

function sendFile(file){
    //const uri = "https://chowlk.linkeddata.es/api";
    const uri = "http://localhost:5000/api";
    const xhr = new XMLHttpRequest();
    const fd = new FormData();

    xhr.open("POST", uri);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            response = JSON.parse(xhr.responseText);
            
            errorReport.style.display = "none";
            dragText.style.display = "none";
            responseText.style.display = "block";
            responseText.innerText = response["ttl_data"];

            var errors_keys = Object.keys(response["errors"]);
            var namespaces_keys = Object.keys(response["new_namespaces"]);
            console.log(namespaces_keys)

            if (errors_keys.length > 0){
                errorReport.style.display = "block";

                conceptsBody.innerHTML = ""
                attributesBody.innerHTML = ""
                arrowsBody.innerHTML = ""
                ellipsesBody.innerHTML = ""
                namespacesBody.innerHTML = ""
                metadataBody.innerHTML = ""
                rhombusesBody.innerHTML = ""
                individualBody.innerHTML = ""
                syntaxBody.innerHTML = ""

                conceptsItem.style.display = "none";
                attributesItem.style.display = "none";
                arrowsItem.style.display = "none";
                ellipsesItem.style.display = "none";
                namespacesItem.style.display = "none";
                metadataItem.style.display = "none";
                rhombusesItem.style.display = "none";
                individualItem.style.display = "none";
                syntaxItem.style.display = "none";
                
                for(let i = 0; i < errors_keys.length; i++){
                    key = errors_keys[i];
                    errors = response["errors"][key];

                    if (key === "Concepts"){
                        var unorderedList = document.createElement("ul");
                        conceptsItem.style.display = "block";

                        for(let j = 0; j < errors.length; j++){
                            var listBullet = document.createElement("li");
                            listBullet.innerHTML = "<b>Value:</b> "  + errors[j]["value"] + ", <b>Problem:</b> " + errors[j]["message"] + ", <b>Shape id:</b> " + errors[j]["shape_id"]
                            unorderedList.appendChild(listBullet);
                        }
                        conceptsBody.appendChild(unorderedList);

                    }
                    else if (key === "Arrows"){
                        var unorderedList = document.createElement("ul");
                        arrowsItem.style.display = "block";
                        for(let j = 0; j < errors.length; j++){
                            var listBullet = document.createElement("li");
                            listBullet.innerHTML = "<b>Value:</b> "  + errors[j]["value"] + ", <b>Problem:</b> " + errors[j]["message"] + ", <b>Shape id:</b> " + errors[j]["shape_id"]
                            unorderedList.appendChild(listBullet);
                        }
                        arrowsBody.appendChild(unorderedList);

                    }
                    else if (key === "Ellipses"){
                        var unorderedList = document.createElement("ul");
                        ellipsesItem.style.display = "block";

                        for(let j = 0; j < errors.length; j++){
                            var listBullet = document.createElement("li");
                            listBullet.innerHTML = "<b>Value:</b> "  + errors[j]["value"] + ", <b>Problem:</b> " + errors[j]["message"] + ", <b>Shape id:</b> " + errors[j]["shape_id"]
                            unorderedList.appendChild(listBullet);
                        }
                        ellipsesBody.appendChild(unorderedList);

                    }
                    else if (key === "Attributes"){
                        var unorderedList = document.createElement("ul");
                        attributesItem.style.display = "block";

                        for(let j = 0; j < errors.length; j++){
                            var listBullet = document.createElement("li");
                            listBullet.innerHTML = "<b>Value:</b> "  + errors[j]["value"] + ", <b>Problem:</b> " + errors[j]["message"] + ", <b>Shape id:</b> " + errors[j]["shape_id"]
                            unorderedList.appendChild(listBullet);
                        }
                        attributesBody.appendChild(unorderedList);

                    }
                    else if (key === "Namespaces"){
                        var unorderedList = document.createElement("ul");
                        namespacesItem.style.display = "block";

                        for(let j = 0; j < errors.length; j++){
                            var listBullet = document.createElement("li");
                            listBullet.innerHTML = "<b>Value:</b> "  + errors[j]["value"] + ", <b>Problem:</b> " + errors[j]["message"] + ", <b>Shape id:</b> " + errors[j]["shape_id"]
                            unorderedList.appendChild(listBullet);
                        }
                        namespacesBody.appendChild(unorderedList);
                    }
                    else if (key === "Metadata"){
                        var unorderedList = document.createElement("ul");
                        metadataItem.style.display = "block";

                        for(let j = 0; j < errors.length; j++){
                            var listBullet = document.createElement("li");
                            listBullet.innerHTML = "<b>Value:</b> "  + errors[j]["value"] + ", <b>Problem:</b> " + errors[j]["message"] + ", <b>Shape id:</b> " + errors[j]["shape_id"]
                            unorderedList.appendChild(listBullet);
                        }
                        metadataBody.appendChild(unorderedList);
                    }
                    else if (key === "Rhombuses"){
                        var unorderedList = document.createElement("ul");
                        rhombusesItem.style.display = "block";

                        for(let j = 0; j < errors.length; j++){
                            var listBullet = document.createElement("li");
                            listBullet.innerHTML = "<b>Value:</b> "  + errors[j]["value"] + ", <b>Problem:</b> " + errors[j]["message"] + ", <b>Shape id:</b> " + errors[j]["shape_id"]
                            unorderedList.appendChild(listBullet);
                        }
                        rhombusesBody.appendChild(unorderedList);
                    }
                    else if (key === "Individual"){
                        var unorderedList = document.createElement("ul");
                        individualItem.style.display = "block";

                        for(let j = 0; j < errors.length; j++){
                            var listBullet = document.createElement("li");
                            listBullet.innerHTML = "<b>Value:</b> "  + errors[j]["value"] + ", <b>Problem:</b> " + errors[j]["message"] + ", <b>Shape id:</b> " + errors[j]["shape_id"]
                            unorderedList.appendChild(listBullet);
                        }
                        individualBody.appendChild(unorderedList);
                    }

                    else if (key === "Syntax"){
                        var unorderedList = document.createElement("ul");
                        syntaxItem.style.display = "block";

                        var listBullet = document.createElement("li");
                        listBullet.innerHTML = "<b>Message:</b> "  + errors["message"]
                        unorderedList.appendChild(listBullet);
                        syntaxBody.appendChild(unorderedList);
                    }
                }

            }

            if (namespaces_keys.length > 0){
                errorReport.style.display = "block";
                newNamespaces.style.display = "block";

                var unorderedList = document.createElement("ul");

                for(let k = 0; k < namespaces_keys.length; k++){
                    prefix = namespaces_keys[k]
                    namespace = response["new_namespaces"][prefix]

                    var listBullet = document.createElement("li");
                    listBullet.innerHTML = "<b>" + prefix + ": </b>" + namespace;
                    unorderedList.appendChild(listBullet);
                }

                newNamespaces.appendChild(unorderedList);
            }
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
                dragText.style.display = "block";
                responseText.style.display = "none";
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

downloadButton.addEventListener("click", ()=>{
    if(file){
        downloadFile("ontology.ttl", response["ttl_data"]);
    }
})