const RESUME_URLS={
  pt:'/resume/Bruno_Almeida_Resume_PTBR.pdf',
  en:'/resume/Bruno_Almeida_Resume_EN.pdf'
};

const CORE_STATS={
  pt:[
    {value:'9',unit:'anos',label:'Engenharia',tone:'accent'},
    {value:'3',label:'Squads lideradas',tone:'signal'},
    {value:'4',label:'Fintechs / bancos',tone:'accent'},
    {value:'2',label:'Idiomas',tone:'plain'}
  ],
  en:[
    {value:'9',unit:'years',label:'Engineering',tone:'accent'},
    {value:'3',label:'Squads led',tone:'signal'},
    {value:'4',label:'Fintechs / banks',tone:'accent'},
    {value:'2',label:'Languages',tone:'plain'}
  ]
};

const SKILLS={
  pt:[
    {label:'C# / .NET Core',value:96,caption:'9 anos'},
    {label:'Arquitetura distribuída',value:90,caption:'Event-driven'},
    {label:'AWS / Kubernetes',value:82,caption:'Docker · CI/CD',tone:'signal'},
    {label:'React / Next.js',value:78,caption:'TypeScript'},
    {label:'Mensageria',value:88,caption:'RabbitMQ'},
    {label:'Observabilidade',value:75,caption:'Datadog · OpenSearch',tone:'signal'},
    {label:'IA aplicada ao SDLC',value:72,caption:'AI-DLC · Agentes'}
  ],
  en:[
    {label:'C# / .NET Core',value:96,caption:'9 years'},
    {label:'Distributed architecture',value:90,caption:'Event-driven'},
    {label:'AWS / Kubernetes',value:82,caption:'Docker · CI/CD',tone:'signal'},
    {label:'React / Next.js',value:78,caption:'TypeScript'},
    {label:'Messaging',value:88,caption:'RabbitMQ'},
    {label:'Observability',value:75,caption:'Datadog · OpenSearch',tone:'signal'},
    {label:'AI applied to the SDLC',value:72,caption:'AI-DLC · Agents'}
  ]
};

const STACK={
  pt:[
    {group:'Backend & APIs',icon:'server',items:['C#','.NET Core','ASP.NET Core','REST APIs','Dapper','Entity Framework']},
    {group:'Frontend',icon:'code',items:['React','Next.js','Angular','TypeScript']},
    {group:'Cloud & DevOps',icon:'cloud',items:['AWS','Docker','Kubernetes','CI/CD']},
    {group:'Arquitetura',icon:'layers',items:['Microservices','Distributed Systems','Event-Driven Architecture']},
    {group:'Dados & Mensageria',icon:'database',items:['PostgreSQL','SQL Server','Oracle','MongoDB','DynamoDB','RabbitMQ']},
    {group:'Observabilidade',icon:'activity',items:['Datadog','OpenSearch']},
    {group:'IA & Automação de Dev',icon:'cpu',items:['AI-DLC (AWS)','Claude','Devin','Agentic Development']}
  ],
  en:[
    {group:'Backend & APIs',icon:'server',items:['C#','.NET Core','ASP.NET Core','REST APIs','Dapper','Entity Framework']},
    {group:'Frontend',icon:'code',items:['React','Next.js','Angular','TypeScript']},
    {group:'Cloud & DevOps',icon:'cloud',items:['AWS','Docker','Kubernetes','CI/CD']},
    {group:'Architecture',icon:'layers',items:['Microservices','Distributed Systems','Event-Driven Architecture']},
    {group:'Data & Messaging',icon:'database',items:['PostgreSQL','SQL Server','Oracle','MongoDB','DynamoDB','RabbitMQ']},
    {group:'Observability',icon:'activity',items:['Datadog','OpenSearch']},
    {group:'AI & Dev Automation',icon:'cpu',items:['AI-DLC (AWS)','Claude','Devin','Agentic Development']}
  ]
};

const ITAU_STACK=[
  ['dotnet','.NET'],
  ['react','React'],
  ['nextdotjs','Next.js'],
  ['docker','Docker'],
  ['kubernetes','Kubernetes'],
  ['amazonaws','AWS'],
  [null,'DynamoDB'],
  ['claude','Claude'],
  ['devin','Devin']
];

const BTG_STACK=[
  ['dotnet','.NET'],
  ['react','React'],
  ['nextdotjs','Next.js'],
  ['kubernetes','Kubernetes'],
  ['amazonaws','AWS'],
  ['rabbitmq','RabbitMQ'],
  ['postgresql','PostgreSQL'],
  ['datadog','Datadog'],
  ['opensearch','OpenSearch']
];

const SINQIA_STACK=[
  ['dotnet','.NET'],
  ['microsoftsqlserver','SQL Server'],
  ['oracle','Oracle'],
  ['rabbitmq','RabbitMQ'],
  ['angular','Angular'],
  ['kubernetes','AKS']
];

const NESTLE_STACK=[
  ['dotnet','.NET'],
  [null,'Entity Framework'],
  ['javascript','JavaScript'],
  ['html5','HTML/CSS'],
];

const EXPERIENCE={
  pt:[
    {
      org:'Itaú Unibanco',
      role:'Senior Software Engineer',
      period:'Mar 2026 — Atual',
      current:true,
      bullets:[
        'Atuação no desenvolvimento da calculadora de sucessão do Private Bank, plataforma de alta disponibilidade voltada a planejamento sucessório e gestão patrimonial.',
        'Em parceria com o tech lead da squad, construção do zero de um fluxo de desenvolvimento orientado a agentes de IA (squad híbrida humano-IA) com o AI-DLC da AWS.',
        'Cobertura de código apoiada por Claude e Devin, com criação de skills reutilizáveis para acelerar e padronizar o desenvolvimento front-end e back-end.',
        'Microsserviços distribuídos com .NET, React, Next.js, Docker, Kubernetes, AWS e DynamoDB como banco NoSQL.',
        'Contribuição para padrões arquiteturais e direcionamento técnico de iniciativas backend e frontend.'
      ],
      stack:ITAU_STACK
    },
    {
      org:'BTG Pactual / Necton',
      role:'Senior Software Engineer / Tech Lead',
      period:'Jan 2023 — Mai 2026',
      bullets:[
        'Liderança técnica no desenvolvimento e evolução do Necton Portal e de sistemas de risco integrados à LiNe da B3, definindo padrões arquiteturais, promovendo qualidade de código e apoiando tecnicamente a squad. O LiNe é a plataforma de gestão de risco pré-negociação da B3, integrada ao ambiente de negociação e utilizada para definição e validação de limites de negociação.',
        'Arquitetura e evolução de microsserviços distribuídos utilizando .NET, AWS e Kubernetes, priorizando alta disponibilidade, resiliência, escalabilidade e observabilidade.',
        'Desenvolvimento do Necton Portal, plataforma responsável por automatizar processos de Middle Office, distribuição de documentos financeiros, gestão operacional e integrações entre serviços críticos do ambiente financeiro, com frontend em React e Next.js.',
        'Modernização da plataforma de geração e distribuição de documentos financeiros, substituindo um fluxo baseado em Quartz e polling por uma arquitetura orientada a eventos utilizando RabbitMQ, reduzindo a latência entre geração e entrega dos documentos.',
        'Projeto da estratégia de processamento concorrente para consumidores distribuídos executando em múltiplos pods Kubernetes, implementando controle de concorrência com PostgreSQL Advisory Transaction Locks para garantir o processamento único de cada execução lógica e eliminar condições de corrida.',
        'Modelagem da orquestração de execuções compostas por múltiplos documentos, estabelecendo regras de conclusão, tratamento de estados de processamento e fluxo automatizado para distribuição dos arquivos.',
        'Integração com AWS S3 e Amazon SES para armazenamento, gerenciamento e distribuição automatizada de documentos financeiros.',
        'Desenvolvimento de soluções para plataformas de risco, integrando serviços internos ao LiNe da B3 para apoiar processos de validação de limites, monitoramento de risco e fluxos operacionais do mercado financeiro.',
        'Otimização de desempenho através da evolução de consultas e índices PostgreSQL, além da implementação de observabilidade utilizando Datadog e OpenSearch para monitoramento e diagnóstico em produção.'
      ],
      stack:BTG_STACK
    },
    {
      org:'Sinqia (Evertec)',
      role:'Senior Software Engineer / Tech Lead',
      period:'Jan 2018 — Dez 2022',
      bullets:[
        'Evolução técnica em uma plataforma de gestão de investimentos para bancos de investimento, atuando inicialmente na sustentação do produto e posteriormente na evolução de novas funcionalidades e liderança técnica da squad de derivativos.',
        'Investigação e resolução de incidentes envolvendo operações de renda fixa, COE, swaps, derivativos e renda variável, realizando análise de cenários, interpretação de regras de negócio, investigação de logs e correção de bugs em produção.',
        'Desenvolvimento e manutenção de aplicações ASP.NET (.NET Framework e posteriormente .NET Core), participando da modernização gradual da plataforma para arquiteturas mais modernas.',
        'Otimização de performance em SQL Server e Oracle, incluindo análise de planos de execução, criação de índices e melhorias de consultas para suportar operações financeiras de alta complexidade.',
        'Desenvolvimento de soluções para o módulo de derivativos, implementando funcionalidades voltadas ao mercado financeiro e apoiando a evolução contínua do produto.',
        'Tech Lead da squad responsável pelo backlog do módulo de derivativos, conduzindo decisões técnicas, revisões de código, refinamentos e acompanhamento do desenvolvimento da equipe.',
        'Participação na evolução da plataforma de Conta Remunerada utilizando .NET Core 3, AKS e SQL Server, contribuindo para serviços distribuídos e processamento assíncrono baseado em mensageria.'
      ],
      stack:SINQIA_STACK
    },
    {
      org:'Nestlé Brasil (TopMind)',
      period:'Dez 2016 — Fev 2018',
      bullets:['Desenvolvimento full-stack com C# MVC, Entity Framework, JavaScript, HTML e CSS.'],
      stack:NESTLE_STACK
    }
  ],
  en:[
    {
      org:'Itaú Unibanco',
      role:'Senior Software Engineer',
      period:'Mar 2026 — Present',
      current:true,
      bullets:[
        'Working on the Private Bank succession planning calculator, a high-availability platform supporting estate succession planning and wealth management.',
        'Partnering with the squad tech lead to build an AI-agent-driven development workflow from the ground up (hybrid human-AI squad) using AWS AI-DLC.',
        'Code coverage supported by Claude and Devin, building reusable skills to accelerate and standardize front-end and back-end development.',
        'Distributed microservices using .NET, React, Next.js, Docker, Kubernetes, AWS, and DynamoDB as a NoSQL store.',
        'Contributing to architectural standards and technical direction across backend and frontend initiatives.'
      ],
      stack:ITAU_STACK
    },
    {
      org:'BTG Pactual / Necton',
      role:'Senior Software Engineer / Tech Lead',
      period:'Jun 2023 — Mar 2026',
      bullets:[
        'Technical leadership for the development and evolution of the Necton Portal and risk systems integrated with B3’s LiNe, defining architectural standards, promoting code quality, and providing technical support to the squad. LiNe is B3’s pre-trade risk management platform, integrated into the trading environment and used to define and validate trading limits.',
        'Architected and evolved distributed microservices using .NET, AWS, and Kubernetes, prioritizing high availability, resilience, scalability, and observability.',
        'Developed the Necton Portal, a platform responsible for automating Middle Office processes, financial document distribution, operational management, and integrations between critical services in the financial environment, with a React and Next.js frontend.',
        'Modernized the financial document generation and distribution platform, replacing a Quartz-and-polling-based flow with an event-driven architecture using RabbitMQ, reducing the latency between document generation and delivery.',
        'Designed the concurrent processing strategy for distributed consumers running across multiple Kubernetes pods, implementing concurrency control with PostgreSQL advisory transaction locks to guarantee single processing of each logical execution and eliminate race conditions.',
        'Modeled the orchestration of executions composed of multiple documents, establishing completion rules, processing state handling, and an automated flow for file distribution.',
        'Integrated AWS S3 and Amazon SES for storage, management, and automated distribution of financial documents.',
        'Developed solutions for risk platforms, integrating internal services with B3’s LiNe to support limit validation, risk monitoring, and operational workflows in the financial market.',
        'Optimized performance by evolving PostgreSQL queries and indexes, and implemented observability with Datadog and OpenSearch for production monitoring and diagnostics.'
      ],
      stack:BTG_STACK
    },
    {
      org:'Sinqia (Evertec)',
      role:'Senior Software Engineer / Tech Lead',
      period:'Jan 2018 — Jun 2023',
      bullets:[
        'Technical evolution of an investment management platform for investment banks, starting in product support and later moving into new feature development and technical leadership of the derivatives squad.',
        'Investigated and resolved incidents involving fixed income, structured notes (COE), swaps, derivatives, and equities operations, performing scenario analysis, business rule interpretation, log investigation, and production bug fixes.',
        'Developed and maintained ASP.NET applications (.NET Framework and later .NET Core), taking part in the platform’s gradual modernization toward more modern architectures.',
        'Optimized performance in SQL Server and Oracle, including execution plan analysis, index creation, and query improvements to support high-complexity financial operations.',
        'Developed solutions for the derivatives module, implementing features geared toward the financial market and supporting the product’s continuous evolution.',
        'Tech lead for the squad responsible for the derivatives module backlog, driving technical decisions, code reviews, refinements, and tracking the team’s development.',
        'Contributed to the evolution of the interest-bearing account platform using .NET Core 3, AKS, and SQL Server, working on distributed services and asynchronous, messaging-based processing.'
      ],
      stack:SINQIA_STACK
    },
    {
      org:'Nestlé Brasil (TopMind)',
      period:'Dec 2016 — Jan 2018',
      bullets:['Full-stack web application development using C# MVC, Entity Framework, JavaScript, HTML, and CSS.'],
      stack:NESTLE_STACK
    }
  ]
};

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
    resumeUrl:RESUME_URLS.pt
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
  builds:['sistemas distribuídos','plataformas de investimento','APIs de alta disponibilidade','microsserviços em .NET','engenharia acelerada por IA'],
  stats:CORE_STATS.pt,
  skills:SKILLS.pt,
  stack:STACK.pt,
  experience:EXPERIENCE.pt,
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
    resumeUrl:RESUME_URLS.en
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
  stats:CORE_STATS.en,
  skills:SKILLS.en,
  stack:STACK.en,
  experience:EXPERIENCE.en,
  education:[
    ['Technologist in Technology Management','FATEC Mauá · 2018'],
    ['Technical Degree in Electronics','ETEC Júlio de Mesquita · 2014']
  ]
};

export const PORTFOLIO_DATA={pt,en};

export const RADIO_TRACKS=[
  {id:'-zjCGL7e0c0'}
];
