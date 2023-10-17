import type { Schema, Attribute } from '@strapi/strapi';

export interface PageHome extends Schema.Component {
  collectionName: 'components_page_homes';
  info: {
    displayName: 'Home';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.home': PageHome;
    }
  }
}
