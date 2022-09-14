'use strict';
const fs = require('fs');

module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const post = JSON.parse(fs.readFileSync('./data/post.json', 'utf-8')).map(x=>{
      return { ...x, updatedAt: new Date(), createdAt: new Date()}
     })
     return queryInterface.bulkInsert('Posts', post)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Posts', null, {})
  }
};
