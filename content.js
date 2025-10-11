// this script is going to be listing to user keystrokes to detect if they type any sensitive info so we can warn them!

function checkIfPassword(typed)  {
    // Rules: if string is more than 8 chars no spaces, includes numbers and capitals then flag

    for (const [keyword, value] of Object.entries(keywords)) {
        if (typed.includes(value)) {
            alert(`Warning: You typed a sensitive keyword - ${keyword}`)
            return true
        }
    }

    different_words = typed.split(" ")
    for (const word of different_words) {
        if (/\d/.test(word)) {
            if (/[A-Z]/.test(word)) {
                alert("You may have typed a sensitive password - "+ word)
                return true
            }
        }
    }

    return false
}

const keywords = {"personal-password":"123456", "personal-email":"rafayel.latif@gmail.com", "api_key":"apikey"}
// document.addEventListener("input", (event)=>{
//     const target = event.target
//     checkIfPassword(target.value)

// })

previously_typed = ""
document.addEventListener("keydown", (event) => {
    console.log(`Key "${event.key}" pressed  [event: keydown]`);
    if (event.key.length > 1) {
        if (event.key = "Backspace")    {
            previously_typed = previously_typed.slice(0, -1)
        }
        return; // ignore special keys like Shift, Ctrl, etc.
    }
    previously_typed += event.key
    if (previously_typed.length > 50) {
        previously_typed = previously_typed.slice(-50) // keep only the last 50 characters
    }
    console.log(`Previously typed: ${previously_typed}`);

    ispassword = checkIfPassword(previously_typed)
    if (ispassword) {
        previously_typed = "" // reset previously typed if we flag password
    }
});
