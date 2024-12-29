function SetUsername(username){
    //complex DB calls
    this.username = username 
}

function createUser(username, email, password){
    SetUsername(username)

    this.email = email
    this.password = password
}


