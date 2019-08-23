
const user = {
    username : null,
    password : null,
    greet: function (){
        return this.username ? console.log(`Hello, I'm user ${this.username}`): console.log('Please assign a username value');        
    },
    updaterUsername: function (username) {
        this.username = username;
    },
    updatePassword: function (password) {
        this.password = password;
    },
}

user.greet();
user.updaterUsername('Gloria');
user.updatePassword('Gloria*2015');
user.greet();