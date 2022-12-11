/*
 *  Bri D'Urso -- CS275: Assignment 4
 *
 *  12-11-22
 */

window.onload = () => {

    /* setting up modal functionality */
    let showModalElement = document.getElementById(`show-modal`);
    let modalOverlayPanel = document.getElementsByClassName(`modal-overlay-panel`)[0];

    // show the modal in the viewport
    let showModal = () => {
        modalOverlayPanel.classList.remove(`hidden`);
    };

    // listen for "click" on "show-modal" element
    showModalElement.addEventListener(`click`, () => {
        showModal();
    });

    // close modal if "modal-overlay-panel" is clicked
    modalOverlayPanel.addEventListener(`click`, (click) => {
        if (click.target !== modalOverlayPanel.children[0])
            modalOverlayPanel.classList.add(`hidden`);
    });
    // close modal if "esc" is pressed on keyboard
    document.addEventListener(`keydown`, (key) => {
        if (key.key === `Escape`)
            modalOverlayPanel.classList.add(`hidden`);
    });


    /* setting up drop-down/side-tray menu functionality */
    let showMenuElement = document.getElementById(`show-menu`);
    let menuContent = document.getElementById(`menu-content`);


    // show drop-down/side-tray menu when clicked
    showMenuElement.addEventListener(`click`, () => {
        showMenu();
    });

    // show drop-down/side-tray menu when clicked
    let showMenu = () => {
        if (menuContent.classList.contains(`hidden`))
            menuContent.classList.remove(`hidden`);
        else
            menuContent.classList.add(`hidden`);
    };

};
