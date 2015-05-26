$(function() {
     var WS = window['MozWebSocket'] ? MozWebSocket : WebSocket;
     var sysSocket = new WS("@routes.Application.pingWs().webSocketURL(request, true)");
     
     var sysEvent = function (event) {
          $("sysMsg").html("Wait for it... " + event.data);
     }
     
     sysSocket.onMessage = sysEvent;
})