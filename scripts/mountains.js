"use strict"
window.onload = function (_event) {
    const northFaceMtDir = document.getElementById("northFaceMtSlt")
    northFaceMtDir.onchange = renderMountainCard
    populateMountainCategory(mountainsArray, northFaceMtDir)
}


function populateMountainCategory(mountainsArray, northFaceMtSlt) {
    let html = "<option>Select Mountain To Explore</option>"
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const northFaceMt = mountainsArray[index];
        html += `<option value="${northFaceMt.name}">${northFaceMt.name}</option>`

    }
    northFaceMtSlt.innerHTML = html
}

function renderMountainCard(event) {
    const northFaceMounts = event.target.value
    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const northFaceMts = mountainsArray[index]
        if (northFaceMts.name === northFaceMounts) {
            html += `<div class="card" styles "width: 18rem;"> 
                        <p><strong> Effort: </strong> ${northFaceMts.effort}</p>
                       <img src="/data/images/${northFaceMts.img}" class="card-img-top" alt="">
                   <div class="card-body">
                     <p class="card-text">
                     <p><strong> Name: </strong> ${northFaceMts.name}</p>
                     <p><strong> Description:</strong>${northFaceMts.desc}</p>
                     <p><strong> Latitude: </strong> ${northFaceMts.coords.lat}</P>
                     <p><strong> Longitude: </strong> ${northFaceMts.coords.lng}</p>
                </div>
             </div>
           `
        }
        const northFace = document.getElementById("northFaceMtDiv")
        northFace.innerHTML = html
    }
}
