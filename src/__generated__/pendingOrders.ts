/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderStatus } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: pendingOrders
// ====================================================

export interface pendingOrders_pendingOrders_drivers {
  __typename: "User";
  email: string;
}

export interface pendingOrders_pendingOrders_customer {
  __typename: "User";
  email: string;
}

export interface pendingOrders_pendingOrders_restaurant {
  __typename: "Restaurant";
  name: string;
}

export interface pendingOrders_pendingOrders {
  __typename: "Order";
  id: number;
  status: OrderStatus;
  total: number | null;
  drivers: pendingOrders_pendingOrders_drivers | null;
  customer: pendingOrders_pendingOrders_customer | null;
  restaurant: pendingOrders_pendingOrders_restaurant | null;
}

export interface pendingOrders {
  pendingOrders: pendingOrders_pendingOrders;
}
