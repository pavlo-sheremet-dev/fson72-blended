import { useTheme } from '@emotion/react';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

import PropTypes from 'prop-types';

export const StatisticItem = ({ statItem: { title, total }, icon: Icon }) => {
  const theme = useTheme();
  return (
    <StatisticBox>
      <Icon size={25} color={theme.colors.accent} />
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  statItem: PropTypes.shape({
    total: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
