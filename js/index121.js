

const games  = ['Grand Theft Auto V', 'The Last of Us Remastered', 'Persona 5', 'Metal Gear Solid V', 'Uncharted 4', 'Journey','Bloodborne','The Witcher 3','Diablo III'];

games[0] = 'FIFA 18';
games[3] = 'FIFA 17';
games[2] = 'FIFA 16';

for (let i = 0; i < games.length; i++) {
    console.log(`index ${i}: ${games[i]}`);    
}
