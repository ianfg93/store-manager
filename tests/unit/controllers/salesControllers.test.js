// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// const mock = require('../../../__tests__/_dataMock');
// const salesControllers = require('../../../src/controllers/salesControllers');
// const salesServices = require('../../../src/services/salesServices');
// const { expect } = require('chai');

// chai.use(sinonChai);

// describe('Sales product', function () {
//   describe('Create sales', function () {
//      const req = {};
//     const res = {};

//     beforeEach(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//     })

//     afterEach(() => {
//       sinon.restore();
//     })

//     it('Return all products id', async function () {
//       req.body = mock.rightSaleBody;
//       sinon.stub(salesServices, 'createSales').resolves(mock.saleCreateResponse)

//       await salesControllers.createSales(req, res);

//       expect(res.status).to.have.been.calledWith(201)
//       expect(res.json).to.have.been.calledWithExactly(mock.saleCreateResponse);
//     })
//   })

//   describe('List all sales', function () {
//     const req = {};
//     const res = {};

//     beforeEach(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//     })

//     afterEach(() => {
//       sinon.restore();
//     });

//     it('Return all sales', async () => {
//    const sales = [
//   {
//     "saleId": 1,
//     "date": "2021-09-09T04:54:29.000Z",
//     "productId": 1,
//     "quantity": 2
//   },
//   {
//     "saleId": 1,
//     "date": "2021-09-09T04:54:54.000Z",
//     "productId": 2,
//     "quantity": 2
//   }
// ]
//       sinon.stub(salesServices, 'listAllSales').resolves(sales)

//      await salesControllers.listAllSales(req, res);

//       expect(res.status).to.have.been.calledWith(200)
//       expect(res.json).to.have.been.calledWithExactly(sales);
//     })
//   })

// describe('List product id', function () {
//      const req = {};
//     const res = {};

//     beforeEach(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//     })

//     afterEach(() => {
//       sinon.restore();
//     })

//     it('Return all products id', async function () {
//         const salesId = [
//   {
//     date: "2021-09-09T04:54:29.000Z",
//     productId: 1,
//     quantity: 2
//   },
//   {
//     date: "2021-09-09T04:54:54.000Z",
//     productId: 2,
//     quantity: 2
//   }
// ]
//       req.params = { id: 0 }
//       sinon.stub(salesServices, 'getByIdSales').resolves(salesId)

//       await salesControllers.getByIdSales(req, res);

//       expect(res.status).to.have.been.calledWith(200)
//       expect(res.json).to.have.been.calledWithExactly(salesId);
//     })

//      it('Return all products id failed', async function () {
//       req.params = { id:100 }
//       sinon.stub(salesServices, 'getByIdSales').resolves({ type: 'NOT_FOUND', message: 'Sale not found' })

//       await salesControllers.getByIdSales(req, res);

//       expect(res.status).to.have.been.calledWith(404)
//       expect(res.json).to.have.been.calledWithExactly({message: 'Sale not found'});
//      })
//   })


//   });