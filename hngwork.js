var updatesTime = () => {
    var todays = new Date();
    var day = todays.getDay()-1;
    var daylist = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday',  'saturday', 'sunday'];
    var date = todays.getFullYear() + ' - ' + (todays.getMonth()+1)+' - ' +todays.getDate();
    var time = todays.getHours() + ':' + todays.getMinutes() + ':' + todays.getSeconds();
    var dateOnly = date;
    var timeOnly = time+'';
    document.getElementById('times').innerHTML = timeOnly; 
    document.getElementById('dates').innerHTML = dateOnly + '<br> Day :- ' + daylist[day]; 
}
setInterval(updatesTime, 1000)
