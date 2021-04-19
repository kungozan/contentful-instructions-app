import React from 'react';
import { render } from 'react-dom';

import {
  FieldExtensionSDK,
  init,
} from '@contentful/app-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import '@contentful/forma-36-tokens/dist/css/index.css';
import './index.css';

import Field from './components/Field';

init((sdk) => {
  const root = document.getElementById('root');

  render(<Field sdk={sdk as FieldExtensionSDK} />, root);
});