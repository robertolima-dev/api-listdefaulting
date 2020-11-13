const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/mazzatech'
mongoose.set('useUnifiedTopology', true) 
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;