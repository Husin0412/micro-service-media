'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('media', [
      {
        id: 1,
        image: "images/1614661794637.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 19,
        image: "images/1614755620599.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 25,
        image: "images/1615261895218.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 26,
        image: "images/1615261985240.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 27,
        image: "images/1615454767628.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 35,
        image: "images/1615611221235.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 36,
        image: "images/1615613112112.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 37,
        image: "images/1615613288044.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 38,
        image: "images/1615613512660.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 39,
        image: "images/1615614534562.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 41,
        image: "images/1615884920114.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 43,
        image: "images/1615885262511.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 44,
        image: "images/1615885262767.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 45,
        image: "images/1615885263021.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 46,
        image: "images/1615885263312.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 47,
        image: "images/1615885263572.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 48,
        image: "images/1615885263827.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 49,
        image: "images/1615885367610.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 50,
        image: "images/1615885367886.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 51,
        image: "images/1615885368153.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 52,
        image: "images/1615885368418.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 53,
        image: "images/1615885368645.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 54,
        image: "images/1616653091234.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 55,
        image: "images/1616653242437.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 56,
        image: "images/1616653242725.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 57,
        image: "images/1616653242979.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 58,
        image: "images/1616653243262.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 59,
        image: "images/1616653243526.png",
        created_at: new Date(),
        updated_at: new Date
      },
      {
        id: 60,
        image: "images/1616653243798.jpg",
        created_at: new Date(),
        updated_at: new Date
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('media', null, {});
  }
};
