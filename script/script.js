const colors = ["#cd84f1","#ffcccc","#ff4d4d","#ffaf40","#fffa65","#7efff5","#7d5fff","#4b4b4b","#7158e2"
,"#d2dae2","#ff5e57","#ff3f34","#ffa801","#3c40c6","#00d8d6","#ffdd59","#05c46b","#eb3b5a","#535c68"
,"#7ed6df","#c7ecee","#dff9fb","#badc58","#f6e58d","#eb4d4b","darkseagreen","cyan","yellow","silver","green","blue","wheat","red"
,"#ecf0f1","#c0392b","#7f8c8d","#f39c12","#e74c3c","#ecf0f1"]



let btnColor = document.getElementById("color-changer");


btnColor.onclick = function(){
    let randomNumber = randNum();
    console.log("colour changed, index =>" + randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
}
function randNum(){
    let num = Math.random()*colors.length;
    num = Math.floor(num);
    return num;
}

let copyRig = document.getElementById(`copyright`);
let d = new Date();
copyRig.innerHTML = d.getFullYear();