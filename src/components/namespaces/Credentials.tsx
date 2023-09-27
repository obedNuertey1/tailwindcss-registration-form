namespace Credential{
    export interface Icredential<T> {
        labelText: String;
        id: T;
      };

      
    type credentialJSX = JSX.Element[];

    export class CredentialClass <U extends Icredential<string>>{
        private labelText: U[];

        constructor(labelText:U[]){
            this.labelText = labelText;
        };

        public getAllCredentials():credentialJSX{
            return this.labelText.map((elem:U):JSX.Element=>{
                return (
                  <label className="block" htmlFor={elem.id}>{elem.labelText} <input id={elem.id}/></label>
                );
            })
        }
        
    };
};

export default Credential;