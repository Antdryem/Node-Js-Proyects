const { io } = require('../server');
const { ticketControl } = require("../classes/ticket-control");

const ticket_Control = new ticketControl();

io.on('connection', (client) => {
    client.on("siguienteTicket", (data, callback) => {
        let siguiente = ticket_Control.siguiente();

        console.log("numero " + siguiente);

        callback(siguiente);

    });

    client.emit("estadoActual", {
        actual: ticket_Control.getUltimoTicket(),
        ultimos4: ticket_Control.getUltimos4()
    });

    client.on("atenderTicket", (data, callback) => {

        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: "El escritorio es necesario"
            });
        }


        let atenderTicket = ticket_Control.atenderTicket(data.escritorio);


        callback(atenderTicket);

        // actualizar/ notificar cambios en los ULTIMOS 4
        client.broadcast.emit("ultimos4", {
            ultimos4: ticket_Control.getUltimos4()
        });


    });




});