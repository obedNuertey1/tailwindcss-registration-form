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
                    <label className="block mt-3 mb-3" htmlFor={elem.id}>{elem.labelText} <input required pattern={elem.pattern} className="outline-blue-950 pl-1 pr-1 rounded m-0 mt-2.5  w-full  bg-input-textarea-color border-input-textarea-color border border-solid" id={elem.id} type={elem.type} /></label>
                );
            })
        }
        
    };
};

export default Credential;