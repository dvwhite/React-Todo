  // Pull from local storage if it has data, otherwise load the default object
  export const recoverStateFromStorage = () => {
    return JSON.parse(localStorage.getItem('state'));
  }

  // Store state in local storage
  export const storeStateInStorage = (state) => {
    localStorage.setItem('state', JSON.stringify(state))
  }
