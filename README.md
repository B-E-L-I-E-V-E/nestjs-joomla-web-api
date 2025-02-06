<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://blog.believablecreations.com/images/blog/plgins/nestjs-joomla-web-api.svg" width="620" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://x.com/helpUsBelieve" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Joomla API Integration for NestJS

## Description
The **Joomla API Integration for NestJS** is a powerful and flexible NestJS plugin that enables seamless communication with Joomla's API. Designed for developers building applications that require data retrieval and management from Joomla-based websites, this plugin simplifies API interactions by providing an injectable service that handles authentication and request management.

## Key Features
✅ **Easy Setup** – Quickly integrate Joomla's API with a simple module configuration using `JoomlaModule.register()`.  
✅ **Dynamic Configuration** – Supports environment variables (`.env`) for flexible API management across different environments.  
✅ **Dependency Injection** – Provides a ready-to-use `JoomlaService`, making API calls effortless within NestJS applications.  
✅ **Secure API Access** – Uses API keys to authenticate requests securely.  
✅ **Extendable & Scalable** – Works with existing NestJS modules, allowing developers to build custom services using Joomla data.

## How It Works
1. Install the package and register `JoomlaModule` in your `AppModule`.
2. Inject `JoomlaService` in controllers or services to fetch Joomla articles, categories, users, and more.
3. Enjoy seamless, scalable Joomla API interactions in your NestJS application.

This plugin is ideal for developers looking to integrate Joomla-based content and functionalities into NestJS applications while maintaining clean, modular, and maintainable code. 🚀

## Installation

Install the package using npm or yarn:

```sh
npm install nestjs-joomla-api
# or
yarn add nestjs-joomla-api

```

Usage
Import the Module
Register the module in your AppModule:

```ts
import { Module } from '@nestjs/common';
import { JoomlaModule } from 'nestjs-joomla-api';

@Module({
  imports: [
    JoomlaModule.register({
      baseUrl: 'https://your-joomla-site.com/api',
      apiKey: 'YOUR_JOOMLA_API_KEY', // Or use environment variables
    }),
  ],
})
export class AppModule {}
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
