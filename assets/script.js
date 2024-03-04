//Exécution du code JS après chargement
document.addEventListener("DOMContentLoaded", function() {
    
const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

    let currentSlideIndex = 0;
  
     // Récupération de l'élément de la bannière où se trouvent les diapositives.
    const banner = document.getElementById("banner");

    // Étape 1 : Les flèches sont ajoutées à la bannière (possibilité aussi ac HTML--> voir commentaire index.html)
    const arrow_Left = document.createElement("img");
    arrow_Left.classList.add("arrow", "arrow_left");
    arrow_Left.src = "./assets/images/arrow_left.png";
    arrow_Left.alt = "Flèche gauche pour précédent";
    banner.appendChild(arrow_Left);
    
    const arrow_Right = document.createElement("img");
    arrow_Right.classList.add("arrow", "arrow_right");
    arrow_Right.src = "./assets/images/arrow_right.png";
    arrow_Right.alt = "Flèche droite pour suivant";
    banner.appendChild(arrow_Right);
    

    // Étape 2 : Ajout des écouteurs d'événements pour détecter les clics.
    arrow_Left.addEventListener("click", function(event) {
        console.log("Flèche gauche cliquée !");
        updateSlide(currentSlideIndex - 1);
    });
    
    arrow_Right.addEventListener("click", function(event) {
        console.log("Flèche droite cliquée !");
        updateSlide(currentSlideIndex + 1);
    });
    

    // Étape 3 : Ajout des points à la bannière pour chaque diapositive.
    const dotsContainer = document.querySelector(".dots");

    for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
    }


    // Étape 4 : Création de la fonction updateSlide pour mettre à jour la diapositive affichée en fonction de l'index donné.
    function updateSlide(index) {
        

        // Étape 5 : Conditions ajoutées pour faire en sorte que le carrousel tourne en boucle indéfiniment.
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        
        // Mise à jour de l'index de la diapositive actuelle.
        currentSlideIndex = index;
        
        // Mise à jour de l'image de la bannière avec celle de la diapositive actuelle.
        const currentSlide = slides[index];
        const bannerImg = document.querySelector(".banner-img");
        bannerImg.src = "./assets/images/slideshow/" + currentSlide.image;
        
        // Mise à jour du texte de la diapositive affichée.
        const tagLine = document.querySelector("#banner p");
        tagLine.innerHTML = currentSlide.tagLine;
        
        // Mise à jour des classes des points pour indiquer le point actif.
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
        dot.classList.toggle("dot_selected", i === index);
        });

        // Bonus : Ajout d'un gestionnaire d'événements à chaque bullet ^_^
        dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
       
        // Mise à jour du slide en fonction de l'index du bullet
        updateSlide(index);
    });
});

    }

    // Appelle de la fonction pour afficher la première diapositive lors du chargement initial.
    updateSlide(currentSlideIndex);
    

    //pour le fun (même si pas demandé ^_^)
    // Défilement automatique du carrousel
    setInterval(function() {
	    updateSlide(currentSlideIndex + 1);
        }, 9000); 

});
