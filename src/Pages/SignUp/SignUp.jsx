import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaFacebookF } from 'react-icons/fa';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import authenticationImg from "../../../src/assets/others/authentication2.png"
import bgImg from "../../../src/assets/others/authentication.png"

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const { createUser, updateUser, logOut, googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    setError(null);
    googleSignIn()
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const userData = {
        name: result.user?.displayName,
        email: result.user?.email,
        photo: result.user?.photoURL,
        role: 'user',
      };
      axiosPublic.post('/users', userData)
      .then((res) => {
        navigate('/');
        if (res.data.insertedId) {
          console.log('User info added to the database!');
          Swal.fire({
            title: 'Profile Created!',
            text: `${result.user?.displayName ? result.user.displayName : 'User'} Profile created successfully!`,
            imageUrl: result.user?.photoURL
              ? result.user.photoURL || result.user.photoURL
              : 'https://i.ibb.co/qnT81gF/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonText: 'Ok!',
          });
          navigate('/');
        }
      })
      .catch(error=>{
        console.error(error.message);
        setError(error.message);
        Swal.fire({
          title: "User Not Updated!",
          text: error.message,
          icon: "question"
        });
      })
    })
    .catch(error=>{
      console.error(error.message);
      setError(error.message);
      Swal.fire({
        title: "User Not Updated!",
        text: error.message,
        icon: "question"
      });
    })
  };

  const onSubmit = (data) => {
    setError(null);
    setLoading(true);
    console.log(data.name, data.photo);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUser(data.name, data.photo)
          .then(() => {
            setLoading(false);
            console.log('Profile Updated');
            const userData = {
              name: data.name,
              email: data.email,
              photo: data.photo,
              role: 'user',
            };
            axiosPublic.post('/users', userData).then((res) => {
              if (res.data.insertedId) {
                console.log('User info added to the database!');
                Swal.fire({
                  title: 'Profile Created!',
                  text: `${result.user?.displayName ? result.user.displayName : 'User'} Profile created successfully!`,
                  imageUrl: result.user?.photoURL
                    ? result.user.photoURL || result.user.photoURL
                    : 'https://i.ibb.co/qnT81gF/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
                  imageWidth: 200,
                  imageHeight: 200,
                  imageAlt: 'Custom image',
                  confirmButtonText: 'Ok!',
                });
                reset();
                logOut()
                  .then(() => {
                    console.log('Logged Out Successfully!');
                    setLoading(false);
                    navigate('/login');
                  })
                  .catch((error) => {
                    console.error(error.message);
                    setError(error.message);
                    setLoading(false);
                  });
              }
            });
          })
          .catch((error) => {
            console.error(error.message);
            setError(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
        setLoading(false);
      });
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
      <Helmet>
        <title>{`BISTRO BOSS | Sign Up`}</title>
      </Helmet>
      <div className="hero min-h-screen lg:p-[80px]" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse w-full h-full border-[3px] border-gray-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <div className="text-center lg:text-left">
            <img src={authenticationImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:max-w-sm ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-gray-700 font-bold text-3xl mx-auto">SignUp</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register('name', { required: true })}
                  name="name"
                  className="input input-bordered"
                  required
                />
                {errors.name && <span className='text-red-500'>Name field is required</span>}
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Profile Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  {...register('photo', { required: true })}
                  name="photo"
                  className="input input-bordered"
                  required
                />
                {errors.photo && <span className='text-red-500'>Photo field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register('email', { required: true })}
                  name="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && <span className='text-red-500'>Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register('password', {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                  })}
                  name="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === 'required' && <span className='text-red-500 mt-2'>Password field is required</span>}
                {errors.password?.type === 'minLength' && <span className='text-red-500 mt-2'>Password should be minimum 8 characters</span>}
                {errors.password?.type === 'maxLength' && <span className='text-red-500 mt-2'>Password should not be more than 20 characters</span>}
                {errors.password?.type === 'pattern' && (
                  <span className='text-red-500 mt-2'>
                    Password must contain
                    <br />
                    * Minimum 8 characters,<br />
                    * at least one uppercase letter,<br />
                    * one lowercase letter,<br />
                    * one number and <br />
                    * one special character
                  </span>
                )}
              </div>
              {error && <span className='text-red-500'>{error}</span>}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value={loading ? 'Loading...' : 'Sign Up'}
                  className="btn bg-[#D1A054B2] bg-opacity-70 text-white"
                ></input>
              </div>
              <p className="text-[#D1A054] mx-auto">
                Already registered? <Link to="/login"><span className="font-bold">Go to log in</span></Link>
              </p>
              <div className="flex flex-col items-center gap-3 mx-auto">
                <p className="text-gray-700 font-semibold">Or sign up with</p>
                <div className="flex gap-6">
                  <div className="rounded-full p-2 border-2 border-gray-700 hover:border-[#D1A054] text-gray-700 hover:text-[#D1A054] duration-200">
                    <FaFacebookF />
                  </div>
                  <div onClick={handleGoogleSignIn} className="rounded-full p-2 border-2 border-gray-700 hover:border-[#D1A054] text-gray-700 hover:text-[#D1A054] duration-200">
                    <BsGoogle />
                  </div>
                  <div className="rounded-full p-2 border-2 border-gray-700 hover:border-[#D1A054] text-gray-700 hover:text-[#D1A054] duration-200">
                    <BsGithub />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

SignUp.propTypes = {
  user: PropTypes.node,
};

export default SignUp;
