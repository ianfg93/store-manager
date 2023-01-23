const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mock = require('../../../__tests__/_dataMock');
const conection = require('../../../src/models/connection');
const productsModels = require('../../../src/models/productsModels');
const { expect } = require('chai');

describe('Model product', function () {
  describe('List all products', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Return all products', async function () {
      sinon.stub(conection, 'execute').resolves([mock.allProductsResponse])

      const result = await productsModels.listAllProducts();

      expect(result).to.be.deep.equal(mock.allProductsResponse)
    })
  })

describe('List product id', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Return all products', async function () {
      sinon.stub(conection, 'execute').resolves([[mock.allProductsResponse[3]]])

      const result = await productsModels.getByIdProducts(4);

      expect(result).to.be.deep.equal(mock.allProductsResponse[3])
    })
  })

describe('Create product', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Create new products', async function () {
      sinon.stub(conection, 'execute').resolves([{ insertId: 5 }])

      const result = await productsModels.createProducts(mock.rightProductBody);

      expect(result).to.be.deep.equal(5)
    })
  })

describe('Update product', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Update products id', async function () {
      sinon.stub(conection, 'execute').resolves([{ affectedRows: 1 }]);

      const id = 1;
      const result = await productsModels.updateProducts(id, mock.productUpdateBody.name);

      expect(result).to.be.deep.equal(1)
    })
  })

describe('Delete product', function () {
    afterEach(() => {
      sinon.restore();
    })

    it('Delet products id', async function () {
      sinon.stub(conection, 'execute').resolves([{ affectedRows: 1 }])

      const id = 1;
      const result = await productsModels.deleteProducts(id);

      expect(result).to.be.deep.true;
    })
  })
});