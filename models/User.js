let mongoose = require('mongoose');
let schema = mongoose.Schema;
let bcrypt = require('bcrypt-nodejs');

let userSchema = new schema(
    {
        name: {
            type: String,
            required: true, 
        },
        username: {
            type: String,
            required: true, 
            unique: true
        },
		// email: { 
        //     type: String, 
        //     required: true, 
        //     unique: true 
        // },
		password: { 
            type: String, 
            required: true 
        }
    }
)

// crear password hashed
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// chequear password
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

userSchema.pre('save', function(next) {
	if(this.isModified('password')) {
		this.password = this.generateHash(this.password)
	}
	next()
})

module.exports = mongoose.model('User', userSchema);