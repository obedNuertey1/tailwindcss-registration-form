import './App.css';
import Credential from './components/namespaces/Credentials';

const labelText:Credential.Icredential<string>[] = [{labelText: "Enter Your First Name:", id: "first-name", type: "text"}, {labelText: "Enter Your Last Name:", id: "last-name", type: "text"}, {labelText: "Enter Your Email:", id:"email", type: "email"}, {labelText: "Create a New Passwword:", id:"new-password", type:"password"}];

const credentialObject = new Credential.CredentialClass<Credential.Icredential<string>>(labelText);
const labelJSX = credentialObject.getAllCredentials();

const App = ():JSX.Element => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Registration Form</h1>
      <p className="mb-2">Please fill out this form with the required information</p>
      <form action="#" method="post">
        <fieldset className="border-white border-2 p-2">
          {labelJSX}
        </fieldset>
        <fieldset className="border-white border-2"></fieldset>
        <fieldset className="border-white border-2"></fieldset>
      </form>
    </>
  );
};

export default App;
