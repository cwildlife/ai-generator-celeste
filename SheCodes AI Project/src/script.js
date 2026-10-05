function generateQuote(event) {
    event.preventDefault();

new Typewriter("#quoteOutput", {
    strings: "Even in our differences, we find similarities.",
    autoStart: true,
    delay: 100,
    cursor: "",
});
}

let quoteGeneratorForm = document.querySelector("#quoteGenerator");
quoteGeneratorForm.addEventListener ("submit", generateQuote);
