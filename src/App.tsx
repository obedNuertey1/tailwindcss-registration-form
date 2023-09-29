import './App.css';
import AccountTermsComponent from './components/AccountTermsComponent';
import BiometricComponent from './components/BiometricComponent';
import CredentialsComponent from './components/CredentialsComponent';
import FormDescriptComponent from './components/FormDescriptComponent';
import SubmitButtonComponent from './components/SubmitButtonComponent';

// Main Form
const App = ():JSX.Element => {
  return (
    <>
      <FormDescriptComponent />
      <form className="mt-0 mb-0 mr-auto ml-auto max-w-lg min-w-min w-7/12 p-5" action="#" method="post">
        <fieldset className="pt-5 pb-5 border-b-2 border-b-gray-700">
          <CredentialsComponent />
        </fieldset>
        <fieldset className="pt-5 pb-5 border-b-2 border-b-gray-700">
          <AccountTermsComponent />
        </fieldset>
        <fieldset className="pt-5 pb-5">
          <BiometricComponent />
        </fieldset>
        <SubmitButtonComponent />
      </form>
    </>
  );
};

export default App;
