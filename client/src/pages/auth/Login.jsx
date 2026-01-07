import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateLogInSchema } from "@/utils/dataSchema.js";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/auth";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import { Eye, EyeOff, Loader } from "lucide-react";

export default function Login() {
  const [revealPassword, setRevealPassword] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateLogInSchema),
  });

  const { setAccessToken } = useAuth();

  const togglePasswordReveal = (e) => {
    e.preventDefault();
    setRevealPassword((prev) => !prev);
  };
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      toast.success(res.data.message || "Login successful");
      setAccessToken(res.data.data);
      navigate("/"); // redirect after login
    },
    onError: (error) => {
      console.error(error);
      toast.error(error?.response?.data?.message || "Login failed");
    },
  });

  const onSubmitForm = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-[400px] mt-10 lg:mt-40 mx-auto text-wash-white rounded-lg px-4 py-6">
      <div className="text-3xl pb-4">
        <h1>Welcome Back!</h1>
        <p className="text-sm text-wash-white">Enter Your Details Here</p>
      </div>

      <form className="mt-4" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="mb-4">
          <span className="text-sm">Email</span>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="px-4 py-2 rounded-lg bg-white text-black w-full"
          />

          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="relative">
          <span className="text-sm">Password</span>
          <input
            type={revealPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
            className="px-4 py-2 rounded-lg bg-white text-black w-full"
          />
          <button
            type="button"
            onClick={togglePasswordReveal}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 z-10"
          >
            {revealPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <div className="text-end text-sm">
            <Link to="/forgotPassword">Forgot Password?</Link>
          </div>
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full py-3 mt-7 bg-wash-purple text-wash-white rounded-full flex items-center justify-center gap-2"
        >
          {mutation.isPending ? (
            <>
              <Loader className="w-5 h-5 animate-spin stroke-white" />
              <span>Loading...</span>
            </>
          ) : (
            "Log In"
          )}
        </button>
      </form>

      <p className="text-center pt-6 text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-wash-purple">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
