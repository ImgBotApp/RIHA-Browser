export class System {
  id: number;
  details: any;

  setData(system): void {
    this.id = system.id;
    this.details = Object.assign(this.details, system.details);
  }

  setStatus(statusCode): void {
    this.details.status.code = statusCode;
    switch (statusCode) {
      case 0: this.details.status.description = 'asutamisel'
            break;
      case 1: this.details.status.description = 'kasutusel'
            break;
      case 2: this.details.status.description = 'lõpetatud'
            break;
    }
  }

  isUsed(): boolean{
    return this.details.status.code === 1;
  }

  constructor(){
    this.id = null;
    this.details = {
      status: {
        code: null,
        description: 'määramata staatuses'
      }
    };
  }
}
