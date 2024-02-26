const mongoose = require('mongoose');

// [SECTION] Schema/Blueprint
const enrollmentSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: [true, 'User ID is Required']
	},
	enrolledCourses: [
		{	
			courseId: {
				type: String,
				required: [true, 'Course ID is Required']
			}
		}
	],
	totalPrice: {
		type: Number,
		required: [true, 'totalPrice is Required']
	},
	enrolledOn: {
		type: Date,
		default: 'Enrolled'
	}
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);