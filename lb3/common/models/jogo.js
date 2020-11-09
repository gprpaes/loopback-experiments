'use strict';

module.exports = function(Jogo) {

    Jogo.poze = function(){
        //TODO Add random poze rant videos
        console.log('poze')
        return {video: "https://twitter.com/i/status/1325588054111899648"}
    }

    Jogo.remoteMethod(
        'poze', {
          http: {
            path: '/poze',
            verb: 'get'
          },
          returns: {
            arg: 'poze',
            type: 'string'
          }
        }
      );
    
};

