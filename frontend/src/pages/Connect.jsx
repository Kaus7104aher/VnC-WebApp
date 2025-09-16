import React from "react";
import { Github, Linkedin } from "lucide-react";

const Connect = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Made By Section */}
      <div className="bg-base-200 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-bold mb-3">👨‍💻 Made By</h3>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-16 rounded-full">
              {/* Replace with your actual profile pic */}
              <img
                src="https://avatars.githubusercontent.com/u/000000?v=4"
                alt="User Avatar"
              />
            </div>
          </div>
          <div>
            <p className="font-semibold">Kaustubh Aher</p>
            <p className="text-xs text-gray-500">Full Stack Developer</p>
          </div>
        </div>
      </div>

      {/* Connect with Me Section */}
      <div className="bg-base-200 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-bold mb-3">🔗 Connect with Me</h3>
        <div className="flex gap-4">
          <a
            href="https://github.com/kaus7104aher"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Github className="size-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/kaustubh-aher-234446289/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Linkedin className="size-6" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/kaustubh0gvm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/GeeksforGeeks.png"
              alt="GFG"
              className="size-6 hover:opacity-80"
            />
          </a>
          <a
            href="https://leetcode.com/kaustubhaher"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="size-6 hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
