
// ---- Input Name
const inputName = document.querySelector("input[name='name']")
inputName.addEventListener("input", (event) => {
    validForm()
})

// ---- Input Email
const inputEmail = document.querySelector("input[name='email']")
inputEmail.addEventListener("input", (event) => {
    validForm()
})


// ---- Ceckbox Inputs
const checkBoxOptions = document.querySelectorAll(".option input")

for (let i = 0; i < checkBoxOptions.length; i++) {
    checkBoxOptions[i].addEventListener("click", function () {
        for (let i = 0; i < checkBoxOptions.length; i++) {
            checkBoxOptions[i].checked = false
        }
        this.checked = true
    })
}

// ---- Empoyees Inputs

// --- Employees Mask
const employessNumber = document.querySelector(".employessNumber")
const lessItemButton = document.querySelector(".lessItem")
const moreItemButton = document.querySelector(".moreItem")

employessNumber.addEventListener("input", () => {
    let employessNumberLength = employessNumber.value.length

    if (employessNumberLength === 0) {
        employessNumber.value = 0
    }

    if (employessNumberLength > 5 || employessNumber.value == "99999") {
        employessNumber.value = "99999"
        moreItemButton.classList.add("disabled")
    }

    if (employessNumber.value !== "99999") {
        moreItemButton.classList.remove("disabled")
    }
    if (employessNumber.value !== "0") {
        lessItemButton.classList.remove("disabled")
    } else {
        lessItemButton.classList.add("disabled")
    }
    validForm()
})

// --- Employees Buttons
moreItemButton.addEventListener("click", () => {
    let employessNumberValue = employessNumber.value

    employessNumber.value = parseInt(employessNumberValue) + 1

    if (employessNumber.value !== "99999") {
        moreItemButton.classList.remove("disabled")
    } else {
        moreItemButton.classList.add("disabled")
    }
    if (employessNumber.value !== "0") {
        lessItemButton.classList.remove("disabled")
    } else {
        lessItemButton.classList.add("disabled")
    }
    validForm()
})

lessItemButton.addEventListener("click", () => {
    let employessNumberValue = employessNumber.value

    employessNumber.value = parseInt(employessNumberValue) - 1

    if (employessNumber.value != "99999") {
        moreItemButton.classList.remove("disabled")
    } else {
        moreItemButton.classList.add("disabled")
    }

    if (employessNumber.value !== "0") {
        lessItemButton.classList.remove("disabled")
    } else {
        lessItemButton.classList.add("disabled")
    }
    validForm()
})

// ---- Submit Button Disable/Enable

const form = document.querySelector("form")
form.addEventListener("change", validForm)

function validForm() {
    document.querySelector(".submit").className = "submit disabled"

    // --- Validate Name
    const fullNamePattern = /\D+\s\D+/
    if (!fullNamePattern.test(inputName.value)) {
        inputName.classList.add("error")
        return
    }
    inputName.classList.remove("error")

    // --- Validate E-mail
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
    if (!emailPattern.test(inputEmail.value)) {
        inputEmail.classList.add("error")
        return
    }
    inputEmail.classList.remove("error")

    // --- Validate Checkbox
    let check = false
    for (let i = 0; i < checkBoxOptions.length; i++) {
        if (checkBoxOptions[i].checked) {
            check = true
        }
    }
    if (!check) {
        document.querySelector("#errorMessageOptions").style.display = "block"
        return
    }
    document.querySelector("#errorMessageOptions").style.display = "none"

    // --- Validate Employees
    if (employessNumber.value <= 0) {
        employessNumber.classList.add('error')
        return
    }
    employessNumber.classList.remove('error')

    document.querySelector(".submit").classList.remove("disabled")
}

// --- Successfuly Sent
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()

    const submitButton = document.querySelector(".submit")

    submitButton.innerHTML = "Sua mensagem foi enviada com sucesso!"
    submitButton.classList.add('successfulySent')

    const inputs = document.querySelectorAll('.formItem')

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].classList.add('sentInput')
    }

    moreItemButton.classList.add('disabled')
    lessItemButton.classList.add('disabled')
})
