export const dummyJobs = [
  {
    id: 101,
    title: "Frontend Developer",
    description:
      "Responsible for building and maintaining interactive user interfaces using modern front-end technologies such as React, JavaScript, HTML, and CSS. Work closely with the design team to translate UI/UX designs into functional, appealing interactive applications.",
  },
  {
    id: 102,
    title: "Backend Developer",
    description:
      "Develop and optimize server-side logic, APIs, and databases. Ensure high performance and responsiveness to requests from the front-end. Strong knowledge of Node.js, Express, and relational databases required.",
  },
  {
    id: 103,
    title: "Data Scientist",
    description:
      "Analyze large datasets to derive actionable insights, build predictive models, and improve decision-making. Proficiency in Python, R, and data visualization tools like Tableau is essential.",
  },
  {
    id: 104,
    title: "Full Stack Developer",
    description:
      "A versatile developer capable of working on both front-end and back-end projects. Must be proficient in MERN stack (MongoDB, Express, React, Node.js) and have experience with cloud platforms.",
  },
];

export const dummyCandidates = [
  {
    id: 1,
    name: "Alice Johnson",
    resume: "https://example.com/resume/alice_johnson.pdf",
    applicationDate: "2024-11-01",
    status: "Interview Scheduled",
    jobId: 101,
    profile: {
      email: "alice.johnson@example.com",
      contact: "123-456-7890",
      skills: ["React", "JavaScript", "CSS"],
      experience: "2 years",
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    resume: "https://example.com/resume/bob_smith.pdf",
    applicationDate: "2024-11-02",
    status: "Under Review",
    jobId: 102,
    profile: {
      email: "bob.smith@example.com",
      contact: "234-567-8901",
      skills: ["Node.js", "Express", "MongoDB"],
      experience: "3 years",
    },
  },
  {
    id: 3,
    name: "Charlie Brown",
    resume: "https://example.com/resume/charlie_brown.pdf",
    applicationDate: "2024-11-03",
    status: "Rejected",
    jobId: 103,
    profile: {
      email: "charlie.brown@example.com",
      contact: "345-678-9012",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      experience: "1 year",
    },
  },
  {
    id: 4,
    name: "Diana Prince",
    resume: "https://example.com/resume/diana_prince.pdf",
    applicationDate: "2024-11-04",
    status: "Accepted",
    jobId: 104,
    profile: {
      email: "diana.prince@example.com",
      contact: "456-789-0123",
      skills: ["JavaScript", "React", "Node.js", "AWS"],
      experience: "4 years",
    },
  },
  {
    id: 5,
    name: "Edward Norton",
    resume: "https://example.com/resume/edward_norton.pdf",
    applicationDate: "2024-11-05",
    status: "Interview Scheduled",
    jobId: 101,
    profile: {
      email: "edward.norton@example.com",
      contact: "567-890-1234",
      skills: ["Vue.js", "TailwindCSS", "TypeScript"],
      experience: "2 years",
    },
  },
  {
    id: 6,
    name: "Fiona Davis",
    resume: "https://example.com/resume/fiona_davis.pdf",
    applicationDate: "2024-11-06",
    status: "Under Review",
    jobId: 102,
    profile: {
      email: "fiona.davis@example.com",
      contact: "678-901-2345",
      skills: ["Express", "Node.js", "GraphQL"],
      experience: "3 years",
    },
  },
  {
    id: 7,
    name: "George Taylor",
    resume: "https://example.com/resume/george_taylor.pdf",
    applicationDate: "2024-11-07",
    status: "Accepted",
    jobId: 103,
    profile: {
      email: "george.taylor@example.com",
      contact: "789-012-3456",
      skills: ["Python", "Pandas", "Data Mining"],
      experience: "4 years",
    },
  },
  {
    id: 8,
    name: "Helen Fisher",
    resume: "https://example.com/resume/helen_fisher.pdf",
    applicationDate: "2024-11-08",
    status: "Rejected",
    jobId: 104,
    profile: {
      email: "helen.fisher@example.com",
      contact: "890-123-4567",
      skills: ["React Native", "Redux", "Firebase"],
      experience: "1 year",
    },
  },
  {
    id: 9,
    name: "Ian Moore",
    resume: "https://example.com/resume/ian_moore.pdf",
    applicationDate: "2024-11-09",
    status: "Interview Scheduled",
    jobId: 101,
    profile: {
      email: "ian.moore@example.com",
      contact: "901-234-5678",
      skills: ["HTML", "CSS", "JavaScript"],
      experience: "1.5 years",
    },
  },
  {
    id: 10,
    name: "Jasmine Patel",
    resume: "https://example.com/resume/jasmine_patel.pdf",
    applicationDate: "2024-11-10",
    status: "Under Review",
    jobId: 102,
    profile: {
      email: "jasmine.patel@example.com",
      contact: "012-345-6789",
      skills: ["Node.js", "PostgreSQL", "API Development"],
      experience: "2 years",
    },
  },
  {
    id: 11,
    name: "Kevin Lee",
    resume: "https://example.com/resume/kevin_lee.pdf",
    applicationDate: "2024-11-11",
    status: "Interview Scheduled",
    jobId: 103,
    profile: {
      email: "kevin.lee@example.com",
      contact: "123-456-7890",
      skills: ["Python", "TensorFlow", "Deep Learning"],
      experience: "3 years",
    },
  },
  {
    id: 12,
    name: "Laura White",
    resume: "https://example.com/resume/laura_white.pdf",
    applicationDate: "2024-11-12",
    status: "Accepted",
    jobId: 104,
    profile: {
      email: "laura.white@example.com",
      contact: "234-567-8901",
      skills: ["MERN Stack", "Docker", "Kubernetes"],
      experience: "5 years",
    },
  },
  {
    id: 13,
    name: "Mason Clark",
    resume: "https://example.com/resume/mason_clark.pdf",
    applicationDate: "2024-11-13",
    status: "Rejected",
    jobId: 101,
    profile: {
      email: "mason.clark@example.com",
      contact: "345-678-9012",
      skills: ["Vue.js", "Laravel", "MySQL"],
      experience: "2 years",
    },
  },
];

export const initializeData = () => {
  if (!localStorage.getItem("jobs")) {
    localStorage.setItem("jobs", JSON.stringify(dummyJobs));
  }
  if (!localStorage.getItem("candidates")) {
    localStorage.setItem("candidates", JSON.stringify(dummyCandidates));
  }
};
