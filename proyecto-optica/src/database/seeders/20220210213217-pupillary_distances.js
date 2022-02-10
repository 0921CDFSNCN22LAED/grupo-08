'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Pupillary_distances', [{
             pupillary: 46}, 
             {pupillary: 47},
             {pupillary: 48},
             {pupillary: 49},
             {pupillary: 50},
             {pupillary: 51},
             {pupillary: 52},
             {pupillary: 53},
             {pupillary: 54},
             {pupillary: 55},
             {pupillary: 56},
             {pupillary: 57},
             {pupillary: 58},
             {pupillary: 59},
             {pupillary: 60},
             {pupillary: 61},
             {pupillary: 62},
             {pupillary: 63},
             {pupillary: 64},
             {pupillary: 65},
             {pupillary: 66},
             {pupillary: 67},
             {pupillary: 68},
             {pupillary: 69},
             {pupillary: 70},
             {pupillary: 71},
             {pupillary: 72},
             {pupillary: 73},
             {pupillary: 74},
             {pupillary: 75},
             {pupillary: 76},
             {pupillary: 77},
             {pupillary: 78},
             {pupillary: 79},
             {pupillary: 80},
             
            ], );
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Pupillary_distances', null, {});
     
  }
};
