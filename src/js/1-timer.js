import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

let userSelectedDate = null;
let timerId = null;

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};








// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// const refs = {
//   input: document.querySelector('#datetime-picker'),
//   startBtn: document.querySelector('[data-start]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// let userSelectedDate = null;
// let timerId = null;

// refs.startBtn.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     userSelectedDate = selectedDates[0];

//     if (userSelectedDate <= new Date()) {
//       window.alert('Please choose a date in the future');
//       refs.startBtn.disabled = true;
//       return;
//     }

//     refs.startBtn.disabled = false;
//   },
// };

// flatpickr(refs.input, options);

// refs.startBtn.addEventListener('click', onStartClick);

// function onStartClick() {
//   refs.startBtn.disabled = true;

//   timerId = setInterval(() => {
//     const currentTime = Date.now();
//     const selectedTime = userSelectedDate.getTime();
//     const difference = selectedTime - currentTime;

//     if (difference <= 0) {
//       clearInterval(timerId);
//       updateTimerInterface({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       return;
//     }

//     const time = convertMs(difference);
//     updateTimerInterface(time);
//   }, 1000);
// }

// function updateTimerInterface({ days, hours, minutes, seconds }) {
//   refs.days.textContent = addLeadingZero(days);
//   refs.hours.textContent = addLeadingZero(hours);
//   refs.minutes.textContent = addLeadingZero(minutes);
//   refs.seconds.textContent = addLeadingZero(seconds);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   return {
//     days: Math.floor(ms / day),
//     hours: Math.floor((ms % day) / hour),
//     minutes: Math.floor(((ms % day) % hour) / minute),
//     seconds: Math.floor((((ms % day) % hour) % minute) / second),
//   };
// }