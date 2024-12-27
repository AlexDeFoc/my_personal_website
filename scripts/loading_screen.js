let loading_box_1 = document.getElementById("loading_box_1");
let loading_box_2 = document.getElementById("loading_box_2");
let loading_screen = document.getElementById("loading_screen");
let main_body = document.getElementById("main_body");

/* TESTING/CODING disabled reason */
setTimeout(() => {
    loading_box_1.style.opacity = 1;
    setTimeout(() => {
        loading_box_2.style.opacity = 1;
        setTimeout(() => {
            loading_screen.style.opacity = 0;
            // Wait for the loading screen to fade out before fading in the main body
            setTimeout(() => {
                main_body.style.opacity = 1;
            }, 500);
        }, 3000);
    }, 3000);
}, 1000);

/* TESTING/CODING enable reason
setTimeout(() => {
    loading_box_1.style.opacity = 1;
    setTimeout(() => {
        loading_box_2.style.opacity = 1;
        setTimeout(() => {
            loading_screen.style.opacity = 0;
            // Wait for the loading screen to fade out before fading in the main body
            setTimeout(() => {
                main_body.style.opacity = 1;
            }, 0);
        }, 0);
    }, 0);
}, 0);
*/
