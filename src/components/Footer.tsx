import { ArrowIcon } from '@/icons';
import {
  CodeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

// type Props = {};

const Footer = () => {
  return (
    <footer className="mb-16 ">
      <ul className=" font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            href="https://github.com/srijonp4"
            rel="noopener noreferrer"
            target="_blank"
            className=" flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100
            gap-2 "
          >
            <ArrowIcon />
            <p>Github</p>
            <GitHubLogoIcon />
          </a>
        </li>

        <li>
          <a
            href="https://linkedin.com/in/srijonp4"
            rel="noopener noreferrer"
            target="_blank"
            className=" flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100
            gap-2 "
          >
            <ArrowIcon />
            <p>Linkedin</p>
            <LinkedInLogoIcon />
          </a>
        </li>
        <li>
          {' '}
          <a
            href="https://github.com/srijonp4/about"
            rel="noopener noreferrer"
            target="_blank"
            className=" flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100
            gap-2 "
          >
            <ArrowIcon />
            <p>Source Code</p>
            <CodeIcon />
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300 ">
        ©️ {new Date().getFullYear()} Built By Srijon, All Rights Reserved!
      </p>
    </footer>
  );
};

export default Footer;
