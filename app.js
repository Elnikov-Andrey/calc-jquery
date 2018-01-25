var $varA = $('#varA');
var $varB = $('#varB');

$(function(){
	$('#varA').on('change', isNum);
	$('#varB').on('change', isNum);
});

function isNum(e){
	var pattern = /^\d+$/g;

	if (!pattern.test($(this).val())) {
		$(this).css('background-color', 'red');
	} else {
		$(this).css('background-color', '#F0EEEE');
	}
};

$(function(){
	var $cleanA = $('#cleanA');
	$cleanA.on('click', cleanA);
	function cleanA(e){
		$varA.val('');
		$('#result').remove();
	}
});

$(function(){
	var $cleanB = $('#cleanB');
	$cleanB.on('click', cleanB);
	function cleanB(e){
		$varB.val('');
		$('#result').remove();
	}
});

$(function(){
	var $exe = $('#execute'); 
	$exe.on('click', calculation);
});

function calculation(e){
	var $varA = Number($('#varA').val());
	var $varB = Number($('#varB').val());
	var calcResult;
	var $calcMenu = $('#calcMenu').val();

	if ($calcMenu == '+') {
		calcResult = $varA + $varB;	
	};
	if ($calcMenu == '-') {
		calcResult = $varA - $varB;	       	
	};
	if ($calcMenu == '*') {
		calcResult = $varA * $varB;       	
	};
	if ($calcMenu == '/') {
		calcResult = $varA / $varB;	       	
	};

	$('#container').append('<div id="result"></div>');
	$('#result').text(calcResult);
}