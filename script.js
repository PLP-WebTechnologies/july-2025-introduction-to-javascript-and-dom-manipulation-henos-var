// --- Part 1: Variable Declarations & Conditionals ---
let userName = "Zemcheal";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("User is logged in.");
} else {
  console.log("User is not logged in.");
}

// --- Part 2: Custom Functions ---

function greetUser() {
  const message = `Hello, ${userName}! Welcome back!`;
  document.getElementById("message").textContent = message;
}

function calculateSum(a, b) {
  return a + b;
}

// Test function in console
console.log("Sum: ", calculateSum(5, 10));

// --- Part 3: Loop Examples ---

function showLoop() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  // For loop
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    list.appendChild(li);
  }

  // While loop
  let j = 1;
  while (j <= 3) {
    console.log("While loop count:", j);
    j++;
  }
}

// --- Part 4: DOM Interactions ---

document.getElementById("main-title").style.color = "teal"; // 1st DOM interaction
document.getElementById("message").style.fontWeight = "bold"; // 2nd
document.body.style.backgroundColor = "#eaf6f6"; // 3rd
