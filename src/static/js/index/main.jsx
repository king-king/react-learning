import '../../style/index.scss';
import '../util/ajaxhook';
import axios from 'axios';

let good = document.createElement('div');
good.classList.add('btn');
good.innerHTML = 'good';
document.body.appendChild(good);
good.onclick = function () {
    axios.get('http://127.0.0.1:8080/good.ajax').then(function (res) {
        console.log('结束', res);
    });
}

let err = document.createElement('div');
err.classList.add('btn');
err.innerHTML = 'err';
document.body.appendChild(err);
