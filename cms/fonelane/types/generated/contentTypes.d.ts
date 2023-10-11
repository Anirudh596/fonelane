import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    singularName: 'about';
    pluralName: 'abouts';
    displayName: 'about';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    text1: Attribute.RichText;
    img1: Attribute.Media;
    text2: Attribute.RichText;
    img2: Attribute.Media;
    text3: Attribute.RichText;
    img3: Attribute.Media;
    text4: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBannerBanner extends Schema.SingleType {
  collectionName: 'banners';
  info: {
    singularName: 'banner';
    pluralName: 'banners';
    displayName: 'banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media;
    slug: Attribute.UID<'api::banner.banner', 'title'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCoverCover extends Schema.CollectionType {
  collectionName: 'covers';
  info: {
    singularName: 'cover';
    pluralName: 'covers';
    displayName: 'Cover';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    colorname: Attribute.Component<'device-colors.colors', true>;
    price: Attribute.Integer;
    MRP: Attribute.Integer;
    inventory: Attribute.Integer;
    specifications: Attribute.RichText;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cover.cover',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cover.cover',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDealDeal extends Schema.CollectionType {
  collectionName: 'deals';
  info: {
    singularName: 'deal';
    pluralName: 'deals';
    displayName: 'deal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    i_phone_6s: Attribute.Relation<
      'api::deal.deal',
      'manyToMany',
      'api::i-phone6.i-phone6'
    >;
    iphone_7s: Attribute.Relation<
      'api::deal.deal',
      'manyToMany',
      'api::iphone7.iphone7'
    >;
    iphone_8s: Attribute.Relation<
      'api::deal.deal',
      'manyToMany',
      'api::iphone8.iphone8'
    >;
    i_phone_xes: Attribute.Relation<
      'api::deal.deal',
      'manyToMany',
      'api::i-phone-x.i-phone-x'
    >;
    i_phone_11s: Attribute.Relation<
      'api::deal.deal',
      'manyToMany',
      'api::i-phone11.i-phone11'
    >;
    i_phone_12s: Attribute.Relation<
      'api::deal.deal',
      'manyToMany',
      'api::i-phone12.i-phone12'
    >;
    i_phone_13s: Attribute.Relation<
      'api::deal.deal',
      'manyToMany',
      'api::i-phone-13.i-phone-13'
    >;
    i_phone_14s: Attribute.Relation<
      'api::deal.deal',
      'manyToMany',
      'api::i-phone14.i-phone14'
    >;
    i_phone_15s: Attribute.Relation<
      'api::deal.deal',
      'manyToMany',
      'api::i-phone15.i-phone15'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::deal.deal', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::deal.deal', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiDealOfTheDay2DealOfTheDay2 extends Schema.CollectionType {
  collectionName: 'deal_of_the_day_2s';
  info: {
    singularName: 'deal-of-the-day-2';
    pluralName: 'deal-of-the-day-2s';
    displayName: 'Deal Of The Day 2';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    baseprice: Attribute.Integer;
    mrp: Attribute.Integer;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    colors: Attribute.Component<'device-colors.colors', true>;
    storage: Attribute.Component<'storage.storage', true>;
    specs: Attribute.RichText;
    slug: Attribute.UID<'api::deal-of-the-day-2.deal-of-the-day-2', 'title'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::deal-of-the-day-2.deal-of-the-day-2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::deal-of-the-day-2.deal-of-the-day-2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIPhone13IPhone13 extends Schema.CollectionType {
  collectionName: 'i_phone_13s';
  info: {
    singularName: 'i-phone-13';
    pluralName: 'i-phone-13s';
    displayName: 'iPhone 13';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    baseprice: Attribute.Integer;
    mrp: Attribute.Integer;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    colors: Attribute.Component<'device-colors.colors', true>;
    storage: Attribute.Component<'storage.storage', true>;
    specs: Attribute.RichText;
    slug: Attribute.UID<'api::i-phone-13.i-phone-13', 'title'>;
    just_ins: Attribute.Relation<
      'api::i-phone-13.i-phone-13',
      'manyToMany',
      'api::just-in.just-in'
    >;
    deals: Attribute.Relation<
      'api::i-phone-13.i-phone-13',
      'manyToMany',
      'api::deal.deal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::i-phone-13.i-phone-13',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::i-phone-13.i-phone-13',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIPhoneXIPhoneX extends Schema.CollectionType {
  collectionName: 'i_phone_xs';
  info: {
    singularName: 'i-phone-x';
    pluralName: 'i-phone-xs';
    displayName: 'iPhoneX';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    baseprice: Attribute.Integer;
    mrp: Attribute.Integer;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    colors: Attribute.Component<'device-colors.colors', true>;
    storage: Attribute.Component<'storage.storage', true>;
    specs: Attribute.RichText;
    slug: Attribute.UID<'api::i-phone-x.i-phone-x', 'title'>;
    just_ins: Attribute.Relation<
      'api::i-phone-x.i-phone-x',
      'manyToMany',
      'api::just-in.just-in'
    >;
    deals: Attribute.Relation<
      'api::i-phone-x.i-phone-x',
      'manyToMany',
      'api::deal.deal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::i-phone-x.i-phone-x',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::i-phone-x.i-phone-x',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIPhone11IPhone11 extends Schema.CollectionType {
  collectionName: 'i_phone11s';
  info: {
    singularName: 'i-phone11';
    pluralName: 'i-phone11s';
    displayName: 'iPhone11';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    baseprice: Attribute.Integer;
    mrp: Attribute.Integer;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    colors: Attribute.Component<'device-colors.colors', true>;
    storage: Attribute.Component<'storage.storage', true>;
    specs: Attribute.RichText;
    slug: Attribute.UID<'api::i-phone11.i-phone11', 'title'>;
    just_ins: Attribute.Relation<
      'api::i-phone11.i-phone11',
      'manyToMany',
      'api::just-in.just-in'
    >;
    deals: Attribute.Relation<
      'api::i-phone11.i-phone11',
      'manyToMany',
      'api::deal.deal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::i-phone11.i-phone11',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::i-phone11.i-phone11',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIPhone12IPhone12 extends Schema.CollectionType {
  collectionName: 'i_phone12s';
  info: {
    singularName: 'i-phone12';
    pluralName: 'i-phone12s';
    displayName: 'iPhone12';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    baseprice: Attribute.Integer;
    mrp: Attribute.Integer;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    colors: Attribute.Component<'device-colors.colors', true>;
    storage: Attribute.Component<'storage.storage', true>;
    specs: Attribute.RichText;
    slug: Attribute.UID<'api::i-phone12.i-phone12', 'title'>;
    just_ins: Attribute.Relation<
      'api::i-phone12.i-phone12',
      'manyToMany',
      'api::just-in.just-in'
    >;
    deals: Attribute.Relation<
      'api::i-phone12.i-phone12',
      'manyToMany',
      'api::deal.deal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::i-phone12.i-phone12',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::i-phone12.i-phone12',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIPhone14IPhone14 extends Schema.CollectionType {
  collectionName: 'i_phone14s';
  info: {
    singularName: 'i-phone14';
    pluralName: 'i-phone14s';
    displayName: 'iPhone14';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    baseprice: Attribute.Integer;
    mrp: Attribute.Integer;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    colors: Attribute.Component<'device-colors.colors', true>;
    storage: Attribute.Component<'storage.storage', true>;
    specs: Attribute.RichText;
    slug: Attribute.UID<'api::i-phone14.i-phone14', 'title'>;
    just_ins: Attribute.Relation<
      'api::i-phone14.i-phone14',
      'manyToMany',
      'api::just-in.just-in'
    >;
    deals: Attribute.Relation<
      'api::i-phone14.i-phone14',
      'manyToMany',
      'api::deal.deal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::i-phone14.i-phone14',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::i-phone14.i-phone14',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIPhone15IPhone15 extends Schema.CollectionType {
  collectionName: 'i_phone15s';
  info: {
    singularName: 'i-phone15';
    pluralName: 'i-phone15s';
    displayName: 'iPhone15';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    baseprice: Attribute.Integer;
    mrp: Attribute.Integer;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    colors: Attribute.Component<'device-colors.colors', true>;
    storage: Attribute.Component<'storage.storage', true>;
    specs: Attribute.RichText;
    slug: Attribute.UID<'api::i-phone15.i-phone15', 'title'>;
    just_ins: Attribute.Relation<
      'api::i-phone15.i-phone15',
      'manyToMany',
      'api::just-in.just-in'
    >;
    deals: Attribute.Relation<
      'api::i-phone15.i-phone15',
      'manyToMany',
      'api::deal.deal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::i-phone15.i-phone15',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::i-phone15.i-phone15',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIPhone6IPhone6 extends Schema.CollectionType {
  collectionName: 'i_phone6s';
  info: {
    singularName: 'i-phone6';
    pluralName: 'i-phone6s';
    displayName: 'iPhone6';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    baseprice: Attribute.Integer;
    mrp: Attribute.Integer;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    colors: Attribute.Component<'device-colors.colors', true>;
    storage: Attribute.Component<'storage.storage', true>;
    just_ins: Attribute.Relation<
      'api::i-phone6.i-phone6',
      'manyToMany',
      'api::just-in.just-in'
    >;
    deals: Attribute.Relation<
      'api::i-phone6.i-phone6',
      'manyToMany',
      'api::deal.deal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::i-phone6.i-phone6',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::i-phone6.i-phone6',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIphone7Iphone7 extends Schema.CollectionType {
  collectionName: 'iphone7s';
  info: {
    singularName: 'iphone7';
    pluralName: 'iphone7s';
    displayName: 'Iphone7';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    baseprice: Attribute.Integer;
    mrp: Attribute.Integer;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    colors: Attribute.Component<'device-colors.colors', true>;
    storage: Attribute.Component<'storage.storage', true>;
    just_ins: Attribute.Relation<
      'api::iphone7.iphone7',
      'manyToMany',
      'api::just-in.just-in'
    >;
    deals: Attribute.Relation<
      'api::iphone7.iphone7',
      'manyToMany',
      'api::deal.deal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::iphone7.iphone7',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::iphone7.iphone7',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIphone8Iphone8 extends Schema.CollectionType {
  collectionName: 'iphone8s';
  info: {
    singularName: 'iphone8';
    pluralName: 'iphone8s';
    displayName: 'Iphone8';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    baseprice: Attribute.Integer;
    mrp: Attribute.Integer;
    mainimage: Attribute.Media;
    otherimages: Attribute.Media;
    colors: Attribute.Component<'device-colors.colors', true>;
    storage: Attribute.Component<'storage.storage', true>;
    specs: Attribute.RichText;
    just_ins: Attribute.Relation<
      'api::iphone8.iphone8',
      'manyToMany',
      'api::just-in.just-in'
    >;
    deals: Attribute.Relation<
      'api::iphone8.iphone8',
      'manyToMany',
      'api::deal.deal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::iphone8.iphone8',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::iphone8.iphone8',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJustInJustIn extends Schema.CollectionType {
  collectionName: 'just_ins';
  info: {
    singularName: 'just-in';
    pluralName: 'just-ins';
    displayName: 'justIn';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    i_phone_6s: Attribute.Relation<
      'api::just-in.just-in',
      'manyToMany',
      'api::i-phone6.i-phone6'
    >;
    iphone_7s: Attribute.Relation<
      'api::just-in.just-in',
      'manyToMany',
      'api::iphone7.iphone7'
    >;
    iphone_8s: Attribute.Relation<
      'api::just-in.just-in',
      'manyToMany',
      'api::iphone8.iphone8'
    >;
    i_phone_xes: Attribute.Relation<
      'api::just-in.just-in',
      'manyToMany',
      'api::i-phone-x.i-phone-x'
    >;
    i_phone_11s: Attribute.Relation<
      'api::just-in.just-in',
      'manyToMany',
      'api::i-phone11.i-phone11'
    >;
    i_phone_12s: Attribute.Relation<
      'api::just-in.just-in',
      'manyToMany',
      'api::i-phone12.i-phone12'
    >;
    i_phone_13s: Attribute.Relation<
      'api::just-in.just-in',
      'manyToMany',
      'api::i-phone-13.i-phone-13'
    >;
    i_phone_14s: Attribute.Relation<
      'api::just-in.just-in',
      'manyToMany',
      'api::i-phone14.i-phone14'
    >;
    i_phone_15s: Attribute.Relation<
      'api::just-in.just-in',
      'manyToMany',
      'api::i-phone15.i-phone15'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::just-in.just-in',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::just-in.just-in',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPhonePhone extends Schema.CollectionType {
  collectionName: 'phones';
  info: {
    singularName: 'phone';
    pluralName: 'phones';
    displayName: 'phone';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    basePrice: Attribute.Integer & Attribute.Required;
    mrp: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::phone.phone',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::phone.phone',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about.about': ApiAboutAbout;
      'api::banner.banner': ApiBannerBanner;
      'api::cover.cover': ApiCoverCover;
      'api::deal.deal': ApiDealDeal;
      'api::deal-of-the-day-2.deal-of-the-day-2': ApiDealOfTheDay2DealOfTheDay2;
      'api::i-phone-13.i-phone-13': ApiIPhone13IPhone13;
      'api::i-phone-x.i-phone-x': ApiIPhoneXIPhoneX;
      'api::i-phone11.i-phone11': ApiIPhone11IPhone11;
      'api::i-phone12.i-phone12': ApiIPhone12IPhone12;
      'api::i-phone14.i-phone14': ApiIPhone14IPhone14;
      'api::i-phone15.i-phone15': ApiIPhone15IPhone15;
      'api::i-phone6.i-phone6': ApiIPhone6IPhone6;
      'api::iphone7.iphone7': ApiIphone7Iphone7;
      'api::iphone8.iphone8': ApiIphone8Iphone8;
      'api::just-in.just-in': ApiJustInJustIn;
      'api::phone.phone': ApiPhonePhone;
    }
  }
}
