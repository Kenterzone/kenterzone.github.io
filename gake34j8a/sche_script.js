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
    "date": "Tue.", 
    "musiconoroff" : true,
    "musicname": "The Show",
    "musicEP": "384회",
    "musictime": "18:00KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  },
  {
    "mair": "nomal",
    "date": "Wed.",
    "musiconoroff" : true,
    "musicname": "ShowChampion",
    "musicEP": "564회",
    "musictime": "17:00KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  },
  {
    "mair": "nomal",
    "date": "Thu.",
    "musiconoroff" : true,
    "musicname": "M!CountDown",
    "musicEP": "897회",
    "musictime": "18:08KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">Baby DONT Cry, ifeye, ALLDAY PROJECT, ILLIT, HITGS, PURPLE KISS, JOYURI, JEON SOMI, VIVIZ, NOWZ, CLOSE YOUR EYES, ARrC, AHOF, ONE OR EIGHT, YOON SAN-HA(ASTRO), CRAVITY, NCT DREAM, SUPER JUNIOR</font>`
  },

  {
    "mair": "nomal",
    "date": "Fri.",
    "musiconoroff" : true,
    "musicname": "Music Bank",
    "musicEP": "1257회",
    "musictime": "17:00KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">Baby DONT Cry, HITGS, ifeye, RESCENE, ILLIT, cosmosy, H1-KEY, JOYURI, PURPLE KISS, VIVIZ, AHOF, ARrC, CLOSE YOUR EYES, NouerA, NOWZ, ONE OR EIGHT, YOON SAN-HA(ASTRO), NCT DREAM, CRAVITY, SUPER JUNIOR</font>`
  },
  {
    "mair": "nomal",
    "date": "Sat.",
    "musiconoroff" : true,
    "musicname": "Music Core",
    "musicEP": "908회",
    "musictime": "15:15KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">HITGS, Baby DONT Cry, H1-KEY, ILLIT, BABYMONSTER, JOYURI, VIVIZ, ALLDAY PROJECT, NOWZ, ARrC, ONE OR EIGHT, CLOSE YOUR EYES, AHOF, DPNS, YOON SAN-HA(ASTRO), NCT DREAM, CRAVITY, SUPER JUNIOR</font>`
  },

  {
    "mair": "nomal",
    "date": "Sun.",
    "musiconoroff" : false,
    "musicname": "Inkigayo",
    "musicEP": "1276회",
    "musictime": "15:25KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  },  ////SP_GUIDE/////

{
    "date": "Fri.",
    "date_date": "12.20",
    "musicname": "2024 KBS Gayo Daejeon",
    "musicEP": "",
    "musictime": "20:30KST",
    "musicsetlist":`ShowGuest:MC：KIM YOUNGDAE、ZICO、Jang Wonyoung<BR/><font color="#adadb8"></font>`
  },{
    "date": "Wed.",
    "date_date": "01.29",
    "musicname": "2024 MBC Gayo Daejeon-Part1",
    "musicEP": "",
    "musictime": "17:25KST",
    "musicsetlist":`ShowGuest:MC：Ahn Yujin、Yeonjun、Doyoung<BR/><font color="#adadb8"></font>`
  },{
    "date": "Thu.",
    "date_date": "01.30",
    "musicname": "2024 MBC Gayo Daejeon-Part2",
    "musicEP": "",
    "musictime": "16:50KST",
    "musicsetlist":`ShowGuest:MC：Jun Hyunmoo、Seohyun(SNSD)<BR/><font color="#adadb8"></font>`
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
	//document.getElementById("app_guid").innerHTML =`<a style="text-decoration:none; color:white" href="#"  onClick="document.getElementById('player').src ='https://player.twitch.tv/?channel=${channel_id}&parent=Kenterzone.github.io'">2023 MBC 가요대제전</a> | <a style="text-decoration:none; color:white" href="#" onClick="document.getElementById('player').src ='https://player.twitch.tv/?channel=${channel_id2}&parent=Kenterzone.github.io'">2023紅白歌合戦&CDTV2023→24</a><BR/>${musicGuid.map(guidmap).join("")}<font color=Red>Tomorrow</font><BR/> ${musicGuid.map(guidtmrmap).join("")}`;
	document.getElementById("app_guid").innerHTML =`${musicGuid.map(guidmap).join("")}<font color=Red>Tomorrow</font><BR/> ${musicGuid.map(guidtmrmap).join("")}`;
	document.getElementById("v_channel").innerHTML =`<iframe id="player" width="100%" height="100%" src="https://player.twitch.tv/?channel=${channel_id}&parent=Kenterzone.github.io" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>`;
    //setTimeout(function(){document.getElementById("ad_info").innerHTML =``;},60000);
	document.getElementById("livechat").innerHTML =`<iframe src="https://www.twitch.tv/embed/rollelmoberry/chat?darkpopout&parent=Kenterzone.github.io" style="border: 0;height: 85%;width:100%;" frameborder="no" ></iframe>`;
}


