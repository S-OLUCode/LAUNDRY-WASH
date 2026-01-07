import z from "zod";

export const validateLogInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    }),
});

export const validateSignUpSchema = z.object({
  fullname: z.string().min(3, {
    message: "Full name must be at least 3 characters long",
  }),
  email: z.string().email(),
  phone: z.string().min(6, {
    message: "Phone must be at least 11 characters",
  }),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    }),
});

export const validateResetPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    }),
  confirmPassword: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    }),
});

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
});

export const validateBookingSchema = z.object({
  serviceType: z
    .enum(["Wash and fold", "Dry cleaning", "Ironing and pressing"])
    .refine((value) => value !== "", {
      message: "Please select a service type",
    }),
  pickUpAddress: z.string().min(3, {
    message: "Address must be above 3 characters",
  }),
  pickUpPhone: z.string().min(14, {
    message: "Phone number is incomplete",
  }),
  date: z.coerce.date(),
  time: z
    .enum(["10:00 AM", "12:00 PM", "2:00 PM"])
    .refine((value) => value !== "", {
      message: "Please select a service type",
    }),
  deliveryAddress: z.string().min(5),
  deliveryPhone: z.string().min(14),
  shirt: z.coerce.number().optional(),
  trouser: z.coerce.number().optional(),
  senator: z.coerce.number().optional(),
  native: z.coerce.number().optional(),
  duvet: z.coerce.number().optional(),
  specialItem: z.coerce.number().optional(),
  total: z.coerce.number().nonnegative(),
});

export const validateProfileResetSchema = z.object({
  fullname: z.string().min(5, {
    message: "Full name must be at least 5 characters long",
  }),
  email: z.string().email({
    message: "invalid email address",
  }),
  phone: z.string().min(12, {
    message: "Phone number is incomplete",
  }),
});

