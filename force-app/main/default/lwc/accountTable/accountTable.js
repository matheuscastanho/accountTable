import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountLoader.getAccounts';

export default class AccountTable extends LightningElement {


    @track
	//array que guarda as linhas da tabela
    accounts=[];
	//array que define as colunas da tabela
    columns = [ {label:'AccountId', fieldName:'Id'},
                {label:'Name', fieldName:'Name'},
                {label:'Type', fieldName:'Type'},
                {label:'Owner', fieldName:'Owner'}];

	//metodo que deve utilizar o apex para ir buscar as contas, e chama o metodo que constroi a tabela
    @wire(getAccounts)
    wireAccounts({data,error}){
        if (data){
            this.buildTable(data);
        } else if (error) {
            console.log(error);
        }
    }

	//metodo que implementa a construção das linhas da tabela
    buildTable(accs){
        let acc=[]

        console.log(accs);
         for(var i = 0; i < accs.length; i++){
            acc[i]={Id:accs[i].Id, 
                Name:accs[i].Name, 
                Type:accs[i].Type, 
                Owner:accs[i].Owner.Name};
         }  
        
        this.accounts = acc;
      //por implementar (não é necessário fazer alterações ao HTML ou ao XML)
	  /*
	  Dicas:
	  - deve ser percorrido num ciclo as "accs" recebidas como parametro de entrada;
	  - as "accs" vêm mum formato de JSON, algo como [{c1:v1,c2:v2...},{c1:v1,c2:v2...},...] sendo "cx" um campo da conta, "vx" o respetivo valor, e {,,...} o objeto conta
	  - deve-se pegar em cada um destes valores e mapeá-lo no array das linhas de tabela, à coluna correta, algo como: { coluna1 : accs[i].c1,...}
	  - pretende-se com este exemplo praticar o tratamento de dados vindos de um lugar externo ao LWC e manejo dos mesmos a serem utilizados/apresentados de alguma forma, no caso numa tabela
	  */
    }
}
