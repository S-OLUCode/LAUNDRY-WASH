// const itemsSchema = z.object({
//   shirt: z.object({
//     price: z.number().nonnegative(),
//     qty: z.number().int().nonnegative().optional(),
//   }),
//   trouser: z.object({
//     price: z.number().nonnegative(),
//     qty: z.number().int().nonnegative().optional(),
//   }),
//   senator: z.object({
//     price: z.number().nonnegative(),
//     qty: z.number().int().nonnegative().optional(),
//   }),
//   native: z.object({
//     price: z.number().nonnegative(),
//     qty: z.number().int().nonnegative().optional(),
//   }),
//   duvet: z.object({
//     price: z.number().nonnegative(),
//     qty: z.number().int().nonnegative().optional(),
//   }),
//   specialItem: z.object({
//     price: z.number().nonnegative(),
//     qty: z.number().int().nonnegative().optional(),
//   }),
// });

// export const validateBookingSchema = z.object({
//   serviceType: z
//     .enum(["Wash and fold", "Dry cleaning", "Ironing and pressing"])
//     .refine((value) => value !== "", {
//       message: "Please select a service type",
//     }),
//   pickUp: z.object({
//     address: z
//       .string()
//       .min(3, {
//         message: "Address must be above 5 characters",
//       })
//       .optional(),
//     phone: z
//       .string()
//       .min(14, {
//         message: "Phone number is incomplete",
//       })
//       .optional(),
//     date: z.coerce.date().optional(),
//     time: z
//       .enum(["10:00 AM", "12:00 PM", "2:00 PM"])
//       .refine((value) => value !== "", {
//         message: "Please select a service type",
//       })
//       .optional(),
//   }),
//   delivery: z
//     .object({
//       address: z.string().min(5),
//       phone: z.string().min(14),
//     })
//     .optional(),
//   items: itemsSchema,
// });