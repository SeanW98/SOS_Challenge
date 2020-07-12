function buttonDisplay() {
    let cookie = document.cookie;
    if(cookie == ""){
        let e = document.getElementById('logout');
        e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
    }else{
        let e = document.getElementById('signIn');
        e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
    }
}

