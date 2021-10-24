namespace Config {
  const getEnvironmentVariable = (key: string): string | null => {
    return process.env[key] ?? null;
  }


  export const WEB_FRONT_URL = getEnvironmentVariable('WEB_FRONT_URL');
}

export default  Config;