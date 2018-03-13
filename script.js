function clicker (){
    var buttons = document.getElementsByTagName("button");
    var results = document.getElementById("results");
    var calc = "";
    for (var i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click", function(){
        	calc = calc + this.innerHTML

        	if (this.id == "AC") {
        		calc = ""
        		results.innerHTML = 0
        	}

        	console.log(calc)

        	if (this.id=="equal"){
        		var numbers = calc.split(/\D/g)
        		numbers = numbers.filter(Boolean)
        		console.log(numbers)
        		var operators = calc.split(/[0-9]/)
        		operators = operators.filter(Boolean)
        		console.log(operators)

        		console.log(numbers[0])

        		var init = null

        		for (var i=0;i<numbers.length;i++){
        			if (operators[i] == "x" && init == null) {
        				var init = numbers[i]*numbers[i+1] 
        			}

        			else if (operators[i] == "x" && init != null) {
        				var init = init*numbers[i+1] 
        			}

        			else if (operators[i] == "/" && init == null) {
        				var init = Number(numbers[i]) / Number(numbers[i+1]) 
        			}

        			else if (operators[i] == "/" && init != null) {
        				var init = Number(init) / Number(numbers[i+1]) 
        			}

         			else if (operators[i] == "+" && init == null) {
        				var init = Number(numbers[i])+Number(numbers[i+1]) 
        			}

         			else if (operators[i] == "+" && init != null) {
        				var init = Number(init)+Number(numbers[i+1]) 
        			}

         			else if (operators[i] == "-" && init == null) {
        				var init = numbers[i]-numbers[i+1] 
        			}

         			else if (operators[i] == "-" && init != null) {
        				var init = init-numbers[i+1] 
        			}
        		}

        		results.innerHTML = init

        	}
        })
    }
  }

  window.onload = clicker()