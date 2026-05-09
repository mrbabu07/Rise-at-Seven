// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0
}

export const validateMinLength = (value, minLength) => {
  return value && value.toString().length >= minLength
}

export const validateMaxLength = (value, maxLength) => {
  return !value || value.toString().length <= maxLength
}

export const validateUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const createValidator = (rules) => {
  return (values) => {
    const errors = {}
    
    Object.keys(rules).forEach(field => {
      const fieldRules = rules[field]
      const value = values[field]
      
      fieldRules.forEach(rule => {
        if (typeof rule === 'function') {
          const error = rule(value, values)
          if (error) {
            errors[field] = error
          }
        }
      })
    })
    
    return errors
  }
}