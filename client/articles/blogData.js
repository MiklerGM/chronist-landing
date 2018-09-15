const reqRU = require.context('./postsRU', false, /\.md$/);
const reqEN = require.context('./postsEN', false, /\.md$/);

const urls = [];
reqEN.keys().reverse().forEach((fileName, id) => {
  urls[id] = fileName.replace('./', '').replace('.md', '');
});
const lastUrls = urls.slice(0, 3);

export { urls, lastUrls, reqRU, reqEN };
