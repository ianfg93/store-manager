const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mock = require('../../../__tests__/_dataMock');
const salesControllers = require('../../../src/controllers/salesControllers');
const salesServices = require('../../../src/services/salesServices');

chai.use(sinonChai);
const { expect } = require('chai');



describe('Sales product', function () {
  describe('List all sales', function () {
    const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    })

    afterEach(() => {
      sinon.restore();
    });

    it('Return all sales', async function () {
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
      sinon.stub(salesServices, 'listAllProducts').resolves(sales)

     await salesControllers.listAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWithExactly(sales);
    })
  })

describe('List product id', function () {
     const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    })

    afterEach(() => {
      sinon.restore();
    })

    it('Return all products id', async function () {
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
      req.params = { id:0 }
      sinon.stub(productsServices, 'getByIdProducts').resolves(sales)

      await salesControllers.getByIdProducts(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWithExactly(sales);
    })

     it('Return all products id failed', async function () {
      req.params = { id:100 }
      sinon.stub(salesServices, 'getByIdProducts').resolves({ type: 'NOT_FOUND', message: 'Sale not found' })

      await salesControllers.getByIdProducts(req, res);

      expect(res.status).to.have.been.calledWith(404)
      expect(res.json).to.have.been.calledWithExactly({message: 'Sale not found'});
     })
  })

describe('Create sales', function () {
     const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    })

    afterEach(() => {
      sinon.restore();
    })

    it('Return all products id', async function () {
      req.body = mock.rightSaleBody;
      sinon.stub(salesServices, 'createProducts').resolves(mock.saleCreateResponse)

      await salesControllers.createProducts(req, res);

      expect(res.status).to.have.been.calledWith(201)
      expect(res.json).to.have.been.calledWithExactly(mock.saleCreateResponse);
    })
  })

describe('Update sales', function () {
     const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    })

    afterEach(() => {
      sinon.restore();
    })

    it('Return all products id', async function () {
      req.params = { id: 0 }
      req.body = mock.rightSaleBody;

      sinon.stub(salesServices, 'updateProducts').resolves({saleId: req.params, itemsUpdated: req.body})

      await salesControllers.updateProducts(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWithExactly({saleId: req.params, itemsUpdated: req.body});
    })

     it('Return all products id failed', async function () {
       req.params = { id: 100 }
       req.body = mock.rightSaleBody;

      sinon.stub(salesServices, 'updateProducts').resolves({ type: 'NOT_FOUND', message: 'Sale not found' })

      await salesControllers.updateProducts(req, res);

      expect(res.status).to.have.been.calledWith(404)
      expect(res.json).to.have.been.calledWithExactly({message: 'Sale not found'});
     })
  })

describe('Delete sales', function () {
     const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    })
    
    afterEach(() => {
      sinon.restore();
    })

    it('Return all products id', async function () {
      req.params = { id:0 }
      sinon.stub(salesServices, 'deleteProducts').resolves({id: req.params})

      await salesControllers.deleteProducts(req, res);

      expect(re.status).to.have.been.calledWith(204);
    })

     it('Return all products id failed', async function () {
       req.params = { id: 100 };

      sinon.stub(salesServices, 'deleteProducts').resolves({ type: 'NOT_FOUND', message: 'Sale not found' })

      await salesControllers.deleteProducts(req, res);

      expect(re.status).to.have.been.calledWith(404)
      expect(res.json).to.have.been.calledWithExactly({message: 'Sale not found'});
     })
  })

  });