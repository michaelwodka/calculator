function clicker (){
    var buttons = document.getElementsByTagName("button");
    var results = document.getElementById("results");
    var calc = "0";
    var init = null;
    for (var i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click", function(){

        	calc = calc + this.innerHTML

        	if (this.id == "AC") {
        		calc = ""
        		results.innerHTML = 0
        		init = null
        	}

        	console.log(calc)

        	if (this.id=="equal"){
				console.log("init start = " + init)

        		var numbers = calc.split(/\D/g)
        		numbers = numbers.filter(Boolean)
        		console.log(numbers)
        		var operators = calc.split(/[0-9]/)
        		operators = operators.filter(Boolean)
        		console.log(operators)

        		for (var i=0;i<operators.length;i++){
        			if (operators[i] != "x" || operators[i] != "/" || operators[i] != "+" || operators[i] != "-" || operators[i] != "="){
        				operators[i] = operators[i].slice(-1)
        				}
        			}

        		console.log(operators)

        		for (var i=0;i<numbers.length;i++){
        			if (operators[i] == "x" && init == null) {
        				init = numbers[i]*numbers[i+1]
        			}

        			else if (operators[i] == "x" && init != null) {
        				init = init*numbers[i+1] 
        			}

        			else if (operators[i] == "/" && init == null) {
        				init = Number(numbers[i]) / Number(numbers[i+1]) 
        			}

        			else if (operators[i] == "/" && init != null) {
        				init = Number(init) / Number(numbers[i+1]) 
        			}

         			else if (operators[i] == "+" && init == null) {
        				init = Number(numbers[i])+Number(numbers[i+1]) 
        			}

         			else if (operators[i] == "+" && init != null) {
        				init = Number(init)+Number(numbers[i+1]) 
        			}

         			else if (operators[i] == "-" && init == null) {
        				init = numbers[i]-numbers[i+1] 
        			}

         			else if (operators[i] == "-" && init != null) {
        				init = init-numbers[i+1] 
        			}
        		}

        		results.innerHTML = parseFloat(init.toFixed(8))

        		calc = init

        		// init = "=" + init

        		console.log("init end = " + init)

        	}
        })
    }
  }

  window.onload = clicker()