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
    default: 'super-black',
    values: [
      {
        name: 'grey',
        value: '#FAFAFA',
      },
      {
        name: 'super-black',
        value: 'linear-gradient(0deg, #101010, #101010)',
      },
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
