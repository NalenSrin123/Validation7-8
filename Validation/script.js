const uname=document.querySelector('#uname');
const email=document.querySelector('#email');
const password=document.querySelector('#pass');
const confirmPass=document.querySelector('#cpass');

function setSuccess(input,message){
    const formSuccess=input.parentElement;
    formSuccess.classList.add('success');
    formSuccess.classList.remove('error');
    const span=formSuccess.querySelector('.span');
    span.innerHTML=message;
    span.style.color='rgb(18, 210, 18)'
}
function setError(input,message){
    const formError=input.parentElement;
    formError.classList.add('error');
    formError.classList.remove('success');
    const span=formError.querySelector('.span');
    span.innerHTML=message;
    span.style.color='red'
}

uname.addEventListener('keyup',function(){
    if(uname.value==''){
        setError(uname,'username not empty')
    }else if(uname.value.length<5){
        setError(uname,'username have 5 or more than.')
    }else{
        setSuccess(uname,'Success')
    }
})
const isEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
 email.addEventListener('keyup',function(){
    if(email.value==''){
        setError(email,'email not empty')
    }else if(isEmail(email.value)==false){
        setError(email,'Invalid email.');
    }else{
        setSuccess(email,'success');
    }
 })
 const isCorrectPassword=(password)=>{
    let pass=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
    return pass.test(password);
}
password.addEventListener('keyup',()=>{
    if(password.value==''){
        setError(password,'password not empty.');
    }else if(isCorrectPassword(password.value)==false){
        setError(password,'Invalid password.');
    }else{
        setSuccess(password,'Success');
    }
})
confirmPass.addEventListener('keyup',()=>{
    if(confirmPass.value==''){
        setError(confirmPass,'confirm password not empty.');
    }else if(confirmPass.value!=password.value){
        setError(confirmPass,'Not math password.');
    }else{
        setSuccess(confirmPass,'Success')
    }  
})
const iconShowpass=document.getElementById('showPass');
const iconShowCpass=document.getElementById('showCpass');
const iconHidepass=document.getElementById('hidePass');
const iconHideCpass=document.getElementById('hideCpass');
iconShowpass.addEventListener('click',function(){
    password.type='text';
    iconShowpass.style.visibility='hidden'
    iconHidepass.style.visibility='visible'
})
iconHidepass.addEventListener('click',function(){
    password.type='password';  
    iconHidepass.style.visibility='hidden'
    iconShowpass.style.visibility='visible'
})
iconShowCpass.addEventListener('click',function(){
    confirmPass.type='text';
    iconShowCpass.style.visibility='hidden'
    iconHideCpass.style.visibility='visible'
})
iconHideCpass.addEventListener('click',function(){
    confirmPass.type='password';  
    iconHideCpass.style.visibility='hidden'
    iconShowCpass.style.visibility='visible'
})

