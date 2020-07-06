function signInButton() {
    let cookie = document.cookie;
    if(cookie == ""){
        console.log(cookie);
        null;
    }else{
        var e = document.getElementById('signIn');
        e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
    }
}

