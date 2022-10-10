ambilButton = document.querySelector('header a');
ambilPassword = document.getElementById('password');
function generatePass() {
    objPass = {
        teks : `abcdefghijklmnopqrstuvwxyz`,
        teksBig : `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
        symbol : `!@#$%&?@#!`,
        num : `1234567890`
    }
    return objPass;
}
function random() {
    return Math.random().toString().charAt(5);
}
ambilButton.addEventListener('click',e =>{
    let gen = generatePass()
    let buatPassword = '';
    for(let i=0;i<2;i++) {
        buatPassword += `${gen.teks[random()]}${gen.teksBig[random()]}${gen.symbol[random()]}${gen.num[random()]}`;
    }
    if(random() < 5) buatPassword = Array.from(buatPassword).reverse().join(''.toString())
    ambilPassword.value = buatPassword;
})