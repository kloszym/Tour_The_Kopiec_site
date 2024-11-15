function refreshtime()
{       var dzisiaj = new Date ();
       var day = dzisiaj.getDate();
       var month = dzisiaj.getMonth()+1;
       var year = dzisiaj.getFullYear();
       var hour = dzisiaj.getHours();
       var minute = dzisiaj.getMinutes();
       var second = dzisiaj.getSeconds();

       var minutkiZnak = ":"
       if (minute<10){
        minutkiZnak=":0"
       }
       var sekundkiZnak =":"
       if (second<10){
        sekundkiZnak=":0"
       }

       document.getElementById("clock").innerHTML = hour+minutkiZnak+minute+sekundkiZnak+second;
      
}
setInterval(refreshtime,1000);