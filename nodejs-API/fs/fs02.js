/** fs.stat */

let fs = require('fs');

// 检测是不是文件和文件夹
// fs.stat('html', (err, stats) => {
//     console.log(`文件属性: ${JSON.stringify(stats)}\n ${stats.isFile()}\n ${stats.uid}`);
// });

// 创建文件夹
// fs.mkdir('logs', (err) => {
//     if (err) {} else {
//         console.log("创建目录成功了--logs")
//     }
// });

//3. fs.writeFile  创建写入文件

//filename      (String)            文件名称
//data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
//options        (Object)           option数组对象，包含：
//· encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
//· mode         (Number)        文件读写权限，默认值 438
//· flag            (String)            默认值 ‘w'
//callback {Function}  回调，传递一个异常参数err。

fs.writeFile('logs/wjh.txt', '我的宝宝在打牌，今天打了好大的雷啊', 'utf8', function(err) {

    if (err) {
        console.log(err);

        return false;
    }
    console.log('写入成功');
})

//4. fs.appendFile 追加文件

fs.appendFileSync('logs/log.txt', '这是写入的内容.多次执行就是追加啦\n', 'utf8', function(err) {

    if (err) {
        console.log(err);

        return false;
    }
    console.log('写入成功');
})

//readFile

fs.readFile('logs/log.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});