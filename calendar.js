let m2 = 2;
let m11 = 11;
let m9 = 9;
let m4 = 4;
let m6 = 6;

function nodays(month, year) {
    let daysofmonth;
    if ((month == 4) || (month == m6) || (month == m9) || (month == m11)) {
        daysofmonth = 30;
    } else {
        daysofmonth = 31;
        if (month == m2) {
            if (year / 4 - parseInt(year / 4) != 0) {
                daysofmonth = 28;
            } else {
                if (year / 100 - parseInt(year / 100) != 0) {
                    daysofmonth = 29;
                } else {
                    if (year / 400 - parseInt(year / 400) != 0) {
                        daysofmonth = 28;
                    } else {
                        daysofmonth = 29;
                    }
                }
            }
        }
    }
    return daysofmonth;
}



const month2 = document.getElementById('month').innerText;
const currentMonth = new Date()
var date = currentMonth.getMonth()+1;
document.getElementById('month').innerText = date;

const year2 = document.getElementById('year').innerText;
const currentYear = new Date()
var date = currentYear.getFullYear();
document.getElementById('year').innerText = date;



function inc_next_month() {

    let b1 = 1
    let b2 = 1

    let month = parseInt(document.getElementById('month').innerText);
    let count = 1;
    count = count + month;
    document.getElementById('month').innerText = count;
    // console.log(count);
    let count1 = 1;
    if (count == 13) {
        document.getElementById('month').innerText = count1;
        count1++;
        let year = parseInt(document.getElementById('year').innerText);
        let count = 1;
        count = count + year;
        document.getElementById('year').innerText = count;
    }

    let month1 = document.getElementById("month").innerText;
    let year1 = document.getElementById("year").innerText;
    console.log(month1, year1);
    let table = document.createElement("table");
    console.log(month1);
    // to get correct month we using -1
    var date1 = new Date(document.getElementById('year').innerText, document.getElementById('month').innerText - 1);
    console.log(date1);
    let a = nodays(month1, year1);
    // Add Days
    let template = `
    <div class="democlass">
    <thead onclick = "event()">
        <td id = 'tablename'> Sun </td>
        <td id = 'tablename'> Mon </td>
        <td id = 'tablename'> Tue </td>
        <td id = 'tablename'> Wed </td>
        <td id = 'tablename'> Thu </td>
        <td id = 'tablename'> Fri </td>
        <td id = 'tablename'> Sat </td>
    </thead>
    </div>`;
    table.innerHTML = table.innerHTML + template;

    for (let i = 1; i <= 6; i++) {
        const tr = document.createElement("tr");
        for (let j = 1; j <= 7; j++) {
            const td = document.createElement("td");
            var am = document.createElement('h2');
            am.setAttribute('class', 'h')
            let day1 = new Date(document.getElementById('year').innerText, document.getElementById('month').innerText - 1).getDay();
            console.log(day1);


            localStorage.setItem("event", `<input type="text">`);
            document.getElementsByClassName("h").innerText = localStorage.getItem("event");


            if (b1 <= day1) {
                am.textContent = " ";
                b1 = b1 + 1;
                td.append(am);
                tr.append(td);
                table.append(tr);
            } else {
                if (b2 <= a) {
                    am.textContent = b2;
                    b2 = b2 + 1;
                    td.append(am);
                    tr.append(td);
                    table.append(tr);
                }
            }
        }
    }
    const d = document.getElementById("conn")
    d.innerHTML = '';
    d.append(table)
    document.body.append(d);

    return false;
}



function dec_pre_month() {
  
    b1 = 1
    b2 = 1

    let month = parseInt(document.getElementById('month').innerText);
    let count = -1;
    count = count + month;
    document.getElementById('month').innerText = count;
    let count1 = 12;
    if (count == 0) {
        document.getElementById('month').innerText = count1;
        count1--;
    }

    let month1 = document.getElementById("month").innerText;
    let year1 = document.getElementById("year").innerText;
    console.log(month1, year1);
    let table = document.createElement("table");
    console.log(month1);
    // to get correct month we using -1
    var date1 = new Date(document.getElementById('year').innerText, document.getElementById('month').innerText - 1);
    console.log(date1);
    let a = nodays(month1, year1);
    // Add Days
    let template = `
    <div class="democlass">
    <thead>
        <td id = 'tablename'> Sun </td>
        <td id = 'tablename'> Mon </td>
        <td id = 'tablename'> Tue </td>
        <td id = 'tablename'> Wed </td>
        <td id = 'tablename'> Thu </td>
        <td id = 'tablename'> Fri </td>
        <td id = 'tablename'> Sat </td>
    </thead>
    </div>`;
    table.innerHTML = table.innerHTML + template;

    for (let i = 1; i <= 6; i++) {
        const tr = document.createElement("tr");
        for (let j = 1; j <= 7; j++) {
            const td = document.createElement("td");
            var am = document.createElement('h2');
            am.setAttribute('class', 'h')
            let day1 = new Date(document.getElementById('year').innerText, document.getElementById('month').innerText - 1).getDay();
            console.log(day1);


            // localStorage.setItem("event", `<input type="text">`);
            // document.getElementsByClassName("h").innerText = localStorage.getItem("event");


            if (b1 <= day1) {
                am.textContent = " ";
                b1 = b1 + 1;
                td.append(am);
                tr.append(td);
                table.append(tr);
            } else {
                if (b2 <= a) {
                    am.textContent = b2;
                    b2 = b2 + 1;
                    td.append(am);
                    tr.append(td);
                    table.append(tr);
                }
            }
        }
    }
    const d = document.getElementById("conn")
    d.innerHTML = '';
    d.append(table);
    document.body.append(d);
    return false;

}



function inc_next_year() {

    b1 = 1
    b2 = 1
    let year = parseInt(document.getElementById('year').innerText);
    let count = 1;
    count = count + year;
    // console.log(count);
    document.getElementById('year').innerText = count;
    document.querySelector('#pre').disabled = false;

    if (count >= 2025) {
        document.querySelector('#next').disabled = true;
    }

    let month1 = document.getElementById("month").innerText;
    let year1 = document.getElementById("year").innerText;
    console.log(month1, year1);
    let table = document.createElement("table");
    // console.log(month1);
    // to get correct month we using -1
    var date1 = new Date(document.getElementById('year').innerText, document.getElementById('month').innerText - 1);
    // console.log(date1);
    let a = nodays(month1, year1);
    // Add Days
    let template = `
    <div class="democlass">
    <thead>
        <td id = 'tablename'> Sun </td>
        <td id = 'tablename'> Mon </td>
        <td id = 'tablename'> Tue </td>
        <td id = 'tablename'> Wed </td>
        <td id = 'tablename'> Thu </td>
        <td id = 'tablename'> Fri </td>
        <td id = 'tablename'> Sat </td>
    </thead>
    </div>`;
    table.innerHTML = table.innerHTML + template;

    for (let i = 1; i <= 6; i++) {
        const tr = document.createElement("tr");
        for (let j = 1; j <= 7; j++) {
            const td = document.createElement("td");
            var am = document.createElement('h2');
            am.setAttribute('class', 'h')
            let day1 = new Date(document.getElementById('year').innerText, document.getElementById('month').innerText - 1).getDay();
            console.log(day1);


            localStorage.setItem("event", `<input type="text">`);
            document.getElementsByClassName("h").innerText = localStorage.getItem("event");


            if (b1 <= day1) {
                am.textContent = " ";
                b1 = b1 + 1;
                td.append(am);
                tr.append(td);
                table.append(tr);
            } else {
                if (b2 <= a) {
                    am.textContent = b2;
                    b2 = b2 + 1;
                    td.append(am);
                    tr.append(td);
                    table.append(tr);
                }
            }
        }
    }
    const d = document.getElementById("conn");
    d.innerHTML = '';
    d.append(table);
    document.body.append(d);

    return false;
}

function dec_pre_year() {

    b1 = 1;
    b2 = 1;
    let year = parseInt(document.getElementById('year').innerText);
    let count = -1;
    count = year + count;
    document.getElementById('year').innerText = count;
    document.querySelector('#next').disabled = false;

    if (count <= 2014) {
        document.querySelector('#pre').disabled = true;
    }

    let month1 = document.getElementById("month").innerText;
    let year1 = document.getElementById("year").innerText;
    console.log(month1, year1);
    let table = document.createElement("table");
    console.log(month1);
    // to get correct month we using -1
    var date1 = new Date(document.getElementById('year').innerText, document.getElementById('month').innerText - 1);
    console.log(date1);
    let a = nodays(month1, year1);
    // Add Days
    let template = `
    <div class="democlass">
    <thead>
        <td id = 'tablename'> Sun </td>
        <td id = 'tablename'> Mon </td>
        <td id = 'tablename'> Tue </td>
        <td id = 'tablename'> Wed </td>
        <td id = 'tablename'> Thu </td>
        <td id = 'tablename'> Fri </td>
        <td id = 'tablename'> Sat </td>
    </thead>
    </div>`;
    table.innerHTML = table.innerHTML + template;
   

    for (let i = 1; i <= 6; i++) {
        const tr = document.createElement("tr");
        for (let j = 1; j <= 7; j++) {
            const td = document.createElement("td");
            var am = document.createElement('h2');
            am.setAttribute('class', 'h')
            let day1 = new Date(document.getElementById('year').innerText, document.getElementById('month').innerText - 1).getDay();
            console.log(day1);



            localStorage.setItem("event", `<input type="text">`);
            document.getElementsByClassName("h").innerText = localStorage.getItem("event");


            if (b1 <= day1) {
                am.textContent = " ";
                b1 = b1 + 1;
                td.append(am);
                tr.append(td);
                table.append(tr);
            } else {
                if (b2 <= a) {
                    am.textContent = b2;
                    b2 = b2 + 1;
                    td.append(am);
                    tr.append(td);
                    table.append(tr);
                }
            }
        }
    }
    const d = document.getElementById("conn");
    d.innerHTML = '';
    d.append(table);
    document.body.append(d);
    return false;
}

function data() {

    let b1 = 1;
    let b2 = 1;

    let table = document.createElement("table");

    var date = new Date();

    let a = nodays(date.getMonth(), date.getFullYear());
    // Add Days
    let template = `
    <div class="democlass">
    <thead>
        <td id = 'tablename'> Sun </td>
        <td id = 'tablename'> Mon </td>
        <td id = 'tablename'> Tue </td>
        <td id = 'tablename'> Wed </td>
        <td id = 'tablename'> Thu </td>
        <td id = 'tablename'> Fri </td>
        <td id = 'tablename'> Sat </td>
    </thead>
    </div>`;

    table.innerHTML += template;
    

    const currentd = new Date()
    var date = currentd.getMonth();
    // console.log(date);


    for (let i = 1; i <= 6; i++) {
        const tr = document.createElement("tr");
        for (let j = 1; j <= 7; j++) {
            const td = document.createElement("td");
            var connector = document.createElement('h2');
            connector.setAttribute('class', 'h');

            

            var today = new Date();
            var date = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
            // console.log(date);
            let cDay = today.getDate();

            if (b2 === cDay) { 
                connector.style.backgroundColor = 'red';
            }

            if (b1 <= date) {
    
                connector.textContent = " ";
                b1 = b1 + 1;
                td.appendChild(connector);
                tr.appendChild(td);
                table.appendChild(tr);
                
            } else {
                if (b2 <= a) {
                    connector.textContent = b2;
                    // console.log(b2)
                    b2 = b2 + 1;
                    td.appendChild(connector);
                    tr.appendChild(td);
                    table.appendChild(tr);
                }
            }
        }
    }

    const d = document.getElementById("conn")
    
    d.appendChild(table)
    d.setAttribute("class", "event");
    document.body.appendChild(d);


}
data();
