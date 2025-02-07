
// Configuración
const CONFIG = {
    users: [
        { username: "admin", password: "admin123", name: "Administrador" },
        { username: "user1", password: "user123", name: "Usuario Premium" },
        { username: "user2", password: "user123", name: "Usuario Estándar" }
    ],
    courses: [
        {
            id: 1,
            name: "Diplomado en Diseño de Interiores y Gestión BIM de Proyectos de Arquitectura e Interiorismo - Versión 1, Grupo 1",
            category: "Diplomado",
            folder: "https://drive.google.com/drive/folders/1pY7i4h6eVMCJHftXJ4CGVLgLWq4a03-h?usp=drive_link",
            modules: [
                {
                    name: "Presentacion",
                    videos: [
                        { name: "P - Presentacion 1", url: "https://drive.google.com/file/d/1seGygops0Gg9XnQ0Tm93U3HyumcJxXTN/view?usp=drive_link", duration: "M: Presentacion" },
                        { name: "P - Presentacion 2", url: "https://drive.google.com/file/d/17z64K7P8kAqp2pX8pPgIMOgy40rVYCrn/view?usp=drive_link", duration: "M: Presentacion" }
                    ]
                },
                // {
                //     name: "Modulo 0",
                //     videos: [
                //         { name: "Clase 1", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M0 - Clase 1" },
                //         { name: "Clase 2", url: "https://drive.google.com/file/d/1cj1w-yL0Aif5-mCcwc4fEzwlko5E54pT/view?usp=drive_link", duration: "M0 - Clase 2" }
                //     ]
                // },
                // {
                //     name: "Modulo 1",
                //     videos: [
                //         { name: "Clase 1", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M0 - Clase 1" },
                //         { name: "Clase 2", url: "https://drive.google.com/file/d/1cj1w-yL0Aif5-mCcwc4fEzwlko5E54pT/view?usp=drive_link", duration: "M0 - Clase 2" }
                //     ]
                // },
                // {
                //     name: "Modulo 2",
                //     videos: [
                //         { name: "Clase 1", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M0 - Clase 1" },
                //         { name: "Clase 2", url: "https://drive.google.com/file/d/1cj1w-yL0Aif5-mCcwc4fEzwlko5E54pT/view?usp=drive_link", duration: "M0 - Clase 2" }
                //     ]
                // },
                // {
                //     name: "Modulo 3",
                //     videos: [
                //         { name: "Clase 1", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M0 - Clase 1" },
                //         { name: "Clase 2", url: "https://drive.google.com/file/d/1cj1w-yL0Aif5-mCcwc4fEzwlko5E54pT/view?usp=drive_link", duration: "M0 - Clase 2" }
                //     ]
                // },
                // {
                //     name: "Modulo 4",
                //     videos: [
                //         { name: "Clase 1", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M0 - Clase 1" },
                //         { name: "Clase 2", url: "https://drive.google.com/file/d/1cj1w-yL0Aif5-mCcwc4fEzwlko5E54pT/view?usp=drive_link", duration: "M0 - Clase 2" }
                //     ]
                // },
            ]
        },
        
        {
            id: 1,
            name: "Diplomado en Educación Superior Basado en Competencias - Versión 1, Grupo 1",
            category: "Diplomado",
            folder: "https://drive.google.com/drive/folders/143iGcw5lQl5SyWlJ0LJX4h60lQO9wpCW?usp=drive_link",
            modules: [
                {
                    name: "Modulo 0",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M0 - Clase 1" },
                        { name: "Clase 2", url: "https://drive.google.com/file/d/1cj1w-yL0Aif5-mCcwc4fEzwlko5E54pT/view?usp=drive_link", duration: "M0 - Clase 2" },
                        { name: "Clase 3", url: "https://drive.google.com/file/d/1IIZwVpEKPZm52SjHA95s_aRmc0lvfT1E/view?usp=drive_link", duration: "M0 - Clase 3" }
                    ]
                },
                {
                    name: "Presentacion",
                    videos: [
                        { name: "Presentacion 1", url: "https://drive.google.com/file/d/1APKpdedAxrz_1SDwNGApb-c9zC-2R3uI/view?usp=drive_link", duration: "P - Presentacion 1" },
                        { name: "Presentacion 2", url: "https://drive.google.com/file/d/1XbHR1CNIQaj5H2M53FaEbaKRrwsC-8Ak/view?usp=drive_link", duration: "P - Presentacion 2" }
                    ]
                }
            ]
        },
        {
            id: 1,
            name: "Diplomado en Modelado, Implementación y Coordinación de Proyectos BIM - Versión 1, Grupo 1",
            category: "Diplomado",
            folder: "https://drive.google.com/drive/folders/1QCiYDBDaHQp7ZmwA8OxSBJbOccxgIr5b?usp=drive_link",
            modules: [
                {
                    name: "Presentacion",
                    videos: [
                        { name: "Presentacion 1", url: "https://drive.google.com/file/d/1CsT7v9mAZm-SKy53O3bIcqufrWxY24V_/view?usp=drive_link", duration: "P - Presentacion 1" },
                        { name: "Presentacion 2", url: "https://drive.google.com/file/d/10C1y4KRMkWTh-M72jvNejEnW5ESMv2nZ/view?usp=drive_link", duration: "P - Presentacion 2" }
                    ]
                },
                {
                    name: "Modulo 0",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1Ym6Ii47T99h2Jv2TwXtkHlQ1Lb1YSXMc/view?usp=drive_link", duration: "M0 - Clase 1" },
                        { name: "Clase 2", url: "https://drive.google.com/file/d/1n1my3q0vNL8LoecOGBNlnpujRxNuQnTT/view?usp=drive_link", duration: "M0 - Clase 2" },
                        { name: "Clase 3", url: "https://drive.google.com/file/d/1OrJOa4dVxji1fy_9ZGETMdkbIOHqT5o7/view?usp=drive_link", duration: "M0 - Clase 3" }
                    ]
                },
                {
                    name: "Modulo 1",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1HcMi06teXgiME_orcMrtfMX4HAQdhwQP/view?usp=drive_link", duration: "M1 - Clase 1" },
                        { name: "Clase 2", url: "https://drive.google.com/file/d/1rdil06381YhG6hO-1_l3MBtASo12YD73/view?usp=drive_link", duration: "M1 - Clase 2" },
                        { name: "Clase 3", url: "https://drive.google.com/file/d/1qcLlcN_ITg6NZomAiO6p7TTYWK7pRnkB/view?usp=drive_link", duration: "M1 - Clase 3" },
                        { name: "Clase 4", url: "https://drive.google.com/file/d/1f3y1ehxzlxYCosZ0YUFH4hqhlVBBGM4p/view?usp=drive_link", duration: "M1 - Clase 4" },
                        { name: "Clase 5", url: "https://drive.google.com/file/d/1Q5J_uf2uT06JS2_Bc0qBKI9WCnXbFj54/view?usp=drive_link", duration: "M1 - Clase 5" },
                        { name: "Clase 6", url: "https://drive.google.com/file/d/1FeIQjnwQOhwgvfdOuYnctAlgZeufe2PV/view?usp=drive_link", duration: "M1 - Clase 6" }
                    ]
                }
            ]
        },
        
        {
            id: 2,
            name: "Diplomado en Educación Superior Basado en Competencias - Versión 1, Grupo 1",
            category: "Maestría",
            folder: "https://drive.google.com/drive/folders/143iGcw5lQl5SyWlJ0LJX4h60lQO9wpCW?usp=drive_link",
            modules: [
                {
                    name: "Modulo 0",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M0 - Clase 1" },
                        { name: "Clase 2", url: "https://drive.google.com/file/d/1cj1w-yL0Aif5-mCcwc4fEzwlko5E54pT/view?usp=drive_link", duration: "M0 - Clase 2" }
                    ]
                },
                {
                    name: "Presentacion",
                    videos: [
                        { name: "Presentacion 1", url: "https://drive.google.com/file/d/1APKpdedAxrz_1SDwNGApb-c9zC-2R3uI/view?usp=drive_link", duration: "P - Presentacion 1" },
                        { name: "Presentacion 2", url: "https://drive.google.com/file/d/1XbHR1CNIQaj5H2M53FaEbaKRrwsC-8Ak/view?usp=drive_link", duration: "P - Presentacion 2" }
                    ]
                }
            ]
        },
        {
            id: 1,
            name: "Diplomado en Modelado, Implementación y Coordinación de Proyectos BIM - Versión 1, Grupo 1",
            category: "Diplomado",
            folder: "https://drive.google.com/drive/folders/1QCiYDBDaHQp7ZmwA8OxSBJbOccxgIr5b?usp=drive_link",
            modules: [
                {
                    name: "Presentacion",
                    videos: [
                        { name: "Presentacion 1", url: "https://drive.google.com/file/d/17z64K7P8kAqp2pX8pPgIMOgy40rVYCrn/view?usp=drive_link", duration: "P - Presentacion 1" },
                        { name: "Presentacion 2", url: "https://drive.google.com/file/d/1seGygops0Gg9XnQ0Tm93U3HyumcJxXTN/view?usp=drive_link", duration: "P - Presentacion 2" }
                    ]
                },
                // {
                //     name: "Modulo 0",
                //     videos: [
                //         { name: "Clase 1", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M0 - Clase 1" },
                //         { name: "Clase 2", url: "https://drive.google.com/file/d/1cj1w-yL0Aif5-mCcwc4fEzwlko5E54pT/view?usp=drive_link", duration: "M0 - Clase 2" }
                //     ]
                // },
                // {
                //     name: "Modulo 0",
                //     videos: [
                //         { name: "Clase 1", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M0 - Clase 1" },
                //         { name: "Clase 2", url: "https://drive.google.com/file/d/1cj1w-yL0Aif5-mCcwc4fEzwlko5E54pT/view?usp=drive_link", duration: "M0 - Clase 2" }
                //     ]
                // },
                
            ]
        },
        // diplomados
        // maestria
        {
            id: 2,
            name: "Maestría en Derecho Constitucional, Derechos Humanos y Procesal Constitucional - Versión 1, Grupo 1",
            category: "Maestría",
            folder: "https://drive.google.com/drive/folders/1PX6kSf9gfi7CSaXBCd6KgOOE_oGLGfef?usp=drive_link",
            modules: [
                {
                    name: "Presentacion",
                    videos: [
                        { name: "Presentacion 1", url: "https://drive.google.com/file/d/1iWKgGrYKuvsLVgBB9J5r-kQ4R3Tou268/view?usp=drive_link", duration: "P - Presentacion 1" },
                        { name: "Presentacion 2", url: "https://drive.google.com/file/d/1xz8i8GIJlnr1fk731MHUnfXTKk2z_btO/view?usp=drive_link", duration: "P - Presentacion 2" }
                    ]
                },
                {
                    name: "Modulo 0",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1-I8p_CVyWH4v9wS9TibJSfuNyU5s4IIQ/view?usp=drive_link", duration: "M0 - Clase 1" },
                        { name: "Clase 2", url: "https://drive.google.com/file/d/11ZTW3GndAUtma5_gGx5wYcjZbj13l_9c/view?usp=drive_link", duration: "M0 - Clase 2" },
                        { name: "Clase 3", url: "https://drive.google.com/file/d/1oeArXuHgpSA8lYn8dIiS7W6xq7xuI-CX/view?usp=drive_link", duration: "M0 - Clase 3" }

                    ]
                },
                {
                    name: "Modulo 1",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1YhvnPJq1BqNrD_erNNi4g97RurpyDz90/view?usp=drive_link", duration: "M1 - Clase 1" },
                        { name: "Clase 2", url: "https://drive.google.com/file/d/1hdodN2TUJ3KX1vMDkf_h-pNHr1Uc-12W/view?usp=drive_link", duration: "M1 - Clase 2" }
                        // { name: "Clase 3", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M1 - Clase 3" },
                        // { name: "Clase 4", url: "https://drive.google.com/file/d/1oITBx2HGZeV-k4MtrnpA7rx34hXCHvit/view?usp=drive_link", duration: "M1 - Clase 4" },
                        // { name: "Clase 5", url: "https://drive.google.com/file/d/1cj1w-yL0Aif5-mCcwc4fEzwlko5E54pT/view?usp=drive_link", duration: "M1 - Clase 5" }
                    ]
                },
                
            ]
        },
    // maestria
    // master class
        {
            id: 3,
            name: "MASTER CLASS - Implementación de la Metodología BIM en Edificios",
            category: "Master class",
            folder: "https://drive.google.com/drive/folders/1ecpiWV1h83AO9x1I_nRGMi56CtV8Gjon?usp=drive_link",
            modules: [
                {
                    name: "seccion",
                    videos: [
                        { name: "Presentacion 1", url: "https://drive.google.com/file/d/1-7GlefH5E9aFDldE3kozFTVJ6ql6zPAL/view?usp=drive_link", duration: "60:00" },
                        // { name: "Presentacion 2", url: "https://drive.google.com/file/d/1z6EbP8Gy1OtuQW_SE5TUdteP786sTmR5/view?usp=drive_link", duration: "45:15" }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "MASTER CLASS - Enfoque Constitucional de los Derechos de las Personas con Discapacidad",
            category: "Master Class",
            folder: "https://drive.google.com/drive/folders/1gCKuGkjjKM27jAey7o4XYyt4hSlkTFcd?usp=drive_link",
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1xAxGNU9ZWrNABX24c00OnwiOBlE2Lgij/view?usp=drive_link", duration: "Seccion 1" },
                        // { name: "Publicidad en Redes", url: "https://drive.google.com/file/d/1z6EbP8Gy1OtuQW_SE5TUdteP786sTmR5/view?usp=drive_link", duration: "45:15" }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "MASTER CLASS - El Fracaso del Estado Constitucional de Derecho",
            category: "Master Class",
            folder: "https://drive.google.com/drive/folders/1TmHDBvOJJ7V4Psc1SnFKSj89YrL4BGlk?usp=drive_link",
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1HdlAhp7mzX7ce150Ax1hGXcns-aEg3Qj/view?usp=drive_link", duration: "Seccion 1" },
                        // { name: "Publicidad en Redes", url: "https://drive.google.com/file/d/1z6EbP8Gy1OtuQW_SE5TUdteP786sTmR5/view?usp=drive_link", duration: "45:15" }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "MASTER CLASS - Los Derechos Fundamentales en Bolivia",
            category: "Master Class",
            folder: "https://drive.google.com/drive/folders/1t526IPbUosuRyPkpbMGidethG0VBeq2-?usp=drive_link",
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1lQt73XqF9VAeRfrBeoel0FT_bL8fHnRv/view?usp=drive_link", duration: "Seccion 1" },
                        // { name: "Publicidad en Redes", url: "https://drive.google.com/file/d/1z6EbP8Gy1OtuQW_SE5TUdteP786sTmR5/view?usp=drive_link", duration: "45:15" }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "MASTER CLASS - Gestión Curricular por Competencias: Premisas para la Formación Integral",
            category: "Master Class",
            folder: "https://drive.google.com/drive/folders/1TPIvJTVDmXHmatjM5o_sZpySJzIZygig?usp=drive_link",
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1FDpdwxbVFBCzS35bIs3hQT3e495x9b0y/view?usp=drive_link", duration: "Seccion 1" },
                        // { name: "Publicidad en Redes", url: "https://drive.google.com/file/d/1z6EbP8Gy1OtuQW_SE5TUdteP786sTmR5/view?usp=drive_link", duration: "45:15" }
                    ]
                }
                
            ]
        },
        {
            id: 3,
            name: "MASTER CLASS - Estrategias y Habilidades Didácticas para la Educación Basada en Competencias",
            category: "Master Class",
            folder: "https://drive.google.com/drive/folders/1P042rJ20eqjsu_j0CuCSTcXucO6PjUB9?usp=drive_link",
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1UzpxsV6QyuWqST_Tq377bsMZiZqtPmTO/view?usp=drive_link", duration: "Seccion 1" },
                        // { name: "Publicidad en Redes", url: "https://drive.google.com/file/d/1z6EbP8Gy1OtuQW_SE5TUdteP786sTmR5/view?usp=drive_link", duration: "45:15" }
                    ]
                }
                
            ]
        },
        {
            id: 3,
            name: "MASTES CLASS - RETAIL DESING",
            category: "Master Class",
            folder: "https://drive.google.com/drive/folders/10A4_BwGEyg2cUBuaQ7Edt8A0UVVnbhV7?usp=drive_link",
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/14f1K4wveNU7te13e-kvFNymyG2hfw-n8/view?usp=drive_link", duration: "Seccion 1" },
                        // { name: "Publicidad en Redes", url: "https://drive.google.com/file/d/1z6EbP8Gy1OtuQW_SE5TUdteP786sTmR5/view?usp=drive_link", duration: "45:15" }
                    ]
                }
                
            ]
        },
        {
            id: 3,
            name: "MASTER CLASS - 5D Gestión de Costes: Dinámica con BIM",
            category: "Master Class",
            folder: "https://drive.google.com/drive/folders/1vOMrb1yEMR7cZSNiky8gRp907NF9tLli?usp=drive_link",
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1tdRWcZs4WNgpciMTow-VeQeEFrQkyZQF/view?usp=drive_link", duration: "Seccion 1" },
                        // { name: "Publicidad en Redes", url: "https://drive.google.com/file/d/1z6EbP8Gy1OtuQW_SE5TUdteP786sTmR5/view?usp=drive_link", duration: "45:15" }
                    ]
                }
                
            ]
        },
        // mastes class
        //CURSOS
        {
            id: 4,
            name: "Secretariado Inteligente: Integrando IA en la Gestión Administrativa",
            category: "Cursos",
            folder: "https://drive.google.com/drive/folders/1F9tA6f2wpH_h8cTWY0qrCVXXBhzcmFeh?usp=drive_link",
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1vp43J7M1GzkUHtjG6dZIAO6lI-Pju5km/view?usp=drive_link", duration: "Seccion 1" },
                        { name: "Clase 2", url: "https://drive.google.com/file/d/1iGI4uPFVqN2_FLM25Yff_gvkwFCOc7Wh/view?usp=drive_link", duration: "Seccion " },
                        { name: "Clase 3", url: "https://drive.google.com/file/d/1IFb0psGZPPYV3WCPqIHjRUMpXQkCEpQq/view?usp=drive_link", duration: "Seccion 1" },
                        { name: "Clase 4", url: "https://drive.google.com/file/d/1Tm0ALMr0iW4g0D-WRNRhUavoUnNw9fQL/view?usp=drive_link", duration: "Seccion 1" },
                        { name: "Clase 5", url: "https://drive.google.com/file/d/1NyiQhDfsUKTqWvbxbgpytPf89K-vYw4v/view?usp=drive_link", duration: "Seccion 1" },
                        { name: "Clase 6", url: "https://drive.google.com/file/d/1pV67_jepiOP7Jj5Rw0AWiV4IT4Df86M8/view?usp=drive_link", duration: "Seccion 1" }
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "Seguridad Industrial y Operaciones en Lineas Eléctricas de Media y Baja Tensións",
            category: "Cursos",
            folder: "https://drive.google.com/drive/folders/14iN0zHpppXq3iGeW2c6ReSPIKQ4V_f3n?usp=drive_link",
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        { name: "Clase 1", url: "https://drive.google.com/file/d/1a4ccMSOx8Gy66jhjIz2lkbfb8mm-1MWp/view?usp=drive_link", duration: "Seccion 1" },
                        { name: "Clase 2", url: "https://drive.google.com/file/d/1kNZySf0VBRz-maaDAJuyac7zVPxm6YQQ/view?usp=drive_link", duration: "Seccion " },
                        { name: "Clase 3", url: "https://drive.google.com/file/d/16wv9G7MmoGIT5hK8-rQOqjGQhZNRRoQV/view?usp=drive_link", duration: "Seccion 1" },
                        { name: "Clase 4", url: "https://drive.google.com/file/d/11Wwrr0yAcaYiVB2UoRzKFR4d-sahrpjr/view?usp=drive_link", duration: "Seccion 1" },
                        { name: "Clase 5", url: "https://drive.google.com/file/d/1EV2ePKbisQQWgllvn2Pg_ZKeQwKjzTHY/view?usp=drive_link", duration: "Seccion 1" },
                        // { name: "Clase 6", url: "https://drive.google.com/file/d/1pV67_jepiOP7Jj5Rw0AWiV4IT4Df86M8/view?usp=drive_link", duration: "Seccion 1" }
                    ]
                }
            ]
        },
        
    ]
};

// Estado de la aplicación
let currentUser = null;
let currentCourse = null;

// Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = CONFIG.users.find(u => u.username === username && u.password === password);

    if(user) {
        currentUser = user;
        showDashboard();
        loadCourses();
    } else {
        showAuthError();
    }
});

// Cargar cursos
function loadCourses() {
    const container = document.getElementById('coursesGrid');
    container.innerHTML = '';
    
    CONFIG.courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card fade-in';
        card.innerHTML = `
            <div class="course-header">
                <div class="course-badge">
                    <i class='bx bx-bookmark'></i>
                    ${course.category}
                </div>
            </div>
            <div class="course-content">
                <h3>${course.name}</h3>
                <div class="course-actions">
                    <button class="btn btn-primary" onclick="showCourseDetails(${course.id})">
                        <i class='bx bx-play-circle'></i> Ver Curso
                    </button>
                    <button class="btn btn-secondary" onclick="window.open('${course.folder}', '_blank')">
                        <i class='bx bx-folder'></i> Carpeta
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Buscador
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.course-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});

// Vista de curso
function showCourseDetails(courseId) {
    currentCourse = CONFIG.courses.find(c => c.id === courseId);
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('modulesView').style.display = 'block';
    document.getElementById('courseTitle').textContent = currentCourse.name;
    document.getElementById('viewFolderBtn').onclick = () => window.open(currentCourse.folder, '_blank');
    
    renderModules();
}

function renderModules() {
    const container = document.getElementById('videoGrid');
    container.innerHTML = '';
    
    currentCourse.modules.forEach(module => {
        module.videos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'video-card fade-in';
            card.innerHTML = `
                <div class="video-thumbnail">
                    <div class="play-button">
                        <i class='bx bx-play' style="font-size: 2rem; color: var(--primary);"></i>
                    </div>
                </div>
                <div style="padding: 1.5rem;">
                    <h4>${video.name}</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                        <span style="color: #64748b;">${video.duration}</span>
                        <button class="btn btn-primary" onclick="window.open('${video.url}', '_blank')">
                            <i class='bx bx-play'></i> Reproducir
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    });
}

// Utilidades
function showAuthError() {
    const errorElement = document.getElementById('authError');
    errorElement.style.display = 'block';
    setTimeout(() => errorElement.style.display = 'none', 3000);
}

function showDashboard() {
    document.getElementById('modulesView').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

function logout() {
    currentUser = null;
    window.location.reload();
}

// Inicializar
function showDashboard() {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}
