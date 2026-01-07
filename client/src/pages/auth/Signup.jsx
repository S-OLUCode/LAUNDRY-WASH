import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateSignUpSchema } from "@/utils/dataSchema.js";
import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "@/api/auth";
import { Loader } from "lucide-react";
import { toast } from "react-toastify";
import Nav from "../../components/Nav";
import Home from "../home/Home";
import { useAuth } from "@/hooks/useAuth";

export default function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(validateSignUpSchema),
  });

  const { setAccessToken } = useAuth();

  const mutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: (res) => {
      toast.success(res.data.message || "Registration successful");
      setAccessToken(res.data.data); // IMPORTANT FIX
    },
    onError: (error) => {
      console.error(error);
      toast.error(error?.response?.data?.message || "Registration failed"); // FIXED TYPO
    },
  });

  const onSubmitForm = async (data) => {
    mutation.mutate(data);
  };

  // const onSubmit = (data) => {
  //   console.log("Submitted email:", data.email);
  // };
  return (
    <>
      <div className="max-w-[461px] mx-auto px-8">
        <div className=" text-white  flex flex-col justify-center">
          <div className="pb-8 mb-2">
            <h1 className="text-3xl">Create Account</h1>
            <p>Enter Your Information To Create An Account</p>
          </div>
          <form className="" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="mb-2">
              <span>Full name</span>
              <input
                type="full name"
                placeholder="Full name"
                {...register("fullname")}
                className="px-4 py-2 rounded-lg bg-white  text-black w-full"
              />

              {errors.fullname && (
                <p className="text-red-500 text-sm">
                  {errors.fullname.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <span>Email</span>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="input input-md px-4 py-2 rounded-lg bg-white text-black w-full"
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <span>Phone number</span>
              <input
                type="phone"
                placeholder="phone"
                {...register("phone")}
                className="px-4 py-2 rounded-lg bg-white text-black w-full"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="mb-4">
              <span>Password</span>
              <input
                type="password"
                placeholder="password"
                {...register("password")}
                className="px-4 py-2 rounded-lg bg-white  text-black w-full"
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full py-3 mt-7 bg-wash-purple text-wash-white rounded-full
             flex items-center justify-center gap-2"
            >
              {mutation.isPending ? (
                <>
                  <Loader className="w-5 h-5 animate-spin stroke-white" />
                  <span>Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <div>
            <p className="text-center pt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-wash-purple">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
