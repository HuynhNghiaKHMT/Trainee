const dialog = document.getElementById('dialog');
const wrapper = document.querySelector('.wrapper');

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
const DivContainer = document.getElementById('container_list')

function InfoDialog() {
    let name = document.getElementById('name_dialog').innerHTML.toString();
    let time = document.getElementById('duration_dialog').innerHTML.toString();
    let note = document.getElementById('note_dialog').innerHTML.toString();

    const DivStation = document.createElement("div");
    DivStation.classList.add("add-station");
    DivStation.innerHTML = '<div class="add_planeStation"><div class="air_plane"><img class="img_plane"src="/asses/favicon/airplane.svg"/></div><div class="station_info"><div class="name_station"> Station </div><div class="time_station">Stop time:  </div><div class="note_station">Note: </div></div></div><div class="btn_sign"><button onclick="DeleteStation()"  class="btn_substract_sign"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button></div>'

    DivContainer.appendChild(DivStation);
    dialog.close();
}




function DeleteStation() {

}