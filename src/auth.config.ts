import { isPlatform } from "@ionic/react";

export const domain = "dev-3ylt35nh.us.auth0.com";
export const clientId = "hKZ0uIBtoQJo5DdIxIKV9NbtFU6G8EeE";
const appId = "io.app.4155";

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('ios') || isPlatform('android');

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:3000';
