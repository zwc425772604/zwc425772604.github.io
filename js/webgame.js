
var correctSum = 0;
var number = 0;
var frequency = 0;
var range = 0;


$(document).ready(function () {
    //$('.container').hide();
    $('#game1Button').click(function(){
        $('.container').show();
        $('.game1').show();
        //hide the marquee
        $('.rollingMarquee').hide();
        //hide game 2
        $('.game2').hide();
    });
    
    $('#game2Button').click(function(){
         $('.container').show();
        $('.game1').hide();
        $('.game2').show();
        $('.rollingMarquee').hide();
       
    });
    

   
   // $(document).delegate('.game1Start', 'click', changeNum);
    
});

  $('form.option1').submit(function(){
        	var radioValue = $("input[name='level']:checked").val();
            if (radioValue == undefined){
                alert("empty");
            }
            if(radioValue == 'easy'){
                generateQuestions1(5, 10, 3);
            }
            else if (radioValue == 'medium'){
                generateQuestions1(20, 15, 2.25);
            }
            else{
                generateQuestions1(25, 20, 1.5);
            }
           
        });




function opt2(){
    alert("function 2");
      number = $("input[name = 'numbers']").val();
        frequency = $("input[name = 'frequency']").val();
        range = $("input[name = 'ranges']").val();
        var listNum = generateQuestions1(number, range);
         index = 0;
        function changeNum() {
            //$('#rollingNums').html(listNum[index]);
             $('#some-id').html(listNum[index]);
            index++;
            
            if (index == listNum.length){
                index = 0;
            }
           setTimeout(changeNum, 3000);
        }
         changeNum();
}

function generateQuestions1(num, ran){
    
    var numbersList = [];
    for (i = 0; i < num; i++){
        var a = Math.ceil((Math.random() * ran));
        correctSum += a;
        numbersList.push(a);
       
    }
   return numbersList;
}
