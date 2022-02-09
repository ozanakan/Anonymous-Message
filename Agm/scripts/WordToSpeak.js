//Init SpeechSynth API
const synth = window.speechSynthesis;

// Dom elements
const textForm = $("form");
var textInput = '';
const voiceSelect = $("#voice-select");
const rate = $("#rate");
const rateValue = $("#rate-value");
const pitch = $("#pitch");
const pitchValue = $("#pitch-value");
const body = $("body");

// Init voices array
let voices = [{ voiceURI: 'Microsoft David - English (United States)', name: 'Microsoft David - English (United States)', lang: 'en-US', localService: true, default: true }];

const getVoices = () => {
    voices = synth.getVoices();
    //   Loop through voices; create option for each voice 
};
getVoices();
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}

//Speak

const speak = () => {
    // Check if speaking
    //if (synth.speaking) {
    //    console.error("already speaking");
    //    return;
    //}
    if (textInput !== "") {
        //Add background animation if desired
        // body.style.background = "#141414 url(img/wave.gif)";
        // body.style.backgroundRepeat = "repeat-x";
        // body.style.backgroundSize = "100% 100%";
        //Get text to speak
        const speakText = new SpeechSynthesisUtterance(textInput);
        //Speak end
        speakText.onend = e => {
            // body.style.background = "#141414";
        };
        //Speak error
        speakText.onerror = e => {
            console.error("Something went wrong...");
        };
        //Selected voice
        const selectedVoice = 'Microsoft Tolga - Turkish (Turkey)';
        //Loop through the voices
        voices.forEach(voice => {
            if (voice.name === selectedVoice) {
                speakText.voice = voice;
            }
        });
        //Set pitch and rate
        speakText.rate = 1;
        speakText.pitch = 1;
        //Speak 
        synth.speak(speakText);
    }
};
//Event listeners

//Form submit
function wordtospeak(prmt_text,prmt_default) {

    textInput = prmt_text;

    GetSesliYardim(prmt_default);

};
function GetSesliYardim(prmt_default) {
    $.ajax({
        type: "GET",
        url: '/TextMessage/GetSesliYardim',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function (data) {
            if (data.status == true || prmt_default == true) {
                speak();
            }
        },
        error: function (xhr, err) {
             
        }
    });
}
function SetSesliYardim() { 
    $.ajax({
        type: "GET",
        url: '/TextMessage/SetSesliYardim',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function (data) {
        },
        error: function (xhr, err) { 
        }
    });
}


