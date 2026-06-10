console.log("Hamburger icon cargado correctamente");

(function () {
    const Main_OBJ = {
        init: function () {
            this.eventHandlers();
        },

        eventHandlers: function () {

            document.querySelector(".hamburger-icon").addEventListener("click", function () {
                document.querySelector(".menu_derecha").classList.toggle("menu_derecha_open");
            });
        }
    }
    Main_OBJ.init();
})()