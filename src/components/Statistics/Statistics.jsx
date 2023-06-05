import PropTypes from 'prop-types';
import { ContainerStat, Item, TitleSpan, ValueSpan } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ContainerStat>
      <Item>
        <TitleSpan>Good :</TitleSpan>
        <ValueSpan>{good}</ValueSpan>
      </Item>
      <Item>
        <TitleSpan>Neutral :</TitleSpan>
        <ValueSpan>{neutral}</ValueSpan>
      </Item>
      <Item>
        <TitleSpan>Bad :</TitleSpan>
        <ValueSpan>{bad}</ValueSpan>
      </Item>
      <Item>
        <TitleSpan>Total :</TitleSpan>
        <ValueSpan>{total}</ValueSpan>
      </Item>
      <Item>
        <TitleSpan>Positive feedback :</TitleSpan>
        <ValueSpan>{positivePercentage} %</ValueSpan>
      </Item>
    </ContainerStat>
  );
};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
