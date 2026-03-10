async function findName(i) {
        let response = await fetch('https://anapioficeandfire.com/api/books/'+ i);
        let data = await response.json();
        console.log(data.name);

        document.getElementById("book" + i).innerHTML = "";

        let name = document.createElement("p");
        name.innerText = data.name;
        document.getElementById("book" + i).appendChild(name);
    }

for (let i=1;i<=12;i++){
    findName(i);
}

document.getElementById("book1").addEventListener("click",findOtherInfo);
document.getElementById("book2").addEventListener("click",findOtherInfo);
document.getElementById("book3").addEventListener("click",findOtherInfo);
document.getElementById("book4").addEventListener("click",findOtherInfo(4));
document.getElementById("book5").addEventListener("click",findOtherInfo(5));
document.getElementById("book6").addEventListener("click",findOtherInfo(6));
document.getElementById("book7").addEventListener("click",findOtherInfo(7));
document.getElementById("book8").addEventListener("click",findOtherInfo(8));
document.getElementById("book9").addEventListener("click",findOtherInfo(9));
document.getElementById("book10").addEventListener("click",findOtherInfo(10));
document.getElementById("book11").addEventListener("click",findOtherInfo(11));
document.getElementById("book12").addEventListener("click",findOtherInfo(12));



async function findOtherInfo(n) {
    let response = await fetch('https://anapioficeandfire.com/api/books/'+ n);
    let data = await response.json();
    console.log(data.released);
    console.log(data.numberOfpages);

    document.getElementById("book" + n + "release").innerHTML = "";

    let release = document.createElement("p");
    release.innerText = data.released;
    document.getElementById("book" + n + "release").appendChild(release);

    

        document.getElementById("book" + n + "pages").innerHTML = "";

    let pages = document.createElement("p");
    pages.innerText = data.numberOfpages;
    document.getElementById("book" + n + "pages").appendChild(pages);
}