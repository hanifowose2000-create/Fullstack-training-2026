document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const output = document.getElementById("output");

  // display previously saved Data -- function{}
  displaySavedData();

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    // form validations
    
    
    // basic password check
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").Value;

    if (password !== confirmPassword) {
      alert("passwords do not match");
    }
    const checkedPassword = password;

    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      gender: document.getElementById("gender").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      dob: document.getElementById("dob").value,
      address: document.getElementById("address").value,
      extFirstName: document.getElementById("extFirstName").value,
      extLastName: document.getElementById("extLastName").value,
      extPhoneNumber: document.getElementById("extPhoneNumber").value,
      extEmail: document.getElementById("extEmail").value,
      accountType: document.getElementById("accountType").value,
      idType: document.getElementById("idType").value,
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

    if(data.length === 0) {
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
        <p>Phone: ${entry.phoneNumber}</p>
        <p>Date Of Birth: ${entry.dob}</p>
        <p>Address: ${entry.address}</p>
        <p>External Contact: ${entry.extfirstName} ${entry.extLastName} ${entry.extPhoneNumber} ${entry.extEmail} </p>
        <p>Account Type: ${entry.accountType}</p>
        <p>Id Type: ${entry.idType}</p>
        <hr>
      </div>
      `;        
    });

    output.innerHTML = details;
   }
})