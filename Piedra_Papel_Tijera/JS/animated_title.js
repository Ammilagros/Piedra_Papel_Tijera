const container = document.querySelector("#title_container");
const word   = "Rock Paper Scissors";
let  i           = 0;

const show_next_letter = () => {
    if(i < word.length){
        container.innerHTML += word[i]
        i++
        setTimeout(show_next_letter, 100)
    }
}

setTimeout(show_next_letter, 100)