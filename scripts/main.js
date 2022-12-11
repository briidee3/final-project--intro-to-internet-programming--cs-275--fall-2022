/*
 *  Bri D'Urso -- CS275: Assignment 4
 *
 *  12-7-22
 */

window.onload = () => {

    // gather "show-modal" and "modal-overlay-panel" elements from DOM tree
    let showModalElement = document.getElementById(`show-modal`);
    let modalOverlayPanel = document.getElementsByClassName(`modal-overlay-panel`)[0];

    // show the modal in the viewport
    let showModal = () => {
        modalOverlayPanel.id = ``;
    };

    // listen for "click" on "show-modal" element
    showModalElement.addEventListener(`click`, () => {
        showModal();
    });

    // close modal if "modal-overlay-panel" is clicked
    modalOverlayPanel.addEventListener(`click`, () => {
        modalOverlayPanel.id = `hidden`;
    });

};
