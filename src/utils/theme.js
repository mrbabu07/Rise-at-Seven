// Theme management utilities

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
}

export const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT
}

export const getCurrentTheme = () => {
  const stored = localStorage.getItem('theme')
  if (stored && Object.values(THEMES).includes(stored)) {
    return stored
  }
  return THEMES.SYSTEM
}

export const applyTheme = (theme) => {
  const root = document.documentElement
  
  if (theme === THEMES.SYSTEM) {
    const systemTheme = getSystemTheme()
    root.classList.toggle('dark', systemTheme === THEMES.DARK)
  } else {
    root.classList.toggle('dark', theme === THEMES.DARK)
  }
}

export const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  applyTheme(theme)
}

export const initTheme = () => {
  const currentTheme = getCurrentTheme()
  applyTheme(currentTheme)
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getCurrentTheme() === THEMES.SYSTEM) {
      applyTheme(THEMES.SYSTEM)
    }
  })
}