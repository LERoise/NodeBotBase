var restify = require('restify');
var botbuilder = require('botbuilder');


//Setup
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
    console.log('%s listening to %s', server.name, server.url);
});

var connector = new botbuilder.ChatConnector({
    appId: process.MICROSOF_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = new botbuilder.UniversalBot(connector);
server.post('/api/messages', connector.listen());


//Dialog
bot.dialog('/', function(session){
    if(session.message.text.includes('Hello')){
        session.send("Hello World");
    }
    else
    {
        session.send('...');
    }
});