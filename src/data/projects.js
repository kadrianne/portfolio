const projects = () => {
  return {
    personal: [{
      id: 1,
      title: 'PICKYeats',
      image: 'pickyeats',
      frontend: 'https://github.com/kadrianne/pickyeats',
      backend: 'https://github.com/kadrianne/pickyeats-backend',
      tech: ['React Native', 'Redux', 'Python 3', 'Django', 'Django Rest Framework', 'PostgreSQL'],
      demo: 'https://www.loom.com/share/ca778dcf803442459ef00976ef3411bc',
      description: 'Tinder for restaurants: A mobile app allowing users to connect with each other in parties and assist in swiftly deciding on a place to eat.',
      isMobile: true
    },
    {
      id: 2,
      title: 'Modern Minesweeper',
      image: 'minesweeper',
      link: 'https://modernminesweeper.firebaseapp.com/',
      frontend: 'https://github.com/kadrianne/modern-minesweeper',
      backend: 'https://github.com/kadrianne/minesweeper-express-backend',
      tech: ['React', 'Material UI', 'Node.js', 'Express.js', 'Knex.js', 'Objection.js', 'PostgreSQL'],
      demo: 'https://www.loom.com/share/82baf2309ffc461eb1ae945ea4587479',
      description: 'A modern take on the classic and addicting puzzle computer game.',
      isMobile: false
    },
    {
      id: 3,
      title: 'Kristine & Samuel\'s Wedding',
      image: 'weddingWebsite',
      link: 'https://kristineandsamuel.com/',
      frontend: 'https://github.com/kadrianne/wedding-website',
      backend: 'https://github.com/kadrianne/wedding-website-backend',
      tech: ['JavaScript', 'HTML', 'CSS', 'SASS', 'Bootstrap', 'Ruby', 'Rails', 'PostgreSQL'],
      demo: 'https://www.loom.com/share/d887646dd15f4f69bcf224b9b66bf976',
      description: 'A personal website to provide wedding guests with event details and RSVP functionality and access to an admin dashboard for guest management.',
      isMobile: false
    }],
    group: [{
      id: 4,
      title: 'Trash Panda',
      image: 'trashPanda',
      link: 'https://trash-panda-shehacks.web.app/',
      frontend: 'https://github.com/tiffanynk/trash-panda-fe',
      backend: 'https://github.com/tiffanynk/trash-panda-be',
      tech: ['React', 'Node.js', 'Express.js', 'SASS', 'CSS', 'Bootstrap', 'Google Maps', 'Google Firestore'],
      demo: 'https://www.youtube.com/watch?v=-CKjlRJCqoM&feature=youtu.be',
      description: 'She/Hacks 2020 Top 20 Teams & Best Use of Google Cloud – No one likes a litterer! Trash Panda helps users find the nearest recycling and trash bin locations. Take it one step further and earn points for every time you recycle or add a new location to the map.',
      isMobile: true
    },
    {
      id: 5,
      title: 'Code for Denver Website',
      image: 'cfd',
      frontend: 'https://github.com/codefordenver/codefordenver.org/tree/convert-to-jekyll',
      tech: ['JavaScript', 'HTML', 'CSS', 'Ruby', 'Jekyll'],
      description: 'Ongoing open-source project for the redesign of Code for Denver\'s existing website.',
      isMobile: false
    }]
  }
}

export default projects