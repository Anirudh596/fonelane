import type { Schema, Attribute } from '@strapi/strapi';

export interface DeviceColorsColors extends Schema.Component {
  collectionName: 'components_device_colors_colors';
  info: {
    displayName: 'colors';
    icon: 'paint';
  };
  attributes: {
    colorname: Attribute.Enumeration<['blue', 'black', 'red']> &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'blue'>;
    maincolorimage: Attribute.Media & Attribute.Required & Attribute.Private;
    othercolorimages: Attribute.Media & Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'device-colors.colors': DeviceColorsColors;
    }
  }
}
