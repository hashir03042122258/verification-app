function generateCode(){
    return Math.floor(100000+Math.random()*900000)
}
var sendbtn= document.getElementById("sendcodebtn")
var sendsecion= document.getElementById("send-section")
sendbtn.addEventListener("click",function(){
    var verificaioncode = generateCode()
    localStorage.setItem("code" ,verificaioncode)
    var verifysec=document.getElementById("verify-sec")
    verifysec.style.display="block"
sendsecion.style.display="none"
})
var verifybtn=document.getElementById("verifycodebtn")
verifybtn.addEventListener("click",function(){
    var verifyinp = document.getElementById("verificationinput").value
    var storecode= localStorage.getItem("code")
    var verifymasseg=document.getElementById("verifymassege")
    //ternary operator
    verifymasseg.innerText=verifyinp===storecode?"verified":"code is incorrect"
})