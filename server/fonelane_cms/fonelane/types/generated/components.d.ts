import type { Schema, Attribute } from '@strapi/strapi';

export interface DeviceInfoColors extends Schema.Component {
  collectionName: 'components_device_info_colors';
  info: {
    displayName: 'Colors';
    icon: 'paint';
    description: '';
  };
  attributes: {
    ColorName: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    ColorHexCode: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'device-info.colors': DeviceInfoColors;
    }
  }
}
