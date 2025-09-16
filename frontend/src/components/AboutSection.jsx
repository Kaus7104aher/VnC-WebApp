// src/components/AboutSection.jsx
import { GithubIcon, LinkedinIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">About Project</h3>
      <p className="text-sm opacity-80">
        <strong>ChatHive</strong> is a real-time chat app built with{" "}
        <span className="font-semibold">React, Tailwind, Node.js, Express, MongoDB</span>.
      </p>
      <p className="text-sm opacity-80 mt-1">
        Built to enhance <strong>language exchange</strong> and <strong>real-time communication</strong>.
      </p>
      <p className="text-sm opacity-80 mt-1">
        <span className="font-semibold">Made by:</span>
      </p>

      {/* Social Links */}
      <div className="flex gap-3 mt-3">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="size-5 hover:text-primary transition-colors" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="size-5 hover:text-primary transition-colors" />
        </a>
        <a
          href="https://auth.geeksforgeeks.org/user/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/GeeksforGeeks.png"
            alt="GFG"
            className="size-5 hover:opacity-80"
          />
        </a>
        <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            className="size-5 hover:opacity-80"
          />
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
