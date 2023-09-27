import Credential from "./namespaces/Credentials";


export default ():JSX.Element => {
    const credentialArray:Credential.Icredential<string>[] = [
        {labelText: "Enter Your First Name:", id: "first-name", type: "text"},
        {labelText: "Enter Your Last Name:", id: "last-name", type: "text"},
        {labelText: "Enter Your Email:", id:"email", type: "email"},
        {labelText: "Create a New Passwword:", id:"new-password", type:"password", pattern: "[a-z0-5]{8,}"}
    ];
    
    const credentialObject = new Credential.CredentialClass<Credential.Icredential<string>>(credentialArray);
    const credentialJSX = credentialObject.getAllCredentialFields();

    return(
        <>
            {credentialJSX}
        </>
    );
};