const express = require('express');

const port = 3000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.status(200)
    res.redirect('index.html');
});

app.get('*', (req, res) => {
    let not_found = ['<title>404 Not Found.</title>',
        '<link rel="shortcut icon" href="https:/freepngimg.com/download/dice/2-2-dice-png-image.png" type="image/x-icon">',
        '<div><h3>404 Not Found.</h3><p>ไม่พบหน้าเว็บเพจคุณตามหา</p></div>',
        '<a href="/"><button>กลับหน้าหลัก</button></a>'
    ]
    res.status(404).send(not_found[0] + not_found[1] + not_found[2] + not_found[3]);
});


app.listen(port, () => {
    console.log("run port ที่: " + port); // localhost:3000
});