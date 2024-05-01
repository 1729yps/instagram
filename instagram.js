document.getElementById("instaform").addEventListener('submit',function(event){
    event.preventDefault();
    const username=document.getElementById('username').value
    const password=document.getElementById('password').value
    console.log("phone number,username,or email: " + username);
    console.log("Password: " + password);
})
