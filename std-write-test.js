if (Meteor.isServer) {

  console.log('I expect to see a dot every 300ms');

  setInterval(function() {
    process.stdout.write('.');
  }, 300);

  setTimeout(function() {
    process.stdout.write('\n');
    console.log('But I actually see 9 after 3 seconds.');
  }, 3000);

}
