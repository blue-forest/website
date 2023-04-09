FROM node:12 AS build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM theblueforest/dropin:static-runner
COPY --from=build /app/dist /app
