const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: 'name',
        artist: 'artist',
        url: './1.mp3',
        cover: 'https://bj.bcebos.com/baidu-rmb-video-cover-1/9acbd7988ffeef3c15cf24cc8dfe45b9.png',
        theme: '#4d5863'
    }]
});

const gitalk = new Gitalk({
    clientID: 'adc1930f696980c28522',
    clientSecret: '3af757ce7a50b3d185c1b9b6ccf9e065df215687',
    repo: 'RIP-Kita-chan',      // The repository of store comments,
    owner: 'Hicircum',
    admin: ['Hicircum'],
    id: 1,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false,  // Facebook-like distraction free mode
    title: 'Comments'
  })
  
gitalk.render('gitalk-container')

var count = 0;
var muyuType = 0;

window.onload = function () {
    if (getCookie("count") == "") {
        document.cookie = "count=" + count;
        document.cookie = "muyuType=" + muyuType;
    }
    count = parseInt(getCookie("count"));
    document.getElementById('count').innerHTML = count;
    muyuType = parseInt(getCookie("muyuType"));
    if (count >= 421) {
        rainbowBg();
    }
    if (count >= 514) {
        document.getElementById('kita').setAttribute('src', './kita2.png');
    }
    if (count >= 666) {
        document.getElementById('kita').setAttribute('src', './kita3.png');
    }
    if (muyuType == 0) {
        document.getElementById('muyuType').innerHTML = "传统木鱼";
    } else {
        document.getElementById('muyuType').innerHTML = "KitaKita";
        document.cookie = "count=" + count;
        document.cookie = "muyuType=" + muyuType;
    }
    
}

function change() {
    if (muyuType == 0) {
        document.getElementById('muyuType').innerHTML = "KitaKita";
        muyuType = 15;
    } else {
        document.getElementById('muyuType').innerHTML = "传统木鱼";
        muyuType = 0;
    }
    document.cookie = "count=" + count;
    document.cookie = "muyuType=" + muyuType;
}

function add() {
    count++;
    if (count == 421) {
        rainbowBg();
    }
    if (count == 514) {
        document.getElementById('kita').setAttribute('src', './kita2.png');
    }
    if (count == 666) {
        document.getElementById('kita').setAttribute('src', './kita3.png');
    }
    document.getElementById('count').innerHTML = count;
    document.cookie = "count=" + count;
    document.cookie = "muyuType=" + muyuType;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function rainbowBg() {
    document.documentElement.style.setProperty('--bg', 'linear-gradient(135deg,rgb(1, 255, 234),rgb(255, 251, 14),rgb(0, 238, 255))');
}