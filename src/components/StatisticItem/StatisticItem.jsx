import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

import PropTypes from 'prop-types';

export const StatisticItem = ({ statItem: { title, total } }) => {
  return (
    <StatisticBox>
      {/* Тут має бути іконка */}
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
