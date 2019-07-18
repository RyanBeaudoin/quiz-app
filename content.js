let questionNum = 0;
let score = 0;
let error = 0;
let resultsNotification = '';
let feedbackNotification = '';
let currentIndex = 0;

const IMAGES = [{
  imgSrc: 'https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500',
  imgAlt: 'Starting Page image'
},
{
  imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfa20nBhI6A9erHz9I_WqxTcwLbK9GluZEYmZEvz7y08RUhCMRw',
  imgAlt: 'Correct Answer!'
},
{
  imgSrc: 'https://i.dlpng.com/static/png/435434_preview.png',
  imgAlt: 'Wrong Answer'
},
{
  imgSrc: 'http://fixthephoto.com/blog/UserFiles/family-dinner.jpg',
  imgAlt: 'The End'
}
];

const STORE = [
  {
    text: 'How much do you enjoy sleeping?',
    choices: ['I sleep until it’s time to go to the club.', 'It’s what I look forward to.', 'I don\'t sleep!', 'Can I just sleep all day?'],
    answer: 'I don\'t sleep!',
    explanation: 'This is one of the biggest changes! Sleeping in? Not anymore. Get used to the idea of waking up in the middle of the night to change a diaper or provide assurance that there are no monsters in the closet!'
  },
  {  
    text: 'What fun activities would you do with your newborn baby?',
    choices: ['Amusement parks, the zoo...the fun stuff', 'Nothing. Babies only eat, sleep, and poop.', 'Road trip!!!', 'Can a baby go into a bar if they aren’t drinking?'],
    answer: 'Nothing. Babies only eat, sleep, and poop.',
    explanation: 'Newborns sleep a lot and drink milk constantly. Getting into a groove takes time, but it won\'t last long, so get ready to chase them, read books, and play with cool toys!'
  },
  {
    text: 'Are you ok with changing dirty diapers?',
    choices: ['Nothing grosses me out.', 'Where’s the barf bag?', 'I’ll just sit them on the toilet.', 'It can’t be that bad.'],
    answer: 'Nothing grosses me out.',
    explanation: 'There\'s no way to sugar coat this one! Let\'s just say that the day your child is potty trained, you are so proud of their accomplishment and relieved that the diaper stage is over!'
  },
  {
    text: 'What kind of shows do you watch on TV?',
    choices: ['Whatever game is on at the bar.', 'Whatever is already on.', 'Can\'t stop me from watching my favorite shows.', 'I’m playing video games 24/7.'],
    answer: 'Whatever is already on.',
    explanation: 'You no longer own the rights to your TV. In all honesty, I have no clue what parents did before television and the internet! It can be a lifesaver!'
  },
  {  
    text: 'How well do you handle stress?',
    choices: ['Calm, cool, and collected!', 'I tend to curl into fetal position.', 'I don\'t', 'I avoid stressful situation at all cost.'],
    answer: 'Calm, cool, and collected!',
    explanation: 'Being a parent is not always smiles, giggles, and cuddles. It can be very stressful, and everyone handles stress differently. The important thing is to roll with the punches and do your best!'
  },
  {
    text: 'Does screaming bother you?',
    choices: ['No, I’m in a rock band.', 'As long as it’s not annoying.', 'If someone’s screaming, just ask them to stop.', 'Let it all out!'],
    answer: 'Let it all out!',
    explanation: 'Babies are going to scream and once they are done screaming, they\'ll start screaming again! It\'s important to understand that a baby crying is normal and just do your best to comfort them.'
  },
  {  
    text: 'If you just found out that you were having a kid, how would you feel?',
    choices: ['Not something I’d want to hear right now.', 'RUN!!!', 'Anxious, scared, anxious and anxious.', 'I’m calling everyone to tell the great news!'],
    answer: 'I’m calling everyone to tell the great news!',
    explanation: 'While the initial news can be shocking, you\'re overall reaction should be positive! You\'re about to have a baby and expand your family. It is a very exciting time filled with new challenges!'
  },
  {  
    text: 'Do you have a support system to help when times are stressful?',
    choices: ['Just moved to a new town.', 'I think I have a friend that has a kid?', 'Family is everything.', 'I can do it on my own.'],
    answer: 'Family is everything.',
    explanation: 'You\'ll need help! The old saying, \"It take a village to raise a child\" is the best way to summarize parenthood. Getting an uninterrupted nap can be the difference between sanity and insanity!'
  },
  {  
    text: 'How important is your career to you?',
    choices: ['You mean work?', 'I\’ll be the CEO of my company some day.', 'Work will always take 2nd place to my family.', 'Overtime is where the money is at!'],
    answer: 'Work will always take 2nd place to my family.',
    explanation: 'Being a parent is a full-time job. It\'s important to have a life outside of your family, but your family will always be there for you and they will need the same from you.'
  },
  {  
    text: 'Do you think you are ready to have a baby?',
    choices: ['There\’s still so much I want to accomplish.', 'What time does the pet store open?', 'Not at this time.', 'I don’t know, but I’d love to have a kid someday.'],
    answer: 'I don’t know, but I’d love to have a kid someday.',
    explanation: 'Let\'s be honest, how can you expect to be ready for something that you have yet to experience. When you make that choice, be prepared to commit to your decision and do the best you can!'
  },
];

const total = STORE.length;