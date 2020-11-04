let  the collection name " mycol1"


//  to update 
db.mycol1.update({name:"mostafa22"},{$set:{age:43,email:"mosta32@koo.com"}})

// to update multi 

db.mycol1.update({name:"mostafa22"},{$set:{age:43,email:"mosta32@koo.com"}},{"multi":true}) 

// to create new filed 
db.mycol1.update({name:"mostafa22"},{$set:{age:43,email:"mosta32@koo.com"}},{"upsert":true}) 

// to  remove field   use unset 
db.mycol1.update({name:"mostafa22"},{$unset:{age:"",email:"mosta32@koo.com"}})


