
const url = "https://www.amazon.com/Peripheral-Neuropathy-Numbness-Weakness-Neurology/dp/193260359X";

// Download book Function
function downloadEbook() {
  // Show loading state
  const buttons = document.querySelectorAll("button")
  buttons.forEach((btn) => {
    if (btn.textContent.includes("I WANT MY BOOK")) {
      btn.innerHTML = `
                <svg class="icon animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 12a9 9 0 11-6.219-8.56"/>
                </svg>
                Processing...
            `
      btn.disabled = true
    }
  })

  // Simulate the download process
  setTimeout(() => {
     window.open(url, '_blank');

    // Reset buttons
    buttons.forEach((btn) => {
      if (btn.disabled) {
        btn.innerHTML = `
                    I WANT MY BOOK
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                `
        btn.disabled = false
      }
    })
  }, 1000)
}

// Smooth scrol for anchor links
document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = "smooth"

  // Intersection Observer animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements animation
  const animatedElements = document.querySelectorAll(".problem-card, .content-card, .benefit-item")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Add loading animation in CSS
const style = document.createElement("style")
style.textContent = `
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`
document.head.appendChild(style)
