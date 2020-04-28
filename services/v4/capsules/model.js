
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const idPlugin = require('mongoose-id');

const capsuleSchema = new mongoose.Schema({
  serial: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['unknown', 'active', 'retired', 'destroyed'],
    required: true,
  },
  dragon: mongoose.ObjectId,
  reuse_count: {
    type: Number,
    default: 0,
  },
  water_landings: {
    type: Number,
    default: 0,
  },
  land_landings: {
    type: Number,
    default: 0,
  },
  last_update: {
    type: String,
    default: null,
  },
  launches: [{
    type: mongoose.ObjectId,
    ref: 'Launch',
  }],
});

capsuleSchema.plugin(mongoosePaginate);
capsuleSchema.plugin(idPlugin);

const Capsule = mongoose.model('Capsule', capsuleSchema);

module.exports = Capsule;
