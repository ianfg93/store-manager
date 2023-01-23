const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mock = require('../../../__tests__/_dataMock');
const salesModels = require('../../../src/models/salesModels');
const salesServices = require('../../../src/services/salesServices');
const productsModels = require('../../../src/models/productsModels')
const { expect } = require('chai');
const { afterEach } = require('mocha');

describe('Model product', function () {
  describe('List all products', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Return all products', async function () {
      const sales = [
  {
    "date": "2021-09-09T04:54:29.000Z",
    "saleId": 1,
    "productId": 1,
    "quantity": 2
  },
  {
    "date": "2021-09-09T04:54:54.000Z",
    "saleId": 1,
    "productId": 2,
    "quantity": 2
  }
]
      sinon.stub(salesModels, 'listAllProducts').resolves(sales)
      

      const result = await salesServices.listAllProducts();

      expect(result).to.be.deep.equal(sales)
    })
  })
});

describe('Model product id', function () {
  describe('List all products for id', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Return all products', async function () {
          const sales = [
  {
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
]
      sinon.stub(salesModels, 'getByIdProducts').resolves(sales)

      const result = await salesServices.getByIdProducts(1);

      expect(result).to.be.deep.equal(sales)
    })
    it('Return all products failed', async function () {
      sinon.stub(salesModels, 'getByIdProducts').resolves([])

      const result = await salesServices.getByIdProducts(100);

      expect(result).to.be.deep.equal({ type: 'NOT_FOUND', message: 'Sale not found' })
    })
  })
});

describe('Create product', function () {
  describe('List all products id', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Create new products', async function () {
      sinon.stub(salesModels, 'createProducts').resolves(3)

      const result = await salesServices.createProducts(mock.rightSaleBody);

      expect(result).to.be.deep.equal(mock.saleCreateResponse)
    })
    it('Create new products failed', async function () {
      sinon.stub(salesModels, 'createProducts').rejects()

      const result = await salesServices.createProducts(mock.rightSaleBody);

      expect(result).to.be.deep.equal({ type: 'NOT_FOUND', message: 'Product not found' })
    })
  })
});

describe('Update product', function () {
  describe('List all products for id', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Update products id', async function () {
      sinon.stub(salesModels, 'updateProducts').resolves([{ affectedRows: 1 }]);

      const id = 1;
      const result = await salesServices.updateProducts(id, mock.rightSaleBody);

      expect(result).to.be.deep.equal({ saleId: id, itemsUpdated: mock.rightSaleBody})
    })

    it('Update products id', async function () {
      sinon.stub(salesModels, 'updateProducts').resolves([{ affectedRows: 0 }]);

      const id = 100;
      const result = await salesServices.updateProducts(id, mock.nonexistentProductIdBody);

      expect(result).to.be.deep.equal({ type: 'NOT_FOUND', message: 'Product not found' })
    })
  })
});

describe('Delete product', function () {
  describe('List all products for id', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Delet products id', async function () {
      sinon.stub(salesModels, 'deleteProducts').resolves([{ affectedRows: 1 }])

      const id = 1;
      const result = await salesServices.deleteProducts(id);

      expect(result).to.be.deep.equal(id);
    })

    it('Delet products id failed', async function () {
      sinon.stub(salesModels, 'deleteProducts').resolves([{ affectedRows: 0 }])

      const id = 100;
      const result = await salesServices.deleteProducts(id);

      expect(result).to.be.deep.equal({ type: 'NOT_FOUND', message: 'Sale not found' });
    })
  })
});