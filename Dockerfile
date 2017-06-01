# Dockerfile (tag: v3)
FROM mhart/alpine-node:6
ADD . /landing
WORKDIR /landing
RUN npm install
RUN npm run build
ENV NODE_ENV=production
ENV PORT=3030
CMD [ "npm", "run", "serve" ]
EXPOSE 3030