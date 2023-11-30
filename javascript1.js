//задание2

let b=true
function send(){
while(b){
let name=prompt("Введите ваше имя");
if(name==""||name==null){name="гость";}
let message=prompt("Введите сообщение");
if (message==""||message==null){
alert("Произошла ошибка");
b=false;
message="";
}
alert(name+"  "+message);
}
}

send();