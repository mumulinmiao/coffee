
window.onscroll = function(){

    let nav = document.getElementById('nav')

    if(window.scrollY>0){
        // console.log('滚动');
        nav.className='navbar navbar-fixed-top active'
    }
    else{
        nav.className='navbar navbar-fixed-top'
    }
}

window.onload = function(){

    let navbtn = document.getElementById('navbtn');
    let list = document.getElementById('navbar');

    let lis = list.children;

    for(let i = 0; i < lis.length; i++)
    {
        lis[i].onclick = function(){
            navbtn.onclick;
        }
    }


}