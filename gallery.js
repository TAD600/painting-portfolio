console.log("Gallery loaded.");

/* ==========================================================
   ELEMENTS
========================================================== */

const gallery = document.getElementById("gallery");

const viewer = document.getElementById("viewer");

const viewerImage = document.getElementById("viewer-image");

const viewerTitle = document.getElementById("viewer-title");

const viewerYear = document.getElementById("viewer-year");

const viewerMedium = document.getElementById("viewer-medium");

const viewerCaption = document.getElementById("viewer-caption");

const closeButton = document.getElementById("close");


/* ==========================================================
   CREATE GALLERY
========================================================== */

artworks.forEach((artwork) => {

    const img = document.createElement("img");

    img.src = artwork.image;

    img.alt = artwork.title;

    img.className = "painting";

    img.addEventListener("click", () => {

        openViewer(artwork);

    });

    gallery.appendChild(img);

});


/* ==========================================================
   OPEN VIEWER
========================================================== */

function openViewer(artwork){

    viewerImage.src = artwork.image;

    viewerImage.alt = artwork.title;

    viewerTitle.textContent = artwork.title;

    viewerYear.textContent = artwork.year;

    viewerMedium.textContent = artwork.medium;

    viewerCaption.textContent = artwork.caption;

    viewer.classList.remove("hidden");

}


/* ==========================================================
   CLOSE BUTTON
========================================================== */

closeButton.addEventListener("click", closeViewer);


/* ==========================================================
   CLICK BACKGROUND TO CLOSE
========================================================== */

viewer.addEventListener("click", function(event){

    if(event.target === viewer){

        closeViewer();

    }

});


/* ==========================================================
   ESC KEY TO CLOSE
========================================================== */

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        closeViewer();

    }

});


/* ==========================================================
   CLOSE FUNCTION
========================================================== */

function closeViewer(){

    viewer.classList.add("hidden");

}