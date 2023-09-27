import './App.css';
import Credential from './components/namespaces/Credentials';

const labelText:Credential.Icredential<string>[] = [{labelText: "Enter Your First Name:", id: "first-name"}, {labelText: "Enter Your Last Name:", id: "last-name"}, {labelText: "Enter Your Email:", id:"email"}, {labelText: "Create a New Passwword:", id:"new-password"}];

const credentialObject = new Credential.CredentialClass<Credential.Icredential<string>>(labelText);
const labelJSX = credentialObject.getAllCredentials();

const App = ():JSX.Element => {
  return (
    <>
      <h1>Registration Form</h1>
      <p>Please fill out this form with the required information</p>
      <form action="#" method="post">
        <fieldset className="border-white border-2">
          {labelJSX}
        </fieldset>
        <fieldset className="border-white border-2"></fieldset>
        <fieldset className="border-white border-2"></fieldset>
      </form>
    </>
  );
};

export default App;
