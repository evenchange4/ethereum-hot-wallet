FROM node:10.8.0
WORKDIR /app
COPY . .

# RUN apk add --no-cache git python
RUN yarn install --pure-lockfile
RUN yarn run build
RUN yarn install --pure-lockfile --production

ENV NODE_ENV=production
ENV DEBUG=server
ENV PORT=4000

HEALTHCHECK --start-period=30s --interval=30s --timeout=5s \
  CMD curl --fail http://localhost:${PORT}/health || exit 1

CMD npm start
