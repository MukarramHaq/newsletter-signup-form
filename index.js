var validate = new Bouncer("form", {

  // Classes & IDs
  fieldClass: "error", // Applied to fields with errors
  errorClass: "error-message", // Applied to the error message for invalid fields
  fieldPrefix: "bouncer-field_", // If a field doesn't have a name or ID, one is generated with this prefix
  errorPrefix: "bouncer-error_", // Prefix used for error message IDs

  // Patterns
  // Validation patterns for specific input types
  patterns: {
    email:
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
  },

  // Message Settings
  messageAfterField: false, // If true, displays error message below field. If false, displays it above.
  messageCustom: "data-bouncer-message", // The data attribute to use for customer error messages
  messageTarget: "data-bouncer-target", // The data attribute to pass in a custom selector for the field error location

  // Error messages by error type
  messages: {
    missingValue: {
      checkbox: "This field is required.",
      radio: "Please select a value.",
      select: "Please select a value.",
      "select-multiple": "Please select at least one value.",
      default: "Valid email required",
    },
    patternMismatch: {
      email: "Valid email required",
    },
    
  },

  // Form Submission
  disableSubmit: false, // If true, native form submission is suppressed even when form validates

  // Custom Events
  emitEvents: true, // If true, emits custom events
});


/* I was running into an issue because the script was loading before the DOm was loaded
   To ensure that my script runs after the DOM content is by wrapping my code in a `DOMContentLoaded` */
document.addEventListener("DOMContentLoaded", function(){
    const email = document.getElementById('email')
    const signupForm = document.getElementById('signup-form')

    signupForm.addEventListener("submit", function(event){
        event.preventDefault()
        const emailValue = email.value
        localStorage.setItem('emailValue', emailValue)
        window.location.href = 'success.html'
    })
})