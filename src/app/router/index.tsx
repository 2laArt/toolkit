import { Cart } from '@/pages/cart';
import { Catalog } from '@/pages/catalog';
import { Order } from '@/pages/order';
import { OrderHistory } from '@/pages/orders-history';
import { Test } from '@/pages/test';
import { paths } from '@/shared/paths';
import { LayoutApp } from '@/widgets/layout/ui';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const routeDefinitions = createRoutesFromElements(
  <Route path={paths.catalog} element={<LayoutApp />}>
    <Route index element={<Catalog />} />
    <Route path={paths.cart} element={<Cart />} />
    <Route path={paths.order} element={<Order />} />
    <Route path={paths.ordersHistory} element={<OrderHistory />} />
    <Route path={'test'} element={<Test />} />
  </Route>,
);

export const appRouter = createBrowserRouter(routeDefinitions);
