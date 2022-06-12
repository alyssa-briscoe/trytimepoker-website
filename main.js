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

    