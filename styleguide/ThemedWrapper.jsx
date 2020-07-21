import React from 'react';
import { node } from 'prop-types';

import { useStyleGuideContext } from 'rsg-components/Context';
import Provider from '../src/Provider';

const propTypes = {
  children: node.isRequired,
};

function ThemedWrapper({ children }) {
  const { brand } = useStyleGuideContext();
  console.log('ThemedWrapper Context', useStyleGuideContext())

  return (
    <Provider brand={brand}>
      {children}
    </Provider>
  );
}

ThemedWrapper.propTypes = propTypes;

export default ThemedWrapper;
