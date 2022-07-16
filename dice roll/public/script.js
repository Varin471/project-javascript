let img = document.querySelector('#img');
let increase = 1

const random_dice = (randomNumber, math, round) => {

    math = Math.floor(Math.random() * 6) + 1;
    randomNumber = math;
    img.setAttribute('src', `img/light theme/${randomNumber}.png`); // sourceimage: https://www.pngegg.com/th/png-yklcj/download
    while (true) {
        round = increase++
            console.log(`รอบที่ ${round}.) สุ่มได้ ${randomNumber}`);
        break;
    };
};

const animation = () => {
    setTimeout(random_dice, 800); // ตั้งค่าเวลา
    img.setAttribute("src", "https://c.tenor.com/IfbgWLbg_88AAAAC/dice.gif"); // สามารถเปลี่ยนเป็นชื่อไฟล์ dice animation.gif ก็ได้
};