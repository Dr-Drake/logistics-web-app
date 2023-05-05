type WebsiteMenuLinks = {
  title: string;
  id: string | number;
  path: string;
};

export const WEBSITE_MENU_LINKS: WebsiteMenuLinks[] = [
  {
    title: 'Home',
    id: 'home',
    path: '/',
  },
  {
    title: 'Our services',
    id: 'our-services',
    path: '#our-services',
  },
  {
    title: 'About us',
    id: 'about-us',
    path: '/about-us',
  },
  {
    title: 'Sign in',
    id: 'sign-in',
    path: '/sign-in',
  },
];

export const QUICK_LINKS = [
  {
    id: 'about-us',
    title: 'About us',
    path: '/about-us',
  },
  {
    id: 'track',
    title: 'Track',
    path: '/',
  },
  {
    id: 'apiDoc',
    title: 'API Documentation',
    path: '/',
  },
  {
    id: 'pricing',
    title: 'Pricing',
    path: '/',
  },
];

export const GET_STARTED_LINKS = [
  {
    id: 'create-account',
    title: 'Create account',
    path: '/create-account',
  },
  {
    id: 'sign-in',
    title: 'Sign in',
    path: '/sign-in',
  },
];
export const LEGAL_LINKS = [
  {
    id: 'terms-and-conditions',
    title: 'Terms and conditions',
    path: '/terms-and-conditions',
  },
  {
    id: 'privacy-policy',
    title: 'Privacy policy',
    path: '/privacy-policy',
  },
];

export const SOCIAL_LINKS = [
  {
    id: "ig",
    src: "images/svgs/ig-icon.svg",
    alt: "Instagram icon",
  },
  {
    id: "tweet",
    src: "images/svgs/twitter-icon.svg",
    alt: "Twitter icon",
  },
  {
    id: "fb",
    src: "images/svgs/fb-icon.svg",
    alt: "Facebook icon",
  },
  {
    id: "linkedin",
    src: "images/svgs/linkedin-icon.svg",
    alt: "LinkedIn icon",
  },
]

export const STATES = [
  {
    id: 0,
    label: "Abia",
    value: "Abia"
  },
  {
    id: 1,
    label: "Adamawa",
    value: "Adamawa"
  },
  {
    id: 2,
    label: "Akwa Ibom",
    value: "Akwa Ibom"
  },
  {
    id: 3,
    label: "Anambra",
    value: "Anambra"
  },
  {
    id: 4,
    label: "Bauchi",
    value: "Bauchi"
  },
  {
    id: 5,
    label: "Bayelsa",
    value: "Bayelsa"
  },
  {
    id: 6,
    label: "Benue",
    value: "Benue"
  },
  {
    id: 7,
    label: "Borno",
    value: "Borno"
  },
  {
    id: 8,
    label: "Cross River",
    value: "Cross River"
  },
  {
    id: 9,
    label: "Delta",
    value: "Delta"
  },
  {
    id: 10,
    label: "Ebonyi",
    value: "Ebonyi"
  },
  {
    id: 11,
    label: "Edo",
    value: "Edo"
  },
  {
    id: 12,
    label: "Ekiti",
    value: "Ekiti"
  },
  {
    id: 13,
    label: "Enugu",
    value: "Enugu"
  },
  {
    id: 14,
    label: "FCT - Abuja",
    value: "FCT - Abuja"
  },
  {
    id: 15,
    label: "Gombe",
    value: "Gombe"
  },
  {
    id: 16,
    label: "Imo",
    value: "Imo"
  },
  {
    id: 17,
    label: "Jigawa",
    value: "Jigawa"
  },
  {
    id: 18,
    label: "Kaduna",
    value: "Kaduna"
  },
  {
    id: 19,
    label: "Kano",
    value: "Kano"
  },
  {
    id: 20,
    label: "Katsina",
    value: "Katsina"
  },
  {
    id: 21,
    label: "Kebbi",
    value: "Kebbi"
  },
  {
    id: 22,
    label: "Kogi",
    value: "Kogi"
  },
  {
    id: 23,
    label: "Kwara",
    value: "Kwara"
  },
  {
    id: 24,
    label: "Lagos",
    value: "Lagos"
  },
  {
    id: 25,
    label: "Nasarawa",
    value: "Nasarawa"
  },
  {
    id: 26,
    label: "Niger",
    value: "Niger"
  },
  {
    id: 27,
    label: "Ogun",
    value: "Ogun"
  },
  {
    id: 28,
    label: "Ondo",
    value: "Ondo"
  },
  {
    id: 29,
    label: "Osun",
    value: "Osun"
  },
  {
    id: 30,
    label: "Oyo",
    value: "Oyo"
  },
  {
    id: 31,
    label: "Plateau",
    value: "Plateau"
  },
  {
    id: 32,
    label: "Rivers",
    value: "Rivers"
  },
  {
    id: 33,
    label: "Sokoto",
    value: "Sokoto"
  },
  {
    id: 34,
    label: "Taraba",
    value: "Taraba"
  },
  {
    id: 35,
    label: "Yobe",
    value: "Yobe"
  },
  {
    id: 36,
    label: "Zamfara",
    value: "Zamfara"
  },
]

export const PORTFOLIO = [
  {
    id: 1,
    title: "Our clients",
    description: "Our clients grows on a daily basis. you are welcome to join us.",
    numbers: "1.2M+"
  },
  {
    id: 2,
    title: "Our riders",
    description: "Readily available riders to complete delivery to customers",
    numbers: "500k+"
  },
  {
    id: 3,
    title: "Completed delivery",
    description: "We have completed and still completing deliveries everywhere",
    numbers: "12.3M+"
  },
]

export const TEAMS = [
  {
    id: 1,
    url: "images/pngs/profile-1.png",
    name: "Kolade Johnson",
    position: "Chairman"
  },
  {
    id: 2,
    url: "images/pngs/profile-2.png",
    name: "Pete Obi",
    position: "President"
  },
  {
    id: 3,
    url: "images/pngs/profile-3.png",
    name: "Vanessa Doeh",
    position: "Vice President"
  },
  {
    id: 4,
    url: "images/pngs/profile-4.png",
    name: "Ramsey Steve",
    position: "Treasurer"
  },
  {
    id: 5,
    url: "images/pngs/profile-1.png",
    name: "Dumebi Austin",
    position: "Accountant"
  },
  {
    id: 6,
    url: "images/pngs/profile-2.png",
    name: "Katie Johnson",
    position: "Logistic Director"
  },
  {
    id: 7,
    url: "images/pngs/profile-3.png",
    name: "John Doe",
    position: "I.T Expert"
  },
  {
    id: 8,
    url: "images/pngs/profile-2.png",
    name: "Rita Kolade",
    position: "Operation Lead"
  },
]

