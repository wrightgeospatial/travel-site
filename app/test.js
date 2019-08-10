var fs = require('fs');
fs.writeFile(__dirname + '/main.html', "<h1>HTML DOC</h1>", function(error){
    if (error){
        return console.log(error)
    }else{
        return console.log("Success")
    }
})
