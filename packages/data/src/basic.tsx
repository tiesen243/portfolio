export const basic = {
  handle: 'tiesen243',
  nickname: 'Tiesen',
  name: 'Tran Tien',
  email: 'ttien56906@gmail.com',
  dateOfBirth: '2004-06-??',
  location: 'Ho Chi Minh City, Vietnam',
  languages: ['Vietnamese', 'English'],

  educations: [
    {
      duration: '2022 - Present',
      school: 'Industrial University of Ho Chi Minh City',
      major: 'Computer Engineering Technology',
      gpa: '2.95/4.0',
    },
    {
      duration: '2019 - 2022',
      school: 'Hoang Hoa Tham High School',
      major: 'Natural Sciences',
    },
  ],

  certifications: [
    {
      name: 'Microsoft Office Specialist (MOS)',
      issuer: 'Microsoft',
      date: '2025-??-??',
      description: 'Demonstrated proficiency in Microsoft Office applications.',
    },
  ],

  experiences: [
    {
      duration: '2004 - Present',
      company: 'Tiesen',
      position: 'CEO',
      description: 'I have no idea what I am doing ᗜ˰ᗜ',
    },
  ],

  socials: [
    {
      label: 'Github',
      href: 'https://github.com/tiesen243',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg
          {...props}
          data-slug="github-icon"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/tiesen243.nanoda',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg
          {...props}
          data-slug="facebook-icon"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Facebook</title>
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
        </svg>
      ),
    },
    {
      label: 'X (Twitter)',
      href: 'https://x.com/tiesen243',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg
          {...props}
          data-slug="x-icon"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>X</title>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tiesen243',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg
          {...props}
          data-slug="linkedin-icon"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>LinkedIn</title>
          <path d="M20.447 20.452h-3.556v-5.569c0-1.327-.025-3.033-1.85-3.033-1.85 0-2.134 1.445-2.134 2.938v5.664H9.35V9h3.415v1.561h.049c.477-.9 1.64-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.45v6.291ZM5.337 7a2.07 2.07 0 1 1 .001-4.14A2.07 2.07 0 0 1 5.337 7Zm1.78 13.452H3.557V9h3.56v11.452Z" />
        </svg>
      ),
    },
  ],
}
