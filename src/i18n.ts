import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//Objeto para realizar a tradução do site
i18n.use(initReactI18next).init({
    lng: "pt",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources:{
        pt: {
            code: 'pt-BR',
            translation: {
                language: "Idioma:",
                section: {
                    "about": 'Sobre mim',
                    "projects": 'Projetos',
                    "stacks": 'Tecnologias',
                    "experiences": 'Experiências',
                    "courses": 'Cursos',
                    "articles": 'Artigos'
                },
                title: 'Desenvolvedora Frontend',
                about: 'Engenheira em transição de carreira, apaixonada por desenvolvimento web e empoderamento de mulheres. Motivada pelo aprendizado constante estou aprofundado meus conhecimentos por meio da pós-graduação em Engenharia de Software.',
                education: {
                    "status": 'Pausado',
                    "closed": 'Ver formação completa',
                    "opened": 'Fechar formação',
                    "carto": 'Engenharia Cartográfica',
                    "computer": 'Ciência da Computação',
                    "software": 'Engenharia de Software',
                    "undergraduated": 'Bacharelado',
                    "master": 'Mestrado',
                    "graduated": 'Pós-graduação'
                },
                download: 'Baixar CV',
                projects: {
                    "daily_planner": {"title": 'Daily Planner',
                                    "description": "Projeto replicando um layout de daily planner"
                                    },
                    "newsletter": {"title": 'Página de newsletter',
                                    "description": "Desafio 40 do #boraCodar da Rocketseat"
                                    },
                    "layout_intermediario": {"title": 'Página de empresa de viagem',
                                    "description": "Projeto de layout intermediário proposto no curso da Rocketseat"
                                    },
                    "layout_avancado": {"title": 'Página de empresa de segurança',
                    "description": "Projeto de layout avançado proposto no curso da Rocketseat"
                                    },
                    "formulario": {"title": 'Formulário de mentoria',
                    "description": "Projeto de um formulário proposto no curso da Rocketseat"
                                    },
                    "responsividade": {"title": 'Blog de gatos',
                    "description": "Projeto de um blog responsivo proposto no curso da Rocketseat"
                                    },
                    "explore": {"title": 'Explore sem limite',
                    "description": "Projeto de revisão proposto no curso da Rocketseat"
                                    },
                    "biscoito": {"title": 'Biscoito da sorte',
                        "description": "Projeto do jogo do biscoito da sorte proposto no curso da Rocketseat"
                    },
                    "universe": {"title": 'SPA Universe',
                        "description": "Projeto de uma SPA (Single Page Application) proposto no curso da Rocketseat"
                    },
                    "gitfav": {"title": 'GitFav',
                        "description": "Projeto de integração com a API do github para salvar os usuários favoritos proposto no curso da Rocketseat"
                    },
                    "peg": {"title": 'Plataforma educacional gameficada - PEG',
                            "description": "Plataforma desenvolvida para o Hack for Change"
                            },
                    "portfolio": {"title": 'Portfólio de uma artista',
                                "description": "Um portfólio desenvolvido para a artista Naju"
                                },
                    "landing_page": {"title": 'Landing page',
                                    "description": "Landing page feita em conjunto na comunidade de mulheres e tecnologia"
                                    },
                    "ladyrepair": {"title": 'LadyRepair',
                                "description": "Site de divulgação de serviços realizados por mulheres, MVP para a pós-graduação de Engenharia de Software."
                                },
                    "ladyrepair_api": {"title": 'API do LadyRepair',
                                    "description": "Criada para cadastro de serviços realizados por mulheres, MVP para a pós-graduação de Engenharia de Software."
                                    },
                },
                stacks: {
                    "version_control": "Versionamento de código",
                    "doc_org": "Documentação e organização",
                    "database": "Banco de dados",
                    "data_science": "Ciência de dados"
                },
                repository: "Repositório",
                experiences: { 
                    "stacks": "Linguagens utilizadas",
                    "role": {"title": "Analista de Geoprocessamento",
                            "junior": "Júnior",
                            "pleno": "Pleno"
                        },
                    "place": "Secretaria Municipal de Assistência Social - RJ",
                    "main_title": "Projetos desenvolvidos",
                    "social_index": {"title": 'Cálculo de indicador social',
                                    "description": "Desenvolvimento de um algoritmo que calcula o indicador social baseado na base de dados do CADúnico"
                                    },
                    "data_portal": {"title": 'Elaboração de portal de dados',
                                    "description": "Desenvolvimento de um site de acesso à dados socioassistenciais utilizando a plataforma ArcGIS Hub"
                                    },
                    "volunteer": {"title": 'Elaboração de site de voluntariado',
                            "description": `Desenvolvimento de um site de inscrição para voluntariado nas unidades da secretaria, utilizando a plataforma ArcGIS Hub. <a href="https://voluntario-pcrj.hub.arcgis.com/" target="_blank" style="text-decoration:none;color:#6c528b;" >Acesse a plataforma</a>`
                            }
                },
                courses: {
                    "course": 'Curso',
                    "school": 'Instituição'
                },
                visit: "Acesse aqui",
                footer: {
                    "source": "Fontes",
                    "develop": "Desenvolvido por",
                    "update": "Atualizado em "
                }
            }
        },
        en: {
            code: 'en-US',
            translation: {
                language: "Language:",
                section: {
                    "about": 'About',
                    "projects": 'Projects',
                    "stacks": 'Stacks',
                    "experiences": 'Experiences',
                    "courses": 'Courses',
                    "articles": 'Articles'
                },
                title: 'Frontend Developer',
                about: "I'm an engineer switching careers, passionate about web development and women's empowerment. Motivated to improve my skills, I'm taking a Software Engineering graduate course.",
                education: {
                    "status": '',
                    "closed": 'See full educational background',
                    "opened": 'Close educational background',
                    "carto": 'Surveyor Engineering',
                    "computer": 'Computer Science',
                    "software": 'Software Engineering ',
                    "undergraduated": "Bachelor's degree",
                    "master": "Master's degree",
                    "graduated": 'Graduate degree'
                },
                download: 'CV Download',
                projects: {
                    "daily_planner": {"title": 'Daily Planner',
                                    "description": "Project developed to replicate a layout of a daily planner "
                                    },
                    "newsletter": {"title": 'Newsletter Page',
                                    "description": "40th Challenge from Rocketseat's #boraCodar"
                                    },
                    "layout_intermediario": {"title": 'Tourism company page',
                                    "description": "Intermediate challenge from Rocketseat's course"
                                    },
                    "layout_avancado": {"title": 'Data security page',
                    "description": "Advanced challenge from Rocketseat's course"
                                    },
                    "formulario": {"title": 'Mentorship survey',
                    "description": "Survey challenge from Rocketseat's course"
                                    },
                    "responsividade": {"title": 'Cat blog',
                    "description": "Responsive blog challenge from Rocketseat's course"
                                    },
                    "explore": {"title": 'Explore without limit',
                    "description": "Review challenge from Rocketseat's course"
                                    },
                    "biscoito": {"title": 'Fortune cookie',
                        "description": "Fortune cookie game challenge from Rocketseat's course"
                    },
                    "universe": {"title": 'SPA Universe',
                        "description": "SPA (Single Page Application) challenge from Rocketseat's course"
                    },
                    "gitfav": {"title": 'GitFav',
                        "description": "github's API fetch challenge from Rocketseat's course"
                    },
                    "peg": {"title": 'Educational game website',
                            "description": "Project developed in a team during the Hackathon, Hack for change"
                            },
                    "portfolio": {"title": 'Artist Portfolio',
                                "description": "Project developed to share the work of an artist"
                                },
                    "landing_page": {"title": 'Landing page',
                                    "description": "Landing page developed with the Women and Tech community"
                                    },
                    "ladyrepair": {"title": 'LadyRepair',
                                "description": "Website developed to advertising services made by women. Project developed for an MVP at the software engineering graduate course"
                                },
                    "ladyrepair_api": {"title": 'LadyRepair API',
                                    "description": "Developed to create services made by women. Project developed for an MVP at the software engineering graduate course"
                                    },
                },
                stacks: {
                    "version_control": "Version control",
                    "doc_org": "Documentation and management",
                    "database": "Database",
                    "data_science": "Data Science"
                },
                repository: "Repository",
                experiences: { 
                    "stacks": "Stacks",
                    "role": {"title": "Geoprocessing Analyst",
                            "junior": "Junior",
                            "pleno": ""
                        },
                    "place": "Social Assistant Municipal Office - RJ",
                    "main_title": "Developed Projects",
                    "social_index": {"title": 'Social index calculation',
                                    "description": "Development of a code in python that calculates a social Indicator based on the CADúnico database"
                                    },
                    "data_portal": {"title": 'Data portal',
                                    "description": "Development of a social assistant data sharing website using ArcGIS Hub with HTML and CSS"
                                    },
                    "volunteer": {"title": 'Volunteering website',
                            "description": "Using ArcGIS Hub with HTML and CSS, a volunteering website was developed where people sign up for volunteer jobs at the social assistant municipal office"
                            }
                },
                courses: {
                    "course": 'Course',
                    "school": 'School'
                },
                visit: "Visit",
                footer: {
                    "source": "Sources",
                    "develop": "Developed by",
                    "update": "Updated"
                }
            }
        },
    },
});

export default i18n;