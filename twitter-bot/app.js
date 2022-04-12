import TwitterLite from 'twitter-lite';

// An authenticated client fot the app
// const app = new TwitterLite({
//   version: 2,
//   extension: false,
//   bearer_token: process.env.BEARER_TOKEN,
// });

// An authenticated client for an user
const user = new TwitterLite({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCES_TOKEN,
  access_token_secret: process.env.ACCES_TOKEN_SECRET,
});

const parametrs = {
  language: 'en',
  track: '#demonslayer,#blackclover,#jujutsukaiser,#boruto',
};

user
  .stream('statuses/filter', parametrs)
  .on('start', (response) => console.log('start'))
  .on('date', async (data) => console.log('got data', data.id_str))
  .on('error', (error) => console.log('error 💥', error))
  .on('end', (response) => console.log('end'));

const url = `statuses/retweet/${data.id_str}`;
await user.post(url);
