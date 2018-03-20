function clicker (){
    var buttons = document.getElementsByTagName("button");
    var results = document.getElementById("results");
    var calc = "";
    var init = null;
    for (var i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click", function(){

        	console.log("init start = " + init)

        	console.log("calc start " +calc)

        	this.focus()

        	if (this.id == "percent"){
        		calc = calc/100
        	}

    		if(init != null && isNaN(this.innerHTML)===false){
        		init = null
        		calc = this.innerHTML
        	} else {
        		init = null
        		calc = calc + this.innerHTML
        	}

    		var final = calc.split(/[^0-9\-\.\e]/g)
    		console.log("final = " + final)

    		if (final[final.length - 1]==""){
    			console.log("hey")
    			results.innerHTML = final[final.indexOf("")-1]
    		} else{
    			console.log("hi")
    			results.innerHTML = final[final.length-1]
    		}

        	if (this.id == "AC") {
        		calc = ""
        		results.innerHTML = 0
        		init = null
        	}

        	if (calc.slice(-3) == "+/−" && !isNaN(calc.slice(-4,-3))){
        		calc = calc.replace("+/−", "")
        		
        		if(calc[0] != "-"){
	        		calc = "-" + calc.substr(0, calc.length)
        		} else{
        			calc = calc.substr(1, calc.length)
        		}
        		results.innerHTML = calc

        	} else if(calc.slice(-3) == "+/−"){
        		calc = calc.replace("+/−", "")

        		if(calc[calc.length-1] != "-"){
	        		calc = calc.substr(0, calc.length) + "-"
	        		results.innerHTML = calc.substr(calc.length-1, calc.length-1)
        		} else{
        			calc = calc.substr(0, calc.length-1)
        			results.innerHTML = calc.substr(calc.length, calc.length)
        		}
        	}


        	if (this.id == "percent"){
        		calc = calc.replace("%","")
        	}

        	console.log("calc end " +calc)

        	if (this.id=="equal"){

        		var numbers = calc.split(/\×|[÷]|[/]|\+|\−|\=|[%]/g)
        		numbers = numbers.filter(Boolean)
        		console.log(numbers)
        		var operators = calc.split(/[0-9]|[.]|[-]|[%]/)
        		operators = operators.filter(Boolean)
        		console.log(operators)

        		for (var i=0;i<operators.length;i++){
        			if (operators[i] != "×" || operators[i] != "÷" || operators[i] != "+" || operators[i] != "−" || operators[i] != "="){
        				operators[i] = operators[i].slice(-1)
        				}
        			}

        		console.log(operators)

        		for (var i=0;i<numbers.length;i++){
        			if (operators[i] == "×" && init == null) {
        				init = numbers[i]*numbers[i+1]
        			}

        			else if (operators[i] == "×" && init != null) {
        				init = init*numbers[i+1] 
        			}

        			else if (operators[i] == "÷" && init == null) {
        				init = Number(numbers[i]) / Number(numbers[i+1]) 
        			}

        			else if (operators[i] == "÷" && init != null) {
        				init = Number(init) / Number(numbers[i+1]) 
        			}

         			else if (operators[i] == "+" && init == null) {
        				init = Number(numbers[i])+Number(numbers[i+1]) 
        			}

         			else if (operators[i] == "+" && init != null) {
        				init = Number(init)+Number(numbers[i+1]) 
        			}

         			else if (operators[i] == "−" && init == null) {
        				init = Number(numbers[i])-Number(numbers[i+1]) 
        			}

         			else if (operators[i] == "−" && init != null) {
        				init = Number(init)-Number(numbers[i+1]) 
        			}
        		}

        		results.innerHTML = parseFloat(init.toFixed(8))

        		calc = init

        		console.log("init end = " + init)

        	}
        })
    }
  }

  window.onload = clicker()