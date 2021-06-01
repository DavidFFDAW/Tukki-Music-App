import { ENV } from './env';

export const env: ENV = {
  NEST_PORT: 3000,
  DB_HOST: '146.59.159.40',
  DB_PORT: 3360,
  DB_USERNAME: 'davidff',
  DB_PASSWORD: 'root',
  DB_DATABASE: 'tukki_app',
  CECA: {
    key: 'XXX',
    MerchantID: '3426597',
    AcquirerBIN: '002342554013',
    TerminalID: '0000203',
    TipoMoneda: '978',
    Exponente: '2',
    Cifrado: 'SHA2',
    Idioma: 1,
    URL_OK: 'https://direccion/fotos/enroll-ok',
    URL_NOK: 'https://direccion/fotos/enroll-nok',
    CECA_URL: 'https://pgw.ceca.es/tpvweb/tpv/compra.action',
  },
};