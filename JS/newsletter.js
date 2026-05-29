function validateData() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phonenumber");
  const topicSelect = document.getElementById("topic-of-interest");
  const preferences = document.getElementById("update-preferences");

  if (username.value.length <= 5) {
    alert("Username must be more than 5 characters");
  } else if (!email.value.endsWith("@gmail.com")) {
    alert("Must be @gmail.com");
  } else if (!onlyNumber(phoneNumber.value)) {
    alert("Phone number must contain only numbers");
  } else if (topicSelect.value === "") {
    alert("Please select a Topic of Interest");
  } else if (preferences.value === "") {
    alert("Please select your Update Preferences");
  } else {
    alert("Registration Successful!");

    document.getElementById("registration-form").reset();
  }
}

function onlyNumber(num) {
  if (num.length === 0) {
    return false;
  }
  for (let i = 0; i < num.length; i++) {
    if (num[i] < "0" || num[i] > "9") {
      return false;
    }
  }
  return true;
}
