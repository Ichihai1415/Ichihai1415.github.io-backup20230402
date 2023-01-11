//読み込み時、設定がダークモードの時チェックボックスにチェックする
  if(window.matchMedia('(prefers-color-scheme: dark)').matches == true)
      {
        document.querySelector(`input[type='checkbox'][class='SwitchInput']`).checked = true;
        document.body.classList.remove('LightColor')
        document.body.classList.add('DarkColor')
        Twitter_Light.setAttribute('style', 'Display:none');
      }
   //ダークモード
      const Checked = document.querySelector('#DarkmodeSwitchButton');
      Checked.addEventListener("change", () => 
      {
        if (Checked.checked == true)
        {//ダークモード
          document.body.classList.remove('LightColor')
          document.body.classList.add('DarkColor')
          Twitter_Light.setAttribute('style', 'Display:none');
          Twitter_Dark.setAttribute('style', 'Display:block');
        }
        else
        {//ライトモード
          document.body.classList.remove('DarkColor')
          document.body.classList.add('LightColor')
          Twitter_Dark.setAttribute('style', 'Display:none');
          Twitter_Light.setAttribute('style', 'Display:block');
        }
      });//時計
      function Puls0(Num) 
      {
        var NewNum = Num;
        if(Num < 10)
        {//桁数が1桁だったら0足して2桁に
          NewNum = "0" + Num;
        }
        return NewNum;
      }
      function ShowClock() 
      {
        var NowTime = new Date();
        var NowTimeHour = Puls0(NowTime.getHours());
        var NowTimeMin  = Puls0(NowTime.getMinutes());
        var NowTimeSec  = Puls0(NowTime.getSeconds());
        var NowTimeString = "NowTime:" + NowTimeHour + ":" + NowTimeMin + ":" + NowTimeSec;
        document.getElementById("RealtimeClock").innerHTML = NowTimeString;
      }
      setInterval('ShowClock()',1000);//繰り返し(1000ms)

      var NewEle = 'width: 100%';
      if(window.innerWidth >= 752 && window.innerWidth < 952)
      {
        var NewSize = window.innerWidth - 215;
        NewEle = 'width: ' + NewSize + 'px';
      }
      else if(window.innerWidth >= 952)
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
          if(window.innerWidth >= 752 && window.innerWidth < 952)
          {
            var NewSize = window.innerWidth - 215;
            NewEle = 'width: ' + NewSize + 'px';
          }
          else if(window.innerWidth >= 952)
          {
            var NewSize = window.innerWidth - 415;
            NewEle = 'width: ' + NewSize + 'px';
          }
            Main_Main.setAttribute('style', NewEle);
          Twitter.setAttribute('data-theme', 'dark');

        }, 100);
      };
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
            
            $('#Infos').append(`${Dt_.getFullYear()}/${Dt_.getFullMonth()}/${Dt_.getFullDate()} <a href="${Link}" class="Border_Item" title="${Description}">${Title}<br></a>`);

          });
        },
        error: function(err) 
        {
          console.log(err);
        }
  });
});
