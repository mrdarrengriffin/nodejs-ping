const exec = require('child_process').exec;

module.exports.ping = function(ip){
    return new Promise((resolve, reject) => {
        exec("ping -c 1 " + ip + " -w 1", (res) => {
            if (res == null) {
                resolve({ host: ip, result: true })
            } else {
                reject({ host: ip, result: false })
            }
        })
    });
}