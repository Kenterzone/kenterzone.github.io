const musicGuid =[
  {
    "mair": "nomal",
    "date": "xMon.",
    "musiconoroff" : false,
    "musicname": " ",
    "musictime": "KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "mair": "nomal",
    "date": "xTue.", 
    "musiconoroff" : false,
    "musicname": "",
    "musicEP": "회",
    "musictime": "KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "mair": "nomal",
    "date": "Wed.",
    "musiconoroff" : true,
    "musicname": "ShowChampion",
    "musicEP": "586회",
    "musictime": "17:00KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  },
  {
    "mair": "nomal",
    "date": "Thu.",
    "musiconoroff" : true,
    "musicname": "M!CountDown",
    "musicEP": "916회",
    "musictime": "18:08KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  },

  {
    "mair": "nomal",
    "date": "Fri.",
    "musiconoroff" : true,
    "musicname": "Music Bank",
    "musicEP": "1279회",
    "musictime": "17:25KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">KiiiKiii, i-dle, Tak Song I, 2Z, 8TURN, ALPHA DRIVE ONE, AxMxP, POW, WHIB, SUNGMIN, CATCH THE YOUNG, ATEEZ</font>`
  },
  {
    "mair": "nomal",
    "date": "Sat.",
    "musiconoroff" : true,
    "musicname": "Music Core",
    "musicEP": "934회",
    "musictime": "15:20KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">GRANADA, KiiiKiii, i-dle, Tak Song I, NAVILLERA, Jo Hwy, KiXÉ, 8TURN, POW, WHIB, AxMxP, ALPHA DRIVE ONE, Kim Juntae, SUNGMIN, ATEEZ</font>`
  },

  {
    "mair": "nomal",
    "date": "Sun.",
    "musiconoroff" : true,
    "musicname": "Inkigayo",
    "musicEP": "1298회",
    "musictime": "15:10KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">dodree, KiiiKiii, i-dle, SKINZ, ALPHA DRIVE ONE, AxMxP, Tak Song I, JUNTAE, SUNGMIN, 8TURN, IM CHANG JUNG, POW, WHIB, ATEEZ</font>`
  },  ////SP_GUIDE/////

{
    "date": "Fri.",
    "date_date": "12.19",
    "musicname": "2025 KBS Song Festival Global Festival",
    "musicEP": "",
    "musictime": "19:15KST",
    "musicsetlist":`ShowGuest:MC：Jang Doyeon、Moon Sangmin、Minju(ILLIT)<BR/><font color="#adadb8">HITGS, Baby DON'T Cry, CLOSE YOUR EYES, LE SSERAFIM, tripleS, KISS OF LIFE, STAYC, Duoyong, aespa, fromis_9, Lovelyz, EVNNE, AHOF, Li Canyuan, THE BΟΥΖ, P1Harmony, n.SSign, Park Seojin, JANNABI, 10CM, Roy Kim, NCT DREAM, MARK, HAECHAN, CNBLUE</font>`
  },{
    "date": "Thu.",
    "date_date": "12.25",
    "musicname": "2025 SBS Gayo Daejeon",
    "musicEP": "",
    "musictime": "16:50KST",
    "musicsetlist":`ShowGuest:MC：Young K、Ahn Yujin、Jaemin<BR/><font color="#adadb8">ALLDAY PROJECT, Baby DON'T Cry, izna, Hearts2Hearts, KiiiKiii, HITGS, BABYMONSTER, MEOVV, ILLIT, NMIXX , IVE, aespa, ITZY, LE SSERAFIM , AHOF, CORTIS, AxMxP, IDID, SKINZ, &TEAM, Jung Yunho, KEY, NCT DREAM, THE BOYZ, Stray Kids, ATEEZ, TXT , TREASURE, ENHYPEN, BOYNEXTDOOR, ZEROBASEONE, RIIZE, TWS, NCT WISH, NEXZ, KickFlip</font>`
  },{
    "date": "Wed.",
    "date_date": "12.31",
    "musicname": "2025 MBC Gayo Daejeon",
    "musicEP": "",
    "musictime": "19:50KST",
    "musicsetlist":`ShowGuest:MC：Minho、Annie、Hwang Minhyun<BR/><font color="#adadb8">ALLDAY PROJECT, HANRORO, KiiiKiii, ILLIT, izna, Hearts2Hearts, aespa, MEOVV, LE SSERAFIM, IVE, NMIXX, ITZY , ATEEZ, BOYNEXTDOOR, CORTIS, IDID, KickFlip, LUCY, NCT DREAM, NCT WISH, NEXZ , PLAVE, RIIZE, Stray Kids , THE BOYZ, TREASURE, TWS, YB , ZEROBASEONE, BEATPELLA HOUSE, Yeonjun, TOMORROW X TOGETHER, Minho</font>`
  }
];


function guidmap(Guid){
  if( (Guid.musiconoroff && Guid.date==mTime(0)) || (Guid.date_date == mDaycheck(0)&& Guid.date==mTime(0))  ){

       return `<ui><li>${Guid.date}>> ${Guid.musicname}-${Guid.musicEP}(${Guid.musictime})<BR /><font color="#3E7FA8">${Guid.musicsetlist}</font></li><ui>`;
  }else
    if(!Guid.musiconoroff && Guid.date==mTime(0) && !Guid.date_date){

       return `<li>${Guid.date}>> <font color="#adadb8">No ${Guid.musicname} music show</font></li>`;
  }
}

function guidtmrmap(Guidtmr){
  if((Guidtmr.musiconoroff && Guidtmr.date==mTime(1)) || (Guidtmr.date_date == mDaycheck(1)&& Guidtmr.date==mTime(1)) ){
       return `<ui><li>${Guidtmr.date}>> ${Guidtmr.musicname}-${Guidtmr.musicEP}(${Guidtmr.musictime})<BR /><font color="#3E7FA8">${Guidtmr.musicsetlist}</font></li></ui>
       `;
  }else
    if(!Guidtmr.musiconoroff && Guidtmr.date==mTime(1) && !Guidtmr.date_date ){
       return `<li>${Guidtmr.date}>> <font color="#adadb8">No ${Guidtmr.musicname} music show</font></li>`;
  }
}

function mDaycheck(nowtmr){
  let gmonth = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  let guDate= DateTimezone(9).getDate()+nowtmr;
  let guMM = gmonth[DateTimezone(9).getMonth()];
  let guYY= DateTimezone(9).getYear()+1900;
  if( ( gmonth[DateTimezone(9).getMonth()] && guDate==32) && (guYY%4!=0 && gmonth[02]&&guDate==29) || (guYY%4==0 && gmonth[02] && guDate==32)){guDate='1';guMM=gmonth[guMM++];}
  return( guMM+'.'+guDate) ;
}

function DateTimezone(offset) {
  let d = new Date();
  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
   return new Date(utc + (3600000*offset));
}

function mTime(nowadd){
  let weekday = ["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat.","Sun.","Mon."];
  let mday = new Date();
  return weekday[DateTimezone(9).getDay()+nowadd];
  //return weekday[3];   //for test
}

function setup(){
	var  channel_id = "kenterzone2025" ;
	//var  channel_id2 = "vo0ckeqp" ;
	//document.getElementById("app_guid").innerHTML =`<a style="text-decoration:none; color:white" href="#"  onClick="document.getElementById('player').src ='https://player.twitch.tv/?channel=${channel_id}&parent=Kenterzone.github.io'">2025 MBC 가요대제전</a> | <a style="text-decoration:none; color:white" href="#" onClick="document.getElementById('player').src ='https://player.twitch.tv/?channel=${channel_id2}&parent=Kenterzone.github.io'">2025紅白歌合戦&CDTV2025→26</a><BR/>${musicGuid.map(guidmap).join("")}<font color=Red>Tomorrow</font><BR/> ${musicGuid.map(guidtmrmap).join("")}`;
	document.getElementById("app_guid").innerHTML =`${musicGuid.map(guidmap).join("")}<font color=Red>Tomorrow</font><BR/> ${musicGuid.map(guidtmrmap).join("")}`;
	document.getElementById("v_channel").innerHTML =`<iframe id="player" width="100%" height="100%" src="https://player.twitch.tv/?channel=${channel_id}&parent=Kenterzone.github.io" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>`;
    //setTimeout(function(){document.getElementById("ad_info").innerHTML =``;},60000);
	document.getElementById("livechat").innerHTML =`<iframe src="https://www.twitch.tv/embed/rollelmoberry/chat?darkpopout&parent=Kenterzone.github.io" style="border: 0;height: 85%;width:100%;" frameborder="no" ></iframe>`;
}




















































































































