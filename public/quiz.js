function submitname(e){
	e.preventDefault();
	let name = document.forms["form"]["username"].value;
	localStorage.setItem("name",name);
	location.href = "questions.html";
	
}


var score = 0;
var total = 5;
var point= 10;
var highest = total * point;


function init(){
	
	sessionStorage.setItem('a1','b');
	sessionStorage.setItem('a2','d');
	sessionStorage.setItem('a3','c');
	sessionStorage.setItem('a4','a');
	sessionStorage.setItem('a5','b');
	
}






$(document).ready(function(){
	

	$(".random").hide();	
	$(".questionForm").hide();
   
    $(".random").fadeIn();

	
	$(".random #submit").click(function(){
		$(".random").hide();
		process('q1');
		$("#q2").fadeIn(300);
		
		return false;
	});
	
	$("#q2 #submit").click(function(){
		$("#q2").hide();
		process('q2');
		$("#q3").fadeIn(300);
		return false;
	});
	
	$("#q3 #submit").click(function(){
		$("#q3").hide();
		process('q3');
		$("#q4").fadeIn(300);
		return false;
	});
	
	$("#q4 #submit").click(function(){
		$("#q4").hide();
		process('q4');
		$("#q5").fadeIn(300);
		return false;
	});
	
	$("#q5 #submit").click(function(){
		$("#q5").hide();
		process('q5');
		$('#results').fadeIn(300);
		return false;
	});
	
	
});

function process(q){
	if(q=="q1"){
		var submitted = $('input[name=q1]:checked').val();
		if(submitted == sessionStorage.a1){
			score++;
		}
		
	}
	
	if(q=="q2"){
		var submitted = $('input[name=q2]:checked').val();
		if(submitted == sessionStorage.a2){
			score++;
		}
		
	}
	if(q=="q3"){
		var submitted = $('input[name=q3]:checked').val();
		if(submitted == sessionStorage.a3){
			score++;
		}
		
	}
	
	if(q=="q4"){
		var submitted = $('input[name=q4]:checked').val();
		if(submitted == sessionStorage.a4){
			score++;
		}
		
	}
	
	if(q=="q5"){
		var submitted = $('input[name=q5]:checked').val();
		if(submitted == sessionStorage.a5){
			score++;
		}
        
        var totalscore = score * point; 
		
		$('#results').html('<h2>Number of questions correct &nbsp  : '+score+' &nbsp out of 5</h2> <br>  <h3> you scored: &nbsp'+totalscore+' &nbsp out of &nbsp '+highest+' <h3>');
		
	}
	
}


window.addEventListener('load',init,false);


function slide(){
    document.getElementById("ham").classList.toggle('active');
};































