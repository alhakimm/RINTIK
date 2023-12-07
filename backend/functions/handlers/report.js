const firebaseConfig = {
    apiKey: "AIzaSyB5TsZ35N9HbmNXeZPssfcD8fBpYCB2RYw",
    authDomain: "testingfirebase-3e0f7.firebaseapp.com",
    databaseURL: "https://testingfirebase-3e0f7-default-rtdb.firebaseio.com",
    projectId: "testingfirebase-3e0f7",
    storageBucket: "testingfirebase-3e0f7.appspot.com",
    messagingSenderId: "1085692725313",
    appId: "1:1085692725313:web:66300a4eefb6da48055ec0",
    measurementId: "G-ZT6XN0H2H1"
  };

firebase.initializeApp(firebaseConfig);

var reportFormDB = firebase.database().ref('reportForm');

document.getElementById('reportForm').addEventListener('submit', submitForm)


function submitForm() {
    var name = document.getElementById('name').value;
    var icNumber = document.getElementById('icNumber').value;
    var telephone = document.getElementById('telephone').value;
    var address = document.getElementById('address').value;
    var issueDescription = document.getElementById('issueDescription').value;

    // Validate if fields are not empty
    if (name.trim() === '' || icNumber.trim() === '' || telephone.trim() === '' || address.trim() === '' || issueDescription.trim() === '') {
        alert('Please fill in all the fields');
        return;
    }

    // Display the submitted data (you can modify this part as needed)
    var submissionResult = `Name: ${name}\nIC Number: ${icNumber}\nTelephone: ${telephone}\nAddress: ${address}\nIssue Description: ${issueDescription}`;
    alert(submissionResult);

    // Optionally, you can reset the form
    document.getElementById('reportForm').reset();

    saveMessage(name, icNumber, telephone, address, issueDescription);
}

const saveMessage = (name, icNumber, telephone, address, issueDescription) => {
    var newReportForm = reportFormDB.push();
    
    newReportForm.set({
        name : name,
        icNumber : icNumber,
        telephone : telephone,
        address : address,
        issueDescription : issueDescription,
    })
}

// const getElementVal = (id) => {
//     return document.getElementById(id).value;
// }