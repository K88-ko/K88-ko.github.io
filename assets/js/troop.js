filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openForm1() {
  document.getElementById("myForm1").style.display = "block";
}

function closeForm1() {
  document.getElementById("myForm1").style.display = "none";
}

function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}

function openForm3() {
  document.getElementById("myForm3").style.display = "block";
}

function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}

function openForm4() {
  document.getElementById("myForm4").style.display = "block";
}

function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
}

function openForm5() {
  document.getElementById("myForm5").style.display = "block";
}

function closeForm5() {
  document.getElementById("myForm5").style.display = "none";
}

function openForm6() {
  document.getElementById("myForm6").style.display = "block";
}

function closeForm6() {
  document.getElementById("myForm6").style.display = "none";
}

function openForm7() {
  document.getElementById("myForm7").style.display = "block";
}

function closeForm7() {
  document.getElementById("myForm7").style.display = "none";
}

function openForm8() {
  document.getElementById("myForm8").style.display = "block";
}

function closeForm8() {
  document.getElementById("myForm8").style.display = "none";
}

function openForm9() {
  document.getElementById("myForm9").style.display = "block";
}

function closeForm9() {
  document.getElementById("myForm9").style.display = "none";
}

function openForm10() {
  document.getElementById("myForm10").style.display = "block";
}

function closeForm10() {
  document.getElementById("myForm10").style.display = "none";
}

function openForm11() {
  document.getElementById("myForm11").style.display = "block";
}

function closeForm11() {
  document.getElementById("myForm11").style.display = "none";
}

function openForm12() {
  document.getElementById("myForm12").style.display = "block";
}

function closeForm12() {
  document.getElementById("myForm12").style.display = "none";
}

function openForm13() {
  document.getElementById("myForm13").style.display = "block";
}

function closeForm13() {
  document.getElementById("myForm13").style.display = "none";
}

function openForm14() {
  document.getElementById("myForm14").style.display = "block";
}

function closeForm14() {
  document.getElementById("myForm14").style.display = "none";
}

function openForm15() {
  document.getElementById("myForm15").style.display = "block";
}

function closeForm15() {
  document.getElementById("myForm15").style.display = "none";
}

function openForm16() {
  document.getElementById("myForm16").style.display = "block";
}

function closeForm16() {
  document.getElementById("myForm16").style.display = "none";
}

function openForm17() {
  document.getElementById("myForm17").style.display = "block";
}

function closeForm17() {
  document.getElementById("myForm17").style.display = "none";
}

function openForm18() {
  document.getElementById("myForm18").style.display = "block";
}

function closeForm18() {
  document.getElementById("myForm18").style.display = "none";
}

function openForm19() {
  document.getElementById("myForm19").style.display = "block";
}

function closeForm19() {
  document.getElementById("myForm19").style.display = "none";
}

function openForm20() {
  document.getElementById("myForm20").style.display = "block";
}

function closeForm20() {
  document.getElementById("myForm20").style.display = "none";
}

function openForm21() {
  document.getElementById("myForm21").style.display = "block";
}

function closeForm21() {
  document.getElementById("myForm21").style.display = "none";
}

function openForm22() {
  document.getElementById("myForm22").style.display = "block";
}

function closeForm22() {
  document.getElementById("myForm22").style.display = "none";
}

function openForm23() {
  document.getElementById("myForm23").style.display = "block";
}

function closeForm23() {
  document.getElementById("myForm23").style.display = "none";
}

function openForm24() {
  document.getElementById("myForm24").style.display = "block";
}

function closeForm24() {
  document.getElementById("myForm24").style.display = "none";
}

function openForm25() {
  document.getElementById("myForm25").style.display = "block";
}

function closeForm25() {
  document.getElementById("myForm25").style.display = "none";
}

function openForm26() {
  document.getElementById("myForm26").style.display = "block";
}

function closeForm26() {
  document.getElementById("myForm26").style.display = "none";
}

function openForm27() {
  document.getElementById("myForm27").style.display = "block";
}

function closeForm27() {
  document.getElementById("myForm27").style.display = "none";
}

function openForm28() {
  document.getElementById("myForm28").style.display = "block";
}

function closeForm28() {
  document.getElementById("myForm28").style.display = "none";
}

function openForm29() {
  document.getElementById("myForm29").style.display = "block";
}

function closeForm29() {
  document.getElementById("myForm29").style.display = "none";
}

function openForm30() {
  document.getElementById("myForm30").style.display = "block";
}

function closeForm30() {
  document.getElementById("myForm30").style.display = "none";
}

function openForm31() {
  document.getElementById("myForm31").style.display = "block";
}

function closeForm31() {
  document.getElementById("myForm31").style.display = "none";
}

function openForm32() {
  document.getElementById("myForm32").style.display = "block";
}

function closeForm32() {
  document.getElementById("myForm32").style.display = "none";
}

function openForm33() {
  document.getElementById("myForm33").style.display = "block";
}

function closeForm33() {
  document.getElementById("myForm33").style.display = "none";
}

function openForm34() {
  document.getElementById("myForm34").style.display = "block";
}

function closeForm34() {
  document.getElementById("myForm34").style.display = "none";
}

function openForm35() {
  document.getElementById("myForm35").style.display = "block";
}

function closeForm35() {
  document.getElementById("myForm35").style.display = "none";
}

function openForm36() {
  document.getElementById("myForm36").style.display = "block";
}

function closeForm36() {
  document.getElementById("myForm36").style.display = "none";
}

function openForm37() {
  document.getElementById("myForm37").style.display = "block";
}

function closeForm37() {
  document.getElementById("myForm37").style.display = "none";
}

function openForm38() {
  document.getElementById("myForm38").style.display = "block";
}

function closeForm38() {
  document.getElementById("myForm38").style.display = "none";
}

function openForm39() {
  document.getElementById("myForm39").style.display = "block";
}

function closeForm39() {
  document.getElementById("myForm39").style.display = "none";
}

function openForm40() {
  document.getElementById("myForm40").style.display = "block";
}

function closeForm40() {
  document.getElementById("myForm40").style.display = "none";
}

function openForm41() {
  document.getElementById("myForm41").style.display = "block";
}

function closeForm41() {
  document.getElementById("myForm41").style.display = "none";
}

function openForm42() {
  document.getElementById("myForm42").style.display = "block";
}

function closeForm42() {
  document.getElementById("myForm42").style.display = "none";
}

function openForm43() {
  document.getElementById("myForm43").style.display = "block";
}

function closeForm43() {
  document.getElementById("myForm43").style.display = "none";
}

function openForm44() {
  document.getElementById("myForm44").style.display = "block";
}

function closeForm44() {
  document.getElementById("myForm44").style.display = "none";
}

function openForm45() {
  document.getElementById("myForm45").style.display = "block";
}

function closeForm45() {
  document.getElementById("myForm45").style.display = "none";
}

function openForm46() {
  document.getElementById("myForm46").style.display = "block";
}

function closeForm46() {
  document.getElementById("myForm46").style.display = "none";
}

function openForm47() {
  document.getElementById("myForm47").style.display = "block";
}

function closeForm47() {
  document.getElementById("myForm47").style.display = "none";
}

function openForm48() {
  document.getElementById("myForm48").style.display = "block";
}

function closeForm48() {
  document.getElementById("myForm48").style.display = "none";
}

function openForm49() {
  document.getElementById("myForm49").style.display = "block";
}

function closeForm49() {
  document.getElementById("myForm49").style.display = "none";
}

function openForm50() {
  document.getElementById("myForm50").style.display = "block";
}

function closeForm50() {
  document.getElementById("myForm50").style.display = "none";
}

function openForm51() {
  document.getElementById("myForm51").style.display = "block";
}

function closeForm51() {
  document.getElementById("myForm51").style.display = "none";
}

function openForm52() {
  document.getElementById("myForm52").style.display = "block";
}

function closeForm52() {
  document.getElementById("myForm52").style.display = "none";
}

function openForm53() {
  document.getElementById("myForm53").style.display = "block";
}

function closeForm53() {
  document.getElementById("myForm53").style.display = "none";
}

function openForm54() {
  document.getElementById("myForm54").style.display = "block";
}

function closeForm54() {
  document.getElementById("myForm54").style.display = "none";
}

function openForm55() {
  document.getElementById("myForm55").style.display = "block";
}

function closeForm55() {
  document.getElementById("myForm55").style.display = "none";
}

function openForm56() {
  document.getElementById("myForm56").style.display = "block";
}

function closeForm56() {
  document.getElementById("myForm56").style.display = "none";
}

function openForm57() {
  document.getElementById("myForm57").style.display = "block";
}

function closeForm57() {
  document.getElementById("myForm57").style.display = "none";
}

function openForm58() {
  document.getElementById("myForm58").style.display = "block";
}

function closeForm58() {
  document.getElementById("myForm58").style.display = "none";
}

function openForm59() {
  document.getElementById("myForm59").style.display = "block";
}

function closeForm59() {
  document.getElementById("myForm59").style.display = "none";
}

function openForm60() {
  document.getElementById("myForm60").style.display = "block";
}

function closeForm60() {
  document.getElementById("myForm60").style.display = "none";
}

function openForm61() {
  document.getElementById("myForm61").style.display = "block";
}

function closeForm61() {
  document.getElementById("myForm61").style.display = "none";
}

function openForm62() {
  document.getElementById("myForm62").style.display = "block";
}

function closeForm62() {
  document.getElementById("myForm62").style.display = "none";
}

function openForm63() {
  document.getElementById("myForm63").style.display = "block";
}

function closeForm63() {
  document.getElementById("myForm63").style.display = "none";
}

function openForm64() {
  document.getElementById("myForm64").style.display = "block";
}

function closeForm64() {
  document.getElementById("myForm64").style.display = "none";
}

function openForm65() {
  document.getElementById("myForm65").style.display = "block";
}

function closeForm65() {
  document.getElementById("myForm65").style.display = "none";
}

