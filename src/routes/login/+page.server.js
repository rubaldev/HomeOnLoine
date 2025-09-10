import { fail, redirect } from '@sveltejs/kit'
export const actions = {
    login: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData()
        const email = formData.get('email')
        const password = formData.get('password')

        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            console.error(error)
            console.log(email)
            return {
                success: false
            }
        } else {
            redirect(303, '/dashbord')
            return {
                success: true
            }
        }
    },
}



// const files = [
//     {
//         title: "français",
//         url: "/files",
//         pages: 2,
//         status: "personnel",
//         type: "pdf",
//     },
//     {
//         title: "Anglais",
//         url: "/files",
//         pages: 3,
//         status: "personnel",
//         type: "pdf",
//     },
//     {
//         title: "Chimie",
//         url: "/files",
//         pages: 4,
//         status: "public",
//         type: "pdf",
//     },
//     {
//         title: "Bible",
//         url: "/files",
//         pages: 1026,
//         status: "public",
//         type: "pdf",
//     },
//     {
//         title: "La Rousse",
//         url: "/files",
//         pages: 2000,
//         status: "public",
//         type: "pdf",
//     },
//     {
//         title: "programme du jour",
//         url: "/files",
//         pages: 1,
//         status: "personnel",
//         type: "docs",
//     },
//     {
//         title: "rapport mentuel",
//         url: "/files",
//         pages: 2,
//         status: "public",
//         type: "pdf",
//     },
// ];
// export const load = async () => {

//     return {
//         files
//     }
// }

// export const actions = {
//     addfile: async ({ request, locals: { supabase } }) => {
//         const formData = await request.formData()
//         // const email = formData.get('email')
//         // const password = formData.get('password')
//         // const full_name = formData.get('nom') + ' ' + formData.get('prenom')

//         // const { error } = await supabase.auth.signUp({ email, password })
//         console.log("ajout d'un nouveu fichier marche bien")
//         // if (error) {
//         //     console.error(error)
//         //     return {
//         //         success: false
//         //     }
//         // }

//         return {

//             success: true
//         }

//     }
// }