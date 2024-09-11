export class Idictionary
{
      word?:string;
      phonetics?:any;
      meanings?:any;
      license?:any;
      sourceUrls?:string[];
      constructor(word?:string,phonetics?:any,meanings?:any,license?:any,sourceUrls?:string[])
      {
     this.word=word;      
     this.phonetics=phonetics;  
     this.meanings=meanings;      
     this.license=license;       
     this.sourceUrls=sourceUrls;       
      }
}