function changeTheme() {
  const element = document.documentElement
  const theme = element.classList.contains("dark") ? "light" : "dark"

  const css = document.createElement("style")

  css.appendChild(
    document.createTextNode(
      `* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }`,
    ),
  )
  document.head.appendChild(css)

  if (theme === "dark") {
    element.classList.add("dark")
  } else {
    element.classList.remove("dark")
  }

  window.getComputedStyle(css).opacity
  document.head.removeChild(css)
  localStorage.theme = theme
}

// Make changeTheme globally accessible
window.changeTheme = changeTheme;

function preloadTheme() {
  const theme = (() => {
    const userTheme = localStorage.theme

    if (userTheme === "light" || userTheme === "dark") {
      return userTheme
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
  })()

  const element = document.documentElement

  if (theme === "dark") {
    element.classList.add("dark")
  } else {
    element.classList.remove("dark")
  }

  localStorage.theme = theme
}

window.onload = () => {
  function initializeThemeButtons() {
    const headerThemeButton = document.getElementById("header-theme-button")
    const drawerThemeButton = document.getElementById("drawer-theme-button")
    const themeToggleButton = document.getElementById("theme-toggle")
    
    // Add event listeners for click on desktop
    if (headerThemeButton) headerThemeButton.addEventListener("click", changeTheme)
    if (drawerThemeButton) drawerThemeButton.addEventListener("click", changeTheme)
    if (themeToggleButton) themeToggleButton.addEventListener("click", changeTheme)
    
    // Add touch event listeners for mobile devices
    if (headerThemeButton) headerThemeButton.addEventListener("touchend", (e) => {
      e.preventDefault()
      changeTheme()
    })
    if (drawerThemeButton) drawerThemeButton.addEventListener("touchend", (e) => {
      e.preventDefault()
      changeTheme()
    })
    if (themeToggleButton) themeToggleButton.addEventListener("touchend", (e) => {
      e.preventDefault()
      changeTheme()
    })
  } 
  
  // Initialize theme after DOM content is loaded
  initializeThemeButtons()
  
  // Re-initialize when Astro dynamic page loads occur
  document.addEventListener('astro:page-load', initializeThemeButtons)
}

document.addEventListener("astro:after-swap", preloadTheme)

preloadTheme()
