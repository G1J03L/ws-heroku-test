$(function() {
     var WS = window['MozWebSocket'] ? MozWebSocket : WebSocket;
     var sysSocket = new WS("@routes.Application.sysWs().webSocketURL(request, true)");
     var incr = 0; 
    
     var sysEvent = function (event) {
          $("#sysMsg").html("Wait for it... " + event.data + "\t" + incr++);
     }
     
     sysSocket.onmessage = sysEvent;
})