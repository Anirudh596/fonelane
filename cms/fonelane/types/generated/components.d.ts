import type { Schema, Attribute } from '@strapi/strapi';

export interface DeviceColorsColors extends Schema.Component {
  collectionName: 'components_device_colors_colors';
  info: {
    displayName: 'Colors';
    icon: 'alien';
    description: '';
  };
  attributes: {
    colorimages: Attribute.Media;
    colorname: Attribute.String;
  };
}

export interface DeviceInfoDeviceInfo extends Schema.Component {
  collectionName: 'components_device_info_device_infos';
  info: {
    displayName: 'Device-info';
    icon: 'apps';
  };
  attributes: {
    colors: Attribute.Component<'device-colors.colors', true>;
    Specification: Attribute.RichText;
  };
}

export interface DeviceStorageAndCondCondition extends Schema.Component {
  collectionName: 'components_device_storage_and_cond_conditions';
  info: {
    displayName: 'Storage2';
    icon: 'archive';
    description: '';
  };
  attributes: {
    storage: Attribute.Enumeration<
      ['GB16', 'GB32', 'GB64', 'GB128', 'GB256', 'GB512']
    >;
  };
}

export interface DeviceStorageAndCondStorage extends Schema.Component {
  collectionName: 'components_device_storage_and_cond_storages';
  info: {
    displayName: 'Condition2';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    condition: Attribute.Enumeration<['Fair', 'Good', 'Excellent']>;
  };
}

export interface StoragesAndPricesStorageAndPrices extends Schema.Component {
  collectionName: 'components_storages_and_prices_storage_and_prices';
  info: {
    displayName: 'storage And Prices';
    icon: 'expand';
    description: '';
  };
  attributes: {
    storage: Attribute.Enumeration<['GB16', 'GB32', 'GB64', 'GB128']>;
    fairPrice: Attribute.Integer;
    goodPrice: Attribute.Integer;
    excellentPrice: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'device-colors.colors': DeviceColorsColors;
      'device-info.device-info': DeviceInfoDeviceInfo;
      'device-storage-and-cond.condition': DeviceStorageAndCondCondition;
      'device-storage-and-cond.storage': DeviceStorageAndCondStorage;
      'storages-and-prices.storage-and-prices': StoragesAndPricesStorageAndPrices;
    }
  }
}
