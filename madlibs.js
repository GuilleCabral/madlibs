
function writeStory() {
    var adj1 = document.getElementById("adj1").value;
    var adj2 = document.getElementById("adj2").value;
    var bird3 = document.getElementById("bird3").value;
    var house4 = document.getElementById("house4").value;
    var verb5 = document.getElementById("verb5").value;
    var verb6 = document.getElementById("verb6").value;
    var name7 = document.getElementById("name7").value;
    var noun8 = document.getElementById("noun8").value;
    var liq9 = document.getElementById("liq9").value;
    var verb10 = document.getElementById("verb10").value;
    var part11 = document.getElementById("part11").value;
    var noun12 = document.getElementById("noun12").value;
    var verb13 = document.getElementById("verb13").value;
    var noun14 = document.getElementById("noun14").value;


    var paragraph = "<p>It was a " + adj1 + ", November day. I woke up to the " + adj2 + " smell of " + bird3 + " roasting in the " + house4 + " downstairs. I "+ verb5 + " down the stairs to see if I could help " + verb6 + " the dinner. My mom said, \"See if " + name7 + " needs a fresh " + noun8 + ".\" So I carried a tray of glasses full of " + liq9 + " into the " + verb10 + "room. When I got there, I couldn't believe my " + part11 + "! There were " + noun12 + " " + verb13 + " on the " + noun14 + "!.</p>"


    document.getElementById("outputPanel").innerHTML = paragraph;
}
