let user = prompt("Lütfen İsminizi Yazınız : ")
let myName = document.querySelector("#myName")
if (user.length >= 3) {
    myName.innerHTML = `${user[0].toLocaleUpperCase()}${user.slice(1).toLocaleLowerCase()}`
} else { 
    `${alert("Lütfen en az üç harfli isim yazınız")} }`
    location.reload()


} 



function showTime () {
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", ]
    let today = new Date()
    let d = days[today.getDay()]
    let tarih = new Date().toLocaleTimeString();
    document.querySelector("#myClock", ".clock").innerHTML = `${tarih} ${d} `
     

}
    setInterval(showTime, 1000)





    




