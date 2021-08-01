import categoryRouter from '*/routers/category';
import orderRouter from '*/routers/order';
import productRouter from '*/routers/product';
import userRouter from '*/routers/user';

const indexRouter = (app) => {
  app.use('/api/categories', categoryRouter);
  app.use('/api/products', productRouter);
  app.use('/api/users', userRouter);
  app.use('/api/orders', orderRouter);

  return app;
};

export default indexRouter;
