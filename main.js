const myModal = document.getElementById('exampleModal');
const myInput = document.getElementById('twitch-embed');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
})

const modal = document.getElementById('exampleModal');
const sound = document.getElementById('twitch-embed');

modal.addEventListener("hide.bs.modal", () => {
    sound.remove();
    document.location.reload(true);
});

function remove (e) {
    
    const sound = document.getElementById('twitch-embed');
    sound.remove();
    document.location.reload(true);
   
}

    