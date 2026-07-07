console.log("Gallery loaded.");

/* ==========================================================
   PAINTINGS
========================================================== */

const paintings = [

    {
        image: "paintings/p2016_4.jpg",
        title: "Winter Charm",
        year: "2017",
        medium: "Acrylic on Canvas",
        caption: "This is how leaves piled up on our rooftop of a temporary suburb home."
    },

    {
        image: "paintings/p2023_2.jpg",
        title: "Dorya",
        year: "2023",
        medium: "Acrylic on Canvas",
        caption: "When I was away from her, I may have flown sometimes just to see that face. She may have ignored or wondered. But I was there."
    },

    {
        image: "paintings/p2024_2.jpg",
        title: "Thoughts",
        year: "2024",
        medium: "Acrylic on Canvas",
        caption: "After the worst self discovery and a failure in my academic attempt, I tried to find closure in this painting by trying to figure out some goodness out of endless procrastination, bad decisions, and bad choices. "
    },

   {
        image: "paintings/p2025.jpg",
        title: "Tired",
        year: "2025",
        medium: "Acrylic on Paper",
        caption: "This was my daughter's toy and she looked exhausted sitting on my table."
    },

    {
        image: "paintings/p2013_2.jpg",
        title: "Bottle Life",
        year: "2013",
        medium: "Watercolor on paper",
        caption: "This was for a novel cover."
    },

     {
        image: "paintings/p2019.jpg",
        title: "Smashed",
        year: "2019",
        medium: "Acrylic on Canvas",
        caption: "This is a closure to my unsolicited feeling for a Paduan theatre artist whom I found and lost in the internet."
    },

    {
        image: "paintings/p2017.jpg",
        title: "Birat Shishu",
        year: "2017",
        medium: "Acrylic on Canvas",
        caption: "This painting was inspired by the song 'Khelicho e bishwa loe' by our national poet Kazi Nazrul Islam."
    },

    {
        image: "paintings/p2023.jpg",
        title: "Debi Matangi",
        year: "2023",
        medium: "Acrylic on Canvas",
        caption: "This painting emerged from a period of relentless overthinking. During that time, I found comfort in conversations with anonymous astrologers on a mobile app; strangers whose words, however transactional, often felt unexpectedly reassuring. One of them suggested that I keep an image of Debi Matangi, a fierce and unconventional manifestation of Saraswati. I may not fully understand her mythology, but I was drawn to her boldness and her indifference to conventional ideas of purity. Painting her became a form of closure; a way of leaving behind a period of impulsiveness, uncertainty, and emotional excess."
    },

    {
        image: "paintings/p2013_3.jpg",
        title: "Socially lonely tree",
        year: "2013",
        medium: "Pencils",
        caption: "It was for a poetry book cover."
    },

    {
        image: "paintings/p2024.jpg",
        title: "Simmi, Shaila and Dhira",
        year: "2025",
        medium: "Gouache on paper",
        caption: "This is a token of our amazing time in Simmi's home in London and now we are at three different part of the globe. This is now hanging on Shaila's kitchen wall."
    },
    {
        image: "paintings/p2013.JPG",
        title: "Cinder and Smoke",
        year: "2017",
        medium: "Acrylic on Paper",
        caption: "This painting was inspired by the song 'Cinder and Smoke' by 'Iron and Wine'. I used to listen to this song for hours while having heavy migrain in those years."
    },
    {
        image: "paintings/p2014_2.jpg",
        title: "Durga",
        year: "2014",
        medium: "Acrylic on Canvas",
        caption: "It was in the Durga Puja break and there were Kashful all around our temporary suburb home. The image quality is poor. But I want to keep the memory of it."
    },  
    {
        image: "paintings/p2025_2.jpg",
        title: "Cox's Bazar",
        year: "2025",
        medium: "Samsung PENUP app",
        caption: "This was an experiment with only two values of wedgewood."
    },
    {
        image: "paintings/p2010_2.jpg",
        title: "Pigeons",
        year: "2010",
        medium: "Pencils",
        caption: "We had our home in Rainkhola and they were our neighbours. This is a closure to the home shift and leaving their view."
    },  
    {
    image: "paintings/p2009.jpg",
    title: "Resting",
    year: "2009",
    medium: "Oil on Canvas",
    caption: "It is my first oil painting. I did not know anything about the use of medium or color mixing. These are straight from the tube. I painted it in the SSC exam break. Though I have lost most of my paintings over the years, this is still in my possession."
    },
    {
        image: "paintings/birds.jpg",
        title: "Conference",
        year: "2025",
        medium: "Gauche on Paper",
        caption: "Every evening the birds come to the conference at Shah Ali (R) darbar. They socialize, they gossip, they fight, they make love, and they sleep." 
    },
    {
        image: "paintings/p2025_3.jpg",
        title: "Grapes",
        year: "2025",
        medium: "Gauche on Paper",
        caption: "Metal plate"
    },
    {
        image: "paintings/p2025_4.jpg",
        title: "Trees",
        year: "2025",
        medium: "Gauche on Paper",
        caption: "From floor to ceiling."

    }

];


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

paintings.forEach((painting) => {

    const img = document.createElement("img");

    img.src = painting.image;

    img.alt = painting.title;

    img.className = "painting";


    img.addEventListener("click", () => {

        openViewer(painting);

    });


    gallery.appendChild(img);

});


/* ==========================================================
   OPEN VIEWER
========================================================== */

function openViewer(painting){

    viewerImage.src = painting.image;

    viewerImage.alt = painting.title;

    viewerTitle.textContent = painting.title;

    viewerYear.textContent = painting.year;

    viewerMedium.textContent = painting.medium;

    viewerCaption.textContent = painting.caption;

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