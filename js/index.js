
window.onload = function () {
    var btn0 = document.getElementById('button0');
    var btn1 = document.getElementById('button1');
    var btn2 = document.getElementById('button2');
    var btn3 = document.getElementById('button3');
    var btn4 = document.getElementById('button4');
    var graphs = new Array('system', 'key_tech', 'platform', 'instance');
    var btns = new Array(btn0, btn1, btn2, btn3, btn4);


    btn0.classList.remove('is-info');
    btn0.classList.add('is-danger');

    btn0.onclick = function system() {
        for (var i = 0; i < graphs.length; i++) {
            document.getElementById(graphs[i]).style.display = "none";
        }
        document.getElementById('system').style.display = "inline";
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('is-danger');
            btns[i].classList.add('is-info');
        }
        btn0.classList.remove('is-info');
        btn0.classList.add('is-danger');
    }
    btn1.onclick = function key_tech() {
        for (var i = 0; i < graphs.length; i++) {
            document.getElementById(graphs[i]).style.display = "none";
        }
        document.getElementById('key_tech').style.display = "inline";
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('is-danger');
            btns[i].classList.add('is-info');
        }
        btn1.classList.remove('is-info');
        btn1.classList.add('is-danger')
    }
    btn2.onclick = function platform() {
        for (var i = 0; i < graphs.length; i++) {
            document.getElementById(graphs[i]).style.display = "none";
        }
        document.getElementById('platform').style.display = "inline";
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('is-danger');
            btns[i].classList.add('is-info');
        }
        btn2.classList.remove('is-info');
        btn2.classList.add('is-danger')
    }
    btn3.onclick = function instance() {
        for (var i = 0; i < graphs.length; i++) {
            document.getElementById(graphs[i]).style.display = "none";
        }
        document.getElementById('instance').style.display = "inline";
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('is-danger');
            btns[i].classList.add('is-info');
        }
        btn3.classList.remove('is-info');
        btn3.classList.add('is-danger')
    }
    btn4.onclick = function demo() {
        location.assign('./demo.html');
    }

    //自动播放


    window.setTimeout(function () {
        for (var i = 0; i < graphs.length; i++) {
            document.getElementById(graphs[i]).style.display = "none";
        }
        document.getElementById('key_tech').style.display = "inline";
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('is-danger');
            btns[i].classList.add('is-info');
        }
        btn1.classList.remove('is-info');
        btn1.classList.add('is-danger');
    }, 5000);

    window.setTimeout(function () {
        for (var i = 0; i < graphs.length; i++) {
            document.getElementById(graphs[i]).style.display = "none";
        }
        document.getElementById('platform').style.display = "inline";
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('is-danger');
            btns[i].classList.add('is-info');
        }
        btn2.classList.remove('is-info');
        btn2.classList.add('is-danger');
    }, 10000);

    window.setTimeout(function () {
        for (var i = 0; i < graphs.length; i++) {
            document.getElementById(graphs[i]).style.display = "none";
        }
        document.getElementById('instance').style.display = "inline";
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('is-danger');
            btns[i].classList.add('is-info');
        }
        btn3.classList.remove('is-info');
        btn3.classList.add('is-danger');
    }, 15000);

    window.setTimeout(function () {
        location.assign('./demo.html');
    }, 20000);
}