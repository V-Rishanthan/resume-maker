import {
  SignIn as ClerkSignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const SignIn = () => {
  return (
    <div className="flex justify-center my-10 items-center">
      {/* <ClerkSignIn /> */}
      <ClerkSignIn />
    </div>
  );
};

export default SignIn;
