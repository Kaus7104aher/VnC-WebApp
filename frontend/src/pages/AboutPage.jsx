// src/pages/AboutPage.jsx
import { Github, Linkedin } from "lucide-react";
import useAuthUser from "../hooks/useAuthUser";

const AboutPage = () => {
  const { authUser } = useAuthUser();

  return (
    <div className="p-6 space-y-6">
      {/* Project Info */}
      <div className="bg-base-200 p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-2">About ChatHive</h2>
        <p className="text-sm opacity-80">
          <strong>ChatHive</strong> is a language exchange platform that
          enables users to connect with native speakers around the world and
          practice new languages in real time. The platform combines{" "}
          <strong>video calling</strong>, <strong>real-time chat</strong>, and{" "}
          <strong>interactive features</strong> to make language learning more
          natural and engaging.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="bg-base-200 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-bold mb-3">🌍 Key Highlights</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm opacity-80">
          <li>
            🔗 <strong>Language Exchange</strong> – Connect with users who want
            to learn your language while helping you practice theirs.
          </li>
          <li>
            🎥 <strong>1-on-1 & Group Video Calls</strong> – Seamless video
            communication with built-in screen sharing and session recording.
          </li>
          <li>
            💬 <strong>Real-Time Chat</strong> – Instant messaging with typing
            indicators, emoji reactions, and delivery acknowledgements.
          </li>
          <li>
            🔐 <strong>Secure Authentication</strong> – JWT-based
            authentication with protected routes to ensure only verified users
            access the platform.
          </li>
          <li>
            🗄️ <strong>Scalable Architecture</strong> – Built with React,
            Express.js, MongoDB, and Stream SDK for real-time video and chat
            infrastructure.
          </li>
          <li>
            ⚡ <strong>Modern State Management</strong> – Managed with Zustand
            and TanStack Query for smooth, responsive user experience.
          </li>
        </ul>
      </div>

      {/* Why VnC WebApp */}
      <div className="bg-base-200 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-bold mb-3">🎯 Why ChatHive?</h3>
        <p className="text-sm opacity-80">
          Unlike traditional learning apps that rely on bots or pre-recorded
          lessons, <strong>ChatHive</strong> focuses on{" "}
          <strong>peer-to-peer human interaction</strong>. By directly talking
          with native speakers, learners gain confidence, improve
          conversational skills, and experience cultural exchange in a natural
          way.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
