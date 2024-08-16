import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Richard Joseph",
  initials: "RJ",
  url: "https://richard-m-j.github.io", // Assuming you might want a GitHub Pages site, replace it with actual URL if different.
  location: "Trivandrum",
  locationLink: "https://www.google.com/maps/place/Trivandrum",
  description:
    "Passionate Software Engineer with expertise in AI, ML, and Data Structures and Algorithms. Specializes in developing robust AI-driven solutions across various platforms. Keen to explore and contribute to diverse roles within the tech industry.",
  summary:
    "Currently serving as a Product Engineer Intern at CareStack, where I'm leading AI-driven automation initiatives to enhance operational efficiency and reduce costs using innovative Azure tools. Previously, as an AI Engineer Intern at Solyield, I created and fine-tuned AI models for optimizing solar panel performance and developed an intelligent FAQ chatbot. My expertise in Machine Learning, Natural Language Processing, and Data Structures and Algorithms underpins a highly adaptable skill set, enabling me to thrive in varied roles and tackle complex challenges across multiple domains.",
  avatarUrl: "/ProfilePhoto.png",
  skills: [
    "Advanced DSA",
    "Machine Learning",
    "NLP",
    "General AI - LLMs",
    "Audio & Image Models",
    "MongoDB",
    "PostgreSQL",
    "Azure",
    "C",
    "C++",
    "Python",
    "SQL",
    ".NET",
    "Java",
    "Qdrant",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "richardmanueljoseph@gmail.com",
    tel: "+918304800973",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Richard-m-j",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/richard-m-joseph/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "Twitter", // Assuming X as Twitter, update if different
        url: "#", // Add your Twitter link if you have one
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#", // Add your YouTube link if you have one
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:richardmanueljoseph@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CareStack",
      href: "https://carestack.com/", // Update with the correct URL if needed
      badges: [],
      location: "Remote",
      title: "Product Engineer Intern",
      logoUrl: "/CareStack.png", // Replace with the actual logo if you have it or leave blank
      start: "July 2024",
      end: "Present",
      description:
        "AI Automation with Azure: Developed AI-driven solutions to automate phone call transcription and form completion, leveraging Azure Functions for serverless deployment. Utilized advanced question answering models within the Azure ecosystem to streamline data processing. Significantly reduced reliance on manual labor and operational costs, enhancing overall process efficiency and productivity through Azure tools.",
    },
    {
      company: "Solyield",
      href: "https://www.solyield.com/", // Update with the correct URL if needed
      badges: [],
      location: "Remote",
      title: "AI Engineer Intern",
      logoUrl: "/SolYield.png", // Replace with the actual logo if you have it or leave blank
      start: "February 2024",
      end: "April 2024",
      description:
        "Created and Fine-tuned ML Models: Utilized CNNs, Bi-directional LSTMs, and Transformers to accurately predict output generation from solar panels, enhancing both efficiency and reliability. Spearheaded FAQ Chatbot Development: Led the development of an FAQ chatbot, integrating it seamlessly with Large Language Models (LLMs) using RASA. This initiative streamlined customer interactions and improved support processes.",
    },
  ],
  
  education: [
    {
      school: "College of Engineering Trivandrum",
      href: "http://www.cet.ac.in/",
      degree: "B.Tech in Computer Science Engineering",
      logoUrl: "/cet.png", // Replace with the actual logo if you have it or leave blank
      start: "2021",
      end: "2025",
    },
    {
      school: "Kendriya Vidyalaya No.1 Kochi",
      href: "#", // Add the correct link if available
      degree: "Higher Secondary (CBSE)",
      logoUrl: "/kendriya_vidyalaya.png", // Replace with the actual logo if you have it or leave blank
      start: "2018",
      end: "2020",
      description: "Achieved a percentage of 95.6, demonstrating strong academic performance across various disciplines."
    },
  ],
  
  projects: [
    {
      title: "Qlert",
      href: "https://github.com/Richard-m-j/Qlert",
      dates: "April 2024 - Present",
      active: true,
      description:
        "Developed an AI Ethical Oversight Tool to ensure responsible AI adoption within organizations.",
      technologies: [
        "Large Language Models",
        "Qdrant Vector DB",
        "Azure SQL Database",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Richard-m-j/Qlert",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Monitus AI",
      href: "https://github.com/Richard-m-j/MonitusAI/tree/main",
      dates: "September 2023 - Present",
      active: true,
      description:
        "Engineered a generative AI tool that predicts adverse drug reactions based on patient demographics and medical history.",
      technologies: [
        "Flask",
        "MongoDB",
        "Large Language Models",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Richard-m-j/MonitusAI/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "CASA AI",
      href: "https://github.com/Richard-m-j/casa-AI",
      dates: "August 2023 - Present",
      active: true,
      description:
        "Created a generative AI tool for producing optimized architectural house plans and 3D representations based on user inputs.",
      technologies: [
        "Stable Diffusion",
        "LoRa Models",
        "OpenCV",
        "three.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Richard-m-j/casa-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  
  hackathons: [
    {
      title: "UST D3CODE - Top 5 Finalist",
      dates: "2023",
      location: "National Level",
      description:
        "Competed and secured a Top 5 finish in this prestigious national level hackathon, showcasing skills in AI and ML technologies.",
      image: "/d3code.png", // Replace with the actual image if you have it or leave blank
      links: [
        {
          title: "Event Details",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.d3.ust.com/decode", 
        },
      ],
    },
    {
      title: "Cyientifiq Innovation League - Value Innovation Award",
      dates: "2023",
      location: "Global Hackathon",
      description:
        "Awarded for outstanding innovation at a global hackathon, recognized for developing practical and innovative solutions in the field of technology.",
      image: "/cyientifiq.png", // Replace with the actual image if you have it or leave blank
      links: [
        {
          title: "Event Details",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://cyient.hackerearth.com/", 
        },
      ],
    },
  ],
  
} as const;
