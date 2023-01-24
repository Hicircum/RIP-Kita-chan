const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 1,
    audio: [
        {
            name: '花の塔',
            artist: 'さユり',
            url: 'https://npm.elemecdn.com/kita-chan@1.0.0/audio/1.mp3',
            cover: 'https://npm.elemecdn.com/kita-chan@1.0.0/audio/1.jpg',
            lrc: '[00:00.000] 作词 : さユり\n[00:01.000] 作曲 : さユり\n[00:02.000] 编曲 : 宮田“レフティ”リョウ\n[00:13.996]君が持ってきた漫画\n[00:16.130]くれた知らない名前のお花\n[00:19.790]今日はまだ来ないかな？\n[00:22.169]初めての感情知ってしまった\n[00:25.358]\n[00:25.896]窓に飾った絵画をなぞってひとりで宇宙を旅して\n[00:31.474]それだけでいいはずだったのに\n[00:36.991]\n[00:37.781]君の手を握ってしまったら\n[00:43.093]孤独を知らないこの街には\n[00:49.493]もう二度と帰ってくることはできないのでしょう\n[01:00.165]君が手を差し伸べた　光で影が生まれる\n[01:11.310]歌って聞かせて　この話の続き\n[01:17.177]連れて行って見たことない星まで\n[01:26.488]\n[01:34.481]誰の手も声も届かない\n[01:36.865]高く聳え立った塔の上へ\n[01:39.801]飛ばすフウセンカズラ\n[01:42.708]僕は君に笑って欲しいんだ\n[01:45.896]\n[01:46.435]満たされない穴は惰性の会話や澄ましたポーズで\n[01:52.032]これまでは埋めてきたけど\n[01:57.234]\n[01:57.234]退屈な日々を蹴散らして\n[02:02.221]君と二人でこの街中を泳げたら\n[02:10.132]それはどれだけ素敵なことでしょう？\n[02:19.176]出したことないほど大きな声でやっと君に伝わる\n[02:30.609]歪なくらいがさ　きっとちょうどいいね\n[02:36.217]世界の端と端を結んで\n[02:45.501]\n[02:54.267]窓に飾った絵画をなぞってひとりで宇宙を旅して\n[02:59.850]それだけでも不自由ないけど\n[03:05.184]僕は選んでみたいの\n[03:07.767]高鳴る心　謎だらけの空を\n[03:11.229]安全なループを今、書き換えて！\n[03:19.192]\n[03:19.995]君の手を握ってしまったら\n[03:25.578]孤独を知らないこの街にはもう二度と\n[03:33.491]帰ってくることはできないのでしょう\n[03:42.549]いくらでも迷いながら光も影も見に行こう\n[03:53.919]歌って聞かせてこの話の続き\n[03:59.503]連れて行って見たことない星まで\n[04:11.188]世界の端と端を結んで\n'
        },
        {
            name: 'ギターと孤独と蒼い惑星',
            artist: '結束バンド',
            url: 'https://npm.elemecdn.com/kita-chan@1.0.0/audio/2.flac',
            cover: 'https://npm.elemecdn.com/kita-chan@1.0.0/audio/2.jpg',
            lrc: '[00:00.000] 作词 : ZAQ\n[00:01.000] 作曲 : 音羽-otoha-\n[00:02.000] 编曲 : ak kin\n[00:15.144]突然降る夕立  あぁ傘もないや嫌\n[00:21.030]空のご機嫌なんか知らない\n[00:25.031]季節の変わり目の服は 何着りゃいいんだろ\n[00:30.988]春と秋 どこいっちゃったんだよ\n[00:34.786]\n[00:34.972]息も出来ない　情報の圧力\n[00:39.827]めまいの螺旋だ わたしはどこにいる\n[00:44.656]こんなに こんなに 息の音がするのに\n[00:50.787]変だね 世界の音がしない\n[00:55.911]\n[00:56.123]足りない 足りない 誰にも気づかれない\n[01:00.360]殴り書きみたいな音 出せない状態で叫んだよ\n[01:05.343]「ありのまま」なんて 誰に見せるんだ\n[01:10.277]馬鹿なわたしは歌うだけ\n[01:15.161]ぶちまけちゃおうか 星に\n[01:18.738]\n[01:29.559]エリクサーに張り替える作業もなんとなくなんだ\n[01:35.564]欠けた爪を少し触る\n[01:39.569]半径300mmの体で 必死に嗚いてる\n[01:45.566]音楽にとっちゃ ココが地球だな\n[01:49.049]\n[01:49.505]空気を握って 空を殴るよ\n[01:54.457]なんにも起きない わたしは無力さ\n[01:59.347]だけどさ その手で この鉄を弾いたら\n[02:05.408]何かが変わって見えた…ような。\n[02:10.717]\n[02:10.882]眩しい 眩しい そんなに光るなよ\n[02:14.922]わたしのダサい影が より色濃くなってしまうだろ\n[02:19.954]なんでこんな熱くなっちゃってんだ 止まんない\n[02:24.932]馬鹿なわたしは歌うだけ\n[02:29.875]うるさいんだって 心臓\n[02:33.611]\n[02:42.684]蒼い惑星 ひとりぼっち\n[02:47.366]いっぱいの音を聞いてきた\n[02:52.752]回り続けて 幾億年\n[02:57.316]一瞬でもいいから…ああ\n[03:03.321]聞いて\n[03:04.175]\n[03:04.454]聴けよ\n[03:05.052]\n[03:05.211]わたし わたし わたしはここにいる\n[03:09.617]殴り書きみたいな音 出せない状態で叫んだよ\n[03:14.679]なんかになりたい なりたい 何者かでいい\n[03:19.621]馬鹿なわたしは歌うだけ\n[03:24.735]ぶちまけちゃおうか 星に\n'
        }
    ]
});

const gitalk = new Gitalk({
    clientID: 'adc1930f696980c28522',
    clientSecret: '3af757ce7a50b3d185c1b9b6ccf9e065df215687',
    repo: 'RIP-Kita-chan',      // The repository of store comments,
    owner: 'Hicircum',
    admin: ['Hicircum'],
    id: '1',      // Ensure uniqueness and length less than 50
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
        document.getElementById('kita').setAttribute('src', 'https://npm.elemecdn.com/kita-chan@1.0.1/kita2.png');
    }
    if (count >= 666) {
        document.getElementById('kita').setAttribute('src', 'https://npm.elemecdn.com/kita-chan@1.0.1/kita3.png');
    }
    if (muyuType == 0) {
        document.getElementById('muyuType').innerHTML = "传统木鱼";
        document.getElementById('muyu').setAttribute('src', 'https://npm.elemecdn.com/kita-chan@1.0.1/muyu.png');
    } else {
        document.getElementById('muyuType').innerHTML = "KitaKita";
        document.getElementById('muyu').setAttribute('src', 'https://npm.elemecdn.com/kita-chan@1.0.1/muyu2.png');
        document.cookie = "count=" + count;
        document.cookie = "muyuType=" + muyuType;
    }
    
}

function change() {
    if (muyuType == 0) {
        document.getElementById('muyuType').innerHTML = "KitaKita";
        document.getElementById('muyu').setAttribute('src', 'https://npm.elemecdn.com/kita-chan@1.0.1/muyu2.png');
        muyuType = 15;
    } else {
        document.getElementById('muyuType').innerHTML = "传统木鱼";
        document.getElementById('muyu').setAttribute('src', 'https://npm.elemecdn.com/kita-chan@1.0.1/muyu.png');
        muyuType = 0;
    }
    document.cookie = "count=" + count;
    document.cookie = "muyuType=" + muyuType;
}

function add() {
    playSound();
    count++;
    if (count == 421) {
        rainbowBg();
    }
    if (count == 514) {
        document.getElementById('kita').setAttribute('src', 'https://npm.elemecdn.com/kita-chan@1.0.1/kita2.png');
    }
    if (count == 666) {
        document.getElementById('kita').setAttribute('src', 'https://npm.elemecdn.com/kita-chan@1.0.1/kita3.png');
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


function playSound() {
    if (muyuType == 0) {
        var audio = new Audio("https://npm.elemecdn.com/kita-chan@1.0.1/muyu.mp3");
        audio.play();
    } else {
        var audio = new Audio("https://npm.elemecdn.com/kita-chan@1.0.1/kita.mp3");
        audio.play();
    }
}
