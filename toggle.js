let b = document.getElementById("box");
function onstyle(){
    b.classlist.add("yellow");
}
function offset(){
    b.classlist.remove("yellow");
}
function onoffStyleYellow(){
    b.classlist.toggle("yellow");
}