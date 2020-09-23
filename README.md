# Sushiswap Trading Frontend

This directory is a brief example of a fully featured frontend framework for Sushiswap. It is currently hosted on vercel for high availability serverless purposes.

To begin:

copy .env.template to .env

```shell
$ npm install 
$ npm run dev
```

To build (obfuscate and compress css):

```shell
$ npm run build
$ serve -s
```

## Features

This project contains frontend components for the following screens:

- Overview (Modules: Search, Liquidity Chart, Volume Chart, Top Tokens List, Top Pairs List, Transactions List)
- Tokens (Modules: Top Tokens List)
- Token (Modules: Total Liquidity Number, Volume Number, Price Chart, Top Pairs, Transactions, Token Information)
- Pairs (Modules: Top Pairs List)
- Pair (Modules: Total Liquidity Number, Volume Number, Fees Number, Pooled Tokens, Charts, Transactions List, Pair Information)
- Accounts (Modules: Wallet Analytics, Load Account Details, Saved Accounts, Top Liquidity Positions)
- Swap (Modules: Warning Modal, From, To, Enter an amount, Select Token Modal, Settings, Additional Links)
- Pool (Modules: Add Liquidity)
- Add Liquidity (Modules: Input, Input, Prices and Pool Share, Enter, Confirmation Modal)
- Landing Page
- Link to Docs
- Link to Discord
- Link to Twitter
- Integration with web3 and metamask

## Future Development

- Additional Styles:
- Sushiswap Canon
- Sushiswap Future
- Sushiswap Neumorphic

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/vercel/tree/master/examples/create-react-app-functions)

_Live Example: https://create-react-app.now-examples.now.sh/_

### How We Created This Example

To get started with React, along with [Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction), with Vercel, you can use the [Create-React-App CLI](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to initialize the project:

```shell
$ npx create-react-app my-app
```

### Deploying From Your Terminal

You can deploy your new React project, along with [Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction), with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```
