var domains = {
	"amazonaws.com":1,
	"github.com":1,
	"7th-dream.com":1,
	"javseeds.com":1,
	"gamcore.com":1,
	"funny-games.biz":1,
	"gelbooru.com":1,
	"sexflashgame.org":1,
	"javseeds.com":1,
	"hrstory.net":1,
	"www.torrentkitty.org":1,
	"chrome.google.com":1,
	"kuriru.kir.jp/":1,
	"sukebei.nyaa.eu":1,
	"www.dlsite.com":1,
	"ggpht.com":1,
	"googlevideo.com":1,
	"kej.tw":1,
	"dongtaiwang.com":1,
	"epochtimes.com":1,
	"renminbao.com":1,
	"secretchina.com":1,
	"aboluowang.com":1,
	"ntdtv.com":1,
	"youtube.com":1,
	"ytimg.com":1,
	"kanzhongguo.com":1,
	"facebook.com":1,
	"soundofhope.org":1,
	"sharethis.com":1,
	"cloudflare.com":1,
	"crwdcntrl.net":1,
	"ippotv.com":1,
	"minghui.org":1,
	"google.com.hk":1,
	"google.com":1,
	"fb.com":1,
	"ob.gg":1,
	"dropbox.com":1,
	"zaobao.com":1,
	"zaobao.com.sg":1,
	"asiaone.com":1,
	"twitch.tv":1,
	"appledaily.com":1,
	"nextmedia.com":1,
	"appledaily.com.tw":1,
	"soundofhope.org":1,
	"googlecode.com":1,
	"1-apple.com.tw": 1
};

var proxy = "SOCKS5 192.168.199.1:8118; SOCKS; DIRECT;";

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
}
