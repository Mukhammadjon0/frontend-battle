let signInCheckDictionary = document.getElementById('dictionary') 

if(localStorage.getItem('login') !== 'true') {
    signInCheckDictionary.style.display = 'none'

    window.location.assign('http://127.0.0.1:5500/pages/signup/signup.html')
}
