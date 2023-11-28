function time(){
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm= document.getElementById('AM_PM');
    var title_set1 = document.getElementById('title_set1');
    if(hour>=12 && hour<=15){
        title_set1.innerHTML =  "LET'S HAVE SOME LUNCH !!";
        // title_set.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        // main_img.style.backgroundImage = 'url(./Component\ 31\ –\ 1.svg)'
    }else if(hour>=16 && hour<=19){
        title_set1.innerHTML =  "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        // title_set.innerHTML = "GOOD EVENING !!";
        // main_img.style.backgroundImage = 'url(./lunch_image@2x.png)'
    }else if(hour>=20 && hour<=23){
        title_set1.innerHTML =  "CLOSE YOUR EYES AND GO TO SLEEP";
        // title_set.innerHTML = "GOOD NIGHT !!";
        // main_img.style.backgroundImage = 'url(./Component\ 32\ –\ 1@2x.png)'
    }else if(hour>=4 && hour<=11){
        title_set1.innerHTML =  "GRAB SOME HEALTHY BREAKFAST!!!";
        // title_set.innerHTML = "GOOD MORNING!! WAKE UP !!";
        // main_img.style.backgroundImage = 'url(./Component\ 30\ –\ 1@2x.png)'
    }else{
        console.log('error')
    }
    if(hour>=12){
        am_pm.innerHTML = 'PM';
    }else{
        am_pm.innerHTML = 'AM';
    }

    if(hour>12){
        hour = hour - 12;
    }
    if(hour<=9){
        hour= '0'+hour;
    }
    if(min<=9){
        min= '0'+min;
    }
    if(sec<=9){
        sec= '0'+sec;
    }
    document.getElementById('hour').innerHTML=hour;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;

}
function alerm(){
    var time = new Date();
    var hour = time.getHours();
    var ok;
    if(hour>=12){
        ok = 'PM';
    }else{
        ok = 'AM';
    }
    if(hour>12){
        hour = hour - 12;
    }
    if(hour<=9){
        hour= '0'+hour;
    }

    console.log(ok)
    let wake_up = document.getElementById('wake_up');
    let lunch = document.getElementById('lunch');
    let nap = document.getElementById('nap');
    let night = document.getElementById('night');
    let wake_up1 = document.getElementById('wake_up1');
    let lunch1= document.getElementById('lunch1');
    let nap1= document.getElementById('nap1');
    let night1= document.getElementById('night1');

    wake_up1.innerHTML=wake_up.value;
    lunch1.innerHTML=lunch.value;
    nap1.innerHTML=nap.value;
    night1.innerHTML=night.value;

    var title_set =  document.getElementById('title_set0');
    var main_img = document.getElementById('main_img');
    let main_img2  =    document.getElementById('main_img2');

    let wake=wake_up.value.split(' ');
    let lun=lunch.value.split(' ');
    let nape=nap.value.split(' ');
    let nigh=night.value.split(' ');
    console.log(lun)
    console.log(nape)
    console.log(nigh)
    console.log(wake)
    if(wake_up.value!='Default'){
        title_set.innerHTML = "GOOD MORNING!! WAKE UP !!";
        if(hour==wake[0] && ok==wake[1]){
            main_img2.src = './Component\ 30\ –\ 1@2x.png';
        }else{
            main_img2.src = 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=600.jpg';
        }
    }else if(lunch.value!='Default'){
        title_set.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        // main_img.style.backgroundImage = 'url(./Component\ 31\ –\ 1.svg)'
        if(hour==lun[0] && ok==lun[1]){
            main_img2.src = './image.lunch.jpg';
        }else{
            main_img2.src = 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=600.jpg';
        }
        
    }else if(nap.value!='Default'){
        title_set.innerHTML = "GOOD EVENING !!";
        // main_img.style.backgroundImage = 'url(./lunch_image@2x.png)'
        if(hour==nape[0] && ok==nape[1]){
            main_img2.src = './lunch_image@2x.png';
        }else{
            main_img2.src = 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=600.jpg';
        }
        
    }else if(night.value!='Default'){
        title_set.innerHTML = "GOOD NIGHT !!";
        // main_img.style.backgroundImage = 'url(./Component\ 32\ –\ 1@2x.png)'
        if(hour==nigh[0] && ok==nigh[1]){
            main_img2.src = './Component\ 32\ –\ 1@2x.png';
        }else{
            main_img2.src = 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=600.jpg';
        }
    }
    else{
        title_set.innerHTML = "Set Time for good Will.";
        // main_img.style.backgroundImage = 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=600.jpg'
        main_img2.src = 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=600.jpg';
    }
}

let alerm_ok=document.getElementById("btn_ok");
alerm_ok.addEventListener("click", alerm);

setInterval(()=>{
    time();
},1000)