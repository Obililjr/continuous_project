// const form = document . <here we put the name of the form element> . <here we put the names of the field elements in the form>
const userName = document.registration.username
const date = document.registration.date
const email = document.registration.email
const telephone = document.registration.phoneNumber
const country = document.registration.country
const password = document.registration.password
const gender1 = document.registration.gender1
const gender2 = document.registration.gender2
const east = document.registration.east
const west = document.registration.west
const south = document.registration.south
const north = document.registration.north

// create a fucntion to check phone number
const checkPhone = () => {
    let validatePhone = /^\d{10}$/
    let validatePhone2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    // let validatePhone3 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    // check if empty
    if (telephone.value === "") {
        telephone.style.border = '2px solid red'
        telephone.focus()
    }

    // check whether value matches alphabet regex
    if (telephone.value.match(validatePhone2) ) {
        // checks if the telephone value has only letters and makes an alert if true
        telephone.style.border = '2px solid green'
        // telephone.focus()
    } else {
        telephone.style.border = '2px solid red'
    }
}

const checkPassword = () => {
    let passwordCheck = /^[A-Za-z]\w{7,14}$/
    let passwordCheck2 = /^(?=.*\d)(?=.*[A-Z]).{6,20}$/

    if(password.value === "") {
        password.style.border = '2px solid red'
    } 

    if(password.value.match(passwordCheck2)) {
        password.style.border = '2px solid green'
    } else {
        password.style.border = '2px solid red'
    }
}

const checkEmail = () => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})+$/
    
    // osman.buyondo@gmail.com
    // emmanuel.jansuk@student.ciu.ac.ug
    // const let a = e ? b : c;

    // check if empty
    if (email.value === "") {
        email.style.border = '2px solid red'
        email.focus()
    }

    // 
    if (email.value.match(emailRegex)) {
        country.focus()
    } else {
        email.style.border = '2px solid red'
    }

// }
// Form validation for form, password

//  let numbers = /^[0-9]+$/
// let alphanumeric = /^[0-9a-zA-Z]+$/
// let aplhabet = /^[A-Za-z]+$/
// let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/