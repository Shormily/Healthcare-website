import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Login = () => {
  const { signInUsingGoogle, userLogin, setIsLoading } = useAuth();

  const history = useHistory();
  const location = useLocation();
  //   const redriect_uri = location.state?.from || "/home";

  //   const handleGoogleLogin = () => {
  //     signInUsingGoogle()
  //       .then((result) => {
  //         // history.push(redriect_uri);
  //       })
  //       .finally(() => setIsLoading(false));
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { Email, Password } = data;
    userLogin(Email, Password);
  };
  return (
    <section className="container">
      <div>
        <div className="signup-form" style={{ width: "50%", margin: "auto" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              required
              type="email"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email && (
              <span className="field-error">This field is required</span>
            )}
            <input
              required
              type="password"
              placeholder="Password"
              {...register("Password", {
                required: true,
                pattern:
                  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
              })}
            />
            {errors.Password && (
              <span className="field-error">
                Password should have at least 8 chracters, 2 uppercase, 3
                lowercase, 1 special character, 2 numbers.
              </span>
            )}
            <input className="submit-btn" type="submit" value="Sign In" />
          </form>
          <Link to="/signup">New to Hot Chili?</Link>
        </div>
        <div sx={{ mt: 4, borderTop: "1px solid #ddd", pt: 2 }}>
          <p>Or sign in using</p>
          <button className="social-login " onClick={signInUsingGoogle}>
            Sign In using Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
