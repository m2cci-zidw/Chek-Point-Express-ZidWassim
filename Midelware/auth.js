var now = new Date();
var heure= now.getHours()

const auth=(req,res,next)=>{
    if(heure<22 && heure>=8){
        console.log("auth")
        next()
    } else{
        res.send("you can't access to this website now , please try between 8 and 18 ")
    }  
}
module.exports=auth




// const auth=(req,res,next)=>{
//     if (true){
//         console.log("auth")
//         next()
//     } else {
//         res.send("not authentificated")

//     }
// }
// module.exports=auth