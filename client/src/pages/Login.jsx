import Header from "../components/Form/Header";
import Login from "../components/Login";
import GoogleButton from "../components/Auth/GoogleButton";

export default function LoginPage() {
  return (
    <div
      data-theme="light"
      className="min-h-full h-screen flex items-center justify-center py-12 px-4
      sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login />
        <center>
          <GoogleButton />
        </center>
      </div>
    </div>
  );
}
