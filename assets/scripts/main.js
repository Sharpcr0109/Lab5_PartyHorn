// main.js

var partyForm = document.getElementById("party-horn-form");
var volumeControls = document.getElementById("volume-controls");
var volumeNumber = document.getElementById("volume-number");
var hornSound = document.getElementById("horn-sound");
var honkButton = document.getElementById("honk-btn");
var volumeSlider = document.getElementById("volume-slider");
var volumeImg = document.getElementById("volume-image");
var radioAirHorn = document.getElementById("radio-air-horn");
var radioAirHorn = document.getElementById("radio-air-horn");
var radioCarHorn = document.getElementById("radio-car-horn");
var radioPartyHorn = document.getElementById("radio-party-horn");
var soundImg = document.getElementById("sound-image");

// honkButton.type = 'button';
// partyForm.onsubmit = "return preventSubmit(event)";
volumeNumber.addEventListener("input", setVolumeNumber);
volumeSlider.addEventListener("input", setVolumeSlider);
honkButton.addEventListener("click", playAudio);
honkButton.addEventListener("click", function(event) {
    event.preventDefault();
});
radioAirHorn.addEventListener("input", changeAudioSrcAndLargeImg);
radioCarHorn.addEventListener("input", changeAudioSrcAndLargeImg);
radioPartyHorn.addEventListener("input", changeAudioSrcAndLargeImg);


function setVolumeNumber() {
    hornSound.volume = volumeNumber.value / 100.0;
    volumeSlider.value = volumeNumber.value;
    changeVolumeImg(volumeNumber.value);
    if (volumeNumber.value == 0) {
        honkButton.disabled = true;
    } else {
        honkButton.disabled = false;
    }
}

function setVolumeSlider() {
    hornSound.volume = volumeSlider.value / 100.0;
    volumeNumber.value = volumeSlider.value;
    changeVolumeImg(volumeSlider.value);
    if (volumeSlider.value == 0) {
        honkButton.disabled = true;
    } else {
        honkButton.disabled = false;
    }
}


function playAudio() {
    hornSound.play();
}

function changeVolumeImg(volume) {
    if (volume == 0) {
        volumeImg.src = "./assets/media/icons/volume-level-0.svg";
    } else if (volume <= 33) {
        volumeImg.src = "./assets/media/icons/volume-level-1.svg";
    } else if (volume < 67) {
        volumeImg.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        volumeImg.src = "./assets/media/icons/volume-level-3.svg";
    }

}

function changeAudioSrcAndLargeImg() {
    if (radioAirHorn.checked) {
        hornSound.src = "./assets/media/audio/air-horn.mp3";
        soundImg.src = "./assets/media/images/air-horn.svg";
    } else if (radioCarHorn.checked) {
        hornSound.src = "./assets/media/audio/car-horn.mp3";
        soundImg.src = "./assets/media/images/car.svg";
    } else if (radioPartyHorn.checked) {
        hornSound.src = "./assets/media/audio/party-horn.mp3";
        soundImg.src = "./assets/media/images/party-horn.svg";
    }
}




