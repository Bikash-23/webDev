const accountID  = 1434
let accountEmail = "bikash12gmail.com"
var accountPassword = "1234"//we should not use var it's too old to use
accountCity = "Kolkata" ;
let accountState;
//accountID = 12  //Not allowed
try {
    console.log(accountID);
} catch (error) {
    console.log("Not Possible!");
}
accountEmail = "biksh23geogle.com"
accountPassword = "bikash123"
accountCity = "bengaluru"
console.log([accountEmail,accountPassword,accountCity]);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
