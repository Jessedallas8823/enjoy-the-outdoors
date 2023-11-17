"use strict"
window.onload = function (_event) {
    const allParks = document.getElementById("allParkSlt")
    allParks.onchange = northFaceUserSlt
    populateAllParks(nationalParksArray, allParks)


    const northFaceLocations = document.getElementById("northFaceLocationSlt")
    northFaceLocations.onchange = northFaceUserSlt
    northFaceLoDrop(locationsArray, northFaceLocations)

    const northFaceParkTypes = document.getElementById("northFaceParkSlt")
    northFaceParkTypes.onchange = northFaceUserSlt
    northFacePtDrop(parkTypesArray, northFaceParkTypes)


}

function populateAllParks(nationalParksArray, allParkSlt,) {
    let html = "<option>Search All Parks </option>"
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const locations = nationalParksArray[index];

        html += `<option value="${locations.LocationName}">${locations.LocationName}</option>`
    }
    allParkSlt.innerHTML = html
}

function northFacePtDrop(parkTypesArray, northFaceParkSlt) {
    let html = "<option>Search Park By Type </option>"
    for (let index = 0; index < parkTypesArray.length; index += 1) {
        const northFacePt = parkTypesArray[index];

        html += `<option value="${northFacePt}">${northFacePt}</option>`
    }
    northFaceParkSlt.innerHTML = html
}


function northFaceLoDrop(locationsArray, northFaceLocationSlt) {
    let html = "<option>Search Park By Location</option>"
    for (let index = 0; index < locationsArray.length; index += 1) {
        const northFaceLoc = locationsArray[index];

        html += `<option value="${northFaceLoc}">${northFaceLoc}</option>`
    }
    northFaceLocationSlt.innerHTML = html
}

function northFaceUserSlt(event) {
    const lo = event.target.value
    
    let html = ""
    for (let index = 0; index < nationalParksArray.length; index += 1) {

        const northFaceLocs = nationalParksArray[index]
        if (northFaceLocs.State === lo) {
            html += `<div class="card" styles "width: 18rem;"> 
                        <img src="" class="card-img-top" alt="">
                   <div class="card-body">
                      <p class="card-text">
                      <p><strong> Location Name: </strong> ${northFaceLocs.LocationName}</p> 
                      <p><strong> Address: </strong> ${northFaceLocs.Address}</p>
                      <p><strong> City : </strong> ${northFaceLocs.City}</p>
                      <p><strong> State :</strong>${northFaceLocs.State}</p>
                      <p><strong> ZipCode: </strong> ${northFaceLocs.ZipCode}</p>
                      <p><strong> Fax : </strong> ${northFaceLocs.Fax}</p>
                      <p><strong> Coordinates: </strong> ${northFaceLocs.Location.coordinates}</p>
                     <p class="card-text"> <strong>Longitude, Latitude:</strong> ( "${northFaceLocs.Longitude}", "${northFaceLocs.Latitude}" )</p>
                   <a class="btn" role="button" href="link" ${northFaceLocs.Visit}> Visit Me </a>
                </div>
               </div>
            `
        } 
        
        if (northFaceLocs.LocationName.includes(lo) === true) {
            html += `
                <div class="card" style="width: 100rem;"> 
                    <img src="" class="card-img-top" alt="">
                    <div class="card-body">
                        <p class="card-text">
                        <p><strong> Location Name: </strong> ${northFaceLocs.LocationName}</p> 
                        <p><strong> Address: </strong> ${northFaceLocs.Address}</p>
                        <p><strong> City : </strong> ${northFaceLocs.City}</p>
                        <p><strong> State :</strong>${northFaceLocs.State}</p>
                       <p><strong> ZipCode: </strong> ${northFaceLocs.ZipCode}</p>
                       <p><strong> Fax : </strong> ${northFaceLocs.Fax}</p>
                       <p class="card-text"> <strong>Longitude, Latitude:</strong> ( "${northFaceLocs.Longitude}", "${northFaceLocs.Latitude}" )</p>
                       <a class="btn" role="button" href="link" ${northFaceLocs.Visit}> Visit Me </a>
                       </div>
                </div>
            `
        }
    }

    const northFaceMan = document.getElementById("parksDiv")
    northFaceMan.innerHTML = html
}

