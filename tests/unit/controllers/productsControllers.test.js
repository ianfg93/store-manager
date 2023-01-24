const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mock = require('../../../__tests__/_dataMock');
const productsControllers = require('../../../src/controllers/productsControllers');
const productsServices = require('../../../src/services/productsServices');

chai.use(sinonChai);
const { expect } = require('chai');

describe('Controller product', function () {
  describe('List all product', function () {
    const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    })

    afterEach(() => {
      sinon.restore();
    });

    it('Return all products', async function () {
      sinon.stub(productsServices, 'listAllProducts').resolves(mock.allProductsResponse)

     await productsControllers.listAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWithExactly(mock.allProductsResponse);
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

    it('Return all products id', async () => {
      req.params = { id: 0 }
      sinon.stub(productsServices, 'getByIdProducts').resolves(mock.allProductsResponse[0])

      await productsControllers.getByIdProducts(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWithExactly(mock.allProductsResponse[0]);
    })

     it('Return all products id failed', async function () {
      req.params = { id:100 }
      sinon.stub(productsServices, 'getByIdProducts').resolves({ type: 'NOT_FOUND', message: 'Product not found' })

      await productsControllers.getByIdProducts(req, res);

      expect(res.status).to.have.been.calledWith(404)
      expect(res.json).to.have.been.calledWithExactly({message: 'Product not found'}); 
  })
});

// describe('Create product', function () {
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
//       req.params = mock.rightProductBody;
//       sinon.stub(productsServices, 'createProducts').resolves(mock.productCreateResponse)

//       await productsControllers.createProducts(req, res);

//       expect(res.status).to.have.been.calledWith(201)
//       expect(res.json).to.have.been.calledWithExactly(mock.productCreateResponse);
//   })
// });

// describe('Update product', function () {
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
//       req.params = { id: 0 }
//       req.body = mock.productUpdateBody;

//       sinon.stub(productsServices, 'updateProducts').resolves({id: req.params, ...req.body})

//       await productsControllers.updateProducts(req, res);

//       expect(res.status).to.have.been.calledWith(200)
//       expect(res.json).to.have.been.calledWithExactly({id: req.params, ...req.body});
//     })

//      it('Return all products id failed', async function () {
//        req.params = { id: 100 }
//        req.body = mock.productUpdateBody;

//       sinon.stub(productsServices, 'updateProducts').resolves({ type: 'NOT_FOUND', message: 'Product not found' })

//       await productsControllers.updateProducts(req, res);

//       expect(res.status).to.have.been.calledWith(404)
//       expect(res.json).to.have.been.calledWithExactly({message: 'Product not found'});
//   })
// });

// describe('Delete product', function () {
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
//       req.params = { id:0 }
//       sinon.stub(productsServices, 'deleteProducts').resolves({id: req.params})

//       await productsControllers.deleteProducts(req, res);

//       expect(re.status).to.have.been.calledWith(204);
//     })

//      it('Return all products id failed', async function () {
//        req.params = { id: 100 }
//        req.body = mock.productUpdateBody;

//       sinon.stub(productsServices, 'deleteProducts').resolves({ type: 'NOT_FOUND', message: 'Product not found' })

//       await productsControllers.deleteProducts(req, res);

//       expect(res.status).to.have.been.calledWith(404)
//       expect(res.json).to.have.been.calledWithExactly({message: 'Product not found'});
//   })
// });
  });
