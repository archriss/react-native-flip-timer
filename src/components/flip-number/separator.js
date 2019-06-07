import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import style from '../style';

function Separator({
  separatorEl
}) {
  return separatorEl || (
    <View style={style.separator}>
      <View style={style.circle} />
      <View style={style.circle} />
    </View>
  );
}

FlipCard.propTypes = {
  separatorEl: PropTypes.element
};

export default Separator;
