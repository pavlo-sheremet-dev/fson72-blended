import PropTypes from 'prop-types';
import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import {
  MdPeople,
  MdOutlineProductionQuantityLimits,
  Md4GPlusMobiledata,
} from 'react-icons/md';
import { GiExitDoor } from 'react-icons/gi';

const getIcon = id => {
  const icons = {
    1: FaRegThumbsUp,
    2: MdPeople,
    3: MdOutlineProductionQuantityLimits,
    4: GiExitDoor,
    default: Md4GPlusMobiledata,
  };

  return icons[id] ?? icons.default;
};

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            statItem={stat}
            icon={getIcon(stat.id)}
          />
        ))}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
