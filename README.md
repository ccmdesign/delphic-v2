# Execute project for development

## Prerequisites
- Create a Github personal access token as shown on: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

## Authenticating
You'll need to export the created token into your session.
On the terminal, where you'll run the project, run the following command replacing `<token>` with the personal access token you just created:

```
export NPM_TOKEN="<token>"
```

You have to do this everytime you open a new terminal session.

# Execute project in production
- Add the token to the environment variables with the name `NPM_TOKEN` and run the build as usual.


#### References
- https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow
- https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token


# More information
## Other authentication options
### Opção 1:
- Edit the .npmrc file replacing `${NPM_TOKEN}` on line `//npm.pkg.github.com/:_authToken=${NPM_TOKEN}` with the personal access token.

**WARNING**: Do not commit your changes to `.npmrc` file with your personal token!

### Opção 2:
- On your terminal, log in npm with the following command:

```
npm login --scope=@ccmdesign --registry=https://npm.pkg.github.com
```

It will ask for your login credentials as follow:
- `Username` will be your Github username;
- `Password` will be your personal access token created previously;
- `Email` is your public email address.
