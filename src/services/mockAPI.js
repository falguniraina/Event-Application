
let events = JSON.parse(localStorage.getItem('events')) || [
  {
    name: 'Event 1',
    startDate: '2024-10-02T10:00',
    endDate: '2024-10-02T12:00',
    location: 'New York',
    theme: 'Holiday',
    image: 'null',
    inviteeCount: 6,
    invitees: [
      { name: 'Alice', gender: 'female' },
      { name: 'Bob', gender: 'male' },
      { name: 'Charlie', gender: 'male' },
      { name: 'Diana', gender: 'female' },
      { name: 'Edward', gender: 'male' },
      { name: 'Fiona', gender: 'female' }, 
    ]
  },
  {
    name: 'Event 2',
    startDate: '2024-10-05T15:00',
    endDate: '2024-10-05T18:00',
    location: 'Virtual',
    theme: 'Minimal',
    image: 'null',
    inviteeCount: 6,
    invitees: [
      { name: 'Alice', gender: 'female' },
      { name: 'Bob', gender: 'male' },
      { name: 'Charlie', gender: 'male' },
      { name: 'Diana', gender: 'female' },
      { name: 'Edward', gender: 'male' },
      { name: 'Fiona', gender: 'female' },
    ],
  },
];


export const addEventToList = (event) => {
  event.invitees = event.invitees || []; 
  event.image = event.image || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fevent&psig=AOvVaw0QWdQlL-dWE-4El27CZyA4&ust=1728151989233000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMj7rv2p9YgDFQAAAAAdAAAAABAE'; // Default image if not provided
  events.push(event);
  localStorage.setItem('events', JSON.stringify(events));
};


export const getEvents = () => {
  return events;
};
