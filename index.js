const shout = (string) => {
    //test with console.log()
    //assign to a variable and resturn that
    return string.toUpperCase()
}

const whisper = (string) => {
    //this time, just return the string
    return string.toLowerCase()
}

const logShout = (string) => {
    //show the console.log in the test, also show how we can put that in up above
    console.log(string.toUpperCase())
}

const logWhisper = (string) => {
    //oops, is not defined what happened
    console.log(string.toLowerCase())
}

const sayHiToHeadphonedRoommate = (string) => {
    //put in one misspelling
    if(string === string.toLowerCase()){
        return "I can't hear you!"
    } else if(string === string.toUpperCase()){
        return "YES INDEED!"
    } else if(string === "Let's have dinner together!"){
        return "I would love to!"
    }
}
