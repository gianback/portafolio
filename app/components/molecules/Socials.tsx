import { GithubIcon, LinkedinIcon, WspIcon } from '../atoms'

export const Socials = () => {
   return (
      <ul className="flex gap-3 laptop:gap-5 items-center mt-4 laptop:mt-8">
         <li>
            <a href="https://github.com/gianback" target="_blank" className="w-5 laptop:w-7 block">
               <GithubIcon />
            </a>
         </li>
         <li>
            <a
               href="https://www.linkedin.com/in/gian-franco-peralta-bravo-3a437b236/"
               target="_blank"
               className="w-5 laptop:w-7 block"
            >
               <LinkedinIcon />
            </a>
         </li>
         <li>
            <a href="https://wa.link/u1ioxy" target="_blank" className="w-5 laptop:w-7 block">
               <WspIcon />
            </a>
         </li>
      </ul>
   )
}
