// this script is going to be listing to user keystrokes to detect if they type any sensitive info so we can warn them!

const keywords = ["password", "ssn", "credit card", "address", "phone number", "email"]
document.addEventListener("input", (event)=>{
    const target = event.target
    console.log("User typed: ", target.value)
    keywords.forEach(keyword => {
        if (target.value.includes(keyword)) {
            alert(`Warning: You typed a sensitive keyword - ${keyword}`)
        }
    })
})

