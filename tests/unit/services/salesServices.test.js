// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// const mock = require('../../../__tests__/_dataMock');
// const salesModels = require('../../../src/models/salesModels');
// const salesServices = require('../../../src/services/salesServices');
// const productsModels = require('../../../src/models/productsModels')
// const { expect } = require('chai');
// const { afterEach } = require('mocha');

// describe('Model product', function () {
//   describe('Create product', function () {
//     afterEach(() => {
//       sinon.restore();
//     })

//     it('Create new products', async function () {
//       sinon.stub(salesModels, 'createSales').resolves(3)

//       const result = await salesServices.createSales(mock.rightSaleBody);

//       expect(result).to.be.deep.equal(mock.saleCreateResponse)
//     })
//     it('Create new products failed', async function () {
//       sinon.stub(salesModels, 'createSales').rejects()

//       const result = await salesServices.createSales(mock.rightSaleBody);

//       expect(result).to.be.deep.equal({ type: 'NOT_FOUND', message: 'Product not found' })
//     })
//   })
//   describe('List all products', function () {
//     afterEach(() => {
//       sinon.restore();
//     })

//     it('Return all products', async function () {
//       const sales = [
//   {
//     "date": "2021-09-09T04:54:29.000Z",
//     "saleId": 1,
//     "productId": 1,
//     "quantity": 2
//   },
//   {
//     "date": "2021-09-09T04:54:54.000Z",
//     "saleId": 1,
//     "productId": 2,
//     "quantity": 2
//   }
// ]
//       sinon.stub(salesModels, 'listAllSales').resolves(sales)
      

//       const result = await salesServices.listAllSales();

//       expect(result).to.be.deep.equal(sales)
//     })
//   })
//   describe('List products id', function () {
//     afterEach(() => {
//       sinon.restore();
//     })

//     it('Return all products', async function () {
//           const sales = [
//   {
//     "date": "2021-09-09T04:54:29.000Z",
//     "productId": 1,
//     "quantity": 2
//   },
//   {
//     "date": "2021-09-09T04:54:54.000Z",
//     "productId": 2,
//     "quantity": 2
//   }
// ]
//       sinon.stub(salesModels, 'getByIdSales').resolves(sales)

//       const result = await salesServices.getByIdSales(1);

//       expect(result).to.be.deep.equal(sales)
//     })
//     it('Return all products failed', async function () {
//       sinon.stub(salesModels, 'getByIdSales').resolves([])

//       const result = await salesServices.getByIdSales(100);

//       expect(result).to.be.deep.equal({ type: 'NOT_FOUND', message: 'Sale not found' })
//     })
//   })
// });