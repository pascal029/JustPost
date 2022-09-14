'use strict';
const { query } = require('express');
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
   const profile = JSON.parse(fs.readFileSync('./data/profile.json', 'utf-8')).map(x=>{
    return { ...x, updatedAt: new Date(), createdAt: new Date()}
   })
   return queryInterface.bulkInsert('Profiles', profile)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Profiles', null, {})
  }
};
