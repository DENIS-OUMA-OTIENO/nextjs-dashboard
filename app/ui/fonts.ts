import { Poppins, Lusitana} from 'next/font/google';

const poppins = Poppins({
     subsets: ['latin'],
     weight: ['400']
     })
const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400']
})

export { poppins, lusitana }