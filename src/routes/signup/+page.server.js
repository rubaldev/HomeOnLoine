import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { schema } from './schema';

export const load = async () => {
    const form = await superValidate(zod4(schema));
    return {form}
}

// export const actions = {
//     addfile: async ({ request, locals: { supabase } }) => {
//         const form = await superValidate(request, zod4(schema));
//         console.log(form)
//         if (!form.valid) {
//             // Return { form } and things will just work.
//             return fail(400, { form });
//         }
//         const { error } = await supabase.auth.signUp({ email, password })
//         if (error) {
//             console.error(error)
//             return fail (
//                 400,
//                 {form}
//             )
//         }
//         console.log("ajout d'un nouveu fichier marche bien")
//         // Return the form with a status message
//             return message(form, 'inscription reçu!');
//         }
//     }