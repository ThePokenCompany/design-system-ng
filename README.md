# Welcome to @thepokencompany/design-system 👋

## 🚀 Usage

Install

Generate a token with the `read:packages` permission [here](https://github.com/settings/tokens/new)

Add the following lines to your `.npmrc` (usually located at `~/.npmrc`)

```
@thepokencompany:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:always-auth=true
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

```sh
yarn add @thepokencompany/design-system
```

## 🤓 Test in local

```sh
yarn build
yarn link
```

In targeted local repository

```sh
yarn link "@thepokencompany/design-system"
```

## 🎨 Run storybook

```sh
yarn start
```

## ✨ Format code style

```sh
yarn format
```

## 🚀 Deploy package

```sh
npm version [<newversion> | major | minor | patch]
git push origin main --tags
```
