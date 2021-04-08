const { Schema, model } = require('mongoose');

//Create User collection
const UserSchema = new Schema({
    username:{
        type: String,
        required: [true,'Username is mandatory'],
        unique:true,
        trim: true
    },
    email:{
        type: String,
        required: [true,'email is mandatory'],
        unique:true,
        match:[/.+@.+\..+/]
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
        }
    ],
    friends:[
        {
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    ]
},
{
    toJSON: {
      virtuals: true
    },
    id: false
  }  
);

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;