type Social = {
  label: string;
  icon: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "clim.dev",
  title: "Hello world, I’m Miguel!. 👋",
  // profile: "/profile.webp",
  description:
    "Soy un desarrollador en los primeros pasos del emocionante mundo del desarrollo de aplicaciones móviles y web.",
  socials: [
    {
      label: "Github",
      icon: "github",
      link: "https://github.com/Miguelclim",
    },
    {
      label: "Linkedin",
      icon: "linkedin",
      link: "https://linkedin.com/in/climdev",
    },
  ],
};

export default presentation;
