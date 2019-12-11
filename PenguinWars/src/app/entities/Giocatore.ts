import { Pinguino } from './Pinguino';

export class Giocatore {
    nome: string;
    mazzo: Array<Pinguino>;
    carteInMano: Array<Pinguino>;
    carteInCampo: Array<Pinguino>;
    cimitero: Array<Pinguino>;
    vita: number;

    mescolaMazzo(){}
    riceviAttacco( pinguinoAttacco: Pinguino, pinguinoDifesa: Pinguino){

    }
    getVita(): number{
        return this.vita;
    }
    getCarteInMano(): Array<Pinguino>{
        return null;
    }
    getVari(){
        
    }
}