// API - https://randomuser.me/api/




const body = document.getElementById('body');

fetch('https://randomuser.me/api/').then( data => {
    return data.json();
})
.then( data => {
    const profile = data.results[0];
    const content = `<div class="container">
        <h1>Random Profile for you</h1>
        <div class="avatar">
            <img src="${profile.picture.medium}"  />
        </div>
        <h2>Personal Information</h2>
        <div class="personalInfo">
            <p><b>Name</b> : ${profile.name.title} ${profile.name.first} ${profile.name.last}</p>
            <p><b>Age</b> : ${profile.dob.age}</p>
            <p><b>Email</b> : ${profile.email}</p>
            <p><b>Gender</b> : ${profile.gender}</p>
            <p><b>Password</b> : ${profile.login.password}</p>
        </div>
        <h2>Location</h2>
        <div class="location">
            <p><b>Stret</b> : ${profile.location.street.number}, ${profile.location.street.name}</p>
            <p><b>City</b> : ${profile.location.city}</p>
            <p><b>State</b> : ${profile.location.state}</p>
            <p><b>country</b> : ${profile.location.country}</p>
            <p><b>postcode</b> : ${profile.location.postcode}</p>
        </div>
        </div>`;
    body.insertAdjacentHTML('beforeend' , content);
})
.catch( err => {
    console.log(err);
    const errMessage  = `<h1 class="err">Somthing Wrong, Reload</h1>`
    body.insertAdjacentHTML('beforeend' , errMessage);
});