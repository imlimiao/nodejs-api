/**
 * Created by Administrator on 2017/7/8 0008.
 */

var G = {};


var app = function(req, res) {
    //console.log('app'+req);

    if (G['login']) {
        G['login'](req, res); /*执行注册的方法*/
    } else {
        console.log("并没有注册");
    }
}

//定义一个get方法
app.get = function(string, callback) {
    G[string] = callback;
}

//执行get方法
app.get('login', function(req, res) {
    console.log('login====' + req);
})


setTimeout(function() {
    app('req', 'res');
}, 1000);