// FUNCIONES DE LOGIN
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("toggleIcon");

    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    toggleIcon.classList.toggle("bx-low-vision");
    toggleIcon.classList.toggle("bx-show-alt");
}

function updateProgress() {
    const passwordInput = document.getElementById("password");
    const progressBar = document.getElementById("progress-bar");
    const length = passwordInput.value.length;

    progressBar.style.width = Math.min(length * 10, 80) + "%";
    progressBar.style.backgroundColor =
        length < 5 ? "red" : length < 8 ? "orange" : "rgb(5, 241, 143)";
}

// CONFIGURACIÓN
const CONFIG = {
    users: [
        { username: "admin", password: "admin123", name: "Administrador" },
        { username: "user1", password: "user123", name: "Usuario Premium" },
        { username: "user2", password: "user456", name: "Usuario Premium" },
        { username: "user3", password: "user789", name: "Usuario Premium" },
        { username: "user3", password: "user0", name: "Usuario Premium" },
        { username: "echirinina", password: "13071262", name: "Usuario Estándar" }
    ],
    courses: [
        // DIPLOMADOS
        {
            id: 1,
            name: "Diplomado en Diseño de Interiores y Gestión BIM de Proyectos de Arquitectura e Interiorismo - Versión 1, Grupo 1",
            category: "Diplomado",
            folder: "https://drive.google.com/drive/folders/1pY7i4h6eVMCJHftXJ4CGVLgLWq4a03-h?usp=drive_link",
            accessCode: "diplomado111", // Código de acceso único para este curso
            modules: [
                {
                    name: "Presentacion",
                    videos: [
                        {
                            name: "P - Presentacion 1",
                            url: "https://drive.google.com/file/d/1seGygops0Gg9XnQ0Tm93U3HyumcJxXTN/view?usp=drive_link",
                            duration: "M: Presentacion"
                        },
                        {
                            name: "P - Presentacion 2",
                            url: "https://drive.google.com/file/d/17z64K7P8kAqp2pX8pPgIMOgy40rVYCrn/view?usp=drive_link",
                            duration: "M: Presentacion"
                        }
                    ]
                }
                // Puedes agregar más módulos si lo requieres
            ]
        },
        // MAESTRIAS
        {
            id: 2,
            name: "Maestría en Derecho Constitucional, Derechos Humanos y Procesal Constitucional - Versión 1, Grupo 1",
            category: "Maestría",
            folder: "https://drive.google.com/drive/folders/1PX6kSf9gfi7CSaXBCd6KgOOE_oGLGfef?usp=drive_link",
            accessCode: "maestria222", // Código de acceso único para este curso
            modules: [
                {
                    name: "Presentacion",
                    videos: [
                        {
                            name: "Presentacion 1",
                            url: "https://drive.google.com/file/d/1iWKgGrYKuvsLVgBB9J5r-kQ4R3Tou268/view?usp=drive_link",
                            duration: "P - Presentacion 1"
                        },
                        {
                            name: "Presentacion 2",
                            url: "https://drive.google.com/file/d/1xz8i8GIJlnr1fk731MHUnfXTKk2z_btO/view?usp=drive_link",
                            duration: "P - Presentacion 2"
                        }
                    ]
                },
                {
                    name: "Modulo 0",
                    videos: [
                        {
                            name: "Clase 1",
                            url: "https://drive.google.com/file/d/1-I8p_CVyWH4v9wS9TibJSfuNyU5s4IIQ/view?usp=drive_link",
                            duration: "M0 - Clase 1"
                        },
                        {
                            name: "Clase 2",
                            url: "https://drive.google.com/file/d/11ZTW3GndAUtma5_gGx5wYcjZbj13l_9c/view?usp=drive_link",
                            duration: "M0 - Clase 2"
                        },
                        {
                            name: "Clase 3",
                            url: "https://drive.google.com/file/d/1oeArXuHgpSA8lYn8dIiS7W6xq7xuI-CX/view?usp=drive_link",
                            duration: "M0 - Clase 3"
                        }
                    ]
                },
                {
                    name: "Modulo 1",
                    videos: [
                        {
                            name: "Clase 1",
                            url: "https://drive.google.com/file/d/1YhvnPJq1BqNrD_erNNi4g97RurpyDz90/view?usp=drive_link",
                            duration: "M1 - Clase 1"
                        },
                        {
                            name: "Clase 2",
                            url: "https://drive.google.com/file/d/1hdodN2TUJ3KX1vMDkf_h-pNHr1Uc-12W/view?usp=drive_link",
                            duration: "M1 - Clase 2"
                        }
                    ]
                }
            ]
        },
        // MASTER CLASS
        {
            id: 3,
            name: "MASTER CLASS - Implementación de la Metodología BIM en Edificios",
            category: "Master class",
            folder: "https://drive.google.com/drive/folders/1ecpiWV1h83AO9x1I_nRGMi56CtV8Gjon?usp=drive_link",
            accessCode: "master333", // Código de acceso único para este curso
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        {
                            name: "Presentacion 1",
                            url: "https://drive.google.com/file/d/1-7GlefH5E9aFDldE3kozFTVJ6ql6zPAL/view?usp=drive_link",
                            duration: "Seccion 1"
                        }
                    ]
                }
            ]
        },
        // CURSOS
        {
            id: 4,
            name: "Secretariado Inteligente: Integrando IA en la Gestión Administrativa",
            category: "Cursos",
            folder: "https://drive.google.com/drive/folders/1F9tA6f2wpH_h8cTWY0qrCVXXBhzcmFeh?usp=drive_link",
            accessCode: "curso444", // Código de acceso único para este curso
            modules: [
                {
                    name: "Seccion",
                    videos: [
                        {
                            name: "Clase 1",
                            url: "https://drive.google.com/file/d/1vp43J7M1GzkUHtjG6dZIAO6lI-Pju5km/view?usp=drive_link",
                            duration: "Seccion 1"
                        },
                        {
                            name: "Clase 2",
                            url: "https://drive.google.com/file/d/1iGI4uPFVqN2_FLM25Yff_gvkwFCOc7Wh/view?usp=drive_link",
                            duration: "Seccion 1"
                        },
                        {
                            name: "Clase 3",
                            url: "https://drive.google.com/file/d/1IFb0psGZPPYV3WCPqIHjRUMpXQkCEpQq/view?usp=drive_link",
                            duration: "Seccion 1"
                        },
                        {
                            name: "Clase 4",
                            url: "https://drive.google.com/file/d/1Tm0ALMr0iW4g0D-WRNRhUavoUnNw9fQL/view?usp=drive_link",
                            duration: "Seccion 1"
                        },
                        {
                            name: "Clase 5",
                            url: "https://drive.google.com/file/d/1NyiQhDfsUKTqWvbxbgpytPf89K-vYw4v/view?usp=drive_link",
                            duration: "Seccion 1"
                        },
                        {
                            name: "Clase 6",
                            url: "https://drive.google.com/file/d/1pV67_jepiOP7Jj5Rw0AWiV4IT4Df86M8/view?usp=drive_link",
                            duration: "Seccion 1"
                        }
                    ]
                }
            ]
        }
        // Agrega aquí más cursos según necesites, cada uno con su propio accessCode
    ]
};

// ESTADO DE LA APLICACIÓN
let currentUser = null;
let currentCourse = null;

// FUNCIÓN DE LOGIN
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = CONFIG.users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        currentUser = user;
        showDashboard();
        loadCourses();
    } else {
        showAuthError();
    }
});

// CARGAR CURSOS
function loadCourses() {
    const container = document.getElementById("coursesGrid");
    container.innerHTML = "";

    CONFIG.courses.forEach((course) => {
        const card = document.createElement("div");
        card.className = "course-card fade-in";
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
                    
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// BUSCADOR
document.getElementById("searchInput").addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".course-card");

    cards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? "block" : "none";
    });
});

// VISTA DE CURSOS CON CONTROL DE ACCESO
function showCourseDetails(courseId) {
    currentCourse = CONFIG.courses.find((c) => c.id === courseId);

    // Solicitar el código de acceso específico para este curso
    const codigo = prompt(`Ingresa el código de acceso para "${currentCourse.name}":`);
    if (codigo !== currentCourse.accessCode) {
        alert("Código incorrecto. Acceso denegado.");
        return;
    }

    document.getElementById("dashboard").style.display = "none";
    document.getElementById("modulesView").style.display = "block";
    document.getElementById("courseTitle").textContent = currentCourse.name;
    document.getElementById("viewFolderBtn").onclick = () => window.open(currentCourse.folder, "_blank");

    renderModules();
}

function renderModules() {
    const container = document.getElementById("videoGrid");
    container.innerHTML = "";

    currentCourse.modules.forEach((module) => {
        module.videos.forEach((video) => {
            const card = document.createElement("div");
            card.className = "video-card fade-in";
            card.innerHTML = `
                <div class="video-thumbnail">
                    <div class="play-button">
                        <i class='bx bx-play' style="font-size: 2rem; color: var(--primary);"></i>
                    </div>
                </div>
                <div style="padding: 1.5rem;">
                    <h4>${video.name}</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                        <span style="color:rgb(64, 80, 104);">${video.duration}</span>
                        <button class="btn btn-primary" onclick="window.open('${video.url}', '_blank')">
                            <i class='bx bx-play'></i> Ver
                        </button>
                        <button style="border: none; background: none; cursor: pointer;" 
                            onclick="window.open('${video.url}', '_blank', 'width=630,height=410,scrollbars=yes,left=' + (screen.width - 650) + ',top=100')">
                            <i class='bx bx-exit-fullscreen' style="font-size: 24px; color: rgb(5, 241, 143);"></i>
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    });
}


    // UTILIDADES
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

    // INICIALIZAR
    function showDashboard() {
        document.getElementById('authContainer').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    }
