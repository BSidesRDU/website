export const state = () => ({
  hamburgerOpen: false,
  menus: {
    main: [
      {
        name: 'cfp',
        url: { path: '/', hash: 'cfp' },
        label: 'Call For Papers',
      },
      {
        name: 'streamingSocial',
        url: { path: '/', hash: 'streaming-social' },
        label: 'Streaming & Social',
      },
      {
        name: 'schedule',
        url: { path: '/', hash: 'schedule' },
        label: 'Schedule',
      },
      {
        name: 'eventsWorkshops',
        url: { path: '/', hash: 'events-workshops' },
        label: 'Events & Workshops',
      },
      {
        name: 'parking',
        url: { path: '/', hash: 'parking' },
        label: 'Parking',
      },
      {
        name: 'food',
        url: { path: '/', hash: 'food' },
        label: 'Food',
      },
      {
        name: 'updates',
        url: { path: '/', hash: 'updates' },
        label: 'Updates',
      },
      {
        name: 'sponsors',
        url: { path: '/', hash: 'sponsors' },
        label: 'Sponsors',
      },
      {
        name: 'about',
        url: { path: '/', hash: 'about' },
        label: 'About',
      },
      {
        name: 'venue',
        url: { path: '/', hash: 'venue' },
        label: 'Venue',
      },
      {
        name: 'principles',
        url: { path: '/', hash: 'principles' },
        label: 'Principles',
        scroll: true,
      },
    ],
  },
});

export const getters = {
  isHamburgerOpen: (state) => state.hamburgerOpen,
  links: (state) => (menu, sections) =>
    state.menus[menu].filter((item) => sections[item.name]),
};

export const mutations = {
  toggleHamburger: (state) => (state.hamburgerOpen = !state.hamburgerOpen),
  setHamburger: (state, newState) => (state.hamburgerOpen = newState),
};
