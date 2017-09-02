  window.onload = function() {

		/*-------Arithmetic trainer v0.1----------*/

		// (function() {
    //
		// 	var divRight = document.querySelector('.arithm-trainer__right-answers');
		// 	var divWrong = document.querySelector('.arithm-trainer__wrong-answers');
		// 	var divWrongList = document.querySelector('.arithm-trainer__wrong-answers-list');
		// 	var startBtn = document.querySelector('.start-training');
    //
    //
		// 	startBtn.addEventListener('click', function() {
		// 		arithmTrainer();
		// 	});
    //
    // 	function arithmTrainer() {
    //
		// 		divRight.innerHTML = '';
		// 		divWrong.innerHTML = '';
		// 		divWrongList.innerHTML = '';
    //
		// 		var rightAnswers = 0;
		// 		var wrongAnswers = 0;
		// 		var wrongAnswersCollection = [];
    //
		// 		for(let i = 1; i <= 5; i++) {
    //
		// 			var x = randInt(3, 15);
		// 			var y = randInt(3, 15);
		// 			var operatorIndex = randInt(0, 3);
		// 			var operators = ['+', '-' , '*' , '/'];
		// 			var operator = operators[operatorIndex];
		// 			var userResStr;
		// 			var userRes;
		// 			var res;
    //
    //
		// 			userResStr = prompt(x + ' ' + operator + ' ' + y + ' = ?');
		// 			userRes = +userResStr
    //
		// 			if(userResStr === null) {
		// 				break
		// 			}
    //
		// 			while (userResStr == '' || isNaN(userRes)) {
		// 				alert('Нужно ввести именно число!');
		// 				userResStr = prompt(x + ' ' + operator + ' ' + y + ' = ?');
		// 				userRes = +userResStr
		// 			}
    //
		// 			res = mathOperations(x, y, operator);
    //
		// 			if(userRes.toFixed(2) == res.toFixed(2)) {
		// 				rightAnswers++
		// 			} else {
		// 				wrongAnswers++
		// 				wrongAnswersCollection.push('правильный ответ: ' + x + ' ' + operator + ' ' + y + ' = ' + res.toFixed(2) + '.' + ' Вы ответили ' + userRes.toFixed(2))
		// 			}
		// 		}
    //
		// 		divRight.innerHTML = rightAnswers;
		// 		divWrong.innerHTML = wrongAnswers;
    //
		// 		for(i = 0; i < wrongAnswersCollection.length; i++) {
		// 				divWrongList.innerHTML += ('<p>' + wrongAnswersCollection[i] + '</p>')
		// 		}
		// 	}
    //
		// 	function randInt(min, max) {
    //
		// 		return Math.floor(Math.random() * (max - min + 1)) + min;
		// 	}
    //
		// 	function mathOperations(a, b, op) {
    //
		// 		var res;
    //
		// 		if(op == '+') {
		// 			res = a + b;
		// 		} else if(op == '-') {
		// 			res = a - b;
		// 		} else if(op == '*') {
		// 			res = a * b;
		// 		} else if( (op == '/') && (b != 0) ) {
		// 			res = a / b;
		// 		} else {
		// 			res = null;
		// 		}
    //
		// 		return res;
		// 	}
    //
		// })();

    /*-------Arithmetic trainer v0.2-------*/

    (function(){

      var divOperand1 = document.querySelector('.arithm-trainer__operand1');
      var divOperator = document.querySelector('.arithm-trainer__operator');
      var divOperand2 = document.querySelector('.arithm-trainer__operand2');

      var btnProceed = document.querySelector('.arithm-trainer__proceed');

      var yourAnswer = document.querySelector('.arithm-trainer__your-answer');

      var divRight = document.querySelector('.arithm-trainer__right-answers');
			var divWrong = document.querySelector('.arithm-trainer__wrong-answers');
			var divWrongList = document.querySelector('.arithm-trainer__wrong-answers-list');
			var startBtn = document.querySelector('.start-training');
      var endBtn = document.querySelector('.reset-training');


			startBtn.addEventListener('click', function() {
        arithmTrainer();
        startBtn.classList.add('disabled');
        btnProceed.classList.remove('disabled');
        endBtn.classList.remove('disabled');
      });

      var rightAnswers = 0;
      var wrongAnswers = 0;
      var wrongList = [];

    	function arithmTrainer() {

        var x = randInt(3, 15);
        var y = randInt(3, 15);
        var operator = randOp();
        var res = mathOperations(x, y, operator);

        divOperand1.innerHTML = x;
        divOperand2.innerHTML = y;
        divOperator.innerHTML = operator;

        btnProceed.onclick = function() {
          var userRes = +yourAnswer.value;

          if(userRes.toFixed(2) == res.toFixed(2)) {
            rightAnswers++;
          } else {
            wrongAnswers++;
            wrongList.push('<p>неверно, ' + x + ' ' + operator + ' ' + y + ' = ' + res.toFixed(2) + ' , а Вы ответили ' +  userRes.toFixed(2) + '</p>');
          }

          divRight.innerHTML = rightAnswers;
          divWrong.innerHTML = wrongAnswers;
          divWrongList.innerHTML = wrongList;

          yourAnswer.value = '';

          arithmTrainer();

          yourAnswer.focus();

        }
			}

      endBtn.onclick = function() {
        rightAnswers = 0;
        wrongAnswers = 0;
        wrongList = [];

        divRight.innerHTML = '';
        divWrong.innerHTML = '';
        divOperand1.innerHTML = '';
        divOperand2.innerHTML = '';
        divOperator.innerHTML = '';
        divWrongList.innerHTML = '';

        startBtn.classList.remove('disabled');
        btnProceed.classList.add('disabled');
      }

      function randOp() {

        var operatorIndex = randInt(0, 3);
        var operatorList = ['+', '-', '*', '/'];
        return operatorList[operatorIndex];

      }

			function randInt(min, max) {

				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			function mathOperations(a, b, op) {

				var res;

				if(op == '+') {
					res = a + b;
				} else if(op == '-') {
					res = a - b;
				} else if(op == '*') {
					res = a * b;
				} else if( (op == '/') && (b != 0) ) {
					res = a / b;
				} else {
					res = null;
				}

				return res;
			}

    })();

		/*------------XHR requests----------*/

		// (function() {
    //
		// 	var btnSendForm = document.querySelector('.send-form');
		// 	var form = document.querySelector('.test-form');
		// 	var formElements = form.querySelectorAll('[type="text"]');
		// 	var responseContainer =  form.querySelector('.server-response');
		// 	var qs = "";
		// 	var xhr = new XMLHttpRequest();
    //
    //
		// 	for(var i = 0; i < formElements.length; i++) {
		// 		var element = formElements[i];
		// 		var name = element.name;
		// 		var value = element.value;
    //
		// 		qs += name + '=' + value + '&'
		// 	}
    //
		//     form.onsubmit = function(e) {
		// 		event.preventDefault();
    //
		// 		xhr.open('post', 'http://127.0.0.1:8080/static-server.js?' + (new Date()).getTime());
    //
		// 		xhr.addEventListener('readystatechange', function() {
		// 			if(xhr.readyState == 4) {
		// 				//  responseContainer.innerHTML =	'status: ' + xhr.status + '\n statusText: ' + xhr.statusText + '\n responseText: ' + xhr.responseText;
    //       }
		// 		});
    //
		// 		xhr.send(qs);
		// 	}
    //
		// })();

    /*--------XHR request with FormData-----*/

    (function() {

      var form = document.querySelector('test-form');
      var data = new FormData(form);
      var btnForm = document.querySelector('.send-form');
      var xhr = new XMLHttpRequest();

      btnForm.onclick = function(e) {
        event.preventDefault();

        xhr.open('post', 'http://127.0.0.1:8080/static-server.js');

        xhr.onreadystateChange = function() {
          if(xhr.readyState == 4) {
            console.log(xhr.responseText);
          }
        };

        xhr.send(data);

      }

    })();


    /*------------min value-----------*/

    (function(){

      var divArg1 = document.querySelector('.find-min__first-arg');
      var divArg2 = document.querySelector('.find-min__second-arg');
      var divRes = document.querySelector('.find-min__result');
      var btnRes = document.querySelector('.find-min__btn');
      var result;

      btnRes.onclick = function() {
        result = findMin(divArg1.value, divArg2.value);
        divRes.innerHTML = result;
      }



      function findMin(x, y) {
        var res;

        if(x < y) {
          res = x;
        } else {
          res = y;
        }

        return res
      }


    })();

    /*-------x в степени n----------*/

    (function(){

      var divX = document.querySelector('.x-in-n__x');
      var divN = document.querySelector('.x-in-n__n');
      var divRes = document.querySelector('.x-in-n__result');
      var btnRes = document.querySelector('.x-in-n__btn');

      btnRes.onclick = function() {
        if(divN.value < 2) {
          divRes.innerHTML = 'степень 1 и меньше не поддерживаются'
        } else {
        divRes.innerHTML = pow(divX.value, divN.value);
        }
      }

      function pow(x, n) {
        var res = x;

        for(let i = 1; i < n; i++) {
          res = res * x;
        }

        return res
      }

    })();

    /*--сумма числед от 1 до n (рекурсия)--*/

    // (function(){
    //
    //   var inputN = document.querySelector('.sumN__n');
    //   var divRes = document.querySelector('.sumN__result');
    //   var btnN = document.querySelector('.sumN__btn');
    //
    //   btnN.onclick = function() {
    //     divRes.innerHTML = sumTo(+inputN.value);
    //   }
    //
    //   function sumTo(n) {
    //     if(n != 1) {
    //       return n + sumTo(n - 1);
    //     } else {
    //       return n;
    //     }
    //   }
    //
    // })();

    /*--сумма числед от 1 до n (цикл)--*/

    // (function(){
    //
    //   var inputN = document.querySelector('.sumN__n');
    //   var divRes = document.querySelector('.sumN__result');
    //   var btnN = document.querySelector('.sumN__btn');
    //
    //   btnN.onclick = function() {
    //     divRes.innerHTML = sumTo(+inputN.value);
    //   }
    //
    //   function sumTo(n) {
    //     var res = n;
    //
    //     while(n >= 1) {
    //       res = res + (n - 1);
    //       n--
    //     }
    //
    //     return res;
    //   }
    //
    // })();

    /*--сумма числед от 1 до n (алгебр. прогрессия)--*/

    (function(){

      var inputN = document.querySelector('.sumN__n');
      var divRes = document.querySelector('.sumN__result');
      var btnN = document.querySelector('.sumN__btn');

      btnN.onclick = function() {
        divRes.innerHTML = sumTo(+inputN.value);
      }

      function sumTo(n) {
        // var res = 0;
        // var d = 1;
        //
        // for(let i = 1; i <= n; i++) {
        //   res = res + (d * 1);
        //   d++;
        // }

        var res = 0;
        for(i = 1; i <= n; i++) {
          res = res + i;
        }

        return res;
      }

    })();

    /*---факториал (рекурсия)--*/

    (function(){

      var inputNfact = document.querySelector('.factorial__n');
      var divResfact = document.querySelector('.factorial__result');
      var btnResfact = document.querySelector('.factorial__btn');

      btnResfact.onclick = function() {
        divResfact.innerHTML = factorial(inputNfact.value);
      }

      function factorial(n) {
        if(n != 1) {
          return n * factorial(n - 1);
        } else {
          return n;
        }
      }

    })();

    /*---фибоначчи (цикл)--*/

    (function(){

      var inputNFib = document.querySelector('.fibonachi__n');
      var divResFib = document.querySelector('.fibonachi__result');
      var btnResFib = document.querySelector('.fibonachi__btn');

      btnResFib.onclick = function() {
        divResFib.innerHTML = fibonachi(inputNFib.value);
      }

      function fibonachi(n) {
        var res = 1;
        var prev = 1;

        for(let i = 2; i < n; i++) {
          res = res + prev;
          prev = res - prev;
        }

        return res;
      }

    })();


    /*--Напишите функцию getDecimal(num), которая возвращает десятичную часть числа--*/

    (function(){

      function getDecimal(num) {
        var int = num.toFixed(0);
        var fract = num - int;

        return fract;
      };

    })();

    /*Существует формула Бине, согласно которой Fn равно ближайшему целому для ϕn/√5, где ϕ=(1+√5)/2 – золотое сечение.

    Напишите функцию fibBinet(n), которая будет вычислять Fn, */

    (function() {

      function fibBinet(n) {

        var res;

        fi = ( (1 + Math.sqrt(5) ) / 2 )
        resFract = Math.pow(fi, n) / Math.sqrt(5);
        resRound = Math.round(resFract);
        res = resRound;

        return res;

      };

      function pow(x, n) {
        var res = x;

        for(let i = 1; i < n; i++) {
          res = res * x;
        }

        return res
      }

      //  console.log(fibBinet(77));

    })();

    /*Напишите код для генерации случайного числа от min до max, не включая max.*/

    (function(){

      function RandomInteger(min, max) {

        var rand = min - 0.5 + Math.random() * (max - min + 0.5)
        var res = Math.round(rand);

        return res;

      };

      //  console.log(RandomInteger(10, 14));

    })();

    /*--Поиск всех позиций подстрок в строке--*/

    (function() {

      function findSubStr(str, subStr) {

        var str = str;
        var i = 0;

        while(true) {

          var res = str.indexOf(subStr, i)
          if (res == -1) break;
          console.log(res);
          i = res + 1;

        }

        return res
      };

      //console.log( findSubStr("тотот", "т") );


    })();

    /*--Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:--*/

    (function() {

      function ucFirst(str) {

        var firstLetter = str.charAt(0).toUpperCase();
        var ucStr = firstLetter + str.slice(1)

        return ucStr;

      }

     //  console.log( ucFirst("ваня") );

    })();

    /*Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

    Функция должна быть нечувствительна к регистру:*/

    (function() {

      function checkSpam(str) {

        var ucStr = str.toUpperCase();
        var spamWord1 = 'VIAGRA';
        var spamWord2 = 'XXX';

        if ( (ucStr.indexOf('VIAGRA') != -1) || (ucStr.indexOf('XXX') != -1) ) {
          return true;
        } else {
          return false;
        }

      }

      //console.log(checkSpam('tochno ne vIaGra'));

    })();

    /*Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.

    Результатом функции должна быть (при необходимости) усечённая строка.*/

    (function() {

      function truncate(str, maxlength) {

        if(str.length > maxlength) {
          var strShort = str.slice(0, maxlength-3);
          return strShort + '...';
        } else {
          return str;
        }

      };

      //console.log(truncate("очень очень очень очень", 20));

    })();

    /*Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.

    Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.*/

    (function() {

      function extractCurrencyValue(str) {

        if (str[0] != '$') return;

        return +str.slice(1);

      }

      // console.log(extractCurrencyValue('$3500'));

    })();



  }
