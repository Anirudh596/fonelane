import type { Schema, Attribute } from '@strapi/strapi';

export interface DeviceColorsColors extends Schema.Component {
  collectionName: 'components_device_colors_colors';
  info: {
    displayName: 'colors';
    icon: 'paint';
    description: '';
  };
  attributes: {
    colorname: Attribute.Enumeration<['blue', 'black', 'red']> &
      Attribute.Required &
      Attribute.DefaultTo<'blue'>;
    maincolorimage: Attribute.Media & Attribute.Required;
    othercolorimages: Attribute.Media;
  };
}

export interface DeviceInfoDeviceInfo extends Schema.Component {
  collectionName: 'components_device_info_device_infos';
  info: {
    displayName: 'Device-info';
    description: '';
  };
  attributes: {
    colors: Attribute.Component<'device-colors.colors', true>;
    Specification: Attribute.RichText;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    Storage: Attribute.Component<
      'device-storage-and-cond.storage-and-cond',
      true
    >;
    Condition: Attribute.Component<'device-storage-and-cond.condition', true>;
    inventory: Attribute.Integer & Attribute.Required;
  };
}

export interface DeviceStorageAndCondCondition extends Schema.Component {
  collectionName: 'components_device_storage_and_cond_conditions';
  info: {
    displayName: 'Condition';
    icon: 'archive';
  };
  attributes: {
    condition: Attribute.Enumeration<['Fair', 'Good', 'Excellent']>;
  };
}

export interface DeviceStorageAndCondStorageAndCond extends Schema.Component {
  collectionName: 'components_device_storage_and_cond_storage_and_conds';
  info: {
    displayName: 'Storage';
    icon: 'alien';
    description: '';
  };
  attributes: {
    storage: Attribute.Enumeration<
      ['GB32', 'GB64', 'GB128', 'GB256', 'GB512', 'TB1']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'device-colors.colors': DeviceColorsColors;
      'device-info.device-info': DeviceInfoDeviceInfo;
      'device-storage-and-cond.condition': DeviceStorageAndCondCondition;
      'device-storage-and-cond.storage-and-cond': DeviceStorageAndCondStorageAndCond;
    }
  }
}
