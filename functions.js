function count1() {
    let i = 0;
    let display = '';
    for (i = 0; i <= 100; i++) {
        display = display + i + ' ';
        if (i == 99) break;
    }
    document.getElementById('resultEx1').innerHTML = display;
}

function adjustTemp() {
    let i = 0;
    let display = '';
    while (i >= 0) {
        let temp = parseFloat(prompt("Nhap vao 1 gia tri nhiet do : (Nhap trong khoang >=20 &<=100 de thoat)"));
        display = display + temp + ' ';
        if (temp > 100) alert("Ban can giam nhiet do!!!")
        else if (temp < 20) alert("Ban can tang nhiet do!!!")
        else break;
    }
    document.getElementById('resultEx2').innerText = "Cac gia tri ban da nhap vao la :" + display;
}

function fiboSeq() {
    let temp = 0;
    let count = 0;
    let i = 0;
    let j = 1;
    let display = '';
    while (count < 20) {
        display = display + j + ' ';
        temp = j;
        j = i + j;
        i = temp;
        count++;
    }
    document.getElementById('resultEx3').innerHTML = display;
}

function findNumFibo() {
    let temp = 0;
    let count = 0;
    let i = 0;
    let j = 1;
    while (count >= 0) {
        temp = j;
        j = i + j;
        i = temp;
        if (j % 5 == 0) break;
    }
    document.getElementById('resultEx4').innerHTML = "So dau tien chia het cho 5 trong day Fibonacci la :" + j
}

function sumFibo() {
    let temp = 0;
    let count = 0;
    let i = 0;
    let j = 1;
    let sum = 0;
    while (count < 20) {
        sum += +j;
        temp = j;
        j = i + j;
        i = temp;
        count++;
    }
    document.getElementById('resultEx5').innerHTML = "Tong 20 so dau tien trong day Fibonacci la : " + sum;
}

function sum7() {
    let i = 0;
    let sum = 0;
    let count = 0;
    while (i >= 0) {
        if (i % 7 == 0) {
            sum += i;
            count++;
        }
        if (count == 30) break;
        i++;
    }
    document.getElementById('resultEx6').innerHTML = "Tong cua 30 so tu nhien dau tien chia het cho 7 la: " + sum;
}

function resultEx7() {
    let i = 0;
    let display = ' ';
    let temp = 0;
    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 != 0) temp = 1;
        else if (i % 5 == 0 && i % 3 != 0) temp = 2;
        else if (i % 3 == 0 && i % 5 == 0) temp = 3;
        else temp = 0;
        switch (temp) {
            case 1: {
                display += 'Fizz ';
                break;
            }
            case 2: {
                display += 'Buzz ';
                break;
            }
            case 3: {
                display += 'FizzBuzz ';
                break;
            }
            default: {
                display += i + ' ';
                break;
            }
        }
    }
    document.getElementById('resultEx7').innerHTML = display;
}

function guessGame() {
    let numTop = parseInt(prompt("Nhap vao gioi han tren :"));
    let numBot = parseInt(prompt("Nhap vao gioi han duoi :"));
    if (numTop >= numBot && numBot >= 0) {
        let MyNum = numBot + Math.floor(Math.random() * (numTop - numBot + 1));
        let UrNum = null;
        let i = 0;
        do {
            UrNum = parseInt(prompt("So ban chon :"));
            if (UrNum > MyNum) alert("lon hon");
            else if (UrNum < MyNum) alert("be thua");
            else {
                alert("Chuc mung ban da chon dung!!");
                break;
            }
            i++;
        } while (i < 3);
    }
    if (numTop <= numBot || numBot < 0) alert("Ban nhap sai gia tri. Click Play to restart")
}