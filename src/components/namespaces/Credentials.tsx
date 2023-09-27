namespace Credential{
    export interface Icredential<T> {
        labelText: string;
        id: T;
        type: string;
        pattern ?: string;
        text ?: string;
    };

    
    type credentialJSX = JSX.Element[];

    export class CredentialClass <U extends Icredential<string>>{
        private labelText: U[];

        constructor(labelText:U[]){
            this.labelText = labelText;
        };

        public getAllCredentialFields():credentialJSX{
            return this.labelText.map((elem:U):JSX.Element=>{
                return (
                    <label className="block mt-3 mb-3" htmlFor={elem.id}>{elem.labelText} <input required pattern={elem.pattern} className="text-black outline-blue-950 pl-1 pr-1 rounded" id={elem.id} type={elem.type} /></label>
                );
            })
        }
        
    };
};

export default Credential;