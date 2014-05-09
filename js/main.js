"use strict";
var pitch = {"A3":"220", "A#":"233", "B":"247", "C":"262", "C#":"277", "D":"294","D#":"311", "E":"330", "F":"349", "F#":"367", "G":"392", "G#":"415", "A4":"440"};

function getNote(freq){
    console.info("Calling getNote function");
    console.log("Parameter passed to getNote: %s", freq);

    if (! freq)
    {
        console.error("parameter is null") ;
        throw new Error ("parameter is null");
    }

     for(var k in pitch)
     {
        if (pitch[k]==freq)
        {
            console.info("Exiting getNote function, returning %s", k);
            return k;
        }
     }

    console.info("Exiting getNote function, returning null");
    return null;
}

function getFrequency(note){
    console.info("Calling getFrequency function");
    console.log("Parameter passed to getFrequency: %s", note);

    if (! note)
    {
        console.error("parameter is null") ;
        throw new Error ("parameter is null");
    }

    console.info("Exiting getFrequency function, returning %s", pitch[note]);
    return pitch[note];
}



//console.info("Loaded successfully");