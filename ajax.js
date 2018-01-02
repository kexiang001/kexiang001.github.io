window.onload = function(){
	var oBtn = document.getElementById('btn');
	var oBox = document.getElementById('box');
	var oTb= document.getElementsByTagName('table')[0];
	
	//console.log(oTd)
	oBtn.onclick = function(){
		//技术就是一固定的模板  4步
		//第一步：创建一个xhr的对象，用new关键字调用内置函数
		var xhr = new XMLHttpRequest();
		
		//第2步指定接收回来的内容JSON，怎么处理。监听xhr对象的onreadystatechange事件，这个事件在xhr对象的“就绪状态”改变的时候触发。我们只关心就绪状态为4的时候的事情。
		xhr.onreadystatechange = function(){
			//状态如果为4表示接收成功
			if(xhr.readyState == 4){
				//返回来的数据是用responseText来接收
				//DOM操作
				var obj = xhr.responseText;
				obj = JSON.parse(obj);
				//console.log(obj)
				var h = document.createElement('h1')
				h.innerHTML = obj.class;
				document.body.appendChild(h);
				var oT = document.createElement('table');
				var oTr = document.createElement('tr');
				var oTd1 = document.createElement('td');
				var oTd2 = document.createElement('td');
				var oTd3 = document.createElement('td');
				oTr.appendChild(oTd1);
				oTr.appendChild(oTd2);
				oTr.appendChild(oTd3);
				oT.appendChild(oTr);
				document.body.appendChild(oT);
				oTd1.innerHTML = '姓名';
				oTd2.innerHTML = "年龄";
				oTd3.innerHTML = '性别';
				for(var i=0; i<obj.info.length; i++){
						var oTr = document.createElement('tr');
						var oTd1 = document.createElement('td');
						var oTd2 = document.createElement('td');
						var oTd3 = document.createElement('td');
						oTd1.innerHTML = obj.info[i].name;
						oTd2.innerHTML = obj.info[i].age;
						oTd3.innerHTML = obj.info[i].sex; 
						
						oTr.appendChild(oTd1);
						oTr.appendChild(oTd2);
						oTr.appendChild(oTd3);
						oT.appendChild(oTr);
						document.body.appendChild(oT);
					}
				
			}
		};
		//宿主?
		//第3步创建一个请求，第一个参数是请求的类型get或者post，第二个参数就是请求的路径，第三个参数叫做是否使用异步机制
		xhr.open('get','aa.json',true);
		
		//第4步发送请求，圆括号里面是请求头内容，get请求没有报文头写null
		xhr.send(null);
	}
}
