const projects = [
  {
    id: 1,
    title: 'Kristine & Samuel\'s Wedding',
    link: 'https://kristineandsamuel.com/',
    frontend: 'https://github.com/kadrianne/wedding-website',
    frontendTech: ['Vanilla JavaScript', 'HTML', 'CSS', 'SASS', 'Bootstrap'],
    backend: 'https://github.com/kadrianne/wedding-website-backend',
    backendTech: ['Ruby', 'Rails', 'PostgreSQL'],
    demo: 'https://www.loom.com/share/d887646dd15f4f69bcf224b9b66bf976',
    description: 'A personal website to provide wedding guests with event details and RSVP functionality and access to an admin dashboard for guest management.',
    bulletPoints: [
      'Programmed with HTML, CSS, Vanilla JavaScript, Bootstrap components and Foundation Building Blocks for a responsive and polished application.',
      'Applied full authentication and authorization using BCrypt and JWT for Rails to secure guest data.'
    ]
  },
  {
    id: 2,
    title: 'Modern Minesweeper',
    link: 'https://modernminesweeper.firebaseapp.com/',
    frontend: 'https://github.com/kadrianne/modern-minesweeper',
    backend: 'https://github.com/kadrianne/minesweeper-express-backend',
    demo: 'https://www.loom.com/share/82baf2309ffc461eb1ae945ea4587479',
    description: 'A modern take on the classic and addicting puzzle computer game.',
    bulletPoints: [
      'Formulated algorithms and recursive functions to implement complex game logic.',
      'Developed with React and Material UI components for a clean UX/UI.',
      'Created a Node.js/Express.js backend API with JWT authentication for users and to save scores and filter high scores.'
    ]
  },
  {
    id: 3,
    title: 'PICKYeats',
    frontend: 'https://github.com/kadrianne/pickyeats',
    backend: 'https://github.com/kadrianne/pickyeats-backend',
    demo: 'https://www.loom.com/share/ca778dcf803442459ef00976ef3411bc',
    description: 'Tinder for restaurants: A mobile app allowing users to connect with each other in parties and assist in swiftly deciding on a place to eat.',
    bulletPoints: [
      'Implemented a delightful user experience using React Native through design wireframes and comparative analysis and research.',
      'Utilized the Yelp Fusion API to pull and display data on local places based on user location input.',
      'Leveraged Django\'s built-in authentication and Django REST Framework to build custom APIs for login, match, and filter functionality.',
      'Organized app state using Redux store.'
    ]
  },
  {
    id: 4,
    title: 'Code for Denver Website',
    frontend: 'https://github.com/codefordenver/codefordenver.org/tree/convert-to-jekyll',
    description: 'Ongoing open-source project for the redesign of Code for Denver\'s existing website.',
    bulletPoints: [
      'Implemented a delightful user experience using React Native through design wireframes and comparative analysis and research.',
      'Utilized the Yelp Fusion API to pull and display data on local places based on user location input.',
      'Leveraged Django\'s built-in authentication and Django REST Framework to build custom APIs for login, match, and filter functionality.',
      'Organized app state using Redux store.'
    ]
  },
]

export default projects