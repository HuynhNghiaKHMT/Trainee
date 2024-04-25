const dialog = document.getElementById('dialog');
const wrapper = document.querySelector('.wrapper');
var i = 0; // dem so san bay trung gian

function ShowDialog() {
    dialog.showModal();
}

function CloseDialog() {
    dialog.close();
}
dialog.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
        dialog.close();
    }
});

function InfoDialog() {

    dialog.close();
}


const btnAdd = document.getElementById('confirmAdd');
btnAdd.addEventListener("click", addStation);

const DivContainer = document.getElementById('container_list')


function addStation() {
    if (i > 4) {
        alert("There are more than the number of stations required")
        dialog.close();
        return 0;
    }
    i = i + 1;

    const DivStation = document.createElement("div");
    DivStation.classList.add("add_station")

    let name = document.getElementById('name_dialog').value;
    let time = document.getElementById('duration_dialog').value;

    // Khong duoc nhap lon honn 20 p
    let note = document.getElementById('note_dialog').value;

    const DivPlan = document.createElement('div');
    DivPlan.classList.add('add_planeStation');

    const DivAir = document.createElement('div');
    //hinh anh may bay
    DivAir.classList.add('air_plane');
    DivAir.innerHTML = '<img class="img_plane" src="/asses/favicon/airplane.svg"/>'
        // Dong thong tin
    const DivStaIn = document.createElement('div');
    DivStaIn.classList.add('station_info')

    //Gan Ten
    const DivName = document.createElement('div');
    DivName.classList.add('name_station')
    DivName.innerHTML = name;
    // thoi gian
    const DivTime = document.createElement('div');
    DivTime.classList.add('time_station');
    DivTime.innerHTML = "Duration: " + time;
    // note
    const DivNote = document.createElement('div');
    DivNote.classList.add('note_station')
    DivNote.innerHTML = "Note: " + note;
    // dau tru
    DivStaIn.appendChild(DivName);
    DivStaIn.appendChild(DivTime);
    DivStaIn.appendChild(DivNote);
    // Gop hinh anh va thong tin vao 
    DivPlan.appendChild(DivAir);
    DivPlan.appendChild(DivStaIn);
    // 


    const DivSign = document.createElement('div');
    DivSign.classList.add('btn_sign')
    DivSign.innerHTML = '<button id="remove-' + i + '" class="btn_substract_sign" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>'
    DivStation.appendChild(DivPlan);
    DivStation.appendChild(DivSign);

    DivContainer.appendChild(DivStation);

    document.querySelector('#remove-' + i)
        .addEventListener('click', function(event) {
            event.preventDefault();
            console.log(this);
            let removeE1 = this.parentNode;
            let removeE0 = removeE1.parentNode;
            console.log(removeE0)
            DivContainer.removeChild(removeE1);
        });


}

document.getElementById('add_station').addEventListener('click',
    function(event) {

        // Handle the form data
        event.preventDefault();
    });
document.getElementById('confirmAdd').addEventListener('click',
    function(event) {

        // Handle the form data
        event.preventDefault();
    });