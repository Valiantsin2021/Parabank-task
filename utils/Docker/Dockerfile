ARG PW_VERSION=next
FROM mcr.microsoft.com/playwright:$PW_VERSION-jammy
LABEL version=$PW_VERSION
WORKDIR /app
RUN npx playwright install chrome
CMD ["npm", "t"]