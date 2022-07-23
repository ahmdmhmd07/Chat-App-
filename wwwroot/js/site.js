var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
connection.start();


connection.on("ReciveMessage", function (fromUser, message) {
    var msg = fromUser + ":" + message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);
});

$("#btnSend").on("click", function () {
    var fromUser = $("#txtUser").val();
    var message = $("#txtMessage").val();
    connection.invoke("SendMessage", fromUser, message);
});