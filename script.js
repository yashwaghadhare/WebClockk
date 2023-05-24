let a, time, date;
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString();
    time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
    document.getElementById('time').innerHTML = time + " ON " + date;
},1000);