var socket = io();


socket.on("estadoActual", function(data) {
    actualizarHTML(data.ultimos4);
});

socket.on("ultimos4", function(data) {
    console.log(data);


    actualizarHTML(data.ultimos4);
    var audio = new Audio("audio/new-ticket.mp3");
    audio.play();
});


function actualizarHTML(ultimos4) {

    $.each(ultimos4, function(index, data) {
        $("#lblEscritorio" + (index + 1)).text("Escritorio " + data.escritorio);
        $("#lblTicket" + (index + 1)).text("Ticket " + data.numero);
    });
}