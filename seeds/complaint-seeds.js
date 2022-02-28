const { Complaint } = require('../models');

const complaintData = [
  {
    complaint_id: 1,
    complaint_title:
      'Sign said do not drink sprinkler water, so I made sun tea with it and now I have an infection.',
  },
  {
    complaint_id: 2,
    complaint_title:
      'I found a sandwich in one of your parks and I want to know why it didnt have mayonnaise.',
  },
  {
    complaint_id: 3,
    complaint_title:
      'My dog went to one of your parks and ate another dogs feces and Im going to sue you for that.',
  },
];

const seedComplaints = () => Complaint.bulkCreate(complaintData);

module.exports = seedComplaints;
