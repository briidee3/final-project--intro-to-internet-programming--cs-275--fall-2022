/*
 *  Bri D'Urso -- CS275: Assignment 4
 *
 *  12-7-22
 */

window.onload = () => {

    /* setting up modal functionality */
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
    modalOverlayPanel.addEventListener(`click`, (click) => {
        if (click.target !== modalOverlayPanel.children[0])
            modalOverlayPanel.id = `hidden`;
    });
    // close modal if "esc" is pressed on keyboard
    document.addEventListener(`keydown`, (key) => {
        if (key.key === `Escape`)
            modalOverlayPanel.id = `hidden`;
    });

};
