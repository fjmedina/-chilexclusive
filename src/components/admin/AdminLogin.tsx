import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { login } from '../../lib/api';

interface LoginForm {
  email: string;
  password: string;
}

export const AdminLogin = () => {
  const { login: authLogin } = useAuth();
  const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      const { token } = await login(data);
      authLogin(token);
    } catch (error) {
      setError('root', { message: 'Invalid credentials' });
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-display text-white text-center">
            Admin Login
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gold-400">
              Email
            </label>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gold-400">
              Password
            </label>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold-500"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
            )}
          </div>

          {errors.root && (
            <p className="text-sm text-red-400 text-center">{errors.root.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-gold-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-gold-400 transition-colors duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};