setInterval(()=>{
d=new Date();
htimes=d.gethours();
mtimes=d.getminutes();
stimes=d.getseconds();
hrotation=30*htimes+mtimes/2;
mrotation=6*mtimes;
srotation=6*stimes;
hours.style.transform=`rotate(${hrotation}deg)`;
minutes.style.transform=`rotate(${mrotation}deg)`;
seconds.style.transform=`rotate(${srotation}deg)`;
},1000)