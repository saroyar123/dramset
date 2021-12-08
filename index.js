for(var i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {
       makeSound(this.innerHTML);
    });
}

document.addEventListener("keypress",function(ev)
{
    makeSound(ev.key);

});

function makeSound(key){

    switch(key)
    {
        case "w":
            var tam4=new Audio("sounds/tom-4.mp3")
            tam4.play();
            break;
        case "a":
         var tam3=new Audio("sounds/tom-3.mp3")
         tam3.play();
         break;
        case "s":
            var tam2=new Audio("sounds/tom-2.mp3")
            tam2.play();
         break;

        case "d":
            var tam1=new Audio("sounds/tom-1.mp3")
            tam1.play();
             break;

        case "j":
            var tamj=new Audio("sounds/snare.mp3")
            tamj.play();
            break;

        case "k":
            var tamk=new Audio("sounds/kick-bass.mp3")
            tamk.play();
            break;

        case "l":
            var taml=new Audio("sounds/crash.mp3")
            taml.play();
            break;

    }

}

