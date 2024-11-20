import React from "react";
import Githubicon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 nd:my-12 py-24 gap-4">
      {" "}
      <div>
        <h5 className="text-xl font-bold ■text-white my-2">Let's Connect</h5>{" "}
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {""}
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />{" "}
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />{" "}
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default EmailSection;
