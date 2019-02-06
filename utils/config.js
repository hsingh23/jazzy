module.exports = {
  baseUrl: "http://next-blog-firestore.now.sh",
  siteTitle: "Jazzy's Q and A",
  description: "Jasmine gets your questions and answers them",
  copyright: "MIT.",
  languages: {
    en: {
      id: "en",
      title: "English",
      shortTitle: "Eng"
    }
  },
  defaultLanguage: "en",
  disqusShortname: "",
  menu: [
    {
      text: "Home",
      route: "index"
    },
    {
      text: "Tutorials",
      route: "category",
      params: {
        category: "tutorials"
      }
    }
  ],
  social: {
    facebook: {
      href: "https://facebook.com",
      title: "Facebook"
    },
    instagram: {
      href: "https://www.instagram.com",
      title: "Instagram"
    },
    vimeo: {
      href: "https://vimeo.com",
      title: "Vimeo"
    }
  },
  authors: {
    jazzy: {
      id: "jazzy",
      name: "Jasmine",
      description: "The one and only",
      avatar: "/assets/authors/john.svg",
      social: {
        facebook: {
          href: "https://www.facebook.com",
          title: "Facebook"
        },
        instagram: {
          href: "https://www.instagram.com/",
          title: "Instagram"
        }
      }
    },
    harsh: {
      id: "harsh",
      name: "Harsh",
      description: "Wildcard",
      avatar: "/assets/authors/john.svg",
      social: {
        facebook: {
          href: "https://www.facebook.com",
          title: "Facebook"
        },
        instagram: {
          href: "https://www.instagram.com/",
          title: "Instagram"
        }
      }
    }
  }
};
