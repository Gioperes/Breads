// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://api.time.com/wp-content/uploads/2015/07/bread.jpeg' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})


// helper methods 
breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker}`
  }
  

// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
