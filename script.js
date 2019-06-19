$(document).ready(function() {

	var btn = $('#table td button'),
			inputMain = $('#val'),
			keepItog = [],
			keepVal,
			result = 0;

	$(btn).click(function() {
		var valueBtn = $(this).attr('value');
		if(valueBtn) {
			inputMain.val(inputMain.val() + valueBtn);
		}
	});

	$('#all-reset').click(function() {
		inputMain.val('');
		inputMain.attr('placeholder', '0');
	});

	$('#reset').click(function() {
		keepVal = inputMain.val();
		var newVal = keepVal.slice(0, -1);
		inputMain.val(newVal);
		inputMain.attr('placeholder', '0');
	});


	$('#multiply').click(function() {
		keepVal = +inputMain.val();
		keepItog.push(keepVal);
		keepItog.push('*');
		inputMain.val('');
		inputMain.attr('placeholder', '*');
	});

	$('#divide').click(function() {
		keepVal = +inputMain.val();
		keepItog.push(keepVal);
		keepItog.push('/');
		inputMain.val('');
		inputMain.attr('placeholder', '/');
	});

	$('#plus').click(function() {
		keepVal = +inputMain.val();
		keepItog.push(keepVal);
		keepItog.push('+');
		inputMain.val('');
		inputMain.attr('placeholder', '+');
	});

	$('#minus').click(function() {
		keepVal = +inputMain.val();
		keepItog.push(keepVal);
		keepItog.push('-');
		inputMain.val('');
		inputMain.attr('placeholder', '-');
	});

	$('#result').click(function() {
		keepVal = +inputMain.val();
		keepItog.push(keepVal);
		result = 0;
		var msvitg = keepItog.length;

		for(i = 0; i < msvitg; i++) {
			var j = i - 1,
				  r = i + 1;

			if(keepItog[i] === '+') {
				result = keepItog[j] + keepItog[r];
				keepItog.splice(r, 1, result);
				result = 0;
			}else if(keepItog[i] === '-') {
				result = keepItog[j] - keepItog[r];
				keepItog.splice(r, 1, result);
				result = 0;
			}else if(keepItog[i] === '/') {
				result = keepItog[j] / keepItog[r];
				keepItog.splice(r, 1, result);
				result = 0;
			}else if(keepItog[i] === '*') {
				result = keepItog[j] * keepItog[r];
				keepItog.splice(r, 1, result);
				result = 0;
			}
		}

		var finish = keepItog[keepItog.length - 1];
		inputMain.val(keepItog[keepItog.length - 1]);
		keepItog = [];
		keepItog.push(finish);
	});

});