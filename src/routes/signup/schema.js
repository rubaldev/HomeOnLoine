import { z } from "zod/v4";

export const schema = z.object({
  nom: z.string().min(1, "le nom doit containir 1 lettre ou plus"),
  email: z.email("veuillez inserer un email valide..."),
  prenom: z.string().min(1, "Le prenom doit avoir 1 lettre ou plus"),
  password: z
    .string()
    .min(6, "Le mot de passe doit containir plus de 6 caracteres"),
});
