import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.ninjabunny.combobook',
  appName: 'ComboBook',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
