/* eslint-disable*/

function buttonDisplay() {
    const cookie = document.cookie;
    if(cookie == ''){
        const e = document.getElementById('logout');
        e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
    }else{
        const e = document.getElementById('signIn');
        e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
    }
}

