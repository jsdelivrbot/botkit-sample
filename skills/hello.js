  /*

  This module handles the hello message.

  */

  module.exports = function(controller) {

    controller.hears(['^hello$'], 'direct_message,direct_mention', function(bot, message) {
          // bot.reply(message, "Hi there, how are you feeling today?");
          bot.startConversation(message, function(err, convo) {
            convo.addQuestion('Hi friend! How are you feeling today?',function(response,convo) {

              convo.say('You said: ' + response.text);
              convo.next();

            },{},'default');
          });
    });

  };
