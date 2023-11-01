var elTitle = document.querySelector('.right__non__p')

function fn() {
    var selectedValue = document.getElementById("list").value;
    elTitle.textContent = selectedValue
}

var Kattaligi = document.querySelector('.right__kattaligi')

function nn() {
    var Hajmi = document.querySelector('.olchami__1').value;
    Kattaligi.textContent = ('25cm')
}

function ff() {
    var Hajmi = document.querySelector('.olchami__2').value;
    Kattaligi.textContent = ('30cm')
}

function gg() {
    var Hajmi = document.querySelector('.olchami__3').value;
    Kattaligi.textContent = ('35cm')
}

var Pom = document.getElementById("input1")

var Pomm = document.querySelector(".right__ustida__p")

function ss() {
    if (Pom.checked) {
        Pomm.textContent = '+ Pomidor'
    } else {
        Pomm.textContent = ''
    }
}

var Tuzlangan = document.getElementById("input2")

var Tuz = document.querySelector(".right__ustida__p1")

function zz() {
    if (Tuzlangan.checked) {
        Tuz.textContent = '+ Tuzlangan bodring'
    } else {
        Tuz.textContent = ''
    }
}

var Kurkaa = document.getElementById("input3")

var Kur = document.querySelector(".right__ustida__p2")

function xx() {
    if (Kurkaa.checked) {
        Kur.textContent = "+ Kurka go'shti"
    } else {
        Kur.textContent = ''
    }
}

var Qoziqorin = document.getElementById("input4")

var Qoz = document.querySelector(".right__ustida__p3")

function cc() {
    if (Qoziqorin.checked) {
        Qoz.textContent = "+ Qo'ziqorin"
    } else {
        Qoz.textContent = ''
    }
}

var Zaytun = document.getElementById("input5")

var Zay = document.querySelector(".right__ustida__p4")

function vv() {
    if (Zaytun.checked) {
        Zay.textContent = "+ Zaytun"
    } else {
        Zay.textContent = ''
    }
}

var Qazi = document.getElementById("input6")

var Qaz = document.querySelector(".right__ustida__p5")

function bb() {
    if (Qazi.checked) {
        Qaz.textContent = "+ Qazi"
    } else {
        Qaz.textContent = ''
    }
}

var Achiq = document.getElementById("input7")

var Ach = document.querySelector(".right__qoshimcha__p1")

function dd() {
    if (Achiq.checked) {
        Ach.textContent = "+ Achiq"
    } else {
        Ach.textContent = ''
    }
}

var Pishloq = document.getElementById("input8")

var Pish = document.querySelector(".right__qoshimcha__p2")

function jj() {
    if (Pishloq.checked) {
        Pish.textContent = "+ Pishloq"
    } else {
        Pish.textContent = ''
    }
}


