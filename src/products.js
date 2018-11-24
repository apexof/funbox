
const note = {
  default: 'Сказочное заморское яство',
  selected_hover: 'Котэ не одобряет?',
};
const name = 'Нямушка';
const units = 'кг';
const slogan_default = 'Чего сидишь? Порадуй котэ, ';
const buy_link = 'купи.';

export default [
  {
    id: 0,
    state: 'default',
    note: note,
    name: name,
    type: 'с фуа-гра',
    portions: '10 порций',
    gift: 'мышь в подарок',
    weight: '0,5',
    units: units,
    slogan: {
      default: slogan_default,
      default_hover: slogan_default,
      selected: 'Печень утки разварная с артишоками.',
      selected_hover: 'Печень утки разварная с артишоками.',
      disabled: 'Печалька, с фуа-гра закончился.',
    },
    buy_link: buy_link,
  },
  {
    id: 1,
    state: 'default',
    note: note,
    name: name,
    type: 'с рыбой',
    portions: '40 порций',
    gift: '2 мыши в подарок',
    weight: '2',
    units: units,
    slogan: {
      default: slogan_default,
      default_hover: slogan_default,
      selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      selected_hover: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      disabled: 'Печалька, с рыбой закончился.',
    },
    buy_link: buy_link,
  },
  {
    id: 2,
    state: 'disabled',
    note: note,
    name: name,
    type: 'с курой',
    portions: '100 порций',
    gift: '5 мышей в подарок заказчик доволен',
    weight: '5',
    units: units,
    slogan: {
      default: slogan_default,
      default_hover: slogan_default,
      selected: 'Филе из цыплят с трюфелями в бульоне.',
      selected_hover: 'Филе из цыплят с трюфелями в бульоне.',
      disabled: 'Печалька, с курой закончился.',
    },
    buy_link: buy_link,
  },
];