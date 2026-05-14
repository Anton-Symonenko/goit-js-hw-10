
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const snackBarForm = document.querySelector(".form");
snackBarForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const delay = Number(e.currentTarget.delay.value);
    const state = e.currentTarget.state.value;
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state === 'fulfilled') {
            resolve(delay);
            } else {
          reject(delay);
            }
        }, delay);
    });
    

    promise
    .then(delay => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
  e.currentTarget.reset();

}
