const accountId = 144553
let accountEmail = "abhishek@gmail.com"
var accountPassword = "123456789"
accountCity = "Bengaluru"

let accountState

// accountId = 7

console.log(accountId)

/*
Prefer not to use var keyword,
Beacause of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountCity, accountPassword, accountState])