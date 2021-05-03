var jsondata;
var ssobj=[];

function preload(){
  // 取得spreadsheet
  jsondata = loadJSON('https://spreadsheets.google.com/feeds/list/1laqIQzhKDaeQnZAjoNOod0et8wT1kpizNs2MiQbU4SQ/od6/public/values?alt=json');
}
function setup() {
  let temp = jsondata.feed.entry;
  //console.log(jsondata);
  let i = 1;
  /*
  console.log('第'+(i+2)+'行資料的tel欄位：'+jsondata.feed.entry[i].gsx$note.$t);
  */
  
  let str='';
  
  // 把所有name的資料抓出來 排在燈箱上
  // 把所有name的資料抓出來 排在燈箱上
  for(let i=0;i<jsondata.feed.entry.length;i+=1){
    str += '<div class="slide-'+i+'">'+
              '<a href="'+ jsondata.feed.entry[i].gsx$link.$t +'" target="_blank">'+
                '<center><img src="./assets/'+temp[i].gsx$img.$t+'" class="img-fluid"><img></center>'+
                '<p style="text-align: center;">'+jsondata.feed.entry[i].gsx$val.$t+'</p>'+
              '</a>'+
           '</div>';
  }
  
  //將演算的資料 str 插入 index 裡面 id= hw1 的 tag 物件
  window.document.getElementById("hw1").innerHTML=str;
  
    $(document).ready(()=>{
      $('#hw1').slick({
          centerMode:true,
          slidesToShow: 1,
          slidesToScroll: 3,
          autoplaySpeed: 750,
          arrows: true
      });
    }); 

}

function draw() {
}