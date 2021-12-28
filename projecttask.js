const mongoose=require('mongoose')
const   EmployeeSchema=new mongoose.Schema({

    tmember:{

        type:String

    },

    module:{
        type:String

        },

    task:{
        type:String

        }

})
const Employee= mongoose.model("Employee",EmployeeSchema)
module.exports=Employee