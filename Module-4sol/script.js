(function(){
    var names = ["Yaakov","John","Jason","Jake","Charlie","Hanna","Jenny"];
    for (var i=0;i<names.length;i++){
        var firstLetter = names[i].charAt(0).toLowerCase();
        if(firstLetter === 'j'){
            byeSpeaker.speak(names[i]);

        }else{
            helloSpeaker.speak(names[i])
        }
    }
})();

/*
Solution of assignment 4:
Expected output:
Hello Yaakov
Good Bye John
Good Bye Jason
Good Bye Jake
Hello Charlie
Hello Hanna
Good Bye Jenny
*/
