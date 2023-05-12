import { BelvoClient, Belvo, BelvoEnvironment } from '@fern-api/belvo';

void main();

async function main() {
  const belvo = new BelvoClient({
    secretId: 'YOUR_SECRET_ID',
    secretPassword: 'YOUR_SECRET_PASSWORD',
    environment: BelvoEnvironment.Sandbox,
  });

  const link = await belvo.links.registerLink({
    body: {
      institution: 'banamex_mx_retail',
      username: 'username',
      password: 'password',
      accessMode: Belvo.EnumLinkAccessModeRequest.Single,
      credentialsStorage: '30d',
    },
  });
}

