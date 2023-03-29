var Twitter_Light = document.getElementById("twitter-light"); 
var Twitter_Dark = document.getElementById("twitter-dark"); 
var Main_Main = document.getElementById("main-main"); 
var Twitter = document.getElementById("twitter");
//読み込み時、設定がダークモードの時チェックボックスにチェックする
if (window.matchMedia('(prefers-color-scheme: dark)').matches == true)
{
	document.querySelector(`input[type='checkbox'][class='switch-input']`).checked = true;
	document.body.classList.remove('light-color')
	document.body.classList.add('dark-color');
	Twitter_Light.setAttribute('style', 'display:none');
}
//ダークモード
const Checked = document.querySelector('#darkmode-switch-button');
Checked.addEventListener("change", () =>
{
	if (Checked.checked == true)
	{ //ダークモード
		document.body.classList.remove('light-color');
		document.body.classList.add('dark-color');
    Twitter_Light.setAttribute('style', 'display:none');
		Twitter_Dark.setAttribute('style', 'display:block');
	}
	else
	{ //ライトモード
		document.body.classList.remove('dark-color');
		document.body.classList.add('light-color');
		Twitter_Dark.setAttribute('style', 'display:none');
		Twitter_Light.setAttribute('style', 'display:block');
	}
}); //時計
function Puls0(Num)
{
	var NewNum = Num;
	if (Num < 10)
	{ //桁数が1桁だったら0足して2桁に
		NewNum = "0" + Num;
	}
	return NewNum;
}

function ShowClock()
{
	var NowTime = new Date();
	var NowTimeHour = Puls0(NowTime.getHours());
	var NowTimeMin = Puls0(NowTime.getMinutes());
	var NowTimeSec = Puls0(NowTime.getSeconds());
	var NowTimeString = "NowTime:" + NowTimeHour + ":" + NowTimeMin + ":" + NowTimeSec;
	document.getElementById("nowtime-clock").innerHTML = NowTimeString;
}
setInterval('ShowClock()', 1000); //繰り返し(1000ms)

var NewEle = 'width: 100%';
if (window.innerWidth >= 752 && window.innerWidth < 952)
{
	var NewSize = window.innerWidth - 215;
	NewEle = 'width: ' + NewSize + 'px';
}
else if (window.innerWidth >= 952)
{
	var NewSize = window.innerWidth - 415;
	NewEle = 'width: ' + NewSize + 'px';
}
Main_Main.setAttribute('style', NewEle);
//ウィンドウ幅でメイン画面サイズ変更
var Timer = '';
window.onresize = function()
{
	if (Timer)
	{
		clearTimeout(Timer);
	}
	Timer = setTimeout(function()
	{
		var NewEle = 'width: 100%';
		if (window.innerWidth >= 752 && window.innerWidth < 952)
		{
			var NewSize = window.innerWidth - 215;
			NewEle = 'width: ' + NewSize + 'px';
		}
		else if (window.innerWidth >= 952)
		{
			var NewSize = window.innerWidth - 415;
			NewEle = 'width: ' + NewSize + 'px';
		}
		Main_Main.setAttribute('style', NewEle);
		Twitter_Light.setAttribute('data-theme', 'dark');
	}, 100);
};
/*
      $(function() 
      {
        $.ajax(
        {
        url: 'info-rss.xml',
        type: 'GET',
        dataType: 'XML',
        cache: false,
        success: function(data) 
        {
          var UpdateTime = $(data).find('lastBuildDate').text();
          $(data).find("item").each(function(index, item)
          {
            var Title = $(item).find('title').text();
            var Link = $(item).find('link').text();
            var Description = $(item).find('description').text();
            var Dt = $(item).find('pubDate').text();
            var Dt_ = new Date(Dt);
            //Date_ = Date;
            
            $('#infos').append(`${Dt_.getFullYear()}/${Dt_.getFullMonth()}/${Dt_.getFullDate()} <a href="${Link}" class="Border_Item" title="${Description}">${Title}<br></a>`);

          });
        },
        error: function(err) 
        {
          console.log(err);
        }
  });
});*/
