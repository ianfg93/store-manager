const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mock = require('../../../__tests__/_dataMock');
const productsModels = require('../../../src/models/productsModels');
const productsServices = require('../../../src/services/productsServices');
const { expect } = require('chai');
const { afterEach } = require('mocha');

describe('Model product', function () {
  describe('List all products', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Return all products', async function () {
      sinon.stub(productsModels, 'listAllProducts').resolves([mock.allProductsResponse])

      const result = await productsServices.listAllProducts();

      expect(result).to.be.deep.equal(mock.allProductsResponse)
    })
  })
});

describe('Model product id', function () {
  describe('List all products for id', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Return all products', async function () {
      sinon.stub(productsModels, 'getByIdProducts').resolves(mock.allProductsResponse[3])

      const result = await productsServices.getByIdProducts(4);

      expect(result).to.be.deep.equal(mock.allProductsResponse[3])
    })
  })
});

describe('Create product', function () {
  describe('List all products id', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Create new products', async function () {
      sinon.stub(productsModels, 'createProducts').resolves(mock.productCreateResponse.id)

      const result = await productsServices.createProducts({ name: 'Produto1'});

      expect(result).to.be.deep.equal(mock.saleCreateResponse)
    })
  })
});

describe('Update product', function () {
  describe('List all products for id', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Update products id', async function () {
      sinon.stub(productsModels, 'updateProducts').resolves([{ affectedRows: 1 }]);

      const id = 1;
      const result = await productsServices.updateProducts(id, mock.productUpdateBody.name);

      expect(result).to.be.deep.equal(id, mock.productUpdateBody.name)
    })

    it('Update products id', async function () {
      sinon.stub(productsModels, 'updateProducts').resolves([{ affectedRows: 0 }]);

      const id = 100;
      const result = await productsServices.updateProducts(id, mock.productUpdateBody.name);

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
      sinon.stub(productsModels, 'deleteProducts').resolves([{ affectedRows: 1 }])

      const id = 1;
      const result = await productsServices.deleteProducts(id);

      expect(result).to.be.deep.equal(id);
    })

    it('Delet products id failed', async function () {
      sinon.stub(productsModels, 'deleteProducts').resolves([{ affectedRows: 0 }])

      const id = 100;
      const result = await productsServices.deleteProducts(id);

      expect(result).to.be.deep.equal({ type: 'NOT_FOUND', message: 'Product not found' });
    })
  })
});