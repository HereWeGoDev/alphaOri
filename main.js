const emailForm = document.getElementById("emailSender");

emailForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("http://localhost:3001/emailSender", {
      method: "POST",
      body: JSON.stringify({ title: subject, message }),
    });

    if (response.ok) {
      alert("Email sent successfully");
    } else {
      alert("Email not sent!");
    }
  } catch (error) {
    alert("error occurred");
    alert(error);
    console.log(error);
  }
});
