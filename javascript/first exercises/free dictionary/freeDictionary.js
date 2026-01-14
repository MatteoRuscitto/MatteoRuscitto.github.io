
document.getElementById("dictionaryForm").addEventListener("submit", getWord)


function getWord (event){
    event.preventDefault();
    let name = document.getElementById("wordInput").value;
    console.log(name);
    findDefinition(name);
}
async function findDefinition(word) {
    let response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ word);
    let data = await response.json();
    console.log(data[0].meanings[0].definitions[0].definition);

    document.querySelector("#definition").innerHTML = "";

    let definition = document.createElement("p");
    definition.innerText = data[0].meanings[0].definitions[0].definition;
    document.querySelector("#definition").appendChild(definition);
}