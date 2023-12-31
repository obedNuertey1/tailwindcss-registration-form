import './App.css';
import { ComponentType, Suspense, lazy, useLayoutEffect } from 'react';
// import waiting from './components/functions/waiting';
import loadingAnimation from './components/functions/loadingAnimation';

const SubmitButtonComponent:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
  // await waiting(10000);
  return await (import("./components/SubmitButtonComponent"));
})

const FormDescriptComponent:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
  // await waiting(9000);
  return await (import("./components/FormDescriptComponent"));
});

const BiometricComponent:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
  // await waiting(8000);
  return await (import("./components/BiometricComponent"));
})


const CredentialsComponent:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
  // await waiting(7000);
  return await import("./components/CredentialsComponent");
});

const AccountTermsComponent:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
  // await waiting(5000);
  return await import("./components/AccountTermsComponent");
});

// Main Form
const App = ():JSX.Element => {
  useLayoutEffect(()=>{
    for(let i:number = 0; i < 5; i++){
      loadingAnimation(`.loading${i}`);
    }
  }, []);


  return (
    <>
      <Suspense fallback={<h2 className="text-center loading0">Loading</h2>}>
        <FormDescriptComponent />
      </Suspense>
      <form className="mt-0 mb-0 mr-auto ml-auto max-w-lg min-w-min w-7/12 p-5" action="#" method="post">
        <fieldset className="pt-5 pb-5 border-b-2 border-b-gray-700">
          <Suspense fallback={<h2 className="text-center loading1">Loading</h2>}>
            <CredentialsComponent />
          </Suspense>
        </fieldset>
        <fieldset className="pt-5 pb-5 border-b-2 border-b-gray-700">
          <Suspense fallback={<h2 className="text-center loading2">Loading</h2>}>
            <AccountTermsComponent />
          </Suspense>
        </fieldset>
        <fieldset className="pt-5 pb-5">
          <Suspense fallback={<h2 className="text-center loading3">Loading</h2>}>
            <BiometricComponent />
          </Suspense>
        </fieldset>
        <Suspense fallback={<h2 className="text-center loading4">Loading</h2>}>
          <SubmitButtonComponent />
        </Suspense>
      </form>
    </>
  );
};


export default App;
