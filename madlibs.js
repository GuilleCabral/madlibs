
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
    var verb10 = document.getElementByIdr("verb10").value;
    var part11 = document.getElementById("part11").value;
    var noun12 = document.getElementById("noun12").value;
    var verb13 = document.getElementById("verb13").value;
    var noun14 = document.getElementById("noun14").value;


    var paragraph = "<p>It was a " + adj1.value + ", cold November day. I woke up to the " + adj2.value + " smell of " + bird3.value + " roasting in the " + house4.value + " downstairs. I "+ verb5.value + " down the stairs to see if I could help " + verb6 + " the dinner. My mom said, \"See if " + name7.value + " needs a fresh " + noun8.value + "\. So I carried a tray of glasses full of " + liq9.value + " into the " + verb10.value + "room. When I got there, I couldn't believe my " + part11.value + "! There were " + noun12.value + " " + verb13.value + " on the " + noun14.value + "!.</p>"


    document.getElementById("answer").innerHTML = paragraph;
}
