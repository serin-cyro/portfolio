export interface Job {
    company: string;
    description: string;
    dates: string;
  }
  
  export const JOBS: Job[] = [
    {
      company: 'Tata Consultancy Services Ltd.',
      description:
        ' Develop and maintain responsive, scalable, and maintainable user interfaces using Angular.',
      dates: 'Aug 2022 - Present',
    },
    {
      company: 'Tata Consultancy Services Ltd.',
      description:
        'Designed and implemented a Python-based web scraping tool to aggregate real-time information from multiple sources based on provided keywords',
      dates: 'March 2022 - June 2022',
    },
    {
      company: 'Byte Head',
      description:
        'Collaborated with the team to design and develop cross-platform mobile applications using Flutter and Dart',
      dates: 'May 2021 - Feb 2022',
    },
  ];
  