
const friends = require("../models/mydb");
const db = require("../models/db_connections.js");
////Function getting all friends
const getFriends = (request) => {
    console.log("Getting here", mydb)
    return mydB;
};



////////This function is getting student by ID
const getFriendssByID = (request) => {
    
    for(i = 0; i < 5; i++){
        if(request.params.id == mydB.friends[i].id){

            return mydb[i];

        }
        console.log(mydb[i]);
    }
    return "FOUND NOTHING"

};

const getALLStudents = () => {
    db.
    query('SELECT * FROM STUDENTS', 
        (err, results) => {
            if (err){

                return "FOUND NOTHING";
            }else{
                console.log("Results from db", results);
                return results;
            }
            
        });
}

module.exports = {getFriends, getFriendssByID}; 


























