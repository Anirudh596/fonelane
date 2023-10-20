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

export interface PolicyPolicy extends Schema.Component {
  collectionName: 'components_policy_policies';
  info: {
    displayName: 'policy';
    icon: 'eye';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface StorageStorage extends Schema.Component {
  collectionName: 'components_storage_storages';
  info: {
    displayName: 'storage';
    icon: 'cube';
    description: '';
  };
  attributes: {
    Storage: Attribute.Enumeration<
      ['GB16', 'GB32', 'GB64', 'GB128', 'GB256', 'GB512']
    > &
      Attribute.Required;
    Price_Fair: Attribute.Integer & Attribute.Required;
    Inventory_Fair: Attribute.Integer & Attribute.Required;
    Price_Good: Attribute.Integer & Attribute.Required;
    Inventory_Good: Attribute.Integer;
    Price_excellent: Attribute.Integer & Attribute.Required;
    Inventory_Excellent: Attribute.Integer & Attribute.Required;
    ram: Attribute.Enumeration<['MB512', 'GB1', 'GB2', 'GB3', 'GB4', 'GB6']>;
    MRP: Attribute.Integer;
    SKU_Fair: Attribute.String & Attribute.Required;
    SKU_good: Attribute.String & Attribute.Required;
    SKU_excellent: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'device-colors.colors': DeviceColorsColors;
      'device-info.device-info': DeviceInfoDeviceInfo;
      'device-storage-and-cond.condition': DeviceStorageAndCondCondition;
      'device-storage-and-cond.storage': DeviceStorageAndCondStorage;
      'policy.policy': PolicyPolicy;
      'storage.storage': StorageStorage;
    }
  }
}
