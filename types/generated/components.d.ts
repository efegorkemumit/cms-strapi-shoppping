import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderItemListOrderItemList extends Schema.Component {
  collectionName: 'components_order_item_list_order_item_lists';
  info: {
    displayName: 'OrderItemList';
  };
  attributes: {
    amount: Attribute.Decimal;
    color: Attribute.String;
    size: Attribute.String;
    product: Attribute.Relation<
      'order-item-list.order-item-list',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order-item-list.order-item-list': OrderItemListOrderItemList;
    }
  }
}
