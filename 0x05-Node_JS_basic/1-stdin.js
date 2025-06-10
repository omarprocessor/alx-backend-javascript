process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  process.stdin.pause();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
