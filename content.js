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
    imgSrc: 'https://s3.eu-central-1.amazonaws.com/sol-assets/uploads/public/5ae/093/790/thumb_67150_300_300_0_0_crop.jpg',
    imgAlt: 'no sleep image',
    choices: ['I sleep until it’s time to go to the club.', 'It’s what I look forward to most when I wake up.', 'I only sleep when there is nothing else to do.', 'I wish I could sleep all day.'],
    answer: 'I only sleep when there is nothing else to do.',
    explanation: 'This is one of the biggest changes! Sleeping in? Not anymore. Get used to the idea of waking up in the middle of the night to change a diaper or provide assurance that there are no monsters in the closet!'
  },
  {  
    text: 'What kind of fun activities would you do with your newborn baby?',
    imgSrc: 'https://image.freepik.com/free-vector/cartoon-baby-sleeping_61878-356.jpg',
    imgAlt: 'sleeping children image',
    choices: ['All of the fun stuff! Amusement parks, the zoo, etc…', 'Hibernate. All babies do is sleep, eat, and poop.', 'Road trip!!!', 'Can a baby go into a bar if they aren’t planning to drink?'],
    answer: 'Hibernate. All babies do is sleep, eat, and poop.',
    explanation: 'Even with all of the changes that come with being a new parent, you are limited on the newborn friendly activies. Newborns sleep a lot throughout the day, and drink a ton of milk. Getting into a groove takes time, but once you hit your stride and your baby starts to interact with you, everything changes. Get ready to chase them, read books, and play with cool toys!'
  },
  {
    text: 'Are you ok with changing dirty diapers?',
    imgSrc: 'https://media.istockphoto.com/vectors/dirty-diaper-vector-id696342376?k=6&m=696342376&s=612x612&w=0&h=fBfHl5aUwDE0VISnqkelcaShM6iBvageIgiwNvBnVYM=',
    imgAlt: 'dirty diaper image',
    choices: ['Nothing grosses me out.', 'Where’s the barf bag?', 'I’ll just sit them on the toilet.', 'It can’t be that bad.'],
    answer: 'Nothing grosses me out.',
    explanation: 'There\'s no way to sugar coat this one! A newborns\' digestive system is growing and their primary source of nutrition is liquid, so as you can imagine, the outcome isn\'t always that pretty! If you think that\'s bad wait until they start eating solid foods! The day your child becomes potty trained, you are so proud of their accomplishment and relieved that the diaper stage is over!'
  },
  {
    text: 'What kind of shows do you watch on TV?',
    imgSrc: 'https://www.kidsworldfun.com/blog/wp-content/uploads/2014/05/kids-watching-tv.jpg',
    imgAlt: 'watching tv image',
    choices: ['Whatever game is on at the bar.', 'Whatever is already on.', 'No one can stop me from watching my favorites.', 'I’m playing video games 24/7.'],
    answer: 'Whatever is already on.',
    explanation: 'You no longer own the rights to your TV. It\'s now property of your children. You can always rely on their favorite cartoon character to calm a tantrum, but make sure you keep tabs on the remote...it will become more important than ever! In all honesty, I have no clue what parents did before television and youTube! It can be a lifesaver!'
  },
  {  
    text: 'How well do you handle stress?',
    imgSrc: 'https://i.pinimg.com/originals/37/22/f4/3722f4f24e79a1573a85d4ea9d32006a.jpg',
    imgAlt: 'stressful parent image',
    choices: ['Calm, cool, and collected, baby!', 'I tend to curl into fetal position.', 'I have a binder with standard operating procedures for any incident that should arise.', 'I avoid stressful situation at all cost.'],
    answer: 'Calm, cool, and collected, baby!',
    explanation: 'Being a parent is not always cute smiles, giggles, and cuddles. It can be very stressful. There will be times when your newborn is over tired, teething, or just upset and they are inconsolable. Everyone handles stress differently, and you just need to do the best you can. The important thing is to role with the punches and do your best!'
  },
  {
    text: 'Does screaming bother you?',
    imgSrc: 'https://i.pinimg.com/originals/44/85/49/44854989a9b9bd07e7cf9b33299cbadf.jpg',
    imgAlt: 'screaming baby image',
    choices: ['No, I’m in a rock band.', 'As long as it’s not annoying.', 'If someone’s screaming, just ask them to stop.', 'Let it all out!'],
    answer: 'Let it all out!',
    explanation: 'Babies are going to scream and once they are done screaming, they\'ll start screaming again! It\'s normal, but having a colicky baby can be a whole different story. It\'s important to understand that a baby crying is normal and just do your best to comfort them.'
  },
  {  
    text: 'If you just found out that you were having a kid, how would you feel?',
    imgSrc: 'https://www.heretohelp.bc.ca/sites/default/files/images/t2p-front-cover.jpg',
    imgAlt: 'happy parents image',
    choices: ['Not something I’d want to hear right now.', 'RUN!!!', 'Anxious, scared, anxious and anxious.', 'I’m calling everyone to tell the great news!'],
    answer: 'I’m calling everyone to tell the great news!',
    explanation: 'The reaction of hearing the big news can be different for everyone. While the initial news can be shocking, you\'re overall reaction should be positive! You\'re about to have a baby and expand your family. It is a very exciting time filled with new challenges and new experiences!'
  },
  {  
    text: 'Do you have a support system to help when times are stressful?',
    imgSrc: 'https://static1.squarespace.com/static/568c3b5c0e4c114023d4ce8e/t/5888cd7c86e6c04d3a744b17/1485360522350/',
    imgAlt: 'friend and family image',
    choices: ['Just moved to a new town.', 'I think I have a friend that has a kid?', 'Family is everything.', 'I can do it on my own.'],
    answer: 'Family is everything.',
    explanation: 'Whether or not your support comes from relatives or friends, you will need help. The old saying, \"It take a village to raise a child\" is the best way to summarize being a parent. Raising and caring for a newborn is not easy. It can be stressful and exhausting. Being able to have an uninterrupted nap can be the difference between sanity and insanity!'
  },
  {  
    text: 'How important is your career to you?',
    imgSrc: 'https://everydaypower.com/wp-content/uploads/2018/02/busy-parents-min.jpg',
    imgAlt: 'working parent image',
    choices: ['You mean work?', 'I\’ll be the CEO of my company some day.', 'Work will always take 2nd place to my family.', 'Overtime is where the money is at!'],
    answer: 'Work will always take 2nd place to my family.',
    explanation: 'Whether you stay at home and watch the kids or come home after a busy day of work, the job does not end. Being a parents is a full-time job that requires attention and care. It is important to have a life outside of your family, but your family will always be there for you at the end of the day and they will need the same from you.'
  },
  {  
    text: 'Do you think you are ready to have a baby?',
    imgSrc: 'https://freedesignfile.com/upload/2017/08/happy-family-cartoon-illustration-vector-05.jpg',
    imgAlt: 'big family image',
    choices: ['There\’s still so much I want to accomplish.', 'What time does the pet store open?', 'Not at this time.', 'I don’t know, but I’d love to have a kid someday.'],
    answer: 'I don’t know, but I’d love to have a kid someday.',
    explanation: 'Let\'s be honest, how can you expect to be ready for something that you have yet to experience. You can never really be ready. The most important part is making a decision that you are comfortable with and be prepared to commit to your decision and do the best you can! You got this!'
  },
];

const total = STORE.length;