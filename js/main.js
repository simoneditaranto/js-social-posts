const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//formatto le date prima di inserirle nel DOM
// per ogni elemento di "posts" 
posts.forEach(currentElement => {
    
    // 2021-06-25 --> 25-06-2021
    // creo 3 stringhe che rappresentano rispettivamente giorno, mese, anno
    let day = currentElement.created.substring(8);
    console.log("day", day);
    let month = currentElement.created.substring(5, 7);
    console.log("month", month);
    let year = currentElement.created.substring(0, 4);
    console.log("year", year);

    // modifico la nuova data direttamente nell'array "posts"
    currentElement.created = `${day}-${month}-${year}`;

});


// vado a generare dinamicamente i miei post
// memorizzo il "#container" in una costante
const containerElement = document.getElementById("container");

// attraverso un ciclo forEach, per ogni elemento del mio array inserisco le informazioni nel DOM
posts.forEach(currentElement => {

    containerElement.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${currentElement.author.image} alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${currentElement.author.name}</div>
                        <div class="post-meta__time">${currentElement.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${currentElement.content}</div>
            <div class="post__image">
                <img src=${currentElement.media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${currentElement.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;

});


// memorizzo in una lista i contenitori del tasto mi piace
const buttonLikesElement = document.querySelectorAll(".like-button");
// memorizzo in una lista il numero dei like di ogni post
const numbersLikeElement = document.querySelectorAll(".js-likes-counter");
// creo un array che avrà come elementi gli id dei post a cui metto like
const idPostsLikeArray = [];

// per ogni tasto "mi piace"
buttonLikesElement.forEach(function(currentButton, index) {
    // al click cambio il colore del tasto stesso e incremento il numero dei like di 1
    currentButton.addEventListener("click", function() {

        // se non ho già cliccato prima
        if(!this.classList.contains("clicked")) {

            // aggiungo la classe "clicked"
            this.classList.add("clicked");
    
            // prendo dal mio array di post l'elemento che ha indice uguale al tasto del post di riferimento
            // prendo l'informazione del numero di like e incremento di 1 
            posts[index].likes += 1;
    
            // dalla lista creata sopra prendo l'elemento che ha indice uguale al tasto del post di riferimento
            // e cambio il contenuto con il nuovo valore 
            numbersLikeElement[index].innerHTML = `${posts[index].likes}`;
    
            // aggiungo l'id del post di riferimento al mio array creato sopra
            idPostsLikeArray.push(posts[index].id);
            console.log(idPostsLikeArray);

        }

    }
)});



