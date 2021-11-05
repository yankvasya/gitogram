import './style.scss';

export const parameters = {
  controls: {
    actions: { argTypesRegex: '^on[A-Z].*' },
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
};
