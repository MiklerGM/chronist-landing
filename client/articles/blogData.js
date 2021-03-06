const reqRU = require.context('./postsRU', false, /\.md$/);
const reqEN = require.context('./postsEN', false, /\.md$/);

const sourceRU = {};
reqRU.keys().forEach((key) => { sourceRU[key.replace('./', '').replace('.md', '')] = reqRU(key).default; });

const sourceEN = {};
reqEN.keys().forEach((key) => { sourceEN[key.replace('./', '').replace('.md', '')] = reqEN(key).default; });


const urls = [];
reqEN.keys().reverse().forEach((fileName, id) => {
  urls[id] = fileName.replace('./', '').replace('.md', '');
});
const lastUrls = urls.slice(0, 3);

const newUrls = [];
reqEN.keys().reverse().forEach((fileName, id) => {
  newUrls[id] = fileName;
});

export {
  urls, lastUrls, sourceEN, sourceRU
};
