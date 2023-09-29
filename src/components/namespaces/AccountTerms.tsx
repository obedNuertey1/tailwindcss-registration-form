import React from "react";
namespace AccountTerms{
    export interface IaccountField<T>{
        id: string;
        type: string;
        name ?: string;
        labelText ?: string;
        innerJSX ?: T;
    };

    type AccountTermsfieldJSX = JSX.Element[];

    export class AccountField<U extends IaccountField<JSX.Element>>{

        private accountTermsArray: U[];
        
        constructor(accountTermsArray:U[]){
            this.accountTermsArray = accountTermsArray;
        }

        public getAllAccountFields():AccountTermsfieldJSX{
            return this.accountTermsArray.map((elem:U):JSX.Element=>{
                return (
                    <label className="block mt-3 mb-3" htmlFor={elem.id}><input className="outline-blue-950 pl-1 pr-1 rounded m-0 mr-1.5 bg-input-textarea-color border-input-textarea-color border border-solid" id={elem.id} type={elem.type} name={elem.name} /> {(Boolean(elem.labelText))?elem.labelText:<>{elem.innerJSX}</>}</label>
                );
            });
        }

    };

};
export default AccountTerms;