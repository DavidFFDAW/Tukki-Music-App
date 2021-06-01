export class ENV {
    NEST_PORT: number;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    CECA: {
      key: string;
      MerchantID: string;
      AcquirerBIN: string;
      TerminalID: string;
      TipoMoneda: string;
      Exponente: '2';
      Cifrado: string;
      Idioma: 1;
      URL_OK: string;
      URL_NOK: string;
      CECA_URL: string;
    };
  }