function buttonDisplay() {
    let cookie = document.cookie;
    if(cookie == ""){
        var e = document.getElementById('logout');
        e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
    }else{
        var e = document.getElementById('signIn');
        e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
    }
}

