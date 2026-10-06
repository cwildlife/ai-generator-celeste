function displayQuote(response){

new Typewriter("#quoteOutput", {
    strings: response.data.answer,
    autoStart: true,
    delay: 100,
    cursor: "",
});

}


function generateQuote(event) {
    event.preventDefault();

    let inputElement = document.querySelector("#input");
    let apiKey = "b94o8b93a9f0455cftd053151d5ee87d";
    let context = "You are an inspirational quote generator.Generate a motivational quote maximum two sentences.The quote should be uplifting and encourage the reader to take action or think about the topic.Please provide the quote without any additional commentary or explanation.Also add the person's name at the end of the quote. Please follow users instructions."; 
    let prompt = `Users instructions:Generate a motivational quote about ${inputElement.value}, It must be only one sentence and must be in quotation marks.Please place the author's name at the end of the quote. Always place the author's name after the quote and add a - before the name. Also use a <strong> element to highlight the - and the author.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

   let quoteContainer = document.querySelector(".hidden");
   quoteContainer.classList.remove("hidden");
   quoteContainer.innerHTML = `<div class="blink"> Generating an inspirational quote for you... </div>`;
    
   axios.get(apiUrl).then(displayQuote);

}

let quoteGeneratorForm = document.querySelector("#quoteGenerator");
quoteGeneratorForm.addEventListener ("submit", generateQuote);
