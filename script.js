

//connection  DATABASE
const mongooose=require('mongoose');
mongooose.connect('mongodb://localhost:27017/PersonsDB',{ useNewUrlParser: true,useUnifiedTopology:true },(err)=>{
if(!err) console.log('db connected');
else console.log('db error')})
// create schema
const NewSchema= new mongooose.Schema(
  {
    name:String,
    age:Number,
    favoriteFoods:Array
  });

// Create a person with this prototype:


const NewModel = new mongooose.model("collection",NewSchema)
const data= new NewModel ({name:"med",age:26,favoriteFoods:["foot","watching-movies"]})
// Create and Save a Record of a Model:
data.save()*/

//Create Many Records with model.create()
const data=async()=>{
  const result=await NewModel.insertMany([{name:"mariem",age:18,favoriteFoods:["spaghetti","pizza"]},
  {name:"maram",age:21,favoriteFoods:["omlette","eggs"]}]);
  console.log(result) 
}
data();

//Use model.find() to Search Your Database

const data=async()=>{
  const result=await NewModel.find();
  console.log(result);
}
data();

//Use model.findById() to Search Your Database By _id
NewModel.findById('61a34bdfb97e49991d056ed3',(error,data)=>
{
  if(error){console.log(error)}
  else {console.log(data)}
});
  
//Perform New Updates on a Document Using model.findOneAndUpdate()

NewModel.findOneAndUpdate({name:'maram'},{age:20},(error,data)=>
{
  if(error){console.log(error)}
  else {console.log(data)}

});
//Delete One Document Using model.findByIdAndRemove
NewModel.findOneAndRemove({name:"med"},(error,deleteRecord)=>
{
  if(!error){console.log(deleteRecord)}
})

//MongoDB and Mongoose - Delete Many Documents with model.remove()
NewModel.remove({name:"mariem"},(error,data)=>
{
  if(!error)
  {console.log(data)}
})

