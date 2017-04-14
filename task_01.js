function check(){
	input = document.getElementById('name').value;
	var result = document.getElementById('result');
	if(!input){
		result.innerHTML="名称不能为空";
		result.style.color = "red";
	}
	if(input){
		var numL = 0;
		var numC = 0;
		var letter = input.match(/[a-zA-Z_0-9]/g);
		if(letter!=null){
			numL = letter.length;
		}
		var chinese = input.match(/[^x00-xff]/g);//匹配所有双字节字符的表达式
		if(chinese!=null){
			numC = chinese.length;
		}
		if((numL+numC*2)>16||(numL+numC*2)<4){
			document.getElementById('result').innerHTML="名称格式不正确，4~16个字符";
			result.style.color = "red";
		}
		else{
			document.getElementById('result').innerHTML="名称格式正确，验证成功";
			result.style.color = "green";
		}
	}

}