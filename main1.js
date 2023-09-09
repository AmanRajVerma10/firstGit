//function onsignup(event){
  //  event.preventDefault();
   // localStorage.setItem('username',document.getElementById('uname').value);
    //localStorage.setItem('email id',document.getElementById('email').value);
    //localStorage.setItem('Phone Number',document.getElementById('phone').value);
    //localStorage.setItem('Date of Appointment',document.getElementById('datetime-local').value);
    //console.log('details have been stored locally');
  //}

  function onsignup(event){
    event.preventDefault();
    let myObj={
        name: document.getElementById('uname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('datetime-local').value
    }
    let str=JSON.stringify(myObj);
    localStorage.setItem('Obj',str);
  }