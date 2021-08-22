const farmAnimals = 'cow horse sheep pig chicken';

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ")

const [Bessie, , Dolly, Babe, Little] = farmAnimals.split(" ")
const [black_and_white, , black, pink, ] = farmAnimals.split(" ")

const [red, orange, yellow, green, blue, indigo, violet] = colors 


 const firstLetter = colors.map(
    color => {
        return color[0]
    })


  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


colors['ingigo'] = colors['indg'] 


// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner