/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderUpdatesInput, OrderStatus } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: orderUpdates
// ====================================================

export interface orderUpdates_orderUpdates_drivers {
  __typename: "User";
  email: string;
}

export interface orderUpdates_orderUpdates_customer {
  __typename: "User";
  email: string;
}

export interface orderUpdates_orderUpdates_restaurant {
  __typename: "Restaurant";
  name: string;
}

export interface orderUpdates_orderUpdates {
  __typename: "Order";
  id: number;
  status: OrderStatus;
  total: number | null;
  drivers: orderUpdates_orderUpdates_drivers | null;
  customer: orderUpdates_orderUpdates_customer | null;
  restaurant: orderUpdates_orderUpdates_restaurant | null;
}

export interface orderUpdates {
  orderUpdates: orderUpdates_orderUpdates;
}

export interface orderUpdatesVariables {
  input: OrderUpdatesInput;
}
