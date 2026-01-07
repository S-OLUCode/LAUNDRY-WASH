import { Link } from "react-router";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { forgotPasswordSchema } from "@/utils/dataSchema";
import { Loader } from "lucide-react";

export default function ForgetPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const mutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (res) => {
      toast.success(res.data.message || "Registration successful");
    },
    onError: (error) => {
      console.error(error);
      toast.error(error?.response?.data?.message || "Registration failed"); // FIXED TYPO
    },
  });

  const onSubmitForm = async (data) => {
  
    mutation.mutate(data);
  };
  return (
    <>
      <div className="mx-auto w-[28.5%] bg-wash-black">
        <div className=" text-wash-white my-4 text-start w-full mt-35">
          <h1 className="text-4xl text-md font-medium pb-2">ForgetPassword</h1>
          <p className="text-xl">Enter Your Information</p>
        </div>
        <form className="mt-12" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="mb-4">
            <label className="floating-label py-4">
              <span className="text-sm text-wash-white flex flex-col">
                Email
              </span>
              <input
                type="email"
                placeholder="Johndoe@email.com"
                {...register("email")}
                className="px-4 py-2 rounded-lg bg-white text-black w-full"
              />
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <button
              to="/confirmpassword"
              type="submit"
              className=" py-3 mt-10 bg-wash-purple text-wash-white rounded-full
             flex items-center justify-center gap-2 w-full"
            >
              {mutation.isPending ? (
                <>
                  <Loader className="animate-spin" size={18} />
                  Next
                </>
              ) : (
                "Next"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
