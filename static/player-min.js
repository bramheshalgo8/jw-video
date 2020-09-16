var SESSION_STATUS = Flashphoner.constants.SESSION_STATUS;
var STREAM_STATUS = Flashphoner.constants.STREAM_STATUS;

var session;

function init_api(){
    console.log("init api");
    Flashphoner.init({
    });
    session = Flashphoner.createSession({urlServer: "wss://demo.flashphoner.com"}).on(SESSION_STATUS.ESTABLISHED, function(session){
        console.log("connection established");
        playStream(session);
    })
}

function connect(){
    session = Flashphoner.createSession({urlServer: "wss://demo.flashphoner.com"}).on(SESSION_STATUS.ESTABLISHED, function(session){
        console.log("connection established");
        playStream(session);
    })
}

function playStream(){
    var options = {name:"rtsp://admin:works1234@184.149.9.109:554/Streaming/channels/201",display:document.getElementById("myVideo")};
    var options2 = {name:"rtsp://admin:works1234@184.149.9.109:554/Streaming/channels/101",display:document.getElementById("myVideo2")};
    var stream = session.createStream(options).on(STREAM_STATUS.PLAYING, function(stream){
        console.log("playing");
    });
    var stream2 = session.createStream(options2).on(STREAM_STATUS.PLAYING, function(stream){
        console.log("playing");
    });
    stream.play();
    stream2.play();
    document.getElementById("b1").style.display="inline";
    document.getElementById("b2").style.display="inline";
}