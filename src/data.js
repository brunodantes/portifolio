const pt = {
  player:{
    name:'Bruno Almeida',
    fullName:'Bruno Dantas de Almeida',
    role:'Senior Software Engineer / Tech Lead',
    city:'São Paulo, Brasil',
    level:'LV 09',
    linkedin:'linkedin.com/in/bdalme',
    phone:'+55 (11) 99651-6112',
    github:'github.com/brunodantes',
    resumo:'Engenheiro de software sênior e tech lead com mais de 9 anos projetando, desenvolvendo e escalando sistemas distribuídos de alta disponibilidade para o mercado financeiro.',
    resumeUrl:'/resume/Bruno_Almeida_Resume_PTBR.pdf'
  },
  ui:{
    nav:['Início','Trajetória','Equipamento','Contato'],
    resumeBtn:'Currículo',
    hero:{headline:'Construo sistemas que não param.',focusKicker:'Em foco',ctaPrimary:'Ver trajetória',ctaSecondary:'Falar comigo'},
    about:{kicker:'Histórico',title:'Trajetória',lead:'Mais de 9 anos em engenharia de software — de sistemas web internos a plataformas financeiras de alta disponibilidade.',current:'Atual',education:'Formação',english:'Inglês avançado'},
    stack:{kicker:'Equipamento',title:'Stack e proficiência',lead:'O que uso todos os dias, com o tempo de estrada em cada item.'},
    contact:{kicker:'Contato',title:'Próxima fase',lead:'Aberto a conversas sobre engenharia de plataforma, arquitetura distribuída e liderança técnica.',
      linkedinLabel:'LinkedIn',linkedinHint:'Conecte-se comigo',
      githubLabel:'GitHub',githubHint:'Veja meus repositórios',
      phoneLabel:'Telefone',phoneHint:'Ligue ou mande mensagem',
      resumeLabel:'Currículo',resumeHint:'Baixe o currículo completo',
      preferences:'Preferências',motion:'Movimento'}
  },
  builds:['sistemas distribuídos','plataformas de renda variável','APIs de alta disponibilidade','microsserviços em .NET','engenharia acelerada por IA'],
  stats:[
    {value:'9',unit:'anos',label:'Engenharia',tone:'accent'},
    {value:'3',label:'Squads lideradas',tone:'signal'},
    {value:'4',label:'Fintechs / bancos',tone:'accent'},
    {value:'2',label:'Idiomas',tone:'plain'}
  ],
  skills:[
    {label:'C# / .NET Core',value:96,caption:'9 anos'},
    {label:'Arquitetura distribuída',value:90,caption:'Event-driven'},
    {label:'AWS / Kubernetes',value:82,caption:'Docker · CI/CD',tone:'signal'},
    {label:'React / Next.js',value:78,caption:'TypeScript'},
    {label:'Mensageria',value:88,caption:'RabbitMQ'},
    {label:'Observabilidade',value:75,caption:'Datadog · OpenSearch',tone:'signal'},
    {label:'IA aplicada ao SDLC',value:72,caption:'AI-DLC · Agentes'}
  ],
  stack:[
    {group:'Backend & APIs',icon:'server',items:['C#','.NET Core','ASP.NET Core','REST APIs','Dapper','Entity Framework']},
    {group:'Frontend',icon:'code',items:['React','Next.js','Angular','TypeScript']},
    {group:'Cloud & DevOps',icon:'cloud',items:['AWS','Docker','Kubernetes','CI/CD']},
    {group:'Arquitetura',icon:'layers',items:['Microservices','Distributed Systems','Event-Driven Architecture']},
    {group:'Dados & Mensageria',icon:'database',items:['PostgreSQL','SQL Server','Oracle','MongoDB','DynamoDB','RabbitMQ']},
    {group:'Observabilidade',icon:'activity',items:['Datadog','OpenSearch']},
    {group:'IA & Automação de Dev',icon:'cpu',items:['AI-DLC (AWS)','Claude','Devin','Agentic Development']}
  ],
  experience:[
    {org:'Itaú Unibanco',role:'Senior Software Engineer',period:'Mar 2026 — Atual',current:true,
     bullets:['Atuação no desenvolvimento da calculadora de sucessão do Private Bank, plataforma de alta disponibilidade voltada a planejamento sucessório e gestão patrimonial.','Em parceria com o tech lead da squad, construção do zero de um fluxo de desenvolvimento orientado a agentes de IA (squad híbrida humano-IA) com o AI-DLC da AWS.','Cobertura de código apoiada por Claude e Devin, com criação de skills reutilizáveis para acelerar e padronizar o desenvolvimento front-end e back-end.','Microsserviços distribuídos com .NET, React, Next.js, Docker, Kubernetes, AWS e DynamoDB como banco NoSQL.','Contribuição para padrões arquiteturais e direcionamento técnico de iniciativas backend e frontend.'],
     stack:[['dotnet','.NET'],['react','React'],['nextdotjs','Next.js'],['docker','Docker'],['kubernetes','Kubernetes'],[null,'AWS'],[null,'DynamoDB'],[null,'Claude'],[null,'Devin'],[null,'AI-DLC']]},
    {org:'BTG Pactual',role:'Senior Software Engineer / Tech Lead',period:'Jan 2023 — Mai 2026',
     bullets:['Liderança técnica em plataformas críticas de renda variável e derivativos.','Arquitetura de microsserviços cloud-native com .NET e AWS.','Soluções distribuídas e orientadas a eventos com RabbitMQ e bancos relacionais.','Observabilidade com Datadog e OpenSearch.','Liderança técnica de squads de engenharia, definindo padrões de arquitetura e qualidade de código.'],
     stack:[['dotnet','.NET'],[null,'AWS'],['rabbitmq','RabbitMQ'],['datadog','Datadog'],[null,'OpenSearch']]},
    {org:'Sinqia (Evertec)',role:'Senior Software Engineer / Tech Lead',period:'Jan 2018 — Dez 2022',
     bullets:['Liderança técnica de squad focada em sistemas de derivativos, orientando outros engenheiros.','APIs e serviços backend com C#, .NET Framework/Core e bancos relacionais.','Modernização e migração de sistemas legados.'],
     stack:[['dotnet','.NET Framework/Core']]},
    {org:'Via Varejo',period:'Ago 2021 — Jan 2022',
     bullets:['Integrações backend para plataformas de varejo de alto tráfego.']},
    {org:'Nestlé Brasil (TopMind)',period:'Dez 2016 — Fev 2018',
     bullets:['Desenvolvimento full-stack com C# MVC, Entity Framework, JavaScript, HTML e CSS.'],
     stack:[['dotnet','C# MVC'],[null,'Entity Framework'],[null,'JavaScript'],[null,'HTML/CSS']]},
    {org:'Easylux Retrorrefletometers',period:'Jan 2015 — Mai 2016',
     bullets:['Desenvolvimento e manutenção de sistemas web internos.']}
  ],
  education:[
    ['Tecnólogo em Gestão da Tecnologia da Informação','FATEC Mauá · 2018'],
    ['Técnico em Eletrônica','ETEC Júlio de Mesquita · 2014']
  ]
};

const en = {
  player:{
    name:'Bruno Almeida',
    fullName:'Bruno Dantas de Almeida',
    role:'Senior Software Engineer / Tech Lead',
    city:'São Paulo, Brazil',
    level:'LV 09',
    linkedin:'linkedin.com/in/bdalme',
    phone:'+55 (11) 99651-6112',
    github:'github.com/brunodantes',
    resumo:'Senior software engineer and tech lead with 9+ years designing, building, and scaling high-availability distributed systems for the financial services industry.',
    resumeUrl:'/resume/Bruno_Almeida_Resume_EN.pdf'
  },
  ui:{
    nav:['Home','Experience','Stack','Contact'],
    resumeBtn:'Resume',
    hero:{headline:'I build systems that stay up.',focusKicker:'In focus',ctaPrimary:'View experience',ctaSecondary:'Get in touch'},
    about:{kicker:'History',title:'Experience',lead:'9+ years in software engineering — from internal web systems to high-availability financial platforms.',current:'Current',education:'Education',english:'Advanced English'},
    stack:{kicker:'Stack',title:'Stack & proficiency',lead:'What I use every day, with time-on-the-road for each one.'},
    contact:{kicker:'Contact',title:'Next level',lead:'Open to conversations about platform engineering, distributed architecture, and technical leadership.',
      linkedinLabel:'LinkedIn',linkedinHint:'Connect with me',
      githubLabel:'GitHub',githubHint:'See my repositories',
      phoneLabel:'Phone',phoneHint:'Call or message',
      resumeLabel:'Resume',resumeHint:'Download the full resume',
      preferences:'Preferences',motion:'Motion'}
  },
  builds:['distributed systems','equity trading platforms','high-availability APIs','.NET microservices','AI-accelerated engineering'],
  stats:[
    {value:'9',unit:'years',label:'Engineering',tone:'accent'},
    {value:'3',label:'Squads led',tone:'signal'},
    {value:'4',label:'Fintechs / banks',tone:'accent'},
    {value:'2',label:'Languages',tone:'plain'}
  ],
  skills:[
    {label:'C# / .NET Core',value:96,caption:'9 years'},
    {label:'Distributed architecture',value:90,caption:'Event-driven'},
    {label:'AWS / Kubernetes',value:82,caption:'Docker · CI/CD',tone:'signal'},
    {label:'React / Next.js',value:78,caption:'TypeScript'},
    {label:'Messaging',value:88,caption:'RabbitMQ'},
    {label:'Observability',value:75,caption:'Datadog · OpenSearch',tone:'signal'},
    {label:'AI applied to the SDLC',value:72,caption:'AI-DLC · Agents'}
  ],
  stack:[
    {group:'Backend & APIs',icon:'server',items:['C#','.NET Core','ASP.NET Core','REST APIs','Dapper','Entity Framework']},
    {group:'Frontend',icon:'code',items:['React','Next.js','Angular','TypeScript']},
    {group:'Cloud & DevOps',icon:'cloud',items:['AWS','Docker','Kubernetes','CI/CD']},
    {group:'Architecture',icon:'layers',items:['Microservices','Distributed Systems','Event-Driven Architecture']},
    {group:'Data & Messaging',icon:'database',items:['PostgreSQL','SQL Server','Oracle','MongoDB','DynamoDB','RabbitMQ']},
    {group:'Observability',icon:'activity',items:['Datadog','OpenSearch']},
    {group:'AI & Dev Automation',icon:'cpu',items:['AI-DLC (AWS)','Claude','Devin','Agentic Development']}
  ],
  experience:[
    {org:'Itaú Unibanco',role:'Senior Software Engineer',period:'Mar 2026 — Present',current:true,
     bullets:['Working on the Private Bank succession planning calculator, a high-availability platform supporting estate succession planning and wealth management.','Partnering with the squad tech lead to build an AI-agent-driven development workflow from the ground up (hybrid human-AI squad) using AWS AI-DLC.','Code coverage supported by Claude and Devin, building reusable skills to accelerate and standardize front-end and back-end development.','Distributed microservices using .NET, React, Next.js, Docker, Kubernetes, AWS, and DynamoDB as a NoSQL store.','Contributing to architectural standards and technical direction across backend and frontend initiatives.'],
     stack:[['dotnet','.NET'],['react','React'],['nextdotjs','Next.js'],['docker','Docker'],['kubernetes','Kubernetes'],[null,'AWS'],[null,'DynamoDB'],[null,'Claude'],[null,'Devin'],[null,'AI-DLC']]},
    {org:'BTG Pactual',role:'Senior Software Engineer / Tech Lead',period:'Jan 2023 — May 2026',
     bullets:['Led engineering initiatives for mission-critical financial platforms supporting equity and derivatives operations.','Architected cloud-native microservices using .NET and AWS for scalable and fault-tolerant financial workflows.','Designed distributed and event-driven solutions integrating RabbitMQ, relational databases, and AWS services.','Implemented observability solutions using Datadog and OpenSearch, improving operational visibility.','Acted as technical lead for engineering squads, driving architecture decisions and code quality standards.'],
     stack:[['dotnet','.NET'],[null,'AWS'],['rabbitmq','RabbitMQ'],['datadog','Datadog'],[null,'OpenSearch']]},
    {org:'Sinqia (Evertec)',role:'Senior Software Engineer / Tech Lead',period:'Jan 2018 — Dec 2022',
     bullets:['Led a derivatives-focused engineering squad, providing technical leadership and mentoring.','Developed APIs and backend services using C#, .NET Framework/Core, and relational databases.','Contributed to modernization initiatives involving legacy systems migration and architectural improvements.'],
     stack:[['dotnet','.NET Framework/Core']]},
    {org:'Via Varejo',period:'Aug 2021 — Jan 2022',
     bullets:['Developed backend integration solutions for high-traffic retail platforms.']},
    {org:'Nestlé Brasil (TopMind)',period:'Dec 2016 — Feb 2018',
     bullets:['Full-stack web application development using C# MVC, Entity Framework, JavaScript, HTML, and CSS.'],
     stack:[['dotnet','C# MVC'],[null,'Entity Framework'],[null,'JavaScript'],[null,'HTML/CSS']]},
    {org:'Easylux Retrorrefletometers',period:'Jan 2015 — May 2016',
     bullets:['Development and maintenance of internal web-based systems.']}
  ],
  education:[
    ['Technologist in Technology Management','FATEC Mauá · 2018'],
    ['Technical Degree in Electronics','ETEC Júlio de Mesquita · 2014']
  ]
};

export const PORTFOLIO_DATA={pt,en};

export const RADIO_TRACKS=[
  {id:'-zjCGL7e0c0'}
];
