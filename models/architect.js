var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteWorkSchema = new Schema({
  name: String,
  image: String
});

var ArchitectSchema = new Schema ({
  name: String,
  year_born: Number,
  nationality: String,
  deceased: Boolean,
  image: String,
  notable_works: [NoteWorkSchema]
});

var Architect = mongoose.model('Architect', ArchitectSchema);
module.exports = Architect;
