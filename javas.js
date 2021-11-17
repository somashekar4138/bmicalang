
    function ab(){
        document.getElementById("a").style.display="none";
        document.getElementById("b").style.display="none";
        let a= document.getElementById("nn2").innerHTML;
        if (a == "NaN"){
            document.getElementById("nnq").style.display="none";
        }
    }
    function aa() {
        let a= document.getElementById("nn2").innerHTML;
        if (a == "NaN"){}
        else if (a < 18.5){
            document.getElementById("rate").innerHTML="UnderWeight";
            document.getElementById("nnq").style.display="";
        }
        else if (a > 18.5 && a < 24.9){
            document.getElementById("rate").innerHTML="Normal weight";
            document.getElementById("nnq").style.display="";
        }
        else if (a > 25 && a < 29.9){
            document.getElementById("rate").innerHTML="Overweight";
            document.getElementById("nnq").style.display="";
        }
        else if (a >= 30){
            document.getElementById("rate").innerHTML= "Obesity";
            document.getElementById("nnq").style.display="";
        }
        
    }
