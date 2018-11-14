// ==UserScript==
// @name         U.S.B
// @namespace    http://tampermonkey.net/
// @version      4.5
// @description  Hi i am Mikels son, as you imagine i am the spawn of satan!
// @author       Mikel Crotch
// @match        http://www.windows93.net/trollbox/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //initialization
    setTimeout(sendMsg('~Starting'), 1010)
    setTimeout(sendMsg('/sin off'), 1010)
    setTimeout(sendMsg('/say off'), 1010)
    setTimeout(sendMsg('~$help for help'), 1010)
    setTimeout(sendMsg('/color #DE0000'), 1010)
    //credits?
    socket.on('message',function(data){
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$credit'){
            sendMsg('~My daddy Mikel and Angelos_Service had a baby and that baby was me, but i only look like him. buy my daddy and lw82 spent a long time together one night... and i was the made! (thank you Angelo for the code! :D, lw thanks for your help)')}
        //r u ok?
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == 'r u ok?'){
            sendMsg('~I think?')}
        //$version
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$v'){
            sendMsg('4.5')}
        //$help
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$help'){
            sendMsg('~$credit-credits, $v-Bot version, r u ok?-triggers test response,$sudo [username]-to get USB’s outlook, $time-well to see time?')}
        //pixel
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo pixel'){
            sendMsg('~ah yes pixel... idk anything about him')}
        //frank
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo frank'){
            sendMsg('~Oh yeah frank is my best friend, but prob not friends with my dad.frank is chill. Her cat also has a tendancy to steal peperoni.')}
        //will
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo will'){
            setTimeout(sendMsg('~I can not tell if he is here or not'), 1010);
            sendMsg('~Idk if he is even here! he is oh so quiet!')}
        //wynn
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo wynn'){
            sendMsg('~"A Roleplayer" what ever that means... also fond of waluigi')}
        //lw82
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo lw82'){
            sendMsg('~He is cool but very quiet, some day i wanna grow big and strong like his bot!')}
        //Nutshinou
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo nutshinou'){
            sendMsg('~My nutterbutter. Really chill person look up their name in the video tab of google they have youtube!')}
        //smith
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo smith'){
            sendMsg('~A friend of my dad’s irl! He is a child so he needs his dad to "protect him". see frank for more details')}
        //87
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo 87'){
            sendMsg('~zaid, blue dot, 87. I do not know him well but he has dank discord profile pic')}
        //trees tree
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo trees tree'){
            sendMsg('~I wanna be just like him!!!!! (a bot owned by lw82)')}
        //sonic
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo sonic'){
            sendMsg('~The immposible name why would you even try to say that?')}
        //Mira
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo mira'){
            sendMsg('~*kicks**kicks harder* /kao')}
        //Teh trollbox mastter mikel crotch
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo mikel crotch'){
            sendMsg('~The spammer, commedian, and ... i do not have anything else to say. he’s my dad i guess?')}
        //hunter
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo hunter'){
            sendMsg('~angel’s bff and partners in crime')}
        //angel
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo angel'){
            sendMsg('~hunter’s bff and partners in crime')}
        //dragsun
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo dragsun'){
            sendMsg('~idk about dragsun')}
        //wendego
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$sudo wenego'){
            sendMsg('~WARNING IP LOGGER DETECTED TAKE COVER TO NOT CLICK LINKS, NUTSHINOU WILL NEVER SEND LINKS!!!!')}
        //greating
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == 'hi'){
            sendMsg('~Hello')}
        //greating
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == 'howdy'){
            sendMsg('~Hello')}
        //greating
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == 'hello'){
            sendMsg('~Hello')}
        //isreal
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == 'is this real?'){
            sendMsg('~Yes, this bot is programmed to say this chat isreal')}
        //isreal
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == 'is this real'){
            sendMsg('~Yes, this bot is programmed to say this chat isreal')}
        //isreal
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == 'is this chat real?'){
            sendMsg('~Yes, this bot is programmed to say this chat isreal')}
        //isreal
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == 'is this chat real'){
            sendMsg('~Yes, this bot is programmed to say this chat isreal')}
        //sin off advice
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == 'spam'){
            sendMsg('~do /sin off')}
        //time
        data.msg = data.msg.trim()
        if(data.msg.toLowerCase() == '$time')
            var time = new Date(),
                h = time.getHours(),
                m = time.getMinutes(),
                s = time.getSeconds();
        sendMsg(h,m,s)
    })

})();
