import mongoose from 'mongoose';
const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    collection: 'Job',
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.id;

        if (ret.story && Array.isArray(ret.story)) {
          ret.story.forEach((storyItem) => {
            delete storyItem.id;
          });
        }
      },
    },
    toObject: { virtuals: true },
  }
);

const JobModel = mongoose.model('Job', JobSchema);

export { JobModel };
