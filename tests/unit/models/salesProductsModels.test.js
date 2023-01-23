const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mock = require('../../../__tests__/_dataMock');
const conection = require('../../../src/models/connection');
const salesProductsModel = require('../../../src/models/salesProductModels');
const { expect } = require('chai');

describe('Create product', function () {
  describe('List all products id', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Create new products', async function () {
      sinon.stub(conection, 'execute').resolves([{ insertId: 5 }])

      const result = await salesProductsModel.createSales(mock.rightProductBody);

      expect(result).to.be.deep.equal(5)
    })
  })
});

