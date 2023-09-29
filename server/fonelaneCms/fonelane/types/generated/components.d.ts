import type { Schema, Attribute } from '@strapi/strapi';

export interface DeviceInfoColors extends Schema.Component {
  collectionName: 'components_device_info_colors';
  info: {
    displayName: 'Colors';
    icon: 'paint';
    description: '';
  };
  attributes: {
    colorname: Attribute.String & Attribute.Required & Attribute.Unique;
    colorcode: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'device-info.colors': DeviceInfoColors;
    }
  }
}
