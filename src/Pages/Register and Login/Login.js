import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    let errorMessage;

    if (gUser || user) {
        console.log(gUser);
    }

    if (gError || error) {
        errorMessage = <p className='text-sm text-red-500 pb-2'>Incorrect email or password</p>
    }

    if (gLoading || loading) {
        return <p className='flex h-80 justify-center items-center'><PropagateLoader color="#152220" /></p>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };



    return (
        <div className='flex justify-center items-center h-5/6 lg:h-screen my-7 md:my-28 lg:my-0'>
            <div className="w-72 md:w-96 lg:w-1/3 bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    {/* React Hook Form  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is require'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is require'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {errorMessage}
                        <input
                            className="w-full py-4 md:my-2 lg:my-0 bg-[#3F90FC] rounded-lg text-white hover:bg-violet-600"
                            type="submit"
                            value="Login"
                        />
                    </form>

                    {/* React Hook Form  */}

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="font-medium rounded-lg outline outline-1 outline-[#C7C7C7] hover:outline-[#a5a4a4] py-3 flex items-center justify-evenly">
                        <FcGoogle className='text-2xl' /> Continue with Google
                    </button>
                    <p className='pt-2 font-medium'>Don’t have an account? <Link to="/register" className='text-[#3F90FC]'>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;