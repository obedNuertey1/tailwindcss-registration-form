import AccountTerms from "./namespaces/AccountTerms";

export default ():JSX.Element => {
    const accountArray:AccountTerms.IaccountField<JSX.Element>[] = [
        {labelText: "Personal Account", type: "radio", name: "account-type", id:"personal-account"},
        {labelText: "Business Account", type:"radio", name: "account-type", id:"business-account"},
        {
            type: "checkbox",
            id: "terms-and-conditions",
            innerJSX: <>I accept the <a className="underline hover:text-blue-950" href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a></>
        }
    ];
    
    const accountTermsObject = new AccountTerms.AccountField<AccountTerms.IaccountField<JSX.Element>>(accountArray);
    const accountJSX = accountTermsObject.getAllAccountFields();

    return (
        <>
            {accountJSX}
        </>
    );
};