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

    // show drop-down/side-tray menu when clicked
    let showMenu = (menu) => {
        if (menu.classList.contains(`unhidden-menu`))
            menu.classList.remove(`unhidden-menu`);
        else
            menu.classList.add(`unhidden-menu`);
    };

    // show drop-down/side-tray menu when clicked
    let showMenuElement = document.getElementById(`show-menu`);
    let menuContent = document.getElementsByTagName(`nav`)[0];

    showMenuElement.addEventListener(`click`, () => {
        showMenu(menuContent);
    });

    // show sub-menu when a menu option is clicked
    let showSubMenuElements = document.getElementsByClassName(`menu-option`);

    // go through and add an event listener to each element of the showSubMenuElements array
    for (let i = 0; i < showSubMenuElements.length; i++) {
        // using the first child since that is the "a" element
        showSubMenuElements[i].firstChild.addEventListener(`click`, () => {
            // using "children[1]" since that is the location of the "ul" element containing the sub-menu
            showMenu(showSubMenuElements[i].children[1]);
        });
    }

    // hide the sub menu after clicking elsewhere


};
