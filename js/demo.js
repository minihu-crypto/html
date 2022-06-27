window.onload = function(){
    var btn1 = document.getElementById('button1');
    var btn2 = document.getElementById('button2');
    var btn3 = document.getElementById('button3');
    var btn4 = document.getElementById('button4');
    var graphs = new Array('system', 'key_tech', 'platform','instance')
    btn1.onclick = function(){
        for(var i = 0; i < graphs.length; i++){
            document.getElementById(graphs[i]).style.display="none";
        }
        document.getElementById('key_tech').style.display="block";
    }
    btn2.onclick = function(){
        for(var i = 0; i < graphs.length; i++){
            document.getElementById(graphs[i]).style.display="none";
        }
        document.getElementById('platform').style.display="block";
    }
    btn3.onclick = function(){
        for(var i = 0; i < graphs.length; i++){
            document.getElementById(graphs[i]).style.display="none";
        }
        document.getElementById('instance').style.display="block";
    }
    btn4.onclick = function(){
        location.assign('./index.html');
    }
}