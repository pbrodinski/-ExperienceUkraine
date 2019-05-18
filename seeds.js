var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data =[
    {
     name:"Cloud's Rest",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPh02i9K8t0AEK6t6P0kNvp3cVUttH8wHOAUa5-xjzIS_xWKQDsw",
     description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
    {
     name:"Austin,TX",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsy9uIZ-ursa6olz6izkWaKxsBaR1vJJxWgWWyCJNezHm2LP3gQ",
     description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
     name:"best in the Town",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkz_aYHye_zzTBoj-YqCGwdZFEIw-LoDaW2QBWWt8-XChJLA2t",
     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];


function seedDB(){
Campground.remove({}, function(err){
        if (err){
           console.log(err);
       } 
            console.log("Remove campgrounds");
            data.forEach(function(seed){
 Campground.create(seed, function(err, campground){
if(err){
     console.log(err);
     }else {
         console.log("Just added campground");
         
         Comment.create(
             {
                 text:"It is greate but i wish it would be a internet ",
                 author:"Thon Maker"
             }, function(err, comment){
                 if (err){
                     console.log(err);
                 } else {
                     campground.comments.push(comment);
                     campground.save();
                     console.log("Created new comment");
                 }
             }
             );
         }
       }) ;   
     });
   });
}


module.exports = seedDB;