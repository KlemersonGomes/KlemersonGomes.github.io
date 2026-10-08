import type { Locale } from "./locale";

interface Experience {
  company: string;
  linkedin: string;
  logo: string;
  logoFallback: string;
  role: string;
  period: string;
  context: string;
  contributions: string[];
  technologies: string[];
  details: {
    keyChallenges: string[];
    challenges: string[];
    projects: { title: string; description: string }[];
    impact: string[];
  };
}

const portugueseExperiences: Experience[] = [
	{
		company: "Algar Telecom",
		linkedin: "https://www.linkedin.com/company/algar-oficial/posts/?feedView=all",
		logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Algar_Telecom_logo.svg",
		logoFallback: "Algar",
		role: "Analista de Dados",
		period: "Out. 2024 – atual",
		context:
			"Desenvolvimento e modernização de soluções analíticas para diferentes áreas da empresa, combinando Power BI, Snowflake e recursos de IA.",
		contributions: [
			"Migração de mais de 10 dashboards de GAIO para Power BI, revisando estruturas, indicadores e consultas durante a transição.",
			"Desenvolvimento de dashboards do zero para áreas como Vendas, Financeiro, Portabilidade, Marketing e Produtos, em parceria direta com os clientes internos.",
			"Criação de views e semantic views no Snowflake, além da otimização de consultas anteriormente executadas diretamente nos dashboards.",
		],
		technologies: [
			"SQL",
			"Python",
			"Snowflake",
			"Power BI",
			"Tableau",
			"Streamlit",
			"GAIO",
			"React",
		],
		details: {
			keyChallenges: [
				"Adaptação a um novo ecossistema tecnológico.",
				"Atendimento simultâneo a diferentes áreas.",
				"Migração de dashboards com pouca documentação.",
				"Entrega de dashboards críticos e urgentes.",
			],
			challenges: [
				"Assumi a migração de dashboards que não haviam sido construídos por mim, o que exigiu compreender estruturas existentes, regras de negócio e indicadores antes de reproduzi-los e aprimorá-los no novo ambiente.",
				"Atendi simultaneamente áreas como Vendas, Financeiro, Portabilidade, Marketing e Produtos, conciliando diferentes necessidades, públicos e níveis de maturidade analítica.",
				"Parte das áreas não possuía acompanhamento estruturado ou dependia de processos manuais em planilhas e apresentações, exigindo o levantamento dos requisitos e a construção das soluções analíticas desde o início.",
			],
			projects: [
				{
					title: "Migração de GAIO para Power BI",
					description:
						"Migração de mais de 10 dashboards de GAIO para Power BI, preservando as regras de negócio e revisando indicadores, consultas e visualizações durante a transição.",
				},
				{
					title: "Dashboards multidisciplinares",
					description:
						"Idealização e construção de dashboards em parceria com clientes internos de diferentes áreas, transformando necessidades de negócio em indicadores e visualizações para acompanhamento recorrente.",
				},
				{
					title: "Evolução da camada analítica no Snowflake",
					description:
						"Criação de views e semantic views, além da transferência e otimização de consultas anteriormente processadas diretamente nos dashboards. A atuação também envolveu o uso de recursos de IA em conjunto com o Snowflake para evoluir a geração e o consumo das informações.",
				},
			],
			impact: [
				"A criação dos dashboards estruturou acompanhamentos que antes não existiam ou dependiam de planilhas e apresentações atualizadas manualmente, reduzindo intervenções humanas e ampliando a disponibilidade das informações.",
				"A centralização das consultas e regras analíticas no Snowflake, junto à criação de views semânticas, contribuiu para soluções mais organizadas, reutilizáveis e alinhadas à evolução da maturidade analítica das áreas atendidas.",
			],
		},
	},
	{
		company: "Agência F2F",
		linkedin: "https://www.linkedin.com/company/f2f/",
		logo: "https://www.google.com/s2/favicons?domain=agenciaf2f.com&sz=128",
		logoFallback: "F2F",
		role: "Analista de BI",
		period: "Abr. 2023 – out. 2024",
		context:
			"Atuação em Business Intelligence e Social Media Analytics para grandes marcas, com foco em desempenho digital, inteligência de mercado e otimização de mídia.",
		contributions: [
			"Produção e apresentação de relatórios mensais com indicadores, insights e recomendações para evolução do desempenho dos clientes nas redes sociais.",
			"Desenvolvimento de dashboards para acompanhamento de resultados digitais, mídia paga e alocação de horas das equipes.",
		],
		technologies: ["Looker", "Power BI", "Google Sheets", "SQL", "Python"],
		details: {
			keyChallenges: [
				"Gestão simultânea de múltiplos clientes.",
				"Análise de dados de mídias sociais orgânicas.",
				"Adaptação a novas ferramentas e plataformas digitais.",
				"Automação de processos executados manualmente.",
				"Criação de dashboards sem escopo previamente definido.",
			],
			challenges: [
				"Atendi simultaneamente diferentes clientes, incluindo grandes marcas como Globo, TCL e Braskem, adaptando análises, indicadores e recomendações aos objetivos e ao contexto de cada negócio.",
				"Transformei dados de desempenho das redes sociais em narrativas claras para os clientes, combinando resultados quantitativos, insights, oportunidades de melhoria e planos de ação para os meses seguintes.",
				"Conciliei dados de diferentes canais e fontes para acompanhar resultados orgânicos, mídia paga, movimentos da concorrência e utilização das horas das equipes internas.",
			],
			projects: [
				{
					title: "Relatórios de desempenho digital",
					description:
						"Produção mensal de relatórios sobre o desempenho das páginas dos clientes nas redes sociais, reunindo indicadores, análises, insights e recomendações para os ciclos seguintes. Os resultados também eram apresentados diretamente aos clientes.",
				},
				{
					title: "Dashboards de Social Media Analytics",
					description:
						"Construção de dashboards para acompanhamento contínuo dos resultados mensais das redes sociais, facilitando a consulta dos principais indicadores e a identificação de variações de desempenho.",
				},
				{
					title: "Estudos de mercado e concorrência",
					description:
						"Desenvolvimento de estudos orientados por dados para compreender comportamentos de mercado, estratégias adotadas por concorrentes e oportunidades sazonais de conteúdo e comunicação.",
				},
				{
					title: "Dashboard de alocação de horas",
					description:
						"Desenvolvimento de dashboards internos para acompanhar as horas dedicadas pelas equipes a diferentes clientes e projetos, substituindo um processo que anteriormente era realizado manualmente em planilhas de Excel.",
				},
				{
					title: "Análise de mídia paga",
					description:
						"Análise dos dados de campanhas de mídia paga para identificar oportunidades de otimização de custos e melhoria de desempenho dos investimentos.",
				},
			],
			impact: [
				"A substituição do acompanhamento manual em Excel por dashboards centralizou a visualização das horas dedicadas por equipe e cliente, apoiando uma gestão mais eficiente do tempo e da capacidade das áreas.",
				"Os relatórios, estudos e dashboards ampliaram a visibilidade dos clientes sobre o desempenho digital e apoiaram ajustes em conteúdo, estratégias sazonais e campanhas de mídia paga.",
			],
		},
	},
	{
		company: "A3Data",
		linkedin: "https://www.linkedin.com/company/a3data-consultoria/",
		logo: "https://www.google.com/s2/favicons?domain=a3data.com.br&sz=128",
		logoFallback: "A3",
		role: "Analista de Dados → Cientista de Dados",
		period: "Set. 2021 – mar. 2023",
		context:
			"Atuação em projetos de Analytics para áreas como Logística, FP&A, Vendas e Marketing, desenvolvendo dashboards e análises para diferentes necessidades de negócio.",
		contributions: [
			"Desenvolvimento de dashboards para acompanhamento operacional, financeiro e comercial.",
			"Análises exploratórias combinando dados internos e públicos para apoiar decisões de mídia e planejamento comercial.",
		],
		technologies: ["SQL", "Power BI", "Python", "R", "AWS"],
		details: {
			keyChallenges: [
				"Atendimento simultâneo a diferentes áreas.",
				"Atuação com clientes de segmentos distintos.",
				"Adaptação a novas tecnologias analíticas.",
				"Condução autônoma de projetos.",
				"Primeira experiência com dados de mídia paga.",
			],
			challenges: [
				"Atuei durante seis meses como cientista de dados em um projeto para uma empresa do setor automotivo, conduzindo a maior parte da frente analítica de forma autônoma, com apoio pontual de um Tech Lead e de um Scrum Master, além de manter contato direto com a equipe do cliente.",
				"O desafio era compreender como sazonalidade, perfil dos clientes e potencial regional poderiam orientar uma distribuição mais eficiente dos investimentos em mídia.",
			],
			projects: [
				{
					title: "Dashboard de mídia e sazonalidade",
					description:
						"Desenvolvimento de um dashboard que relacionava o desempenho de mídia às variações de temperatura e ao perfil demográfico dos clientes, apoiando a análise de tendências sazonais e o planejamento de vendas.",
				},
				{
					title: "Estudo de potencial regional",
					description:
						"Construção de um estudo de quadrantes que cruzava o histórico de vendas com dados públicos sobre a frota de veículos no Brasil, permitindo identificar regiões com maior potencial e orientar a alocação dos investimentos em mídia.",
				},
			],
			impact: [
				"Nos 60 dias seguintes aos ajustes de investimento orientados pelo estudo, as vendas em Minas Gerais aumentaram 20%, enquanto investimentos em regiões já maduras puderam ser reduzidos.",
			],
		},
	},
	{
		company: "Indra Company",
		linkedin: "https://www.linkedin.com/company/indra/",
		logo: "https://www.google.com/s2/favicons?domain=indragroup.com&sz=128",
		logoFallback: "Indra",
		role: "Analista de Dados",
		period: "Fev. 2020 – set. 2021",
		context:
			"Migração e evolução de dashboards no projeto Bradesco LGPD.",
		contributions: [
			"Reestruturação e redesenho de sete dashboards para melhorar a leitura dos indicadores.",
			"Identificação de uma inconsistência em dados protocolares durante a análise exploratória, permitindo sua avaliação e correção.",
		],
		technologies: ["SQL", "Power BI", "Excel", "Azure"],
		details: {
			keyChallenges: [
				"Primeira experiência profissional na área de Dados.",
				"Atuação em uma equipe multidisciplinar de 27 profissionais.",
				"Adaptação a diferentes ferramentas e tecnologias.",
				"Atuação como único analista na etapa inicial do projeto.",
			],
			challenges: [
				"Durante minha atuação como desenvolvedor de software, trabalhei em uma equipe multidisciplinar de 27 profissionais, contexto que exigia alinhamento frequente e comunicação clara entre diferentes funções para manter a continuidade das entregas.",
				"Posteriormente, ao migrar para Analytics, assumi a atuação como único analista de dados durante aproximadamente cinco meses na etapa inicial do projeto de LGPD do Bradesco.",
				"Recebi sete dashboards originalmente construídos pela equipe de engenharia que precisavam evoluir em organização visual, clareza dos indicadores e storytelling para facilitar a interpretação pelos stakeholders.",
				"Durante a análise exploratória e validação da qualidade dos dados, identifiquei inconsistências no registro de protocolos e conduzi a investigação junto ao time de engenharia até localizar a origem do problema no front-end da aplicação.",
			],
			projects: [
				{
					title: "Evolução de dashboards de LGPD",
					description:
						"Migração e redesenho de sete dashboards, com foco em melhorar a hierarquia das informações, a leitura dos indicadores e a comunicação visual dos resultados.",
				},
				{
					title: "Monitoramento de protocolos",
					description:
						"Construção de dois novos dashboards para acompanhamento do status dos protocolos, ampliando a visibilidade sobre o andamento das solicitações e apoiando o monitoramento operacional do projeto.",
				},
			],
			impact: [
				"A investigação das inconsistências nos protocolos levou à identificação e correção de uma falha com potencial impacto sobre o tratamento de dados sensíveis. Segundo feedback direto do cliente, esse resultado contribuiu para a decisão de prorrogar o contrato com a Indra por mais seis meses.",
			],
		},
	},
];

const englishExperiences: Experience[] = [
  {
    ...portugueseExperiences[0],
    role: "Data Analyst",
    period: "Oct 2024 – present",
    context: "Development and modernization of analytical solutions for different business teams, combining Power BI, Snowflake, and AI capabilities.",
    contributions: [
      "Migrated more than 10 dashboards from GAIO to Power BI, reviewing structures, metrics, and queries during the transition.",
      "Built dashboards from scratch for teams including Sales, Finance, Number Portability, Marketing, and Product, working directly with internal stakeholders.",
      "Created views and semantic views in Snowflake and optimized queries previously executed directly in dashboards.",
    ],
    details: {
      keyChallenges: [
        "Adapting to a new technology ecosystem.",
        "Supporting multiple business teams simultaneously.",
        "Migrating dashboards with limited documentation.",
        "Delivering urgent, business-critical dashboards.",
      ],
      challenges: [
        "I took responsibility for migrating dashboards built by others, which required understanding existing structures, business rules, and metrics before reproducing and improving them in the new environment.",
        "I supported Sales, Finance, Number Portability, Marketing, and Product teams simultaneously, balancing different needs, audiences, and levels of analytical maturity.",
        "Some teams had no structured reporting or relied on manual processes in spreadsheets and presentations, so I gathered requirements and built analytical solutions from the ground up.",
      ],
      projects: [
        {
          title: "GAIO to Power BI migration",
          description: "Migrated more than 10 dashboards from GAIO to Power BI, preserving business rules and reviewing metrics, queries, and visualizations during the transition.",
        },
        {
          title: "Dashboards for multiple business teams",
          description: "Designed and built dashboards in partnership with internal stakeholders across different teams, turning business needs into metrics and visualizations for ongoing monitoring.",
        },
        {
          title: "Enhancing the analytical layer in Snowflake",
          description: "Created views and semantic views, and moved and optimized queries previously processed directly in dashboards. This work also involved using AI capabilities alongside Snowflake to improve how information was generated and consumed.",
        },
      ],
      impact: [
        "The dashboards established reporting that had previously been unavailable or relied on manually updated spreadsheets and presentations, reducing manual intervention and making information more readily available.",
        "Centralizing queries and analytical rules in Snowflake, together with the creation of semantic views, contributed to better organized, reusable solutions aligned with the growing analytical maturity of the teams involved.",
      ],
    },
  },
  {
    ...portugueseExperiences[1],
    role: "BI Analyst",
    period: "Apr 2023 – Oct 2024",
    context: "Business Intelligence and Social Media Analytics work for major brands, focused on digital performance, market intelligence, and media optimization.",
    contributions: [
      "Produced and presented monthly reports with metrics, insights, and recommendations to improve clients' social media performance.",
      "Developed dashboards to monitor digital results, paid media, and team time allocation.",
    ],
    details: {
      keyChallenges: [
        "Managing multiple clients simultaneously.",
        "Analyzing organic social media data.",
        "Adapting to new tools and digital platforms.",
        "Automating manual processes.",
        "Building dashboards without a predefined scope.",
      ],
      challenges: [
        "I supported different clients simultaneously, including major brands such as Globo, TCL, and Braskem, adapting analyses, metrics, and recommendations to each business's objectives and context.",
        "I turned social media performance data into clear narratives for clients, combining quantitative results, insights, improvement opportunities, and action plans for the following months.",
        "I brought together data from different channels and sources to monitor organic performance, paid media, competitor activity, and the use of internal teams' working hours.",
      ],
      projects: [
        {
          title: "Digital performance reports",
          description: "Produced monthly reports on clients' social media page performance, bringing together metrics, analyses, insights, and recommendations for subsequent reporting cycles. Results were also presented directly to clients.",
        },
        {
          title: "Social Media Analytics dashboards",
          description: "Built dashboards for ongoing monitoring of monthly social media results, making key metrics easier to access and performance changes easier to identify.",
        },
        {
          title: "Market and competitor research",
          description: "Developed data-informed studies to understand market behavior, competitors' strategies, and seasonal opportunities for content and communication.",
        },
        {
          title: "Time allocation dashboard",
          description: "Developed internal dashboards to monitor the hours teams spent on different clients and projects, replacing a process previously carried out manually in Excel spreadsheets.",
        },
        {
          title: "Paid media analysis",
          description: "Analyzed paid media campaign data to identify opportunities to optimize costs and improve investment performance.",
        },
      ],
      impact: [
        "Replacing manual tracking in Excel with dashboards centralized visibility into hours spent by team and client, supporting more efficient management of time and team capacity.",
        "Reports, studies, and dashboards gave clients greater visibility into digital performance and supported adjustments to content, seasonal strategies, and paid media campaigns.",
      ],
    },
  },
  {
    ...portugueseExperiences[2],
    role: "Data Analyst → Data Scientist",
    period: "Sep 2021 – Mar 2023",
    context: "Analytics projects for teams including Logistics, FP&A, Sales, and Marketing, developing dashboards and analyses for different business needs.",
    contributions: [
      "Developed dashboards to monitor operational, financial, and sales performance.",
      "Performed exploratory analyses combining internal and public data to support media investment decisions and sales planning.",
    ],
    details: {
      keyChallenges: [
        "Supporting multiple business teams simultaneously.",
        "Working with clients across different industries.",
        "Adapting to new analytical technologies.",
        "Managing projects independently.",
        "Working with paid media data for the first time.",
      ],
      challenges: [
        "I worked for six months as a data scientist on a project for an automotive company, independently handling most of the analytical work with occasional support from a Tech Lead and a Scrum Master, while maintaining direct contact with the client's team.",
        "The challenge was to understand how seasonality, customer profiles, and regional potential could guide a more efficient allocation of media investment.",
      ],
      projects: [
        {
          title: "Media performance and seasonality dashboard",
          description: "Developed a dashboard relating media performance to temperature variations and customer demographics, supporting the analysis of seasonal trends and sales planning.",
        },
        {
          title: "Regional potential analysis",
          description: "Built a quadrant analysis combining sales history with public data on Brazil's vehicle fleet, identifying regions with greater potential and informing the allocation of media investment.",
        },
      ],
      impact: [
        "In the 60 days following investment adjustments informed by the study, sales in Minas Gerais increased by 20%, while investment in already mature regions could be reduced.",
      ],
    },
  },
  {
    ...portugueseExperiences[3],
    role: "Data Analyst",
    period: "Feb 2020 – Sep 2021",
    context: "Dashboard migration and enhancement for Bradesco's LGPD project, related to Brazil's General Data Protection Law.",
    contributions: [
      "Restructured and redesigned seven dashboards to improve the readability of metrics.",
      "Identified an inconsistency in request records during exploratory analysis, enabling it to be investigated and corrected.",
    ],
    details: {
      keyChallenges: [
        "My first professional experience in Data.",
        "Working in a multidisciplinary team of 27 professionals.",
        "Adapting to different tools and technologies.",
        "Working as the sole analyst in the project's initial stage.",
      ],
      challenges: [
        "While working as a software developer, I was part of a multidisciplinary team of 27 professionals, a setting that required frequent alignment and clear communication across roles to keep deliveries on track.",
        "After moving into Analytics, I worked as the sole data analyst for approximately five months during the initial stage of Bradesco's LGPD project.",
        "I took over seven dashboards originally built by the engineering team that needed improvements in visual organization, metric clarity, and storytelling to make them easier for stakeholders to interpret.",
        "During exploratory analysis and data quality validation, I identified inconsistencies in request records and investigated them with the engineering team until we traced the problem to the application's front end.",
      ],
      projects: [
        {
          title: "Enhancing LGPD dashboards",
          description: "Migrated and redesigned seven dashboards, focusing on information hierarchy, metric readability, and the visual communication of results.",
        },
        {
          title: "Request status monitoring",
          description: "Built two new dashboards to monitor request status, improving visibility into request progress and supporting the project's operational monitoring.",
        },
      ],
      impact: [
        "Investigating the inconsistencies in request records led to the identification and correction of a defect with a potential impact on the handling of sensitive data. According to direct client feedback, this outcome contributed to the decision to extend Indra's contract by a further six months.",
      ],
    },
  },
];

export const experiencesByLocale: Record<Locale, Experience[]> = {
  en: englishExperiences,
  pt: portugueseExperiences,
};
