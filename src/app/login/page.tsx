import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <div className="ge-container flex h-full flex-col items-center justify-center">
      <h1 className="mb-6">Login</h1>
      <form className="flex w-full max-w-md flex-col">
        <label htmlFor="email">Email:</label>
        <input className="input mb-6" id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input className="input mb-6" id="password" name="password" type="password" required />
        <button className="btn-primary mb-3" formAction={login}>
          Log in
        </button>
        <button className="btn-secondary" formAction={signup}>
          Sign up
        </button>
      </form>
    </div>
  );
}
