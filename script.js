// Sistema de Gestión de Estudiantes - Curso de Griego Koiné

// Datos iniciales COMPLETOS (todos los 13 estudiantes)
const initialStudents = [
    {
        id: "EST-001",
        email: "eilenochoatabares@gmail.com",
        nombre: "Eilen",
        apellidos: "Ochoa",
        telefono: "58458529",
        direccion: "Guanabo, Habana del Este, la Habana",
        rol: "Líder",
        experiencia: "No",
        denominacion: "Bautista",
        iglesia: "Iglesia Reino en Victoria",
        pastor: "Eliades Ochoa",
        referido: "Amigo",
        motivacion: "Conocer a profundidad las Escrituras.",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-002",
        email: "elyonelegida@gmail.com",
        nombre: "Elianis Gehovanna",
        apellidos: "Rodríguez Almaguer",
        telefono: "56511294",
        direccion: "Carretera Las 40,Reparto Pakinhouse,Finca San José de Canadá,Sola,Sierra de Cubitas,Camagüey.",
        rol: "Líder",
        experiencia: "No",
        denominacion: "Bautista",
        iglesia: "Iglesia Bautista de Sola,\"Solo Cristo Salva\"",
        pastor: "Rolando Desdín García",
        referido: "Sitio web",
        motivacion: "Para aprender a interpretar las Escrituras.",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-003",
        email: "juventud3xcristo@gmail.com",
        nombre: "Ledian",
        apellidos: "Medina Isaac",
        telefono: "58092690",
        direccion: "Calle Genaro Ortega número 3. Orlando Gonzalez. Majagua. Ciego de Avila",
        rol: "Estudiante",
        experiencia: "Sí",
        denominacion: "Bautista",
        iglesia: "1ra Iglesia Bautista de Algodones Eben-ezer",
        pastor: "Ledian Medina Isaac",
        referido: "Amigo",
        motivacion: "Superación",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-004",
        email: "mariano8619@gmail.com",
        nombre: "Mariano",
        apellidos: "Hernández Nápoles",
        telefono: "51724493",
        direccion: "Mariana, San Antonio del Sur. Guantánamo",
        rol: "Estudiante",
        experiencia: "Sí",
        denominacion: "Bautista",
        iglesia: "Iglesia Bautista Betania en Mariana",
        pastor: "Ogleidi Vaquero",
        referido: "Pastor Rolando Desdin",
        motivacion: "Entender y enseñar mejor el Nuevo Testamento",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-005",
        email: "orlandoaguilarfonseca@gmail.com",
        nombre: "Orlando",
        apellidos: "Aguilar Fonseca",
        telefono: "56171023",
        direccion: "Edificio 31 Escalera B Apartamento 5 Micro 1A Reparto Abel Santamaria Santiago de Cuba",
        rol: "Pastor",
        experiencia: "solo un poco",
        denominacion: "Bautista",
        iglesia: "XVIII Iglesia Bautista Santiago de Cuba",
        pastor: "Jesús Labori",
        referido: "Amigo",
        motivacion: "Estudiar e interpretar mejor las Escrituras",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-006",
        email: "justo.sarita1976@gmail.com",
        nombre: "Justo",
        apellidos: "Pila Reinoso",
        telefono: "+5354127358",
        direccion: "Edificio 47 apto 17, Sancti Spiritus, Cuba",
        rol: "Pastor",
        experiencia: "No",
        denominacion: "Bautista",
        iglesia: "Iglesia Bautista Roca de Salvacion",
        pastor: "Justo Pila Reinoso",
        referido: "Amigo",
        motivacion: "Para estudiar mejor las escrituras",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-007",
        email: "olmusic0102@gmail.com",
        nombre: "Osiel",
        apellidos: "Matos Piñon",
        telefono: "53490353",
        direccion: "Salvador allende #27 Sola,Camagüey",
        rol: "Estudiante",
        experiencia: "No",
        denominacion: "Bautista",
        iglesia: "Iglesia Bautista de Sola:Solo Cristo Salva",
        pastor: "Rolando Desdín García",
        referido: "Pastor",
        motivacion: "Aprender mas sobre el idioma y la Biblia",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-008",
        email: "eudisdanielcardozoheredia@gmail.com",
        nombre: "Eudis Daniel",
        apellidos: "Cardozo Heredia",
        telefono: "50727668",
        direccion: "Distrito José Martí D 19 apto 3b",
        rol: "Estudiante",
        experiencia: "No",
        denominacion: "Bautista",
        iglesia: "5ta iglesia Bautista Sinaí",
        pastor: "Yoelkis Pérez Martínez",
        referido: "Sitio web",
        motivacion: "Adquirir conocimientos y herramientas",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-009",
        email: "mariaclgpc05@gmail.com",
        nombre: "María Claudia",
        apellidos: "Grave de Peralta",
        telefono: "51704889",
        direccion: "Calle los Ángeles Reparto Nicaragua, Banes",
        rol: "Estudiante",
        experiencia: "solo un poco",
        denominacion: "Bautista",
        iglesia: "Even-Ezer",
        pastor: "Juan Yoamdy Gonzalez",
        referido: "Pastor",
        motivacion: "El estudio más profundo de la escritura",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-010",
        email: "wsanchezramirez83@gmail.com",
        nombre: "Wilfrido",
        apellidos: "Sánchez Ramírez",
        telefono: "52400256",
        direccion: "A. Gómez #10 e/ Eddy Martínez y Guillermo Tejas. Las Tunas.",
        rol: "Pastor",
        experiencia: "solo un poco",
        denominacion: "Bautista",
        iglesia: "2da Bautista de Las Tunas.",
        pastor: "Yo soy el pastor",
        referido: "Amigo",
        motivacion: "Poder interpretar mejor el Nuevo Testamento.",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-011",
        email: "luismirh07@gmail.com",
        nombre: "Luis Miguel",
        apellidos: "Rodríguez Hernández",
        telefono: "58024666",
        direccion: "Edificio 18B apartamento 11",
        rol: "Pastor",
        experiencia: "No",
        denominacion: "Bautista",
        iglesia: "Iglesia Bautista Sublime Gracia",
        pastor: "Soy el pastor de la iglesia",
        referido: "Amigo",
        motivacion: "Aprender griego para interpretar, predicar y aplicar fielmente la Palabra de Dios.",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-012",
        email: "yoander8910@gmail.com",
        nombre: "Yoander",
        apellidos: "Cutiño Martín",
        telefono: "54252762",
        direccion: "Calle 20 #14 A/ Independencia y 20 de Mayo, reparto Santiesteban, Holguín",
        rol: "otro",
        experiencia: "No",
        denominacion: "Bautista",
        iglesia: "Primera Iglesia Bautista de Holguín",
        pastor: "Michel Oduardo García",
        referido: "Amigo",
        motivacion: "Interpretar mejor las Escrituras.",
        compromiso: "Sí",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    },
    {
        id: "EST-013",
        email: "verdeciaperamo@gmail.com",
        nombre: "Luis Ramón",
        apellidos: "Verdecia Peramo",
        telefono: "58026276",
        direccion: "Calle Aricochea #40a % Cervantes y Narciso López, centro ciudad, Holguín",
        rol: "otro",
        experiencia: "solo un poco",
        denominacion: "Bautista",
        iglesia: "1ra iglesia bautista de Holguín Maranatha",
        pastor: "Michel Oduardo García",
        referido: "Amigo",
        motivacion: "Poder hacer una buena interpretación de las sagradas escrituras",
        compromiso: "Lo intentaré",
        fechaInscripcion: "2026/01/07",
        activo: true,
        progreso: [],
        notas: []
    }
];

// Sistema de semanas del curso
const semanasCurso = [
    { numero: 1, tema: "Alfabeto, pronunciación, diptongos, y sílabas", fecha: "3-9 marzo" },
    { numero: 2, tema: "Introducción a los sustantivos y al sistema de casos", fecha: "10-16 marzo" },
    { numero: 3, tema: "Primera y segunda declinación. Artículo definido", fecha: "17-23 marzo" },
    { numero: 4, tema: "Preposiciones y el verbo ser o estar", fecha: "24-30 marzo" },
    { numero: 5, tema: "Adjetivos", fecha: "31 marzo - 6 abril" },
    { numero: 6, tema: "Sustantivos: 3ª declinación", fecha: "7-13 abril" },
    { numero: 7, tema: "Pronombres personales de primera y segunda persona", fecha: "14-20 abril" },
    { numero: 8, tema: "Pronombres personales de tercera persona", fecha: "21-27 abril" },
    { numero: 9, tema: "Pronombres demostrativos y relativos", fecha: "28 abril - 4 mayo" },
    { numero: 10, tema: "Introducción a los verbos. Presente activo Indicativo", fecha: "5-11 mayo" },
    { numero: 11, tema: "Verbos contractos. Presente medio pasivo", fecha: "12-18 mayo" },
    { numero: 12, tema: "Futuro activo y medio pasivo", fecha: "19-25 mayo" },
    { numero: 13, tema: "Imperfecto Indicativo", fecha: "26 mayo - 1 junio" },
    { numero: 14, tema: "Introducción al aoristo", fecha: "2-8 junio" },
    { numero: 15, tema: "Aoristo. Examen Intermedio", fecha: "9-15 junio" },
    { numero: 16, tema: "Consolidación", fecha: "1-7 septiembre" },
    { numero: 17, tema: "Aoristo", fecha: "8-14 septiembre" },
    { numero: 18, tema: "Aoristo pasivo", fecha: "15-21 septiembre" },
    { numero: 19, tema: "Perfecto Indicativo", fecha: "22-28 septiembre" },
    { numero: 20, tema: "Introducción a los participios", fecha: "29 septiembre - 5 octubre" },
    { numero: 21, tema: "Presente activo Participio", fecha: "6-12 octubre" },
    { numero: 22, tema: "Aoristo activo participio", fecha: "13-19 octubre" },
    { numero: 23, tema: "Participio adjetival", fecha: "20-26 octubre" },
    { numero: 24, tema: "Participio perfecto. Genitivo absoluto", fecha: "27 octubre - 2 noviembre" },
    { numero: 25, tema: "Subjuntivo", fecha: "3-9 noviembre" },
    { numero: 26, tema: "Infinitivo", fecha: "10-16 noviembre" },
    { numero: 27, tema: "Imperativo", fecha: "17-23 noviembre" },
    { numero: 28, tema: "Conjugaciones atemáticas", fecha: "24-30 noviembre" },
    { numero: 29, tema: "Examen Final", fecha: "1-7 diciembre" }
];

class StudentManager {
    constructor() {
        this.students = this.loadFromLocalStorage() || initialStudents;
        this.exams = this.loadExamsFromLocalStorage() || [];
        this.activityLog = this.loadActivityFromLocalStorage() || [];
        this.currentStudentId = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadStudents();
        this.updateDashboard();
        this.generateWeekOptions();
        this.generateExamOptions();
        this.setupExportButtons();
        this.updateStudentSelects();
        this.setupModalEvents();
    }

    // LocalStorage methods
    saveToLocalStorage() {
        localStorage.setItem('greekCourseStudents', JSON.stringify(this.students));
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('greekCourseStudents');
        return data ? JSON.parse(data) : null;
    }

    saveExamsToLocalStorage() {
        localStorage.setItem('greekCourseExams', JSON.stringify(this.exams));
    }

    loadExamsFromLocalStorage() {
        const data = localStorage.getItem('greekCourseExams');
        return data ? JSON.parse(data) : null;
    }

    saveActivityToLocalStorage() {
        localStorage.setItem('greekCourseActivity', JSON.stringify(this.activityLog));
    }

    loadActivityFromLocalStorage() {
        const data = localStorage.getItem('greekCourseActivity');
        return data ? JSON.parse(data) : null;
    }

    // Activity logging
    logActivity(message, type = 'info') {
        const activity = {
            id: Date.now(),
            message,
            type,
            timestamp: new Date().toLocaleString('es-ES')
        };
        this.activityLog.unshift(activity);
        if (this.activityLog.length > 50) this.activityLog.pop();
        this.saveActivityToLocalStorage();
        this.updateActivityLog();
    }

    // Student management
    addStudent(studentData) {
        const id = `EST-${String(this.students.length + 1).padStart(3, '0')}`;
        const newStudent = {
            id,
            ...studentData,
            fechaInscripcion: new Date().toISOString().split('T')[0],
            activo: true,
            progreso: [],
            notas: []
        };
        
        this.students.push(newStudent);
        this.saveToLocalStorage();
        this.logActivity(`Nuevo estudiante registrado: ${studentData.nombre} ${studentData.apellidos}`, 'success');
        this.loadStudents();
        this.updateDashboard();
        this.showToast('Estudiante registrado exitosamente', 'success');
        return newStudent;
    }

    updateStudent(id, updatedData) {
        const index = this.students.findIndex(s => s.id === id);
        if (index !== -1) {
            this.students[index] = { ...this.students[index], ...updatedData };
            this.saveToLocalStorage();
            this.logActivity(`Estudiante actualizado: ${this.students[index].nombre} ${this.students[index].apellidos}`, 'info');
            this.loadStudents();
            this.updateDashboard();
            this.showToast('Estudiante actualizado exitosamente', 'success');
            return true;
        }
        return false;
    }

    deleteStudent(id) {
        const student = this.students.find(s => s.id === id);
        if (student) {
            this.students = this.students.filter(s => s.id !== id);
            this.saveToLocalStorage();
            this.logActivity(`Estudiante eliminado: ${student.nombre} ${student.apellidos}`, 'warning');
            this.loadStudents();
            this.updateDashboard();
            this.showToast('Estudiante eliminado', 'warning');
            return true;
        }
        return false;
    }

    // Add note to student
    addNoteToStudent(studentId, noteText) {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            if (!student.notas) student.notas = [];
            const note = {
                id: Date.now(),
                texto: noteText,
                fecha: new Date().toLocaleString('es-ES'),
                autor: 'Profesor'
            };
            student.notas.unshift(note);
            this.saveToLocalStorage();
            this.logActivity(`Nota añadida a ${student.nombre}: ${noteText.substring(0, 50)}...`, 'info');
            this.showToast('Nota añadida exitosamente', 'success');
            return note;
        }
    }

    // Add progress entry
    addProgressEntry(studentId, progressData) {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            if (!student.progreso) student.progreso = [];
            const progress = {
                id: Date.now(),
                ...progressData,
                fecha: new Date().toLocaleString('es-ES')
            };
            student.progreso.unshift(progress);
            this.saveToLocalStorage();
            this.logActivity(`Progreso registrado para ${student.nombre}: ${progressData.tipo}`, 'info');
            this.showToast('Progreso registrado exitosamente', 'success');
            return progress;
        }
    }

    // Exam management
    addExam(examData) {
        const exam = {
            id: `EXAM-${Date.now()}`,
            studentId: examData.studentId,
            semana: examData.semana,
            examen: examData.examen,
            grade: examData.grade,
            date: examData.date,
            notes: examData.notes,
            fechaRegistro: new Date().toISOString()
        };
        
        this.exams.push(exam);
        this.saveExamsToLocalStorage();
        
        // Actualizar progreso del estudiante
        const student = this.students.find(s => s.id === examData.studentId);
        if (student) {
            if (!student.progreso) student.progreso = [];
            student.progreso.push({
                id: exam.id,
                tipo: 'Examen',
                examen: examData.examen,
                semana: examData.semana,
                nota: examData.grade,
                fecha: examData.date,
                estado: examData.grade >= 60 ? 'Aprobado' : 'Reprobado',
                observaciones: examData.notes || ''
            });
            this.saveToLocalStorage();
        }
        
        this.logActivity(`Examen registrado: ${examData.examen} para ${student.nombre}`, 'success');
        this.loadExamsTable();
        this.showToast('Calificación registrada exitosamente', 'success');
        return exam;
    }

    // UI Methods
    loadStudents() {
        const container = document.getElementById('students-list');
        if (!container) return;
        
        const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
        const filterRole = document.getElementById('filter-role')?.value || '';
        
        let filteredStudents = this.students.filter(student => {
            const matchesSearch = searchTerm === '' || 
                student.nombre.toLowerCase().includes(searchTerm) ||
                student.apellidos.toLowerCase().includes(searchTerm) ||
                student.email.toLowerCase().includes(searchTerm);
            
            const matchesRole = filterRole === '' || student.rol === filterRole;
            
            return matchesSearch && matchesRole;
        });
        
        if (filteredStudents.length === 0) {
            container.innerHTML = '<p class="empty-message">No se encontraron estudiantes.</p>';
            return;
        }
        
        container.innerHTML = filteredStudents.map(student => {
            const examCount = student.progreso ? student.progreso.filter(p => p.tipo === 'Examen').length : 0;
            const noteCount = student.notas ? student.notas.length : 0;
            
            return `
                <div class="student-card" data-id="${student.id}">
                    <div class="student-header">
                        <div class="student-name">${student.nombre} ${student.apellidos}</div>
                        <div class="student-role">${student.rol}</div>
                    </div>
                    <div class="student-info">
                        <p><i class="fas fa-envelope"></i> ${student.email}</p>
                        <p><i class="fas fa-phone"></i> ${student.telefono || 'No registrado'}</p>
                        <p><i class="fas fa-church"></i> ${student.iglesia || 'No registrada'}</p>
                        <p><i class="fas fa-graduation-cap"></i> Experiencia: ${student.experiencia}</p>
                        <p><i class="fas fa-heart"></i> Compromiso: ${student.compromiso}</p>
                        <p><i class="fas fa-clipboard-check"></i> Exámenes: ${examCount}</p>
                        <p><i class="fas fa-sticky-note"></i> Notas: ${noteCount}</p>
                    </div>
                    <div class="student-actions">
                        <button class="btn-icon view-student-btn" data-id="${student.id}" title="Ver detalles">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-icon add-note-btn" data-id="${student.id}" title="Añadir nota">
                            <i class="fas fa-sticky-note"></i>
                        </button>
                        <button class="btn-icon add-progress-btn" data-id="${student.id}" title="Añadir progreso">
                            <i class="fas fa-plus-circle"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        // Asignar eventos a los botones recién creados
        this.attachStudentCardEvents();
    }

    attachStudentCardEvents() {
        // Ver detalles del estudiante
        document.querySelectorAll('.view-student-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const studentId = btn.getAttribute('data-id');
                this.showStudentDetails(studentId);
            });
        });
        
        // Añadir nota
        document.querySelectorAll('.add-note-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const studentId = btn.getAttribute('data-id');
                this.showAddNoteModal(studentId);
            });
        });
        
        // Añadir progreso
        document.querySelectorAll('.add-progress-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const studentId = btn.getAttribute('data-id');
                this.showAddProgressModal(studentId);
            });
        });
        
        // Click en la tarjeta del estudiante
        document.querySelectorAll('.student-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    const studentId = card.getAttribute('data-id');
                    this.showStudentDetails(studentId);
                }
            });
        });
    }

    // Modal controls
    showModal(modalId) {
        document.getElementById(modalId).classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
        document.body.style.overflow = 'auto';
        this.currentStudentId = null;
        
        // Limpiar formularios
        if (modalId === 'exam-modal') {
            document.getElementById('exam-form').reset();
            document.getElementById('modal-exam-date').value = new Date().toISOString().split('T')[0];
        }
    }

    setupModalEvents() {
        // Cerrar modales con botón X
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal');
                if (modal) {
                    this.closeModal(modal.id);
                }
            });
        });
        
        // Cerrar modales al hacer clic fuera
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });
        
        // Modal de detalles del estudiante
        const editBtn = document.getElementById('edit-student');
        const deleteBtn = document.getElementById('delete-student');
        
        if (editBtn) {
            editBtn.addEventListener('click', () => this.editCurrentStudent());
        }
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => this.deleteCurrentStudent());
        }
        
        // Modal de exámenes
        const saveExamBtn = document.getElementById('save-exam');
        if (saveExamBtn) {
            saveExamBtn.addEventListener('click', () => this.handleExamFormSubmit());
        }
    }

    showStudentDetails(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (!student) return;
        
        this.currentStudentId = studentId;
        
        const detailsContainer = document.getElementById('modal-student-details');
        
        // Calcular promedio de exámenes
        const examenes = student.progreso ? student.progreso.filter(p => p.tipo === 'Examen') : [];
        const promedio = examenes.length > 0 
            ? (examenes.reduce((sum, exam) => sum + parseFloat(exam.nota), 0) / examenes.length).toFixed(1)
            : 'Sin calificaciones';
        
        detailsContainer.innerHTML = `
            <div class="student-detail">
                <div class="detail-section">
                    <h4><i class="fas fa-user"></i> Información Personal</h4>
                    <div class="detail-grid">
                        <div><strong>ID:</strong> ${student.id}</div>
                        <div><strong>Nombre completo:</strong> ${student.nombre} ${student.apellidos}</div>
                        <div><strong>Email:</strong> ${student.email}</div>
                        <div><strong>Teléfono:</strong> ${student.telefono || 'No registrado'}</div>
                        <div><strong>Dirección:</strong> ${student.direccion || 'No registrada'}</div>
                        <div><strong>Fecha de inscripción:</strong> ${student.fechaInscripcion}</div>
                        <div><strong>Estado:</strong> ${student.activo ? '<span class="status-active">Activo</span>' : '<span class="status-inactive">Inactivo</span>'}</div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4><i class="fas fa-church"></i> Información Eclesial</h4>
                    <div class="detail-grid">
                        <div><strong>Rol:</strong> ${student.rol}</div>
                        <div><strong>Denominación:</strong> ${student.denominacion || 'No registrada'}</div>
                        <div><strong>Iglesia:</strong> ${student.iglesia || 'No registrada'}</div>
                        <div><strong>Pastor:</strong> ${student.pastor || 'No registrado'}</div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4><i class="fas fa-graduation-cap"></i> Información Académica</h4>
                    <div class="detail-grid">
                        <div><strong>Experiencia en griego:</strong> ${student.experiencia}</div>
                        <div><strong>Referido por:</strong> ${student.referido || 'No registrado'}</div>
                        <div><strong>Motivación:</strong> ${student.motivacion || 'No registrada'}</div>
                        <div><strong>Compromiso:</strong> ${student.compromiso}</div>
                        <div><strong>Promedio de exámenes:</strong> <span class="average-grade">${promedio}</span></div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4><i class="fas fa-clipboard-check"></i> Progreso del Curso</h4>
                    ${student.progreso && student.progreso.length > 0 ? 
                        `<div class="progress-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Descripción</th>
                                        <th>Nota</th>
                                        <th>Fecha</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${student.progreso.map(p => `
                                        <tr>
                                            <td>${p.tipo || 'Examen'}</td>
                                            <td>${p.examen || p.descripcion || ''}</td>
                                            <td>${p.nota || p.nota === 0 ? p.nota : 'N/A'}</td>
                                            <td>${p.fecha}</td>
                                            <td><span class="status-${p.estado?.toLowerCase() || 'pending'}">${p.estado || 'Pendiente'}</span></td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>` : 
                        '<p class="no-data">No hay registros de progreso aún.</p>'}
                </div>
                
                <div class="detail-section">
                    <h4><i class="fas fa-sticky-note"></i> Notas y Observaciones</h4>
                    ${student.notas && student.notas.length > 0 ? 
                        `<div class="notes-list">
                            ${student.notas.map(note => `
                                <div class="note-item">
                                    <div class="note-header">
                                        <strong>${note.autor}</strong>
                                        <small>${note.fecha}</small>
                                    </div>
                                    <p>${note.texto}</p>
                                </div>
                            `).join('')}
                        </div>` : 
                        '<p class="no-data">No hay notas registradas.</p>'}
                    <button class="btn btn-small" onclick="studentManager.showAddNoteModal('${student.id}')">
                        <i class="fas fa-plus"></i> Añadir Nota
                    </button>
                </div>
            </div>
        `;
        
        this.showModal('student-modal');
    }

    showAddNoteModal(studentId) {
        this.currentStudentId = studentId;
        
        const noteText = prompt('Escribe tu nota u observación sobre el estudiante:');
        if (noteText && noteText.trim()) {
            this.addNoteToStudent(studentId, noteText.trim());
            if (document.getElementById('student-modal').classList.contains('active')) {
                this.showStudentDetails(studentId); // Actualizar vista
            }
        }
    }

    showAddProgressModal(studentId) {
        this.currentStudentId = studentId;
        
        // Usar un formulario más simple con prompt
        const tipo = prompt('Tipo de progreso (Asistencia, Participación, Tarea, Evaluación, Proyecto, Otro):');
        if (!tipo) return;
        
        const descripcion = prompt('Descripción del progreso:');
        if (!descripcion) return;
        
        const notaInput = prompt('Calificación (0-100) - Dejar vacío si no aplica:');
        const nota = notaInput ? parseFloat(notaInput) : null;
        const estado = prompt('Estado (Completado, En progreso, Pendiente, Excelente, Necesita mejorar):') || 'Completado';
        const observaciones = prompt('Observaciones adicionales:') || '';
        
        const progressData = {
            tipo: tipo.trim(),
            descripcion: descripcion.trim(),
            nota: nota,
            estado: estado.trim(),
            observaciones: observaciones.trim()
        };
        
        this.addProgressEntry(studentId, progressData);
        
        if (document.getElementById('student-modal').classList.contains('active')) {
            this.showStudentDetails(studentId); // Actualizar vista
        }
    }

    editCurrentStudent() {
        if (!this.currentStudentId) return;
        
        const student = this.students.find(s => s.id === this.currentStudentId);
        if (!student) return;
        
        // Llenar formulario con datos del estudiante
        // (Podrías crear un modal específico para editar si lo necesitas)
        // Por ahora, usaremos prompts para simplificar
        const nuevoNombre = prompt('Nuevo nombre:', student.nombre);
        if (nuevoNombre === null) return;
        
        const nuevosApellidos = prompt('Nuevos apellidos:', student.apellidos);
        if (nuevosApellidos === null) return;
        
        const nuevoEmail = prompt('Nuevo email:', student.email);
        if (nuevoEmail === null) return;
        
        // Validar email único si cambió
        if (nuevoEmail !== student.email) {
            const emailExists = this.students.some(s => 
                s.email.toLowerCase() === nuevoEmail.toLowerCase() && s.id !== this.currentStudentId
            );
            
            if (emailExists) {
                this.showToast('Este email ya está registrado', 'error');
                return;
            }
        }
        
        const updateData = {
            nombre: nuevoNombre.trim(),
            apellidos: nuevosApellidos.trim(),
            email: nuevoEmail.trim()
        };
        
        if (this.updateStudent(this.currentStudentId, updateData)) {
            if (document.getElementById('student-modal').classList.contains('active')) {
                this.showStudentDetails(this.currentStudentId); // Actualizar vista
            }
        }
    }

    deleteCurrentStudent() {
        if (!this.currentStudentId) return;
        
        if (confirm('¿Estás seguro de que quieres eliminar este estudiante? Esta acción no se puede deshacer.')) {
            if (this.deleteStudent(this.currentStudentId)) {
                this.closeModal('student-modal');
            }
        }
    }

    showExamModal() {
        // Establecer fecha actual por defecto
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('modal-exam-date').value = today;
        
        this.showModal('exam-modal');
    }

    handleExamFormSubmit() {
        const examData = {
            studentId: document.getElementById('modal-exam-student').value,
            semana: document.getElementById('modal-exam-week').value,
            examen: document.getElementById('modal-exam-number').value,
            grade: parseFloat(document.getElementById('modal-exam-grade').value),
            date: document.getElementById('modal-exam-date').value,
            notes: document.getElementById('modal-exam-notes').value
        };
        
        // Validar
        if (!examData.studentId || !examData.semana || !examData.examen || isNaN(examData.grade) || !examData.date) {
            this.showToast('Por favor complete todos los campos requeridos', 'error');
            return;
        }
        
        if (examData.grade < 0 || examData.grade > 100) {
            this.showToast('La calificación debe estar entre 0 y 100', 'error');
            return;
        }
        
        // Asegurar que el ID del estudiante sea correcto
        const student = this.students.find(s => s.id === examData.studentId);
        if (!student) {
            this.showToast('Estudiante no encontrado', 'error');
            return;
        }
        
        this.addExam(examData);
        this.closeModal('exam-modal');
    }

    deleteExam(examId) {
        if (confirm('¿Estás seguro de que quieres eliminar este examen?')) {
            this.exams = this.exams.filter(e => e.id !== examId);
            this.saveExamsToLocalStorage();
            this.loadExamsTable();
            this.showToast('Examen eliminado', 'warning');
        }
    }

    updateDashboard() {
        // Actualizar contadores
        const totalStudents = this.students.length;
        const activeStudents = this.students.filter(s => s.activo).length;
        const pastorsCount = this.students.filter(s => s.rol === 'Pastor').length;
        
        if (document.getElementById('total-students')) {
            document.getElementById('total-students').textContent = totalStudents;
        }
        if (document.getElementById('active-students')) {
            document.getElementById('active-students').textContent = activeStudents;
        }
        if (document.getElementById('pastors-count')) {
            document.getElementById('pastors-count').textContent = pastorsCount;
        }
        if (document.getElementById('sidebar-count')) {
            document.getElementById('sidebar-count').textContent = totalStudents;
        }
        
        // Actualizar dashboard
        if (document.getElementById('dashboard-active')) {
            document.getElementById('dashboard-active').textContent = activeStudents;
        }
        if (document.getElementById('dashboard-leaders')) {
            document.getElementById('dashboard-leaders').textContent = this.students.filter(s => s.rol === 'Pastor' || s.rol === 'Líder').length;
        }
        if (document.getElementById('dashboard-experienced')) {
            document.getElementById('dashboard-experienced').textContent = this.students.filter(s => s.experiencia !== 'No').length;
        }
        
        const compromisoCount = this.students.filter(s => s.compromiso === 'Sí').length;
        const compromisoPorcentaje = totalStudents > 0 ? Math.round((compromisoCount / totalStudents) * 100) : 0;
        if (document.getElementById('dashboard-commitment')) {
            document.getElementById('dashboard-commitment').textContent = `${compromisoPorcentaje}%`;
        }
        
        // Actualizar gráficos
        this.updateCharts();
        this.updateActivityLog();
        
        // Actualizar opciones de estudiantes en selects
        this.updateStudentSelects();
    }

    updateCharts() {
        // Gráfico de roles
        const roleCtx = document.getElementById('roleChart')?.getContext('2d');
        if (roleCtx) {
            const roles = ['Pastor', 'Líder', 'Estudiante', 'otro'];
            const roleCounts = roles.map(role => 
                this.students.filter(s => s.rol === role).length
            );
            
            if (window.roleChart) window.roleChart.destroy();
            
            window.roleChart = new Chart(roleCtx, {
                type: 'doughnut',
                data: {
                    labels: roles,
                    datasets: [{
                        data: roleCounts,
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        }
        
        // Gráfico de experiencia
        const expCtx = document.getElementById('experienceChart')?.getContext('2d');
        if (expCtx) {
            const experiencias = ['No', 'Sí', 'solo un poco'];
            const expCounts = experiencias.map(exp => 
                this.students.filter(s => s.experiencia === exp).length
            );
            
            if (window.expChart) window.expChart.destroy();
            
            window.expChart = new Chart(expCtx, {
                type: 'bar',
                data: {
                    labels: experiencias,
                    datasets: [{
                        label: 'Estudiantes',
                        data: expCounts,
                        backgroundColor: '#3498db'
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        }
    }

    updateActivityLog() {
        const container = document.getElementById('activity-list');
        if (!container) return;
        
        if (this.activityLog.length === 0) {
            container.innerHTML = '<p class="empty-message">No hay actividad registrada aún.</p>';
            return;
        }
        
        container.innerHTML = this.activityLog.slice(0, 10).map(activity => `
            <div class="activity-item ${activity.type}">
                <i class="fas fa-${this.getActivityIcon(activity.type)}"></i>
                <div>
                    <p>${activity.message}</p>
                    <small>${activity.timestamp}</small>
                </div>
            </div>
        `).join('');
    }

    getActivityIcon(type) {
        const icons = {
            'success': 'check-circle',
            'error': 'exclamation-circle',
            'warning': 'exclamation-triangle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    generateWeekOptions() {
        const weekSelect = document.getElementById('exam-week');
        const modalWeekSelect = document.getElementById('modal-exam-week');
        
        if (weekSelect) {
            weekSelect.innerHTML = '<option value="">Todas las semanas</option>' +
                semanasCurso.map(week => 
                    `<option value="${week.numero}">Semana ${week.numero}: ${week.tema}</option>`
                ).join('');
        }
        
        if (modalWeekSelect) {
            modalWeekSelect.innerHTML = '<option value="">Seleccionar semana...</option>' +
                semanasCurso.map(week => 
                    `<option value="${week.numero}">Semana ${week.numero}: ${week.tema}</option>`
                ).join('');
        }
    }

    generateExamOptions() {
        const examSelect = document.getElementById('modal-exam-number');
        if (examSelect) {
            let options = '<option value="">Seleccionar...</option>';
            
            // Exámenes semanales (1-26)
            for (let i = 1; i <= 26; i++) {
                options += `<option value="Examen ${i}">Examen ${i}</option>`;
            }
            
            // Exámenes especiales
            options += '<option value="Examen Intermedio">Examen Intermedio</option>';
            options += '<option value="Examen Final">Examen Final</option>';
            
            examSelect.innerHTML = options;
        }
    }

    updateStudentSelects() {
        const selects = [
            'exam-student',
            'modal-exam-student'
        ];
        
        selects.forEach(selectId => {
            const select = document.getElementById(selectId);
            if (select) {
                // Guardar la opción seleccionada actual
                const currentValue = select.value;
                
                // Generar nuevas opciones
                select.innerHTML = selectId === 'exam-student' ? 
                    '<option value="">Todos los estudiantes</option>' :
                    '<option value="">Seleccionar estudiante...</option>';
                
                this.students.forEach(student => {
                    const option = document.createElement('option');
                    option.value = student.id;
                    option.textContent = `${student.nombre} ${student.apellidos} (${student.id})`;
                    select.appendChild(option);
                });
                
                // Restaurar la selección anterior si existe
                if (currentValue && this.students.some(s => s.id === currentValue)) {
                    select.value = currentValue;
                }
            }
        });
    }

    loadExamsTable() {
        const tbody = document.getElementById('exams-table-body');
        if (!tbody) return;
        
        const studentFilter = document.getElementById('exam-student')?.value;
        const weekFilter = document.getElementById('exam-week')?.value;
        
        let filteredExams = this.exams;
        
        if (studentFilter) {
            filteredExams = filteredExams.filter(exam => exam.studentId === studentFilter);
        }
        
        if (weekFilter) {
            filteredExams = filteredExams.filter(exam => exam.semana == weekFilter);
        }
        
        if (filteredExams.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" class="empty-message">No hay exámenes registrados aún.</td></tr>';
            return;
        }
        
        tbody.innerHTML = filteredExams.map(exam => {
            const student = this.students.find(s => s.id === exam.studentId);
            const studentName = student ? `${student.nombre} ${student.apellidos}` : 'Desconocido';
            const semanaInfo = semanasCurso.find(w => w.numero == exam.semana);
            const semanaText = semanaInfo ? `Semana ${exam.semana}: ${semanaInfo.tema.substring(0, 30)}...` : `Semana ${exam.semana}`;
            const estado = exam.grade >= 60 ? 'Aprobado' : exam.grade >= 0 ? 'Reprobado' : 'Pendiente';
            const estadoClass = estado.toLowerCase();
            
            return `
                <tr>
                    <td>${studentName}</td>
                    <td>${semanaText}</td>
                    <td>${exam.examen}</td>
                    <td><strong>${exam.grade}</strong></td>
                    <td>${new Date(exam.date).toLocaleDateString('es-ES')}</td>
                    <td><span class="exam-status ${estadoClass}">${estado}</span></td>
                    <td>
                        <button class="btn-icon delete-exam-btn" data-id="${exam.id}" title="Eliminar">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
        
        // Asignar eventos a los botones de eliminar
        document.querySelectorAll('.delete-exam-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const examId = btn.getAttribute('data-id');
                this.deleteExam(examId);
            });
        });
    }

    setupExportButtons() {
        // Exportar a CSV
        document.getElementById('export-csv')?.addEventListener('click', () => {
            this.exportToCSV();
        });
        
        // Exportar a Excel (simulado con CSV)
        document.getElementById('export-excel')?.addEventListener('click', () => {
            this.exportToExcel();
        });
        
        // Exportar a PDF (simulado)
        document.getElementById('export-pdf')?.addEventListener('click', () => {
            this.exportToPDF();
        });
        
        // Backup de datos
        document.getElementById('backup-data')?.addEventListener('click', () => {
            this.createBackup();
        });
        
        // Importar datos
        document.getElementById('import-data')?.addEventListener('click', () => {
            this.importData();
        });
    }

    exportToCSV() {
        const headers = ['ID', 'Nombre', 'Apellidos', 'Email', 'Teléfono', 'Rol', 'Experiencia', 'Iglesia', 'Compromiso', 'Promedio'];
        const data = this.students.map(student => {
            const examenes = student.progreso ? student.progreso.filter(p => p.tipo === 'Examen') : [];
            const promedio = examenes.length > 0 
                ? (examenes.reduce((sum, exam) => sum + parseFloat(exam.nota), 0) / examenes.length).toFixed(1)
                : 'Sin calificaciones';
            
            return [
                student.id,
                student.nombre,
                student.apellidos,
                student.email,
                student.telefono,
                student.rol,
                student.experiencia,
                student.iglesia,
                student.compromiso,
                promedio
            ];
        });
        
        const csvContent = [
            headers.join(','),
            ...data.map(row => row.map(cell => `"${cell}"`).join(','))
        ].join('\n');
        
        this.downloadFile(csvContent, 'estudiantes_griego.csv', 'text/csv');
        this.showToast('Datos exportados a CSV exitosamente', 'success');
    }

    exportToExcel() {
        this.exportToCSV();
        this.showToast('Datos exportados exitosamente', 'success');
    }

    exportToPDF() {
        this.showToast('Funcionalidad de PDF en desarrollo', 'info');
    }

    createBackup() {
        const backup = {
            students: this.students,
            exams: this.exams,
            activity: this.activityLog,
            timestamp: new Date().toISOString()
        };
        
        const backupStr = JSON.stringify(backup, null, 2);
        this.downloadFile(backupStr, `backup_griego_${Date.now()}.json`, 'application/json');
        this.showToast('Backup creado exitosamente', 'success');
    }

    importData() {
        const fileInput = document.getElementById('import-file');
        if (!fileInput.files.length) {
            this.showToast('Por favor selecciona un archivo', 'warning');
            return;
        }
        
        const file = fileInput.files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                
                if (confirm('¿Estás seguro de que quieres importar estos datos? Se sobrescribirán los datos actuales.')) {
                    if (data.students) this.students = data.students;
                    if (data.exams) this.exams = data.exams;
                    if (data.activity) this.activityLog = data.activity;
                    
                    this.saveToLocalStorage();
                    this.saveExamsToLocalStorage();
                    this.saveActivityToLocalStorage();
                    
                    this.loadStudents();
                    this.updateDashboard();
                    this.loadExamsTable();
                    
                    this.showToast('Datos importados exitosamente', 'success');
                    this.logActivity('Datos importados desde archivo', 'info');
                }
            } catch (error) {
                this.showToast('Error al importar el archivo. Formato inválido.', 'error');
            }
        };
        
        reader.readAsText(file);
    }

    downloadFile(content, filename, type) {
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="fas fa-${this.getToastIcon(type)}"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 5000);
    }

    getToastIcon(type) {
        const icons = {
            'success': 'check-circle',
            'error': 'exclamation-circle',
            'warning': 'exclamation-triangle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    setupEventListeners() {
        // Navegación
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.getAttribute('data-section');
                this.showSection(section);
                
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Formulario de estudiante
        const studentForm = document.getElementById('student-form');
        if (studentForm) {
            studentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewStudentSubmit();
            });
        }
        
        // Botón limpiar formulario
        document.getElementById('clear-form')?.addEventListener('click', () => {
            document.getElementById('student-form').reset();
        });
        
        // Buscador de estudiantes
        document.getElementById('search-input')?.addEventListener('input', () => {
            this.loadStudents();
        });
        
        // Filtro por rol
        document.getElementById('filter-role')?.addEventListener('change', () => {
            this.loadStudents();
        });
        
        // Botón agregar examen
        document.getElementById('add-exam-btn')?.addEventListener('click', () => {
            this.showExamModal();
        });
        
        // Filtros de exámenes
        document.getElementById('exam-student')?.addEventListener('change', () => {
            this.loadExamsTable();
        });
        
        document.getElementById('exam-week')?.addEventListener('change', () => {
            this.loadExamsTable();
        });
    }

    handleNewStudentSubmit() {
        const formData = {
            nombre: document.getElementById('nombre').value,
            apellidos: document.getElementById('apellidos').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            direccion: document.getElementById('direccion').value,
            rol: document.getElementById('rol').value,
            experiencia: document.getElementById('experiencia').value,
            denominacion: document.getElementById('denominacion').value,
            iglesia: document.getElementById('iglesia').value,
            pastor: document.getElementById('pastor').value,
            referido: document.getElementById('referido').value,
            motivacion: document.getElementById('motivacion').value,
            compromiso: document.getElementById('compromiso').value
        };
        
        // Validar email único
        const emailExists = this.students.some(s => 
            s.email.toLowerCase() === formData.email.toLowerCase()
        );
        
        if (emailExists) {
            this.showToast('Este email ya está registrado', 'error');
            return;
        }
        
        this.addStudent(formData);
        
        // Limpiar formulario
        document.getElementById('student-form').reset();
        
        // Regresar a la lista de estudiantes
        this.showSection('students');
    }

    showSection(sectionId) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Cargar datos específicos de la sección
            if (sectionId === 'students') {
                this.loadStudents();
            } else if (sectionId === 'exams') {
                this.loadExamsTable();
            }
        }
    }
}

// Inicializar la aplicación
let studentManager;

document.addEventListener('DOMContentLoaded', () => {
    studentManager = new StudentManager();
    
    // Cargar los estudiantes iniciales si no hay datos guardados
    if (!localStorage.getItem('greekCourseStudents')) {
        studentManager.logActivity('Sistema inicializado con 13 estudiantes', 'info');
    } else {
        studentManager.logActivity('Sistema cargado con datos guardados', 'success');
    }
});

// Hacer el manager accesible globalmente
window.studentManager = studentManager;