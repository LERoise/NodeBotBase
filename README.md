# NodeBotBase

Hello world bot written in Javascript using Microsoft bot framework

## Installation

Install [Node.Js](https://nodejs.org/en/)

Install [BotFramework-Emulator]()

## Usage

`npm install`

`npm start`

Start the emulator and enter `http://localhost:3978/api/messages` in the "Enter your endpoint URL" input field

You can now speak with the bot, try saying Hello!
## Resources

#### BotFramework
[Documentation](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-overview)

[Emulator](https://github.com/Microsoft/BotFramework-Emulator)

[WebChat](https://github.com/Microsoft/BotFramework-WebChat)

#### Natural Language Processing

[LUIS](https://www.luis.ai/) (Microsoft)

[Wit.ai](https://wit.ai) (Facebook)

[Api.ai](https://api.ai) (Google)

#### Other cognetive services

[Microsoft](https://azure.microsoft.com/en-us/services/cognitive-services/)

[Google](https://cloud.google.com/products/machine-learning/)


##### Alternative to Microsoft bot framework

[BotMasterAi](http://botmasterai.com)

## CodeSnippets

##### Promting user for input:

```
bot.dialog('greetings', [

    function (session) {
        botbuilder.Prompts.text(session, 'Hi! What is your name?');
    },

    function (session, results) {
        session.endDialog(`Hello ${results.response}!`);
    }
]);
```

##### Adding Buttons:
```
var msg = new botbuilder.Message(session)
   	.text("What's your favorit color ?")
   	.suggestedActions(
   		botbuilder.SuggestedActions.create(
   				session, [
   					botbuilder.CardAction.imBack(session, "color=green", "Green"),
   					botbuilder.CardAction.imBack(session, "color=blue", "Blue"),
   					botbuilder.CardAction.imBack(session, "color=red", "Red")
   				]
   			));
   session.send(msg);
```

