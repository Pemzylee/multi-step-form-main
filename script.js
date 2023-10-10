let step1 = document.getElementById('step1');
let btn = document.getElementById('btn1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let step4 = document.getElementById('step4');
let step5 = document.getElementById('step5');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn1 = document.getElementById('btn1');

let initialState = {
    statue: step1,
    name: "",
    email: "",
    phoneNumber: "",
    selectedPlan: "arcade-plan",
    isYear: false,
    online_service: false,
    larger_storage: false,
    customizable_profile: false,
};

// Define a variable to keep track of the current step
let currentStep = 1;

btn.addEventListener('click', validateStep);


// Validation function for the name field
function validateName() {
  let inputName = document.getElementById('input-name');
  let errorName = document.getElementById('errorName');

  if (!/\w{5,8}/.test(inputName.value.trim())) {
    inputName.style.border = '1px solid hsl(4, 100%, 67%)';
    errorName.textContent = 'This field is required';
    // msg.textContent = inputName.value;
    return false;
  } else {
    inputName.style.border = '';
    errorName.style.display = 'none';
    return true;
  }
}

// Validation function for the email field
function validateEmail() {
  let inputEmail = document.getElementById('input-email');
  let errorEmail = document.getElementById('errorEmail');

  let emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(inputEmail.value.trim())) {
    inputEmail.style.border = '1px solid hsl(4, 100%, 67%)';
    errorEmail.textContent = 'Tis field is required';
    // msg.textContent = inputEmail.value;
    return false;
  } else {
    inputEmail.style.border = '';
    errorEmail.style.display = 'none';
    return true;
  }
}

// Validation function for the phone number field
function validatePhoneNumber() {
  let inputNumber = document.getElementById('input-number');
  let errorNumber = document.getElementById('errorNumber');

  let phoneRegex = /^\d{11}$/;

  if (!phoneRegex.test(inputNumber.value.trim())) {
    inputNumber.style.border = '1px solid hsl(4, 100%, 67%)';
    errorNumber.textContent = 'This field is required';
    // msg.textContent = inputNumber.value;
    return false;
  } else {
    inputNumber.style.border = '';
    errorNumber.style.display = 'none';
    return true;
  }
}

// Modify the validateStep function to call the validation functions
function validateStep() {
  if (currentStep === 1) {
    // Validate the name, email, and phone number fields
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isPhoneNumberValid = validatePhoneNumber();

    if (!isNameValid || !isEmailValid || !isPhoneNumberValid) {
      return;
    }

    currentStep = 2;
    btn2.style.display = 'block';
    step1.style.display = 'none';
    step2.style.display = 'block';

    document.querySelector('.num1').classList.remove('step-number-active');
    document.querySelector('.num2').classList.remove('step-number-inactive');
    document.querySelector('.num1').classList.add('step-number-inactive');
    document.querySelector('.num2').classList.add('step-number-active');
  } else if (currentStep === 2) {
    currentStep = 3;
    step2.style.display = 'none';
    step3.style.display = 'block';

    document.querySelector('.num2').classList.remove('step-number-active');
    document.querySelector('.num3').classList.remove('step-number-inactive');
    document.querySelector('.num2').classList.add('step-number-inactive');
    document.querySelector('.num3').classList.add('step-number-active');
    renderAdditionalService(initialState);
  } else if (currentStep === 3) {
    currentStep = 4;
    btn1.style.display = 'none';
    btn3.style.display = 'block';
    step3.style.display = 'none';
    step4.style.display = 'block';

    document.querySelector('.num3').classList.remove('step-number-active');
    document.querySelector('.num4').classList.remove('step-number-inactive');
    document.querySelector('.num3').classList.add('step-number-inactive');
    document.querySelector('.num4').classList.add('step-number-active');

    renderConfirmBlock(initialState);
  }
}

btn2.addEventListener('click', goBack);

function goBack() {
  if (currentStep === 2) {
      // Code to go back from step 2 to step 1
      currentStep = 1;
      step1.style.display = 'block';
      step2.style.display = 'none';
      btn2.style.display = 'none'; // Hide the "Go Back" button when going back to Step 1
      step1.style.width = ''; // Reset the width
      step1.style.paddingLeft = ''; // Reset the padding-left
      step1.style.bottom = ''; // Reset the bottom

      // Update the step numbers' classes for step 2 to step 1 transition
      document.querySelector('.num2').classList.remove('step-number-active');
      document.querySelector('.num1').classList.remove('step-number-inactive');
      document.querySelector('.num2').classList.add('step-number-inactive');
      document.querySelector('.num1').classList.add('step-number-active');

      currentStep = 1;
      document.querySelector('.num2').classList.remove('step-number-active');
      document.querySelector('.num1').classList.remove('step-number-inactive');
      document.querySelector('.num2').classList.add('step-number-inactive');
      document.querySelector('.num1').classList.add('step-number-active');
  } else if (currentStep === 3) {
      // Code to go back from step 3 to step 2
      currentStep = 2;
      document.querySelector('.num3').classList.remove('step-number-active');
      document.querySelector('.num2').classList.remove('step-number-inactive');
      document.querySelector('.num3').classList.add('step-number-inactive');
      document.querySelector('.num2').classList.add('step-number-active');
      step2.style.display = 'block';
      step3.style.display = 'none';
  } else if (currentStep === 4) {
      // Code to go back from step 4 to step 3
      currentStep = 3;
      document.querySelector('.num4').classList.remove('step-number-active');
      document.querySelector('.num3').classList.remove('step-number-inactive');
      document.querySelector('.num4').classList.add('step-number-inactive');
      document.querySelector('.num3').classList.add('step-number-active');
      step3.style.display = 'block';
      step4.style.display = 'none';
      btn3.style.display = 'none';
      btn1.style.display = 'block';
  }
}

btn3.addEventListener('click', confirmationMessage)

function confirmationMessage() {
    if (currentStep === 4) {
        currentStep ===5
        step4.style.display = 'none';
        step5.style.display = 'block';
        btn2.style.display = 'none';
        btn3.style.display = 'none';
    }
}

let toggle = document.querySelector('.toggle');

// Add a click event listener to the toggle element
toggle.addEventListener('click', function (e) {
    e.preventDefault();
    toggle.classList.toggle("toggle-year");

    document.querySelector(".monthly-plan-text").classList.toggle("toggle-text");
    document.querySelector(".yearly-plan-text").classList.toggle("toggle-text");

    document.querySelectorAll(".plan-discounts").forEach(e => e.classList.toggle("hidden"));

    let monthPriceArr = [9, 12, 15];
    let yearPriceArr = [90, 120, 150];

    initialState.isYear = !document.querySelector(".yearly-plan-text").classList.contains("toggle-text");
    document.querySelectorAll(".plan-price").forEach((e, i) => {
        e.textContent = initialState.isYear ? `$${yearPriceArr[i]}/yr` : `$${monthPriceArr[i]}/mo`;
    });
});

let planCardList = document.querySelector(".plan")

planCardList.addEventListener('click', function (e) {
    e.preventDefault();
    //Remove selected effect
    for ( i = 0; i < planCardList.children.length; i++) {
      planCardList.children[i].classList.remove("plan-card-selected");
    }
  
    //Add selected effect
    let change = e.target.closest(".plan-card");
    change.classList.add("plan-card-selected");
  
    if (change.classList.contains("arcade-plan")) {
      setSelectedPlan(initialState, "arcade-plan");
    }
    if (change.classList.contains("advance-plan")) {
      setSelectedPlan(initialState, "advance-plan");
    }
    if (change.classList.contains("pro-plan")) {
      setSelectedPlan(initialState, "pro-plan");
    }
});
  
function setSelectedPlan(state, plan) {
    state.selectedPlan = plan;
}

let additionalServiceList = document.querySelector(".choose-plan");

// step3 block

additionalServiceList.addEventListener('click', function (e) {
  e.preventDefault();

  // Add selected effect
  const node = e.target.closest(".additional-service-card");
  if (node === null || node === undefined) return;
  node.classList.toggle("plan-card-selected");
  const checkbox = node.querySelector("input[type='checkbox']");
  checkbox.checked = !checkbox.checked;

  const key = checkbox.name.split('-').join('_');

  initialState[key] = checkbox.checked;
  console.log(initialState);
});

function renderAdditionalService(state) {
  console.log(state);
  let monthlyArr = [1, 2, 2];
  let yearlyArr = [10, 20, 20];
  document.querySelectorAll(".service-price").forEach((e, i) => {
    e.textContent = state.isYear ? `+$${yearlyArr[i]}/yr` : `+$${monthlyArr[i]}/mo`;
  })
}

  /*************************STEP 4******************************** */
  
  function renderConfirmBlock(state) {
    let plan = state.selectedPlan.split('-')[0];
    plan = plan.replace(plan[0], plan[0].toUpperCase());
  
  
    const planNameNode = document.querySelector(".selected-plan-name");
    const planPriceNode = document.querySelector(".selected-plan-price");
  
    console.log(plan, state);
  
    planNameNode.textContent = `${plan}(${state.isYear ? "Yearly" : "Monthly"})`;
  
  
    let planPrice = getPlanPrice(plan, state.isYear);
    planPriceNode.textContent = `$${planPrice}/${state.isYear ? "yr" : "mo"}`;
  
    insertServiceHtml(state);
  
    const totalPriceNode = document.querySelector(".total-price");
  
    planPrice += state.online_service ? (state.isYear ? 10 : 1) : 0;
    planPrice += state.larger_storage ? (state.isYear ? 20 : 2) : 0;
    planPrice += state.customizable_profile ? (state.isYear ? 20 : 2) : 0;
  
    totalPriceNode.textContent = `+$${planPrice}/${state.isYear ? "yr" : "mo"}`;
  }
  
  function getPlanPrice(plan, isYear) {
    switch (plan) {
      case "Arcade": return isYear ? 90 : 9;
      case "Advance": return isYear ? 120 : 12;
      case "Pro": return isYear ? 150 : 15;
      default: return 0;
    }
  }
  
  function insertServiceHtml(state) {
    const overviewData = document.querySelector(".overview-data");
  
    overviewData.querySelectorAll(".service-insert-html").forEach(e => {
      console.log(e);
      e.parentNode.removeChild(e);
    });
  
    let online_service_html = `
    <div class="flex-group service-insert-html">
        <p class="selected-service-name">Online service</p>
        <p class="selected-service-price">+$${state.isYear ? `10/yr` : `1/mo`}</p>
    </div>
    `;
  
    let larger_storage_html = `
    <div class="flex-group service-insert-html">
        <p class="selected-service-name">Larger storage</p>
        <p class="selected-service-price">+$${state.isYear ? `20/yr` : `2/mo`}</p>
    </div>
    `;
  
    let customizable_profile_html = `
    <div class="flex-group service-insert-html">
        <p class="selected-service-name">Customizable profile</p>
        <p class="selected-service-price">+$${state.isYear ? `20/yr` : `2/mo`}</p>
    </div>
    `;
  
    if (state.online_service)
      overviewData.insertAdjacentHTML('beforeend', online_service_html);
    if (state.larger_storage)
      overviewData.insertAdjacentHTML('beforeend', larger_storage_html);
    if (state.customizable_profile)
      overviewData.insertAdjacentHTML('beforeend', customizable_profile_html);
  }