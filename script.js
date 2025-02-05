
// Datos de Usuarios
const users = [
    { username: 'fernando', password: 'fernando', role: 'admin' },
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'andrea', password: 'andrea', role: 'admin' },
    { username: 'jael', password: 'jael', role: 'admin' },
    { username: 'maricel', password: 'maricel', role: 'admin' },
    { username: 'fani', password: 'fani', role: 'admin' },
    { username: 'stefy', password: 'stefy', role: 'admin' },
    { username: 'mauricio', password: 'mauricio', role: 'admin' },
    { username: 'efrain', password: 'efrain', role: 'admin' },
    { username: 'carla', password: 'carla', role: 'admin' },
    { username: 'justina', password: 'justina', role: 'admin' },
    { username: 'mariluz', password: 'mariluz', role: 'admin' },
    { username: 'gustavo', password: 'gustavo', role: 'user' }
];

// Datos de Cursos
const courses = [
    {
        id: 'Diplomado en Criminología, Psicología Criminal y Victimología - Versión 1, Grupo 1',
        title: 'Diplomado en Criminología, Psicología Criminal y Victimología - Versión 1, Grupo 1',
        image: 'https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/475746402_1043803837773802_7253622772994297140_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=GlOy0ImctxMQ7kNvgEuAJ5b&_nc_oc=AdhS4LHTwkZkYlmydS79ZF4hgLsfewtvsDPEj8L7inyp8srfnRmAgQ1ryEkLm_HEJWM&_nc_zt=23&_nc_ht=scontent.flpb2-2.fna&_nc_gid=AdAlijNd0IJ5uPEO76Ipc8s&oh=00_AYAIlnOr1wLSTsC9v8EyG_gXCpH9djmoJ1K9lTeYgPf4Fg&oe=67A9A14D',
        duration: '120 horas',
        progress: 35,
        level: 'Principiante',
        recordingsUrl: '#',
        modules: [
            {
                name: 'moderna mas canciones a¿',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },
    {
        id: 'Diplomado en Educación Superior Basado en Competencias y Tecnologias de la Educación - Versión 1 Grupo 7',
        title: 'Diplomado en Educación Superior Basado en Competencias y Tecnologias de la Educación - Versión 1 Grupo 7',
        image: 'https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/475746402_1043803837773802_7253622772994297140_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=GlOy0ImctxMQ7kNvgEuAJ5b&_nc_oc=AdhS4LHTwkZkYlmydS79ZF4hgLsfewtvsDPEj8L7inyp8srfnRmAgQ1ryEkLm_HEJWM&_nc_zt=23&_nc_ht=scontent.flpb2-2.fna&_nc_gid=AdAlijNd0IJ5uPEO76Ipc8s&oh=00_AYAIlnOr1wLSTsC9v8EyG_gXCpH9djmoJ1K9lTeYgPf4Fg&oe=67A9A14D',
        duration: '120 horas',
        progress: 35,
        level: 'Avanzada',
        recordingsUrl: '#',
        modules: [
            {
                name: 'PRESENTACION 0',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            },
            {
                name: 'PRESENTACION 1',
                videos: [
                    {
                        title: 'PRasdadsN',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            },
            {
                name: 'PRESENTACION 2',
                videos: [
                    {
                        title: 'PRasdadsN',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            },
            {
                name: 'MODULO 0',
                videos: [
                    {
                        title: 'PRasdadsN',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            },
            {
                name: 'MODULO 1',
                videos: [
                    {
                        title: 'PRasdadsN',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            },
            {
                name: 'MODULO 2',
                videos: [
                    {
                        title: 'PRasdadsN',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            },
            {
                name: 'MODULO 3',
                videos: [
                    {
                        title: 'PRasdadsN',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            },
            {
                name: 'MODULO 4',
                videos: [
                    {
                        title: 'PRasdadsN',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            },
            {
                name: 'MODULO 5',
                videos: [
                    {
                        title: 'PRasdadsN',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            },
            {
                name: 'MODULO 6',
                videos: [
                    {
                        title: 'INTRODUCION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            },
            {
                name: 'MODULO 7',
                videos: [
                    {
                        title: 'PRESE',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },

    {
        id: 'Diplomado en Fertiirrigación de Cultivos - Versión 1, Grupo 1',
        title: 'Diplomado en Fertiirrigación de Cultivos - Versión 1, Grupo 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwoffwK5W936wpIDI0Ago3FIHVUOkS3ZjKA&s',
        duration: '120 horas',
        progress: 35,
        level: 'Principiante',
        recordingsUrl: '#',
        modules: [
            {
                name: 'moderna mas canciones a¿',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },

    {
        id: 'Diplomado en Ingeniería de Seguridad, Medio Ambiente y Salud Ocupacional según Normas SMS(HSE) - Versión 1, Grupo 1',
        title: 'Diplomado en Ingeniería de Seguridad, Medio Ambiente y Salud Ocupacional según Normas SMS(HSE) - Versión 1, Grupo 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwoffwK5W936wpIDI0Ago3FIHVUOkS3ZjKA&s',
        duration: '120 horas',
        progress: 35,
        level: 'Principiante',
        recordingsUrl: '#',
        modules: [
            {
                name: 'moderna mas canciones a¿',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },

    {
        id: 'Diplomado en Instrumentación Quirurgica y Manejo de Quirófanos - Versión 1, Grupo 2',
        title: 'Diplomado en Instrumentación Quirurgica y Manejo de Quirófanos - Versión 1, Grupo 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwoffwK5W936wpIDI0Ago3FIHVUOkS3ZjKA&s',
        duration: '120 horas',
        progress: 35,
        level: 'Principiante',
        recordingsUrl: '#',
        modules: [
            {
                name: 'moderna mas canciones a¿',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },

    {
        id: 'Diplomado en Redes y Telecomunicaciones - Versión 1, Grupo 2',
        title: 'Diplomado en Redes y Telecomunicaciones - Versión 1, Grupo 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwoffwK5W936wpIDI0Ago3FIHVUOkS3ZjKA&s',
        duration: '120 horas',
        progress: 35,
        level: 'Principiante',
        recordingsUrl: '#',
        modules: [
            {
                name: 'moderna mas canciones a¿',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },

    {
        id: 'Diplomado en Sistemas Informáticos y Redes para Bachillerato Tecnico Humanístico (BTH) - Versión 1, Grupo 1',
        title: 'Diplomado en Sistemas Informáticos y Redes para Bachillerato Tecnico Humanístico (BTH) - Versión 1, Grupo 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwoffwK5W936wpIDI0Ago3FIHVUOkS3ZjKA&s',
        duration: '120 horas',
        progress: 35,
        level: 'Principiante',
        recordingsUrl: '#',
        modules: [
            {
                name: 'moderna mas canciones a¿',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },

    {
        id: 'Diplomado en Transformación de Alimentos para la Industria y Gastronomía - Versión 1, Grupo 12',
        title: 'Diplomado en Transformación de Alimentos para la Industria y Gastronomía - Versión 1, Grupo 12',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwoffwK5W936wpIDI0Ago3FIHVUOkS3ZjKA&s',
        duration: '120 horas',
        progress: 35,
        level: 'Principiante',
        recordingsUrl: '#',
        modules: [
            {
                name: 'moderna mas canciones a¿',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },

    {
        id: 'WEBINAR - Prevención de Riesgos de Accidentes y Control de Emergencia',
        title: ' WEBINAR - Prevención de Riesgos de Accidentes y Control de Emergencia',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwoffwK5W936wpIDI0Ago3FIHVUOkS3ZjKA&s',
        duration: '120 horas',
        progress: 35,
        level: 'Principiante',
        recordingsUrl: '#',
        modules: [
            {
                name: 'moderna mas canciones a¿',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },

    {
        id: 'WEBINAR - Fundamentos de la Seguridad, Medio Ambiente y Salud',
        title: 'WEBINAR - Fundamentos de la Seguridad, Medio Ambiente y Salud',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwoffwK5W936wpIDI0Ago3FIHVUOkS3ZjKA&s',
        duration: '120 horas',
        progress: 35,
        level: 'Principiante',
        recordingsUrl: '#',
        modules: [
            {
                name: 'moderna mas canciones a¿',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },

    {
        id: 'WEBINAR - Enrutamiento y Gestión de Redes',
        title: 'WEBINAR - Enrutamiento y Gestión de Redes',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwoffwK5W936wpIDI0Ago3FIHVUOkS3ZjKA&s',
        duration: '120 horas',
        progress: 35,
        level: 'Principiante',
        recordingsUrl: '#',
        modules: [
            {
                name: 'moderna mas canciones a¿',
                videos: [
                    {
                        title: 'PRESENTACION',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?html'
                    },
                    {
                        title: 'CLASE 1',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?css'
                    }
                ]
            }
        ]
    },

    {
        id: 'WEBINAR - Ergonomía y Bienestar del Trabajador',
        title: 'WEBINAR - Ergonomía y Bienestar del Trabajador',
        image: 'data:image/jpeg;base64,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',
        duration: '200 horas',
        progress: 65,
        level: 'Avanzado',
        recordingsUrl: '#',
        modules: [
            {
                name: 'Machine Learning',
                videos: [
                    {
                        title: 'Introducción a ML',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?ai'
                    }
                ]
            }
        ]
    },
    {
        id: 'WEBINAR - Seguridad en Redes',
        title: 'WEBINAR - Seguridad en Redes',
        image: 'data:image/jpeg;base64,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',
        duration: '200 horas',
        progress: 65,
        level: 'Avanzado',
        recordingsUrl: '#',
        modules: [
            {
                name: 'Machine Learning',
                videos: [
                    {
                        title: 'Introducción a ML',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?ai'
                    }
                ]
            }
        ]
    },

    {
        id: 'WEBINAR - Ergonomía',
        title: 'WEBINAR - Ergonomía',
        image: 'data:image/jpeg;base64,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',
        duration: '200 horas',
        progress: 65,
        level: 'Avanzado',
        recordingsUrl: '#',
        modules: [
            {
                name: 'Machine Learning',
                videos: [
                    {
                        title: 'Introducción a ML',
                        url: 'https://drive.google.com/file/d/105UuTYbITzJtIwCloaeWFVFGjRqKhpf-/view?usp=drive_link',
                        duration: 'Ver',
                        thumbnail: 'https://source.unsplash.com/random/400x300?ai'
                    }
                ]
            }
        ]
    },
];
// Variables Globales
let currentCourse = null;

// Sistema de Autenticación
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);
    
    if(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        initDashboard();
    } else {
        showError('Credenciales incorrectas');
    }
});

function initDashboard() {
    document.querySelector('.auth-container').style.display = 'none';
    document.querySelector('.dashboard').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = 
        JSON.parse(localStorage.getItem('currentUser')).username;
    
    loadCourses();
}

// Cargar Cursos
function loadCourses() {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = '';
    
    courses.forEach(curso => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-image" style="background-image: url('${curso.image}')">
                <div class="course-badges">
                    <div class="course-badge">${curso.level}</div>
                </div>
                <i class="fas fa-folder-open folder-icon" onclick="openRecordings('${curso.recordingsUrl}')"></i>
            </div>
            <div class="course-info">
                <h3>${curso.title}</h3>
                <div class="course-progress">
                    <div class="course-progress-bar" style="width: ${curso.progress}%"></div>
                </div>
                <div class="course-meta">
                    <span>${curso.duration}</span>
                    <span>${curso.modules.length} módulos</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openCourseModal(curso));
        container.appendChild(card);
    });
}

// Abrir grabaciones
function openRecordings(url) {
    event.stopPropagation();
    window.open(url, '_blank');
}

// Abrir Modal del Curso
function openCourseModal(curso) {
    currentCourse = curso;
    document.getElementById('courseModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Cargar módulos
    const modulesHTML = curso.modules.map((modulo, index) => `
        <div class="module-item ${index === 0 ? 'active' : ''}" onclick="loadModuleVideos(${index})">
            ${modulo.name}
        </div>
    `).join('');
    
    document.getElementById('courseModules').innerHTML = modulesHTML;
    
    // Cargar primer módulo
    if(curso.modules.length > 0) {
        loadModuleVideos(0);
    }
}

// Cargar Videos del Módulo
function loadModuleVideos(moduleIndex) {
    const modulo = currentCourse.modules[moduleIndex];
    const videosHTML = modulo.videos.map(video => `
        <div class="video-item" onclick="playVideo('${video.url}')">
            <div class="video-thumbnail" style="background-image: url('${video.thumbnail}')"></div>
            <div>
                <h4>${video.title}</h4>
                <p>${modulo.name}</p>
            </div>
            <span class="video-duration">${video.duration}</span>
        </div>
    `).join('');
    
    document.getElementById('courseVideos').innerHTML = videosHTML;
    
    // Actualizar módulo activo
    document.querySelectorAll('.module-item').forEach(item => 
        item.classList.remove('active'));
    document.querySelectorAll('.module-item')[moduleIndex].classList.add('active');
}

// Reproducir Video
function playVideo(url) {
    window.open(url, '_blank');
}

// Cerrar Modal
function closeCourseModal() {
    document.getElementById('courseModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentCourse = null;
}

// Cerrar Sesión
function logout() {
    localStorage.removeItem('currentUser');
    location.reload();
}

// Búsqueda
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.course-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});

// Inicialización
if(localStorage.getItem('currentUser')) {
    initDashboard();
}
