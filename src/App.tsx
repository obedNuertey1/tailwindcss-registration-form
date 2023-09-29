import './App.css';
import AccountTermsComponent from './components/AccountTermsComponent';
import CredentialsComponent from './components/CredentialsComponent';

// Main Form
const App = ():JSX.Element => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 mt-4 ml-auto mr-auto text-center">Registration Form</h1>
      <p className="mb-4 mt-4 ml-auto mr-auto text-center">Please fill out this form with the required information</p>
      <form className="mt-0 mb-0 mr-auto ml-auto max-w-lg min-w-min w-7/12" action="#" method="post">
        <fieldset className="pt-5 pb-5 border-b-2 border-b-gray-700">
          <CredentialsComponent />
        </fieldset>
        <fieldset className="pt-5 pb-5 border-b-2 border-b-gray-700">
          <AccountTermsComponent />
        </fieldset>
        <fieldset className="pt-5 pb-5">
          <label className="block mt-3 mb-3" htmlFor="profile-picture">Upload a profile picture: <input className="text-black outline-blue-950 pl-1 pr-1 rounded" id="profile-picture" type="file" /></label>
          <label className="block mt-3 mb-3" htmlFor="age">Input your age (years): <input  className="text-black outline-blue-950 pl-1 pr-1 rounded" id="age" type="number" min="13" max="120" /></label>
          <label className="block mt-3 mb-3" htmlFor="referrer">How did you hear about us?
            <select  className="text-black outline-blue-950 pl-1 pr-1 rounded" id="referrer">
              <option value="">(select one)</option>
              <option value="1">freeCodeCamp News</option>
              <option value="2">freeCodeCamp YouTube Channel</option>
              <option value="3">freeCodeCamp Forum</option>
              <option value="4">Other</option>
            </select>
          </label>
          <label className="block mt-3 mb-3" htmlFor="bio">Provide a bio:
            <textarea id="bio" className="outline-blue-950 pl-1 pr-1 rounded m-0 mt-2.5  w-full  bg-input-textarea-color border-input-textarea-color border border-solid" rows={3} cols={30} placeholder="I like coding on the beach..."></textarea>
          </label>
        </fieldset>
        <div className="flex justify-center items-center mt-1">
          <input className="bg-white text-black p-1 text-center w-max rounded hover:cursor-pointer flex justify-center shadow-black shadow-sm hover:shadow-none hover:border-solid hover:border-2 hover:border-white hover:bg-custom-bg hover:text-white" type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default App;
