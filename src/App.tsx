import './App.css';
import AccountTermsComponent from './components/AccountTermsComponent';
import CredentialsComponent from './components/CredentialsComponent';

// Main Form
const App = ():JSX.Element => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Registration Form</h1>
      <p className="mb-2">Please fill out this form with the required information</p>
      <form action="#" method="post">
        <fieldset className="border-white border-2 p-2">
          <CredentialsComponent />
        </fieldset>
        <fieldset className="border-white border-2 p-2">
          <AccountTermsComponent />
        </fieldset>
        <fieldset className="border-white border-2 p-2"></fieldset>
        <div className="flex justify-center items-center mt-1">
          <input className="bg-white text-black p-1 text-center w-max rounded hover:cursor-pointer flex justify-center shadow-black shadow-sm hover:shadow-none hover:border-solid hover:border-2 hover:border-white hover:bg-custom-bg hover:text-white" type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default App;
