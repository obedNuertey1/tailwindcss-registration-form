namespace AccountTerms{
    export interface IaccountField<T>{
        id: string;
        type: string;
        name ?: string;
        labelText ?: string;
        innerJSX ?: T;
    };

    type fieldJSX = JSX.Element[];

    export class AccountField<U extends IaccountField<JSX.Element>>{

        private accountTermsArray: U[];
        
        constructor(accountTermsArray:U[]){
            this.accountTermsArray = accountTermsArray;
        }

        public getAllAccountFields():fieldJSX{
            return this.accountTermsArray.map((elem:U):JSX.Element=>{
                return (
                    <label className="block mt-3 mb-3" htmlFor={elem.id}><input className="text-black outline-blue-950 pl-1 pr-1 rounded" id={elem.id} type={elem.type} name={elem.name} /> {(Boolean(elem.labelText))?elem.labelText:<>{elem.innerJSX}</>}</label>
                );
            });
        }

    };

};
export default AccountTerms;