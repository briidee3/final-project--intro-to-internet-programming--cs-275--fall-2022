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
    let showMenuElement = document.getElementById(`show-menu`);
    let menuContent = document.getElementsByTagName(`nav`)[0];

    // show menu
    showMenuElement.addEventListener(`click`, () => {
        // close all other menus when this menu is closed (otherwise just opens it)
        if (showMenu(menuContent)) {
            // get a list of all open menus
            let openMenus = document.getElementsByClassName(`unhidden-menu`);
            // while the list is not empty, close the first menu in the list
            while (openMenus.length)
                openMenus[0].classList.remove(`unhidden-menu`);
        }
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
};

// show drop-down/side-tray menu when clicked
let showMenu = (menu) => {
    // if menu is open, close it
    if (menu.classList.contains(`unhidden-menu`)) {
        menu.classList.remove(`unhidden-menu`);
        return true;
    }
    // otherwise, open it
    else {
        menu.classList.add(`unhidden-menu`);
        return false;
    }
};

// implement width breakpoint for drop-down/side-tray menu when window is resized
window.onresize = () => {
    let navMenu = document.getElementsByTagName(`nav`)[0];

    if (window.outerWidth < 736)
        navMenu.classList.add(`mobile`);
    else
        navMenu.classList.remove(`mobile`);

    if (navMenu.classList.contains(`unhidden-menu`))
        showMenu(navMenu);

};
