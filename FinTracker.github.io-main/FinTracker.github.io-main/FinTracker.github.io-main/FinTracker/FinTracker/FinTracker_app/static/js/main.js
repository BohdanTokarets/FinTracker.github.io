const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();
const UpdateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDate();
    const lastDayIndex = lastDay.getDate();

    const monthYearString = currentDate.toLocaleString('default',{month: 'long', year: 'numeric'});
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    for(let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    for(let i = 1; i <= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
    }

    for(let i = 1; i <= 7 - lastDayIndex; i++){
        const nextDay = new Date(currentYear, currentMonth + 1, i);
        datesHTML = `<div class="date inactive">${nextDay.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;
}

prevBtn.addEventListener('click', () =>{
    currentDate.setMonth(currentDate.getMonth() - 1);
    UpdateCalendar();
})

nextBtn.addEventListener('click', () =>{
    currentDate.setMonth(currentDate.getMonth() + 1);
    UpdateCalendar();
})


UpdateCalendar();


// Calendar Show
const header = document.getElementById('header');
const days = document.getElementById("days");
const body = document.getElementById("body");
const button1 = document.querySelector(".button1");
const ui = document.getElementById("ui");
const close_button = document.getElementById("close_button");
const popup = document.getElementById("popup");

header.addEventListener('click', () =>{
    datesElement.style.display = "grid";
    days.style.display = "grid";
})

document.addEventListener('mousedown', function(e){
    if(e.target.closest('.dates') === null){
        datesElement.style.display = "none";
        days.style.display = "none"
    }
});

button1.addEventListener('click', () =>{
    ui.classList.remove("non-visible");
    ui.classList.add("visible");
    popup.classList.remove("non-visible");
});

close_button.addEventListener('click', () =>{
    ui.classList.add("non-visible");
    ui.classList.remove("visible");
    popup.classList.add("non-visible");
});
