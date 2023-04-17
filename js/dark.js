/*==dark-mode============================*/
var icon = document.getElementById("nav-modes");
    
    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");

        var theme;

        /*en cliquant, ajoutez une classe de thème sombre à l'élément de corps*/
        if(document.body.classList.contains("dark-theme")){
            icon.classList.add("fa-sun")
            icon.classList.remove("fa-moon")
            theme = "DARK"
        }
        /* sinon fais ceci*/
        else{
            icon.classList.add("fa-moon")
            icon.classList.remove("fa-sun")
            theme = "LIGHT"
        }
        /* enregistrer dans le stockage local car nous avons besoin du thème sélectionné même si l'utilisateur actualise la page ou passe à la page suivante ou rouvre la page après un certain temps */
        localStorage.setItem("PageTheme", JSON.stringify(theme));
}

    /* récupère la valeur de la variable de thème que nous sauvegardons dans localStorage*/
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
 
    /* si la valeur variable du "thème" est DARK, faites ce code js */
    if(GetTheme === "DARK"){
        document.body.classList = "dark-theme";
        icon.classList.add("fa-sun")
        icon.classList.remove("fa-moon")
    }
    /*Si la valeur "theme" n'est pas la valeur DARK Do This*/
    else{
        document.body.classList = "";
        icon.classList.add("fa-moon")
        icon.classList.remove("fa-sun")
    }

