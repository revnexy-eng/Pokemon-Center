document.addEventListener("DOMContentLoaded", () => {
  // Sign Up Button
  const signupBtn = document.getElementById("signupBtn");
  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      dataLayer.push({ event: "sign_up_click" });
      alert("Sign Up button clicked!");
    });
  }

  // Buy Now Buttons
  const buyBtns = document.querySelectorAll(".buyBtn");
  buyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const product = btn.getAttribute("data-product");
      dataLayer.push({ event: "buy_now_click", product: product });
      alert(product + " purchased!");
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      dataLayer.push({ event: "form_submit" });
      alert("Form submitted!");
    });
  }
});