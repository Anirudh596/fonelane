import type { Schema, Attribute } from '@strapi/strapi';

export interface ConfigConfiguration extends Schema.Component {
  collectionName: 'components_config_configurations';
  info: {
    displayName: 'configuration';
  };
  attributes: {
    color: Attribute.Enumeration<['Red', 'Blue', 'Black']>;
    storage: Attribute.Enumeration<['GB64', 'GB128', 'GB256']>;
    price: Attribute.Decimal;
    configImg: Attribute.Media;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'config.configuration': ConfigConfiguration;
    }
  }
}
