const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
})

function remove (e) {
    
    const sound = document.getElementById('twitch-embed');
    sound.remove();
    document.location.reload(true);
   
}

function addDiv () {
    
    const newDiv = document.createElement("div");
    const before = document.getElementById("before_twitch");
    const set = newDiv.setAttribute('id', 'twitch-embed');
    const append = set.appendChild(before);
    const script = document.createElement("script");
    script.src="https://player.twitch.tv/js/embed/v1.js";
    append.appendChild(script);

    
    
}
    