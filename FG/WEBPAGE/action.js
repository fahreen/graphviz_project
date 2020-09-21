var coll = document.getElementsByClassName("collapsible");
var i;

var y = document.getElementById("old");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";

    } else {
      content.style.display = "block";
        y.style.display = "none";
    }
  });
}

//header
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


function hideElement(){
  var two = document.getElementById("Fig.2");
  var three = document.getElementById("Fig.3");
  var four = document.getElementById("Fig.4");
  var five = document.getElementById("Fig.5");
  var six = document.getElementById("Fig.6");
  two.style.display = "none";
  three.style.display = "none";
  four.style.display = "none";
  five.style.display = "none";
  six.style.display = "none";
  var f = document.getElementById("freq");
  f.style.display = "none";
}

function showFreq() {
  var x = document.getElementById("freq");
  if (x.style.display === "none") {
    x.style.display = "block";
    var three = document.getElementById("Fig.3");
    var four = document.getElementById("Fig.4");
    var five = document.getElementById("Fig.5");
    var six = document.getElementById("Fig.6");
  var two = document.getElementById("Fig.2");
  two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
  }
  else {
    x.style.display = "none";
  }
}

function showFigure2() {
  var x = document.getElementById("Fig.2");
  if (x.style.display === "none") {
    x.style.display = "block";
    var three = document.getElementById("Fig.3");
    var four = document.getElementById("Fig.4");
    var five = document.getElementById("Fig.5");
    var six = document.getElementById("Fig.6");
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
    var f = document.getElementById("freq");
    f.style.display = "none";
  }
  else {
    x.style.display = "none";
  }
}


function showFigure3() {
  var x = document.getElementById("Fig.3");
  if (x.style.display === "none") {
    x.style.display = "block";
    var two = document.getElementById("Fig.2");
    var four = document.getElementById("Fig.4");
    var five = document.getElementById("Fig.5");
    var six = document.getElementById("Fig.6");
    two.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
    var f = document.getElementById("freq");
    f.style.display = "none";
  }
  else {
    x.style.display = "none";
  }
}


function showFigure4() {
  var x = document.getElementById("Fig.4");
  if (x.style.display === "none") {
    x.style.display = "block";
    var two = document.getElementById("Fig.2");
    var three = document.getElementById("Fig.3");
    var five = document.getElementById("Fig.5");
    var six = document.getElementById("Fig.6");
    two.style.display = "none";
    three.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
    var f = document.getElementById("freq");
    f.style.display = "none";
  }
  else {
    x.style.display = "none";
  }
}



function showFigure5() {
  var x = document.getElementById("Fig.5");
  if (x.style.display === "none") {
    x.style.display = "block";
    var two = document.getElementById("Fig.2");
    var four = document.getElementById("Fig.4");
    var three = document.getElementById("Fig.3");
    var six = document.getElementById("Fig.6");
    two.style.display = "none";
    four.style.display = "none";
    three.style.display = "none";
    six.style.display = "none";
    var f = document.getElementById("freq");
    f.style.display = "none";
  }
  else {
    x.style.display = "none";
  }
}



function showFigure6() {
  var x = document.getElementById("Fig.6");
  if (x.style.display === "none") {
    x.style.display = "block";
    var two = document.getElementById("Fig.2");
    var four = document.getElementById("Fig.4");
    var five = document.getElementById("Fig.5");
    var three = document.getElementById("Fig.3");
    two.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    three.style.display = "none";
    var f = document.getElementById("freq");
    f.style.display = "none";
  }
  else {
    x.style.display = "none";
  }
}

//functions to change edge colors---------------------
function threeB(){

  var x = document.getElementById("3B");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 4 && i!== 9){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 77){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("3A_3Bline");
  var a2 = document.getElementById("3A_3Barr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//--------------------------------------------------

function elevenA(){

  var x = document.getElementById("11A");
  var color = x.style.fill;


  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

  else{
  x.style.stroke = "yellow";
    var i = 1;
    var j =1;
    while (i < 61){
      if (i !== 39 && i!== 19){
        document.getElementById("node"+ i).style.opacity = "0.5";}
      i++;
    }

    while (j < 85){
        if (j !== 14){
          document.getElementById("edge"+ j).style.opacity = "0.25";}
      j++;
    }
}

  var a1 = document.getElementById("10A_11Aline");
  var a2 = document.getElementById("10A_11Aarr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}





function twelve(){

  var x = document.getElementById("12");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 40 && i!== 20 && i!== 19){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 17 && j !== 20){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }



  var a1 = document.getElementById("10A_12line");
  var a2 = document.getElementById("10A_12Aarr");

  var b1 = document.getElementById("10B_12line");
  var b2 = document.getElementById("10B_12Aarr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}

if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}
}


// 17
function seventeen(){
  var x = document.getElementById("17");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 3 && i!== 1 && i!== 27){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 40 && j !== 45){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("15A_17line");
  var a2 = document.getElementById("15A_17arr");

  var b1 = document.getElementById("16_17line");
  var b2 = document.getElementById("16_17Aarr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}

if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}

}

//21A
function twentyOneA(){
  var x = document.getElementById("21A");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 51 && i!== 50){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }
      while (j < 85){
          if (j !== 54){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }
  var a1 = document.getElementById("19_21Aline");
  var a2 = document.getElementById("19_21Aarr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//21B
function twentyOneB(){
  var x = document.getElementById("21B");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 5 && i!== 24){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 50){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }
  var a1 = document.getElementById("18_21Aline");
  var a2 = document.getElementById("18_21Aarr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}



//25
function twentyFive(){
  var x = document.getElementById("25");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 60 && i!== 59){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 84){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("24A_25line");
  var a2 = document.getElementById("24A_25arr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//30B
function thirtyB(){
  var x = document.getElementById("30B");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 56 && i!== 55){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 65){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("30A_30Bline");
  var a2 = document.getElementById("30A_30Barr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//31
function thirtyOne(){
  var x = document.getElementById("31");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }
    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 57 && i!== 56){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 66){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }
  var a1 = document.getElementById("30B_31line");
  var a2 = document.getElementById("30B_31Barr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//47
function fortySeven(){
    var x = document.getElementById("47");
    var color = x.style.fill;

    if (x.style.stroke === "yellow"){
      x.style.stroke = color ;
      var k =1;
      var m = 1;
      while (k < 61){
          document.getElementById("node"+ k).style.opacity = "1";
          k++;
      }
      while (m < 85){
          document.getElementById("edge"+ m).style.opacity = "1";
          m++;
    }
    }
      else{
      x.style.stroke = "yellow";
        var i = 1;
        var j =1;
        while (i < 61){
          if (i !== 44 && i!== 21){
            document.getElementById("node"+ i).style.opacity = "0.5";}
          i++;
        }

        while (j < 85){
            if (j !== 35){
              document.getElementById("edge"+ j).style.opacity = "0.25";}
          j++;
        }
    }

  var a1 = document.getElementById("15B_47line");
  var a2 = document.getElementById("15B_47arr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}




//51
function fiftyOne(){
    var x = document.getElementById("51");
    var color = x.style.fill;

    if (x.style.stroke === "yellow"){
      x.style.stroke = color ;
      var k =1;
      var m = 1;
      while (k < 61){
          document.getElementById("node"+ k).style.opacity = "1";
          k++;
      }
      while (m < 85){
          document.getElementById("edge"+ m).style.opacity = "1";
          m++;
    }
    }

      else{
      x.style.stroke = "yellow";
        var i = 1;
        var j =1;
        while (i < 61){
          if (i !== 1 && i !== 2 && i!== 27 && i!== 5 && i!== 24 && i!== 50 && i!== 51){
            document.getElementById("node"+ i).style.opacity = "0.5";}
          i++;
        }
        while (j < 85){
            if (j !== 43 && j !== 51 && j !== 55 && j !== 52 && j !== 38 && j !== 56 ){
              document.getElementById("edge"+ j).style.opacity = "0.25";}
          j++;
        }
    }


  var a1 = document.getElementById("15A_51line");
  var a2 = document.getElementById("15A_51arr");

  var b1 = document.getElementById("16_51line");
  var b2 = document.getElementById("16_51arr");

  var c1 = document.getElementById("18_51line");
  var c2 = document.getElementById("18_51arr");

  var d1 = document.getElementById("19_51line");
  var d2 = document.getElementById("19_51arr");

  var e1 = document.getElementById("21A_51line");
  var e2 = document.getElementById("21A_51arr");

  var f1 = document.getElementById("21B_51line");
  var f2 = document.getElementById("21B_51arr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}

if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}


if (c1.style.stroke === "red"){
  c1.style.stroke = "black";
  c2.style.stroke = "black";
  c2.style.fill = "black";
}
else{
  c1.style.stroke = "red";
  c2.style.stroke = "red";
  c2.style.fill = "red";
}

if (d1.style.stroke === "red"){
  d1.style.stroke = "black";
  d2.style.stroke = "black";
  d2.style.fill = "black";
}
else{
  d1.style.stroke = "red";
  d2.style.stroke = "red";
  d2.style.fill = "red";
}

if (e1.style.stroke === "red"){
  e1.style.stroke = "black";
  e2.style.stroke = "black"
  e2.style.fill = "black";
}
else{
  e1.style.stroke = "red";
  e2.style.stroke = "red";
  e2.style.fill = "red";
}

if (f1.style.stroke === "red"){
  f1.style.stroke = "black";
  f2.style.stroke = "black";
  f2.style.fill = "black";
}
else{
  f1.style.stroke = "red";
  f2.style.stroke = "red";
  f2.style.fill = "red";
}
}


//52
function fiftyTwo(){
  var x = document.getElementById("52");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 46 && i!== 2){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 44){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("51_52line");
  var a2 = document.getElementById("51_52arr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//56
function fiftySix(){
  var x = document.getElementById("56");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 13 && i!== 71 && i!== 10 && i!== 57 && i!== 11){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 67 && j !== 69 && j !== 71){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }



  var a1 = document.getElementById("28_56line");
  var a2 = document.getElementById("28_56arr");

  var b1 = document.getElementById("29_56line");
  var b2 = document.getElementById("29_56arr");

  var c1 = document.getElementById("31_56line");
  var c2 = document.getElementById("31_56arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}

if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}


if (c1.style.stroke === "red"){
  c1.style.stroke = "black";
  c2.style.stroke = "black";
  c2.style.fill = "black";
}
else{
  c1.style.stroke = "red";
  c2.style.stroke = "red";
  c2.style.fill = "red";
}
}




//57
function fiftySeven(){
  var x = document.getElementById("57");
  var color = x.style.fill;
  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 14 && i!== 11){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 72){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("28_57line");
  var a2 = document.getElementById("28_57arr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}



//60
function sixty(){
  var x = document.getElementById("60");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 43 && i!== 20){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 21){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("10B_60line");
  var a2 = document.getElementById("10B_60arr");



  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}



//61B
function sixtyOneB(){
  var x = document.getElementById("61B");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 41 && i!== 39){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 15){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("11A_61Bline");
  var a2 = document.getElementById("11A_61Barr");



  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}

}

//62
function sixtyTwo(){
  var x = document.getElementById("62");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 42 && i!== 41){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 16){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("61B_62line");
  var a2 = document.getElementById("61B_62Barr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//63A
function sixtyThreeA(){
  //document.getElementById("node34").style.opacity = "0.25";
  var x = document.getElementById("63A");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 35 && i!== 30 && i!== 4){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85 ){
          if (j !== 78 && j!== 3){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("3B_63Aline");
  var a2 = document.getElementById("3B_63ABarr");

  var b1 = document.getElementById("5_63Aline");
  var b2 = document.getElementById("5_63ABarr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}

if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}

}

//63B
function sixtyThreeB(){
  var x = document.getElementById("63B");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 36 && i!== 35){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 4){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("63A_63Bline");
  var a2 = document.getElementById("63A_63Barr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//64
function sixtyFour(){
  var x = document.getElementById("64");
  var color = x.style.fill;


  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 35 && i!== 36 && i!==37 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 6 && j!== 5){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("63A_64line");
  var a2 = document.getElementById("63A_64arr");

  var b1 = document.getElementById("63B_64line");
  var b2 = document.getElementById("63B_64arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}
}


function sixtySix(){
  var x = document.getElementById("66");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 45 && i!== 2){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 39){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("51_66line");
  var a2 = document.getElementById("51_66arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//67A
function sixtySevenA(){
  var x = document.getElementById("67A");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 35 && i!== 38){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 79){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("63A_66line");
  var a2 = document.getElementById("63A_66arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//-------------------------------------------------------


//1A,B
function oneAB(){
  var x = document.getElementById("1AB");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 25 && i!== 26){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 36){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }


  var a1 = document.getElementById("fig3_1ABline");
  var a2 = document.getElementById("fig3_1ABarr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//2
function two(){
  var x = document.getElementById("2");
  var color = x.style.fill;


  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 49 && i!== 47){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 47){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }



  var a1 = document.getElementById("fig4_2line");
  var a2 = document.getElementById("fig4_2arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//3A
function threeA(){
  var x = document.getElementById("3A");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 9 && i!== 54 && i!==6 && i!== 58 && i!== 52 && i!== 22 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 27 && j !==61  && j !== 76 && j !==80 && j !==60){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }


  var a1 = document.getElementById("fig2a_3Aline");
  var a2 = document.getElementById("fig2a_3Aarr");

  var b1 = document.getElementById("fig5a_3Aline");
  var b2 = document.getElementById("fig5a_3Aarr");

  var c1 = document.getElementById("fig5b_3Aline");
  var c2 = document.getElementById("fig5b_3Aarr");

  var d1 = document.getElementById("fig6a_3Aline");
  var d2 = document.getElementById("fig6a_3Aarr");

  var e1 = document.getElementById("fig6b_3Aline");
  var e2 = document.getElementById("fig6b_3Aarr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}

if (c1.style.stroke === "red"){
  c1.style.stroke = "black";
  c2.style.stroke = "black";
  c2.style.fill = "black";
}
else{
  c1.style.stroke = "red";
  c2.style.stroke = "red";
  c2.style.fill = "red";
}


if (d1.style.stroke === "red"){
  d1.style.stroke = "black";
  d2.style.stroke = "black";
  d2.style.fill = "black";
}
else{
  d1.style.stroke = "red";
  d2.style.stroke = "red";
  d2.style.fill = "red";
}


if (e1.style.stroke === "red"){
  e1.style.stroke = "black";
  e2.style.stroke = "black";
  e2.style.fill = "black";
}
else{
  e1.style.stroke = "red";
  e2.style.stroke = "red";
  e2.style.fill = "red";
}

}


//4A,B
function fourAB(){
  var x = document.getElementById("4A,B");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 29 && i!== 28){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 1){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("table1_4ABline");
  var a2 = document.getElementById("table1_4ABarr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//5
function five(){
  var x = document.getElementById("5");
  var color = x.style.fill;


  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 28 && i!== 30){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 2){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("table1_5line");
  var a2 = document.getElementById("table1_5arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//6A
function sixA(){
  var x = document.getElementById("6A");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 28  && i!== 54  && i!== 6 && i!== 58 && i!== 52 && i!==22  && i!==7 && i!==47 && i!==15 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 7 && j !==62 && j !== 75 && j !== 81 && j !==59 && j !==26 && j !==48 && j !==33 ){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("fig2b_6Aline");
  var a2 = document.getElementById("fig2b_6Aarr");

  var h1 = document.getElementById("fig2a_6Aline");
  var h2 = document.getElementById("fig2a_6Aarr");


  var b1 = document.getElementById("fig4_6Aline");
  var b2 = document.getElementById("fig4_6Aarr");

  var c1 = document.getElementById("fig5a_6Aline");
  var c2 = document.getElementById("fig5a_6Aarr");

  var d1 = document.getElementById("fig5b_6Aline");
  var d2 = document.getElementById("fig5b_6Aarr");

  var e1 = document.getElementById("fig6a_6Aline");
  var e2 = document.getElementById("fig6a_6Aarr");

  var f1 = document.getElementById("fig6b_6Aline");
  var f2 = document.getElementById("fig6b_6Aarr");

  var g1 = document.getElementById("table1_6Aline");
  var g2 = document.getElementById("table1_6Aarr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}

if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}

if (c1.style.stroke === "red"){
  c1.style.stroke = "black";
  c2.style.stroke = "black";
  c2.style.fill = "black";
}
else{
  c1.style.stroke = "red";
  c2.style.stroke = "red";
  c2.style.fill = "red";
}


if (d1.style.stroke === "red"){
  d1.style.stroke = "black";
  d2.style.stroke = "black";
  d2.style.fill = "black";
}
else{
  d1.style.stroke = "red";
  d2.style.stroke = "red";
  d2.style.fill = "red";
}


if (e1.style.stroke === "red"){
  e1.style.stroke = "black";
  e2.style.stroke = "black";
  e2.style.fill = "black";
}
else{
  e1.style.stroke = "red";
  e2.style.stroke = "red";
  e2.style.fill = "red";
}


if (f1.style.stroke === "red"){
  f1.style.stroke = "black";
  f2.style.stroke = "black";
  f2.style.fill = "black";
}
else{
  f1.style.stroke = "red";
  f2.style.stroke = "red";
  f2.style.fill = "red";
}


if (g1.style.stroke === "red"){
  g1.style.stroke = "black";
  g2.style.stroke = "black";
  g2.style.fill = "black";
}
else{
  g1.style.stroke = "red";
  g2.style.stroke = "red";
  g2.style.fill = "red";
}

if (h1.style.stroke === "red"){
  h1.style.stroke = "black";
  h2.style.stroke = "black";
  h2.style.fill = "black";
}
else{
  h1.style.stroke = "red";
  h2.style.stroke = "red";
  h2.style.fill = "red";
}

}


//6B
function sixB(){
  var x = document.getElementById("6B");
  var color = x.style.fill;


    if (x.style.stroke === "yellow"){
      x.style.stroke = color ;
      var k =1;
      var m = 1;
      while (k < 61){
          document.getElementById("node"+ k).style.opacity = "1";
          k++;
      }
      while (m < 85){
          document.getElementById("edge"+ m).style.opacity = "1";
          m++;
    }
    }

      else{
      x.style.stroke = "yellow";
        var i = 1;
        var j =1;
        while (i < 61){
          if (i !== 8 && i!== 54 && i!==6 && i!==52 && i!==22 && i!==58  ){
            document.getElementById("node"+ i).style.opacity = "0.5";}
          i++;
        }

        while (j < 85){
            if (j !== 63 && j !== 74 && j !== 82 && j !== 58 && j !== 25 ){
              document.getElementById("edge"+ j).style.opacity = "0.25";}
          j++;
        }
    }

  var a1 = document.getElementById("fig2a_6Bline");
  var a2 = document.getElementById("fig2a_6Barr");

  var b1 = document.getElementById("fig5a_6Bline");
  var b2 = document.getElementById("fig5a_6Barr");

  var c1 = document.getElementById("fig5b_6Bline");
  var c2 = document.getElementById("fig5b_6Barr");

  var d1 = document.getElementById("fig6a_6Bline");
  var d2 = document.getElementById("fig6a_6Barr");

  var e1 = document.getElementById("fig6b_6Bline");
  var e2 = document.getElementById("fig6b_6Barr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}

if (c1.style.stroke === "red"){
  c1.style.stroke = "black";
  c2.style.stroke = "black";
  c2.style.fill = "black";
}
else{
  c1.style.stroke = "red";
  c2.style.stroke = "red";
  c2.style.fill = "red";
}


if (d1.style.stroke === "red"){
  d1.style.stroke = "black";
  d2.style.stroke = "black";
  d2.style.fill = "black";
}
else{
  d1.style.stroke = "red";
  d2.style.stroke = "red";
  d2.style.fill = "red";
}


if (e1.style.stroke === "red"){
  e1.style.stroke = "black";
  e2.style.stroke = "black";
  e2.style.fill = "black";
}
else{
  e1.style.stroke = "red";
  e2.style.stroke = "red";
  e2.style.fill = "red";
}

}

//8
function eight(){
  var x = document.getElementById("8");
  var color = x.style.fill;

    if (x.style.stroke === "yellow"){
      x.style.stroke = color ;
      var k =1;
      var m = 1;
      while (k < 61){
          document.getElementById("node"+ k).style.opacity = "1";
          k++;
      }
      while (m < 85){
          document.getElementById("edge"+ m).style.opacity = "1";
          m++;
    }
    }

      else{
      x.style.stroke = "yellow";
        var i = 1;
        var j =1;
        while (i < 61){
          if (i !== 23 && i!== 22){
            document.getElementById("node"+ i).style.opacity = "0.5";}
          i++;
        }

        while (j < 85){
            if (j !== 12){
              document.getElementById("edge"+ j).style.opacity = "0.25";}
          j++;
        }
    }

  var a1 = document.getElementById("fig2a_8line");
  var a2 = document.getElementById("fig2a_8arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//9
function nine(){
  var x = document.getElementById("9");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 18 && i!== 15){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 28){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }


  var a1 = document.getElementById("fig2b_9line");
  var a2 = document.getElementById("fig2b_9arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}



function tenAB(){

  var x = document.getElementById("10A");
  var color = x.style.fill;


  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 19 && i!==20 && i!== 15 && i!==22 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 13 &&  j !== 19 &&  j !== 30 &&  j !== 29){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }


var y = document.getElementById("10B");
var color2 = y.style.fill;

if (y.style.stroke === "orange"){
  y.style.stroke = color2 ;
}
else{
y.style.stroke = "orange";
}

  var a1 = document.getElementById("fig2a_10Aline");
  var a2 = document.getElementById("fig2a_10Aarr");

  var b1 = document.getElementById("fig2b_10Aline");
  var b2 = document.getElementById("fig2b_10Aarr");

  var c1 = document.getElementById("fig2a_10Bline");
  var c2 = document.getElementById("fig2a_10Barr");

  var d1 = document.getElementById("fig2b_10Bline");
  var d2 = document.getElementById("fig2b_10Barr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}


if (c1.style.stroke === "red"){
  c1.style.stroke = "black";
  c2.style.stroke = "black";
  c2.style.fill = "black";
}
else{
  c1.style.stroke = "red";
  c2.style.stroke = "red";
  c2.style.fill = "red";
}


if (d1.style.stroke === "red"){
  d1.style.stroke = "black";
  d2.style.stroke = "black";
  d2.style.fill = "black";
}
else{
  d1.style.stroke = "red";
  d2.style.stroke = "red";
  d2.style.fill = "red";
}
}



//13
function thirteen(){
  var x = document.getElementById("13");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 15 && i!== 22 && i!== 16){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 32 && j !== 23 ){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("fig2a_13line");
  var a2 = document.getElementById("fig2a_13arr");

  var b1 = document.getElementById("fig2b_13line");
  var b2 = document.getElementById("fig2b_13arr");



  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}


if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}
}



//14
function fourteen(){
  var x = document.getElementById("14");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 17  && i!== 22 && i!== 15 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 31 && j !== 22 ){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }


  var a1 = document.getElementById("fig2a_14line");
  var a2 = document.getElementById("fig2a_14arr");

  var b1 = document.getElementById("fig2b_14line");
  var b2 = document.getElementById("fig2b_14arr");



  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}


if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}
}


//15A
function fifteenA(){
  var x = document.getElementById("15A");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 1 && i!== 25){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 42){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("fig3_15Aline");
  var a2 = document.getElementById("fig3_15Aarr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//15B
function fifteenB(){
  var x = document.getElementById("15B");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 21 && i!== 15 && i!== 22 && i!== 25 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 41 && j !== 34 && j !==24 ){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("fig2a_15Bline");
  var a2 = document.getElementById("fig2a_15Barr");

  var b1 = document.getElementById("fig2b_15Bline");
  var b2 = document.getElementById("fig2b_15Barr");

  var c1 = document.getElementById("fig3_15Bline");
  var c2 = document.getElementById("fig3_15Barr");



  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}


if (b1.style.stroke === "red"){
  b1.style.stroke = "black";
  b2.style.stroke = "black";
  b2.style.fill = "black";
}
else{
  b1.style.stroke = "red";
  b2.style.stroke = "red";
  b2.style.fill = "red";
}

if (c1.style.stroke === "red"){
  c1.style.stroke = "black";
  c2.style.stroke = "black";
  c2.style.fill = "black";
}
else{
  c1.style.stroke = "red";
  c2.style.stroke = "red";
  c2.style.fill = "red";
}
}


//16
function sixteen(){
  var x = document.getElementById("16");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 27 && i!== 25){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 37 ){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("fig3_16line");
  var a2 = document.getElementById("fig3_16arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//18
function eighteen(){
  var x = document.getElementById("18");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 47  && i!== 24 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 49){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("fig4_18line");
  var a2 = document.getElementById("fig4_18arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//19
function nineteen(){
  var x = document.getElementById("19");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 50  && i!== 47 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 53){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }


  var a1 = document.getElementById("fig4_19line");
  var a2 = document.getElementById("fig4_19arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//20
function twenty(){
  var x = document.getElementById("20");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !==48 && i!== 47 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 46 ){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }


  var a1 = document.getElementById("fig4_20line");
  var a2 = document.getElementById("fig4_20arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//23
function twentyThree(){
  var x = document.getElementById("23");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 52  && i!==53 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !==57 ){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }


  var a1 = document.getElementById("fig5A_23line");
  var a2 = document.getElementById("fig5A_23arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//24
function twentyFourA(){
  var x = document.getElementById("24A");
  var color = x.style.fill;


    if (x.style.stroke === "yellow"){
      x.style.stroke = color ;
      var k =1;
      var m = 1;
      while (k < 61){
          document.getElementById("node"+ k).style.opacity = "1";
          k++;
      }
      while (m < 85){
          document.getElementById("edge"+ m).style.opacity = "1";
          m++;
    }
    }

      else{
      x.style.stroke = "yellow";
        var i = 1;
        var j =1;
        while (i < 61){
          if (i !== 59 && i!== 58 ){
            document.getElementById("node"+ i).style.opacity = "0.5";}
          i++;
        }

        while (j < 85){
            if (j !== 83){
              document.getElementById("edge"+ j).style.opacity = "0.25";}
          j++;
        }
    }

  var a1 = document.getElementById("fig5B_24Aline");
  var a2 = document.getElementById("fig5B_24Aarr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//27A
function twentySeven(){
  var x = document.getElementById("27");
  var color = x.style.fill;


    if (x.style.stroke === "yellow"){
      x.style.stroke = color ;
      var k =1;
      var m = 1;
      while (k < 61){
          document.getElementById("node"+ k).style.opacity = "1";
          k++;
      }
      while (m < 85){
          document.getElementById("edge"+ m).style.opacity = "1";
          m++;
    }
    }

      else{
      x.style.stroke = "yellow";
        var i = 1;
        var j =1;
        while (i < 61){
          if (i !== 12 && i!==6 ){
            document.getElementById("node"+ i).style.opacity = "0.5";}
          i++;
        }

        while (j < 85){
            if (j !== 73){
              document.getElementById("edge"+ j).style.opacity = "0.25";}
          j++;
        }
    }


  var a1 = document.getElementById("fig6A_27line");
  var a2 = document.getElementById("fig6A_27Aarr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}



//28
function twentyEight(){
  var x = document.getElementById("28");
  var color = x.style.fill;



    if (x.style.stroke === "yellow"){
      x.style.stroke = color ;
      var k =1;
      var m = 1;
      while (k < 61){
          document.getElementById("node"+ k).style.opacity = "1";
          k++;
      }
      while (m < 85){
          document.getElementById("edge"+ m).style.opacity = "1";
          m++;
    }
    }

      else{
      x.style.stroke = "yellow";
        var i = 1;
        var j =1;
        while (i < 61){
          if (i !== 12 && i!==11 ){
            document.getElementById("node"+ i).style.opacity = "0.5";}
          i++;
        }

        while (j < 85){
            if (j !== 70){
              document.getElementById("edge"+ j).style.opacity = "0.25";}
          j++;
        }
    }

  var a1 = document.getElementById("fig6A_28line");
  var a2 = document.getElementById("fig6A_28Aarr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//29
function twentyNine(){
  var x = document.getElementById("29");
  var color = x.style.fill;



    if (x.style.stroke === "yellow"){
      x.style.stroke = color ;
      var k =1;
      var m = 1;
      while (k < 61){
          document.getElementById("node"+ k).style.opacity = "1";
          k++;
      }
      while (m < 85){
          document.getElementById("edge"+ m).style.opacity = "1";
          m++;
    }
    }

      else{
      x.style.stroke = "yellow";
        var i = 1;
        var j =1;
        while (i < 61){
          if (i !== 10 && i!== 6){
            document.getElementById("node"+ i).style.opacity = "0.5";}
          i++;
        }

        while (j < 85){
            if (j !== 68){
              document.getElementById("edge"+ j).style.opacity = "0.25";}
          j++;
        }
    }

  var a1 = document.getElementById("fig6A_29line");
  var a2 = document.getElementById("fig6A_29Aarr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}



//30A
function thirtyA(){
  var x = document.getElementById("30A");
  var color = x.style.fill;


    if (x.style.stroke === "yellow"){
      x.style.stroke = color ;
      var k =1;
      var m = 1;
      while (k < 61){
          document.getElementById("node"+ k).style.opacity = "1";
          k++;
      }
      while (m < 85){
          document.getElementById("edge"+ m).style.opacity = "1";
          m++;
    }
    }

      else{
      x.style.stroke = "yellow";
        var i = 1;
        var j =1;
        while (i < 61){
          if (i !== 54 && i!== 55){
            document.getElementById("node"+ i).style.opacity = "0.5";}
          i++;
        }

        while (j < 85){
            if (j !==  64){
              document.getElementById("edge"+ j).style.opacity = "0.25";}
          j++;
        }
    }

  var a1 = document.getElementById("fig6B_30Aline");
  var a2 = document.getElementById("fig6B_30Aarr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//35
function thirtyFive(){
  var x = document.getElementById("35");
  var color = x.style.fill;


    if (x.style.stroke === "yellow"){
      x.style.stroke = color ;
      var k =1;
      var m = 1;
      while (k < 61){
          document.getElementById("node"+ k).style.opacity = "1";
          k++;
      }
      while (m < 85){
          document.getElementById("edge"+ m).style.opacity = "1";
          m++;
    }
    }

      else{
      x.style.stroke = "yellow";
        var i = 1;
        var j =1;
        while (i < 61){
          if (i !== 28 && i!== 31 ){
            document.getElementById("node"+ i).style.opacity = "0.5";}
          i++;
        }

        while (j < 85){
            if (j !== 8){
              document.getElementById("edge"+ j).style.opacity = "0.25";}
          j++;
        }
    }
  var a1 = document.getElementById("table1_35line");
  var a2 = document.getElementById("table1_35arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//36B
function thirtySixB(){
  var x = document.getElementById("36B");
  var color = x.style.fill;

  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 28 && i!== 32 ){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 9){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("table1_36Bline");
  var a2 = document.getElementById("table1_36Barr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}


//37
function thirtySeven(){
  var x = document.getElementById("37");
  var color = x.style.fill;


  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
  }
  }

    else{
    x.style.stroke = "yellow";
      var i = 1;
      var j =1;
      while (i < 61){
        if (i !== 28 && i!== 33){
          document.getElementById("node"+ i).style.opacity = "0.5";}
        i++;
      }

      while (j < 85){
          if (j !== 10 ){
            document.getElementById("edge"+ j).style.opacity = "0.25";}
        j++;
      }
  }

  var a1 = document.getElementById("table1_37line");
  var a2 = document.getElementById("table1_37arr");


  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}
}

//40
function forty(){
  var x = document.getElementById("40");
  var color = x.style.fill;


  if (x.style.stroke === "yellow"){
    x.style.stroke = color ;
    var k =1;
    var m = 1;
    while (k < 61){
        document.getElementById("node"+ k).style.opacity = "1";
        k++;
    }
    while (m < 85){
        document.getElementById("edge"+ m).style.opacity = "1";
        m++;
    }
  }


  else{
  x.style.stroke = "yellow";
  //  var z = document.getElementsByClassName("jk");
    var i = 1;
    var j =1;
    while (i < 61){
      if (i !== 34){
        document.getElementById("node"+ i).style.opacity = "0.5";}
      i++;
    }

    while (j < 85){
        if (j !== 11){
          document.getElementById("edge"+ j).style.opacity = "0.25";}
      j++;
    }
}

  var a1 = document.getElementById("table1_40line");
  var a2 = document.getElementById("table1_40arr");

  if (a1.style.stroke === "red"){
    a1.style.stroke = "black";
    a2.style.stroke = "black";
    a2.style.fill = "black";
  }
  else{
    a1.style.stroke = "red";
    a2.style.stroke = "red";
    a2.style.fill = "red";
}


}
function showId(g) {
  var str = g.id;
  //alert(str);
  writeText(str);
  //document.getElementById(str).style.stroke= "pink";
  //document.getElementById(str).style.stroke= "black";
}




function writeText(txt) {
  document.getElementById("desc").innerHTML = txt;
}
