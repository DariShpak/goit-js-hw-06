const form = document.querySelector(".login-form")
console.dir(form)

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault()
  const {email, password} = event.currentTarget.elements

  const formData = {
    email: email.value,
    password: password.value,
  }
  
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!")
  }
  console.log(formData)

  event.currentTarget.reset()
}
