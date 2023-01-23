const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mock = require('../../../__tests__/_dataMock');
const conection = require('../../../src/models/connection');
const salesModels = require('../../../src/models/salesModels');
const { expect } = require('chai');

describe('Model product', function () {
  describe('List all products', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Return all products', async function () {
      const sales = [
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
]
      sinon.stub(conection, 'execute').resolves([sales])

      const result = await salesModels.listAllSales();

      expect(result).to.be.deep.equal(sales)
    })
  })

describe('List product id', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Return all products', async function () {
      sinon.stub(conection, 'execute').resolves([[mock.rightSaleBody[3]]])

      const result = await salesModels.getByIdSales(4);

      expect(result).to.be.deep.equal(mock.rightSaleBody[3])
    })
  })
});
