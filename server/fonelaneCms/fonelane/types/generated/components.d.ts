import type { Schema, Attribute } from '@strapi/strapi';

export interface DeviceInfoColor extends Schema.Component {
  collectionName: 'components_device_info_colors';
  info: {
    displayName: 'Color';
    icon: 'paint';
    description: '';
  };
  attributes: {
    colorname: Attribute.String & Attribute.Required;
    colorhexcode: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'device-info.color': DeviceInfoColor;
    }
  }
}
