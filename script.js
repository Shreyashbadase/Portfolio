

function composeEmail() {
    // Define email parameters
    var companyEmail = "shreyashbadase2001@gmail.com";
    var subject = "Interview Invitation";
    var bodyText = "Hello,\n\nPlease write your email body text here.";
  
    // Encode email parameters
    var encodedSubject = encodeURIComponent(subject);
    var encodedBodyText = encodeURIComponent(bodyText);
  
    // Construct mailto link
    var mailtoLink = "mailto:" + companyEmail + "?subject=" + encodedSubject + "&body=" + encodedBodyText;
  
    // Open default email client with pre-filled email
    window.location.href = mailtoLink;
  }

 

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxlmc1z3XE7HL01B87oZ0yw2ChyZhgMHEwha-Bprc4a3j9Ah7nJZSYSsyspGXUtpa_i/exec'

    const form = document.forms['contact-form']
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          if (response.ok) {
            alert("Submitted Successfully.");
          } else {
            alert("Submission failed. Please try again.");
          }
        })
        .catch(error => console.error('Error!', error.message))
    })