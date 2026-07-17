document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const output = document.getElementById("output");

  // display previously saved Data -- function{}
  displaySavedData();

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    // form validations
    
    
    // basic password check
    const password = document.getElementById("password").Value;
    const confirmPassword = document.getElementById("confirmPassword").Value;

    if (password !== confirmPassword) {
      alert("passwords do not match");
    }
    const checkedPassword = password;

    const formData = {
      firstName: document.getElementById("firstName").Value,
      lastName: document.getElementById("lastName").Value,
      gender: document.getElementById("gender").Value,
      phoneNumber: document.getElementById("phoneNumber").Value,
      dob: document.getElementById("dob").Value,
      address: document.getElementById("address").Value,
      extfirstName: document.getElementById("extFirstName").Value,
      extLastName: document.getElementById("extLastName").Value,
      extPhoneNumber: document.getElementById("extPhoneNumber").Value,
      extEmail: document.getElementById("extEmail").Value,
      accountType: document.getElementById("accountType").Value,
      idType: document.getElementById("idType").Value,
      password: checkedPassword,
    }

    // start a new array // or load existing records
    const existingData = JSON.parse(sessionStorage.getItem("registrations")) || [];

    // add a new record to the array
    existingData.push(formData);

    // save back to sessionstorage
    sessionStorage.setItem("registrations", JSON.stringify(existingData));

    // refresh the display
    displaySavedData();

    //reset your form
    form.reset();
  });
    
    
  function displaySavedData() {
    const data = JSON.parse(sessionStorage.getItem("registrations")) || [];

    if(data.lenght === 0) {
        output.innerHTML = "<p>No registration saved Yet!</p>";
          return;
    }

    let details = "<h2>Saved Registrations</h2>";
    data.forEach((entry, index) => {
      details += `
      <div class="saved-entry">
        <h3>Registration #${index + 1}</h3>
        <p>Name: ${entry.firstName} ${entry.lastName}</p>
        <p>Gender: ${entry.gender}</p>
        <p>Phone: ${entry.phone}</p>
        <p>Date Of Birth: ${entry.dob}</p>
        <p>Address: ${entry.address}</p>
        <p>External Contact: ${entry.extfirstName} ${entry.extLastName} ${entry.extPhoneNumber} ${entry.extEmail} </p>
        <p>Account Type: ${entry.accountType}</p>
        <p>Id Type: ${entry.idType}</p>
        <p>: ${entry.gender}</p>
        <hr>
      </div>
      `;        
    });

    output.innerHTML = details;
   }
})