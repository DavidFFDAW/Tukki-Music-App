import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private names : string[] = ['Pepe','Paco','Vinicious','MBappé'];
  constructor(){}
  
  getNames(): string[] {
    return this.names;
  }
}
