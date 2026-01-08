// Clase principal para gestionar estudiantes
class StudentManager {
    constructor() {
        this.students = [];
        this.exams = [];
        this.activityLog = [];
        this.currentStudentId = null;
        this.weeks = this.generateWeeks();
        this.initialize();
    }

    // Inicializar la aplicación
    initialize() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.loadInitialData();
        this.updateUI();
        this.logActivity('Sistema inicializado', 'info');
    }

    // Generar las 29 semanas del curso
    generateWeeks() {
        const weeks = [];
        const startDate = new Date('2026-01-07');
        
        const topics = [
            "Introducción al Griego Koiné",
            "Alfabeto y pronunciación",
            "Sustantivos: género y número",
            "Sustantivos: casos griegos",
            "Artículos definidos",
            "Adjetivos: declinación",
            "Pronombres personales",
            "Pronombres demostrativos",
            "Pronombres relativos",
            "Verbos: presente indicativo activo",
            "Verbos: presente indicativo medio/pasivo",
            "Verbos: futuro activo",
            "Verbos: aoristo activo",
            "Verbos: aoristo medio",
            "Verbos: perfecto activo",
            "Verbos: sistema de participios",
            "Participios: usos y traducción",
            "Infinitivos: formas y usos",
            "Sustantivos verbales",
            "Adverbios y preposiciones",
            "Conjunciones y partículas",
            "Sintaxis: orden de palabras",
            "Sintaxis: oraciones simples",
            "Sintaxis: oraciones compuestas",
            "Sintaxis: oraciones condicionales",
            "Sintaxis: discurso indirecto",
            "Traducción: texto seleccionado NT",
            "Traducción: pasaje completo",
            "Repaso general y aplicación"
        ];
        
        for (let i = 0; i < 29; i++) {
            const weekDate = new Date(startDate);
            weekDate.setDate(weekDate.getDate() + (i * 7));
            
            weeks.push({
                number: i + 1,
                topic: topics[i],
                date: weekDate.toISOString().split('T')[0]
            });
        }
        
        return weeks;
    }

    // Cargar datos iniciales si no existen
    loadInitialData() {
        if (this.students.length === 0) {
            const initialStudents = [
                {
                    id: "EST-001",
                    nombre: "Eilen",
                    apellidos: "Ochoa",
                    email: "eilenochoatabares@gmail.com",
                    telefono: "58458529",
                    direccion: "Guanabo, Habana del Este, La Habana",
                    rol: "Líder",
                    denominacion: "Bautista",
                    iglesia: "Iglesia Reino en Victoria",
                    pastor: "Eliades Ochoa",
                    experiencia: "No",
                    motivacion: "Conocer a profundidad las Escrituras.",
                    compromiso: "Sí",
                    referido: "Amigo",
                    fechaInscripcion: "2026/01/07",
                    activo: true,
                    progreso: [
                        { id: Date.now(), tipo: "Inscripción", descripcion: "Confirmación de inscripción enviada", nota: null, estado: "Completado", observaciones: "", fecha: "2026-01-07" },
                        { id: Date.now() + 1, tipo: "Material", descripcion: "Material inicial entregado", nota: null, estado: "Completado", observaciones: "", fecha: "2026-01-07" },
                        { id: Date.now() + 2, tipo: "Evaluación", descripcion: "Primera evaluación completada", nota: 85, estado: "Completado", observaciones: "", fecha: "2026-01-14" }
                    ],
                    notas: []
                },
                {
                    id: "EST-002",
                    nombre: "Elianis Gehovanna",
                    apellidos: "Rodríguez Almaguer",
                    email: "elyonelegida@gmail.com",
                    telefono: "56511294",
                    direccion: "Sola, Sierra de Cubitas, Camagüey",
                    rol: "Líder",
                    denominacion: "Bautista",
                    iglesia: "Iglesia Bautista de Sola, \"Solo Cristo Salva\"",
                    pastor: "Rolando Desdín García",
                    experiencia: "No",
                    motivacion: "Para aprender a interpretar las Escrituras.",
                    compromiso: "Sí",
                    referido: "Sitio promocional del ministerio",
                    fechaInscripcion: "2026/01/07",
                    activo: true,
                    progreso: [
                        { id: Date.now() + 3, tipo: "Inscripción", descripcion: "Confirmación de inscripción enviada", nota: null, estado: "Completado", observaciones: "", fecha: "2026-01-07" },
                        { id: Date.now() + 4, tipo: "Material", descripcion: "Material inicial entregado", nota: null, estado: "Completado", observaciones: "", fecha: "2026-01-07" }
                    ],
                    notas: []
                },
                // Los otros 11 estudiantes seguirían aquí con su estructura similar
                // Por brevedad, solo incluimos los primeros 2 como ejemplo
            ];
            
            this.students = initialStudents;
            this.saveToStorage();
            this.logActivity('Datos iniciales cargados', 'info');
        }
    }

    // Guardar en LocalStorage
    saveToStorage() {
        try {
            const data = {
                students: this.students,
                exams: this.exams,
                activityLog: this.activityLog.slice(-50) // Guardar solo las últimas 50 actividades
            };
            localStorage.setItem('greekCourseData', JSON.stringify(data));
        } catch (error) {
            console.error('Error al guardar en LocalStorage:', error);
            this.showToast('Error al guardar datos', 'error');
        }
    }

    // Cargar desde LocalStorage
    loadFromStorage() {
        try {
            const data = JSON.parse(localStorage.getItem('greekCourseData'));
            if (data) {
                this.students = data.students || [];
                this.exams = data.exams || [];
                this.activityLog = data.activityLog || [];
            }
        } catch (error) {
            console.error('Error al cargar desde LocalStorage:', error);
        }
    }

    // Registrar actividad
    logActivity(message, type = 'info') {
        const activity = {
            id: Date.now(),
            message,
            type,
            timestamp: new Date().toISOString()
        };
        this.activityLog.push(activity);
        this.saveToStorage();
        this.updateActivityLog();
    }

    // Configurar event listeners
    setupEventListeners() {
        // Navegación
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const section = item.getAttribute('data-section');
                this.showSection(section);
            });
        });

        // Formulario nuevo estudiante
        const newStudentForm = document.getElementById('new-student-form');
        if (newStudentForm) {
            newStudentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addNewStudent();
            });
        }

        // Limpiar formulario
        const clearFormBtn = document.getElementById('clear-form');
        if (clearFormBtn) {
            clearFormBtn.addEventListener('click', () => {
                document.getElementById('new-student-form').reset();
            });
        }

        // Buscador de estudiantes
        const studentSearch = document.getElementById('student-search');
        if (studentSearch) {
            studentSearch.addEventListener('input', (e) => {
                this.filterStudents(e.target.value);
            });
        }

        // Filtro por rol
        const roleFilter = document.getElementById('role-filter');
        if (roleFilter) {
            roleFilter.addEventListener('change', (e) => {
                this.filterStudentsByRole(e.target.value);
            });
        }

        // Selección de estudiante para progreso
        const studentSelect = document.getElementById('student-select');
        if (studentSelect) {
            studentSelect.addEventListener('change', (e) => {
                this.showStudentProgress(e.target.value);
            });
        }

        // Botón para añadir progreso
        const addProgressBtn = document.getElementById('add-progress-btn');
        if (addProgressBtn) {
            addProgressBtn.addEventListener('click', () => {
                this.showProgressModal();
            });
        }

        // Botón para añadir nota
        const addNoteBtn = document.getElementById('add-note-btn');
        if (addNoteBtn) {
            addNoteBtn.addEventListener('click', () => {
                this.showNoteModal();
            });
        }

        // Formulario de progreso
        const progressForm = document.getElementById('progress-form');
        if (progressForm) {
            progressForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveProgress();
            });
        }

        // Botón para añadir examen
        const addExamBtn = document.getElementById('add-exam-btn');
        if (addExamBtn) {
            addExamBtn.addEventListener('click', () => {
                this.showExamModal();
            });
        }

        // Formulario de examen
        const examForm = document.getElementById('exam-form');
        if (examForm) {
            examForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveExam();
            });
        }

        // Filtros de exámenes
        const examStudentFilter = document.getElementById('exam-student-filter');
        if (examStudentFilter) {
            examStudentFilter.addEventListener('change', () => {
                this.updateExamsTable();
            });
        }

        const examWeekFilter = document.getElementById('exam-week-filter');
        if (examWeekFilter) {
            examWeekFilter.addEventListener('change', () => {
                this.updateExamsTable();
            });
        }

        // Exportación
        document.getElementById('export-csv').addEventListener('click', () => this.exportToCSV());
        document.getElementById('export-excel').addEventListener('click', () => this.exportToExcel());
        document.getElementById('export-pdf').addEventListener('click', () => this.exportToPDF());
        document.getElementById('export-json').addEventListener('click', () => this.exportToJSON());
        
        // Importación
        document.getElementById('import-btn').addEventListener('click', () => {
            document.getElementById('import-file').click();
        });
        
        document.getElementById('import-file').addEventListener('change', (e) => {
            this.importFromJSON(e.target.files[0]);
        });

        // Backup
        document.getElementById('backup-btn').addEventListener('click', () => {
            this.exportToJSON();
        });

        // Cerrar modales
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                this.hideModals();
            });
        });

        document.getElementById('modal-overlay').addEventListener('click', () => {
            this.hideModals();
        });
    }

    // Mostrar sección específica
    showSection(sectionId) {
        // Actualizar navegación
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
            }
        });

        // Mostrar sección
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');

        // Actualizar contenido específico de la sección
        if (sectionId === 'dashboard') {
            this.updateDashboard();
        } else if (sectionId === 'students') {
            this.updateStudentsGrid();
        } else if (sectionId === 'progress') {
            this.updateStudentSelect();
        } else if (sectionId === 'exams') {
            this.updateExamsTable();
            this.updateExamFilters();
        }
    }

    // Actualizar UI general
    updateUI() {
        this.updateStats();
        this.updateDashboard();
        this.updateStudentsGrid();
        this.updateStudentSelect();
        this.updateExamFilters();
    }

    // Actualizar estadísticas
    updateStats() {
        const totalStudents = this.students.length;
        const activeStudents = this.students.filter(s => s.activo).length;
        const pastors = this.students.filter(s => s.rol === 'Pastor').length;
        
        // Calcular promedio de exámenes
        let totalGrades = 0;
        let gradeCount = 0;
        this.exams.forEach(exam => {
            if (exam.grade) {
                totalGrades += exam.grade;
                gradeCount++;
            }
        });
        const avgGrade = gradeCount > 0 ? (totalGrades / gradeCount).toFixed(1) : '0';

        document.getElementById('total-students').textContent = totalStudents;
        document.getElementById('active-students').textContent = activeStudents;
        document.getElementById('pastor-count').textContent = pastors;
        document.getElementById('avg-grade').textContent = avgGrade;
        document.getElementById('sidebar-student-count').textContent = totalStudents;
    }

    // Actualizar dashboard
    updateDashboard() {
        // Estadísticas de tarjetas
        const totalStudents = this.students.length;
        const leaders = this.students.filter(s => s.rol === 'Pastor' || s.rol === 'Líder').length;
        const experienced = this.students.filter(s => s.experiencia !== 'No').length;
        const committed = this.students.filter(s => s.compromiso === 'Sí').length;

        document.getElementById('card-total-students').textContent = totalStudents;
        document.getElementById('card-leaders').textContent = leaders;
        document.getElementById('card-experienced').textContent = experienced;
        document.getElementById('card-commitment').textContent = committed;

        // Gráficos
        this.updateCharts();
        this.updateActivityLog();
    }

    // Actualizar gráficos
    updateCharts() {
        // Distribución por rol
        const roleCounts = {
            Pastor: this.students.filter(s => s.rol === 'Pastor').length,
            Líder: this.students.filter(s => s.rol === 'Líder').length,
            Estudiante: this.students.filter(s => s.rol === 'Estudiante').length,
            Otro: this.students.filter(s => s.rol === 'Otro').length
        };

        const roleCtx = document.getElementById('roleChart').getContext('2d');
        if (window.roleChart) {
            window.roleChart.destroy();
        }
        window.roleChart = new Chart(roleCtx, {
            type: 'doughnut',
            data: {
                labels: ['Pastores', 'Líderes', 'Estudiantes', 'Otros'],
                datasets: [{
                    data: Object.values(roleCounts),
                    backgroundColor: ['#3498db', '#2ecc71', '#f39c12', '#9b59b6'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });

        // Distribución por experiencia
        const expCounts = {
            'No': this.students.filter(s => s.experiencia === 'No').length,
            'Solo un poco': this.students.filter(s => s.experiencia === 'Solo un poco').length,
            'Sí': this.students.filter(s => s.experiencia === 'Sí').length
        };

        const expCtx = document.getElementById('experienceChart').getContext('2d');
        if (window.expChart) {
            window.expChart.destroy();
        }
        window.expChart = new Chart(expCtx, {
            type: 'bar',
            data: {
                labels: ['Sin experiencia', 'Poca experiencia', 'Con experiencia'],
                datasets: [{
                    label: 'Estudiantes',
                    data: Object.values(expCounts),
                    backgroundColor: ['#e74c3c', '#f39c12', '#2ecc71'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
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

    // Actualizar registro de actividad
    updateActivityLog() {
        const activityList = document.getElementById('activity-list');
        if (!activityList) return;

        activityList.innerHTML = '';
        const recentActivities = this.activityLog.slice(-10).reverse();

        recentActivities.forEach(activity => {
            const activityItem = document.createElement('div');
            activityItem.className = 'activity-item';
            
            let iconClass = 'fas fa-info-circle';
            let iconBg = '#3498db';
            
            switch(activity.type) {
                case 'success':
                    iconClass = 'fas fa-check-circle';
                    iconBg = '#2ecc71';
                    break;
                case 'error':
                    iconClass = 'fas fa-exclamation-circle';
                    iconBg = '#e74c3c';
                    break;
                case 'warning':
                    iconClass = 'fas fa-exclamation-triangle';
                    iconBg = '#f39c12';
                    break;
            }
            
            const date = new Date(activity.timestamp);
            const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const dateString = date.toLocaleDateString();
            
            activityItem.innerHTML = `
                <div class="activity-icon" style="background-color: ${iconBg};">
                    <i class="${iconClass}"></i>
                </div>
                <div class="activity-content">
                    <p>${activity.message}</p>
                    <span class="activity-time">${dateString} ${timeString}</span>
                </div>
            `;
            
            activityList.appendChild(activityItem);
        });
    }

    // Actualizar grid de estudiantes
    updateStudentsGrid() {
        const studentsGrid = document.getElementById('students-grid');
        if (!studentsGrid) return;

        studentsGrid.innerHTML = '';
        
        this.students.forEach(student => {
            const examsCount = this.exams.filter(e => e.studentId === student.id).length;
            const studentExams = this.exams.filter(e => e.studentId === student.id);
            const avgGrade = studentExams.length > 0 
                ? (studentExams.reduce((sum, exam) => sum + exam.grade, 0) / studentExams.length).toFixed(1)
                : 'N/A';
            
            const studentCard = document.createElement('div');
            studentCard.className = 'student-card';
            studentCard.innerHTML = `
                <div class="student-card-header">
                    <div class="student-name">${student.nombre} ${student.apellidos}</div>
                    <span class="student-role">${student.rol}</span>
                </div>
                <div class="student-card-body">
                    <div class="student-info">
                        <div class="student-info-item">
                            <i class="fas fa-envelope"></i>
                            <span>${student.email}</span>
                        </div>
                        <div class="student-info-item">
                            <i class="fas fa-phone"></i>
                            <span>${student.telefono || 'No especificado'}</span>
                        </div>
                        <div class="student-info-item">
                            <i class="fas fa-church"></i>
                            <span>${student.iglesia}</span>
                        </div>
                        <div class="student-info-item">
                            <i class="fas fa-graduation-cap"></i>
                            <span>Experiencia: ${student.experiencia}</span>
                        </div>
                    </div>
                    <div class="student-stats">
                        <div class="stat-exams">
                            <span class="stat-label">Exámenes</span>
                            <span class="stat-value">${examsCount}</span>
                        </div>
                        <div class="stat-grade">
                            <span class="stat-label">Promedio</span>
                            <span class="stat-value">${avgGrade}</span>
                        </div>
                    </div>
                    <div class="student-card-actions">
                        <button class="btn btn-primary btn-sm view-details" data-id="${student.id}">
                            <i class="fas fa-eye"></i> Detalles
                        </button>
                        <button class="btn btn-secondary btn-sm add-progress" data-id="${student.id}">
                            <i class="fas fa-plus"></i> Progreso
                        </button>
                    </div>
                </div>
            `;
            
            studentsGrid.appendChild(studentCard);
        });

        // Agregar event listeners a los botones
        document.querySelectorAll('.view-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const studentId = e.currentTarget.getAttribute('data-id');
                this.showSection('progress');
                document.getElementById('student-select').value = studentId;
                this.showStudentProgress(studentId);
            });
        });

        document.querySelectorAll('.add-progress').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const studentId = e.currentTarget.getAttribute('data-id');
                this.currentStudentId = studentId;
                this.showProgressModal();
            });
        });
    }

    // Filtrar estudiantes
    filterStudents(searchTerm) {
        const filtered = this.students.filter(student => {
            const fullName = `${student.nombre} ${student.apellidos}`.toLowerCase();
            const email = student.email.toLowerCase();
            return fullName.includes(searchTerm.toLowerCase()) || 
                   email.includes(searchTerm.toLowerCase());
        });
        
        this.displayFilteredStudents(filtered);
    }

    // Filtrar estudiantes por rol
    filterStudentsByRole(role) {
        if (role === 'all') {
            this.updateStudentsGrid();
            return;
        }
        
        const filtered = this.students.filter(student => student.rol === role);
        this.displayFilteredStudents(filtered);
    }

    // Mostrar estudiantes filtrados
    displayFilteredStudents(filteredStudents) {
        const studentsGrid = document.getElementById('students-grid');
        if (!studentsGrid) return;

        studentsGrid.innerHTML = '';
        
        filteredStudents.forEach(student => {
            // Mismo código que updateStudentsGrid pero solo para los filtrados
            const examsCount = this.exams.filter(e => e.studentId === student.id).length;
            const studentExams = this.exams.filter(e => e.studentId === student.id);
            const avgGrade = studentExams.length > 0 
                ? (studentExams.reduce((sum, exam) => sum + exam.grade, 0) / studentExams.length).toFixed(1)
                : 'N/A';
            
            const studentCard = document.createElement('div');
            studentCard.className = 'student-card';
            studentCard.innerHTML = `
                <div class="student-card-header">
                    <div class="student-name">${student.nombre} ${student.apellidos}</div>
                    <span class="student-role">${student.rol}</span>
                </div>
                <div class="student-card-body">
                    <div class="student-info">
                        <div class="student-info-item">
                            <i class="fas fa-envelope"></i>
                            <span>${student.email}</span>
                        </div>
                        <div class="student-info-item">
                            <i class="fas fa-phone"></i>
                            <span>${student.telefono || 'No especificado'}</span>
                        </div>
                        <div class="student-info-item">
                            <i class="fas fa-church"></i>
                            <span>${student.iglesia}</span>
                        </div>
                    </div>
                    <div class="student-stats">
                        <div class="stat-exams">
                            <span class="stat-label">Exámenes</span>
                            <span class="stat-value">${examsCount}</span>
                        </div>
                        <div class="stat-grade">
                            <span class="stat-label">Promedio</span>
                            <span class="stat-value">${avgGrade}</span>
                        </div>
                    </div>
                    <div class="student-card-actions">
                        <button class="btn btn-primary btn-sm view-details" data-id="${student.id}">
                            <i class="fas fa-eye"></i> Detalles
                        </button>
                        <button class="btn btn-secondary btn-sm add-progress" data-id="${student.id}">
                            <i class="fas fa-plus"></i> Progreso
                        </button>
                    </div>
                </div>
            `;
            
            studentsGrid.appendChild(studentCard);
        });

        // Agregar event listeners a los botones
        document.querySelectorAll('.view-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const studentId = e.currentTarget.getAttribute('data-id');
                this.showSection('progress');
                document.getElementById('student-select').value = studentId;
                this.showStudentProgress(studentId);
            });
        });

        document.querySelectorAll('.add-progress').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const studentId = e.currentTarget.getAttribute('data-id');
                this.currentStudentId = studentId;
                this.showProgressModal();
            });
        });
    }

    // Actualizar selector de estudiantes
    updateStudentSelect() {
        const studentSelect = document.getElementById('student-select');
        if (!studentSelect) return;

        studentSelect.innerHTML = '<option value="">Seleccione un estudiante...</option>';
        
        this.students.forEach(student => {
            const option = document.createElement('option');
            option.value = student.id;
            option.textContent = `${student.nombre} ${student.apellidos} (${student.rol})`;
            studentSelect.appendChild(option);
        });
    }

    // Mostrar progreso de estudiante
    showStudentProgress(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (!student) return;

        this.currentStudentId = studentId;
        
        const detailsContainer = document.getElementById('student-details');
        const progressActions = document.getElementById('progress-actions');
        const progressHistory = document.getElementById('progress-history');
        
        if (!detailsContainer || !progressActions || !progressHistory) return;

        // Calcular estadísticas
        const studentExams = this.exams.filter(e => e.studentId === studentId);
        const examsCount = studentExams.length;
        const avgGrade = examsCount > 0 
            ? (studentExams.reduce((sum, exam) => sum + exam.grade, 0) / examsCount).toFixed(1)
            : 'No hay exámenes';
        
        const progressCount = student.progreso.length;
        const recentProgress = student.progreso.slice(-5).reverse();

        // Mostrar detalles del estudiante
        detailsContainer.innerHTML = `
            <div class="details-header">
                <div class="details-title">
                    <h3>${student.nombre} ${student.apellidos}</h3>
                    <p>ID: ${student.id} | Inscrito: ${student.fechaInscripcion}</p>
                </div>
                <div class="details-status">
                    <span class="status-badge ${student.activo ? 'active' : ''}">
                        ${student.activo ? 'Activo' : 'Inactivo'}
                    </span>
                    <span class="status-badge pastor">${student.rol}</span>
                </div>
            </div>
            <div class="details-grid">
                <div class="details-section">
                    <h4><i class="fas fa-user"></i> Información Personal</h4>
                    <ul class="details-list">
                        <li><strong>Email:</strong> ${student.email}</li>
                        <li><strong>Teléfono:</strong> ${student.telefono || 'No especificado'}</li>
                        <li><strong>Dirección:</strong> ${student.direccion || 'No especificado'}</li>
                    </ul>
                </div>
                <div class="details-section">
                    <h4><i class="fas fa-church"></i> Información Eclesial</h4>
                    <ul class="details-list">
                        <li><strong>Denominación:</strong> ${student.denominacion}</li>
                        <li><strong>Iglesia:</strong> ${student.iglesia}</li>
                        <li><strong>Pastor:</strong> ${student.pastor}</li>
                        <li><strong>Referido por:</strong> ${student.referido}</li>
                    </ul>
                </div>
                <div class="details-section">
                    <h4><i class="fas fa-graduation-cap"></i> Información Académica</h4>
                    <ul class="details-list">
                        <li><strong>Experiencia:</strong> ${student.experiencia}</li>
                        <li><strong>Motivación:</strong> ${student.motivacion}</li>
                        <li><strong>Compromiso:</strong> ${student.compromiso}</li>
                        <li><strong>Exámenes:</strong> ${examsCount} (Promedio: ${avgGrade})</li>
                        <li><strong>Registros:</strong> ${progressCount}</li>
                    </ul>
                </div>
            </div>
        `;

        // Mostrar acciones
        progressActions.style.display = 'flex';

        // Mostrar historial de progreso
        if (student.progreso.length > 0) {
            let progressHTML = `
                <h4><i class="fas fa-history"></i> Historial de Progreso</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Tipo</th>
                            <th>Descripción</th>
                            <th>Calificación</th>
                            <th>Estado</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            recentProgress.forEach(progress => {
                const date = new Date(progress.fecha);
                const dateString = date.toLocaleDateString();
                
                progressHTML += `
                    <tr>
                        <td>${dateString}</td>
                        <td>${progress.tipo}</td>
                        <td>${progress.descripcion}</td>
                        <td>${progress.nota !== null ? progress.nota : 'N/A'}</td>
                        <td>${progress.estado}</td>
                        <td>${progress.observaciones || ''}</td>
                    </tr>
                `;
            });
            
            progressHTML += `
                    </tbody>
                </table>
            `;
            
            progressHistory.innerHTML = progressHTML;
        } else {
            progressHistory.innerHTML = '<p>No hay registros de progreso para este estudiante.</p>';
        }

        // Mostrar notas del profesor
        if (student.notas && student.notas.length > 0) {
            const notesSection = document.createElement('div');
            notesSection.className = 'details-section';
            notesSection.innerHTML = `
                <h4><i class="fas fa-sticky-note"></i> Notas del Profesor</h4>
                <div class="notes-container">
                    ${student.notas.map(note => `
                        <div class="note-item">
                            <strong>${new Date(note.fecha).toLocaleDateString()}:</strong> ${note.contenido}
                        </div>
                    `).join('')}
                </div>
            `;
            detailsContainer.appendChild(notesSection);
        }
    }

    // Mostrar modal de progreso
    showProgressModal() {
        if (!this.currentStudentId) {
            this.showToast('Seleccione un estudiante primero', 'warning');
            return;
        }

        document.getElementById('modal-overlay').style.display = 'block';
        document.getElementById('progress-modal').style.display = 'block';
        document.getElementById('modal-title').textContent = 'Añadir Registro de Progreso';
        document.getElementById('progress-form').reset();
    }

    // Mostrar modal de nota
    showNoteModal() {
        if (!this.currentStudentId) {
            this.showToast('Seleccione un estudiante primero', 'warning');
            return;
        }

        // Para simplificar, usamos el mismo modal pero con diferentes campos
        document.getElementById('modal-overlay').style.display = 'block';
        document.getElementById('progress-modal').style.display = 'block';
        document.getElementById('modal-title').textContent = 'Añadir Nota del Profesor';
        
        const form = document.getElementById('progress-form');
        form.innerHTML = `
            <div class="form-group">
                <label for="note-content">Nota *</label>
                <textarea id="note-content" rows="4" required></textarea>
            </div>
            <div class="modal-actions">
                <button type="submit" class="btn btn-primary">Guardar Nota</button>
                <button type="button" class="btn btn-secondary modal-close">Cancelar</button>
            </div>
        `;
        
        // Remover el listener anterior y agregar uno nuevo
        form.onsubmit = (e) => {
            e.preventDefault();
            this.saveNote();
        };
    }

    // Guardar progreso
    saveProgress() {
        const student = this.students.find(s => s.id === this.currentStudentId);
        if (!student) return;

        const progressType = document.getElementById('progress-type').value;
        const description = document.getElementById('progress-description').value;
        const grade = document.getElementById('progress-grade').value;
        const status = document.getElementById('progress-status').value;
        const observations = document.getElementById('progress-observations').value;

        const newProgress = {
            id: Date.now(),
            tipo: progressType,
            descripcion: description,
            nota: grade ? parseFloat(grade) : null,
            estado: status,
            observaciones: observations,
            fecha: new Date().toISOString().split('T')[0]
        };

        student.progreso.push(newProgress);
        this.saveToStorage();
        this.hideModals();
        this.showStudentProgress(this.currentStudentId);
        this.showToast('Registro de progreso guardado exitosamente', 'success');
        this.logActivity(`Registro de progreso añadido para ${student.nombre} ${student.apellidos}`, 'success');
    }

    // Guardar nota
    saveNote() {
        const student = this.students.find(s => s.id === this.currentStudentId);
        if (!student) return;

        const noteContent = document.getElementById('note-content').value;

        if (!student.notas) {
            student.notas = [];
        }

        student.notas.push({
            id: Date.now(),
            contenido: noteContent,
            fecha: new Date().toISOString()
        });

        this.saveToStorage();
        this.hideModals();
        this.showStudentProgress(this.currentStudentId);
        this.showToast('Nota guardada exitosamente', 'success');
        this.logActivity(`Nota añadida para ${student.nombre} ${student.apellidos}`, 'success');
    }

    // Mostrar modal de examen
    showExamModal() {
        document.getElementById('modal-overlay').style.display = 'block';
        document.getElementById('exam-modal').style.display = 'block';
        document.getElementById('exam-form').reset();
        
        // Actualizar selectores
        const studentSelect = document.getElementById('exam-student');
        studentSelect.innerHTML = '<option value="">Seleccione estudiante</option>';
        this.students.forEach(student => {
            const option = document.createElement('option');
            option.value = student.id;
            option.textContent = `${student.nombre} ${student.apellidos}`;
            studentSelect.appendChild(option);
        });
        
        const weekSelect = document.getElementById('exam-week');
        weekSelect.innerHTML = '<option value="">Seleccione semana</option>';
        this.weeks.forEach(week => {
            const option = document.createElement('option');
            option.value = week.number;
            option.textContent = `Semana ${week.number}: ${week.topic}`;
            weekSelect.appendChild(option);
        });
        
        // Establecer fecha actual por defecto
        document.getElementById('exam-date').value = new Date().toISOString().split('T')[0];
    }

    // Guardar examen
    saveExam() {
        const studentId = document.getElementById('exam-student').value;
        const week = parseInt(document.getElementById('exam-week').value);
        const examType = document.getElementById('exam-type').value;
        const grade = parseFloat(document.getElementById('exam-grade').value);
        const date = document.getElementById('exam-date').value;
        const notes = document.getElementById('exam-notes').value;

        const student = this.students.find(s => s.id === studentId);
        if (!student) {
            this.showToast('Estudiante no encontrado', 'error');
            return;
        }

        const newExam = {
            id: `EXAM-${Date.now()}`,
            studentId: studentId,
            semana: week,
            examen: examType,
            grade: grade,
            date: date,
            notes: notes,
            fechaRegistro: new Date().toISOString()
        };

        this.exams.push(newExam);
        this.saveToStorage();
        this.hideModals();
        this.updateExamsTable();
        this.updateStats();
        this.showToast('Examen registrado exitosamente', 'success');
        this.logActivity(`Examen registrado para ${student.nombre} ${student.apellidos}: ${grade}`, 'success');
    }

    // Actualizar tabla de exámenes
    updateExamsTable() {
        const tableBody = document.getElementById('exams-table-body');
        if (!tableBody) return;

        tableBody.innerHTML = '';

        const studentFilter = document.getElementById('exam-student-filter').value;
        const weekFilter = document.getElementById('exam-week-filter').value;

        let filteredExams = this.exams;
        
        if (studentFilter !== 'all') {
            filteredExams = filteredExams.filter(exam => exam.studentId === studentFilter);
        }
        
        if (weekFilter !== 'all') {
            filteredExams = filteredExams.filter(exam => exam.semana === parseInt(weekFilter));
        }

        filteredExams.forEach(exam => {
            const student = this.students.find(s => s.id === exam.studentId);
            if (!student) return;

            const status = exam.grade >= 70 ? 'passed' : exam.grade >= 60 ? 'pending' : 'failed';
            const statusText = exam.grade >= 70 ? 'Aprobado' : exam.grade >= 60 ? 'Pendiente' : 'Reprobado';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.nombre} ${student.apellidos}</td>
                <td>${exam.semana}</td>
                <td>${exam.examen}</td>
                <td>${exam.grade.toFixed(1)}</td>
                <td><span class="status-exam ${status}">${statusText}</span></td>
                <td>${exam.date}</td>
                <td>
                    <button class="btn btn-danger btn-sm delete-exam" data-id="${exam.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            
            tableBody.appendChild(row);
        });

        // Agregar event listeners a los botones de eliminar
        document.querySelectorAll('.delete-exam').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const examId = e.currentTarget.getAttribute('data-id');
                if (confirm('¿Está seguro de eliminar este examen?')) {
                    this.deleteExam(examId);
                }
            });
        });
    }

    // Actualizar filtros de exámenes
    updateExamFilters() {
        const studentFilter = document.getElementById('exam-student-filter');
        const weekFilter = document.getElementById('exam-week-filter');

        if (studentFilter) {
            studentFilter.innerHTML = '<option value="all">Todos los estudiantes</option>';
            this.students.forEach(student => {
                const option = document.createElement('option');
                option.value = student.id;
                option.textContent = `${student.nombre} ${student.apellidos}`;
                studentFilter.appendChild(option);
            });
        }

        if (weekFilter) {
            weekFilter.innerHTML = '<option value="all">Todas las semanas</option>';
            for (let i = 1; i <= 29; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = `Semana ${i}`;
                weekFilter.appendChild(option);
            }
        }
    }

    // Eliminar examen
    deleteExam(examId) {
        const index = this.exams.findIndex(exam => exam.id === examId);
        if (index !== -1) {
            this.exams.splice(index, 1);
            this.saveToStorage();
            this.updateExamsTable();
            this.updateStats();
            this.showToast('Examen eliminado exitosamente', 'success');
            this.logActivity('Examen eliminado del sistema', 'warning');
        }
    }

    // Ocultar modales
    hideModals() {
        document.getElementById('modal-overlay').style.display = 'none';
        document.getElementById('progress-modal').style.display = 'none';
        document.getElementById('exam-modal').style.display = 'none';
        
        // Restaurar formulario de progreso si fue modificado para notas
        const progressForm = document.getElementById('progress-form');
        progressForm.innerHTML = `
            <div class="form-group">
                <label for="progress-type">Tipo de Registro *</label>
                <select id="progress-type" required>
                    <option value="">Seleccione tipo</option>
                    <option value="Asistencia">Asistencia</option>
                    <option value="Participación">Participación</option>
                    <option value="Tarea">Tarea</option>
                    <option value="Evaluación">Evaluación</option>
                    <option value="Proyecto">Proyecto</option>
                    <option value="Examen">Examen</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="progress-description">Descripción *</label>
                <input type="text" id="progress-description" required>
            </div>
            
            <div class="form-group">
                <label for="progress-grade">Calificación (0-100)</label>
                <input type="number" id="progress-grade" min="0" max="100" step="0.1">
            </div>
            
            <div class="form-group">
                <label for="progress-status">Estado *</label>
                <select id="progress-status" required>
                    <option value="">Seleccione estado</option>
                    <option value="Completado">Completado</option>
                    <option value="En progreso">En progreso</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Necesita mejorar">Necesita mejorar</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="progress-observations">Observaciones</label>
                <textarea id="progress-observations" rows="3"></textarea>
            </div>
            
            <div class="modal-actions">
                <button type="submit" class="btn btn-primary">Guardar</button>
                <button type="button" class="btn btn-secondary modal-close">Cancelar</button>
            </div>
        `;
        
        // Restaurar el event listener original
        progressForm.onsubmit = (e) => {
            e.preventDefault();
            this.saveProgress();
        };
    }

    // Añadir nuevo estudiante
    addNewStudent() {
        // Validar email único
        const email = document.getElementById('email').value;
        if (this.students.some(s => s.email === email)) {
            this.showToast('Este email ya está registrado', 'error');
            return;
        }

        // Generar ID
        const lastId = this.students.length > 0 
            ? Math.max(...this.students.map(s => parseInt(s.id.split('-')[1])))
            : 0;
        const newId = `EST-${(lastId + 1).toString().padStart(3, '0')}`;

        const newStudent = {
            id: newId,
            nombre: document.getElementById('nombre').value,
            apellidos: document.getElementById('apellidos').value,
            email: email,
            telefono: document.getElementById('telefono').value,
            direccion: document.getElementById('direccion').value,
            rol: document.getElementById('rol').value,
            denominacion: document.getElementById('denominacion').value,
            iglesia: document.getElementById('iglesia').value,
            pastor: document.getElementById('pastor').value,
            experiencia: document.getElementById('experiencia').value,
            motivacion: document.getElementById('motivacion').value,
            compromiso: document.getElementById('compromiso').value,
            referido: document.getElementById('referido').value,
            fechaInscripcion: new Date().toISOString().split('T')[0].replace(/-/g, '/'),
            activo: true,
            progreso: [
                {
                    id: Date.now(),
                    tipo: "Inscripción",
                    descripcion: "Nuevo estudiante registrado en el sistema",
                    nota: null,
                    estado: "Completado",
                    observaciones: "",
                    fecha: new Date().toISOString().split('T')[0]
                }
            ],
            notas: []
        };

        this.students.push(newStudent);
        this.saveToStorage();
        document.getElementById('new-student-form').reset();
        this.updateUI();
        this.showToast('Estudiante registrado exitosamente', 'success');
        this.logActivity(`Nuevo estudiante registrado: ${newStudent.nombre} ${newStudent.apellidos}`, 'success');
    }

    // Exportar a CSV
    exportToCSV() {
        let csvContent = "data:text/csv;charset=utf-8,";
        
        // Cabecera
        csvContent += "ID,Nombre,Apellidos,Email,Teléfono,Rol,Denominación,Iglesia,Experiencia,Compromiso,Promedio\n";
        
        // Datos
        this.students.forEach(student => {
            const studentExams = this.exams.filter(e => e.studentId === student.id);
            const avgGrade = studentExams.length > 0 
                ? (studentExams.reduce((sum, exam) => sum + exam.grade, 0) / studentExams.length).toFixed(1)
                : 'N/A';
            
            const row = [
                student.id,
                student.nombre,
                student.apellidos,
                student.email,
                student.telefono,
                student.rol,
                student.denominacion,
                student.iglesia,
                student.experiencia,
                student.compromiso,
                avgGrade
            ].map(field => `"${field}"`).join(',');
            
            csvContent += row + "\n";
        });
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "estudiantes_griego.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        this.showToast('Datos exportados a CSV exitosamente', 'success');
        this.logActivity('Datos exportados a formato CSV', 'info');
    }

    // Exportar a Excel (simulado con CSV)
    exportToExcel() {
        // En una implementación real, se usaría una biblioteca como SheetJS
        // Por ahora, exportamos como CSV con extensión .xlsx
        this.exportToCSV();
        this.showToast('Para exportación completa a Excel, se requiere biblioteca adicional', 'info');
    }

    // Exportar a PDF (simulado)
    exportToPDF() {
        // En una implementación real, se usaría una biblioteca como jsPDF
        this.showToast('Para exportación a PDF, se requiere biblioteca adicional', 'info');
    }

    // Exportar a JSON
    exportToJSON() {
        const data = {
            students: this.students,
            exams: this.exams,
            activityLog: this.activityLog,
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `backup_grieko_${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        this.showToast('Backup creado exitosamente', 'success');
        this.logActivity('Backup del sistema creado', 'info');
    }

    // Importar desde JSON
    importFromJSON(file) {
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                
                if (confirm('¿Está seguro de importar estos datos? Se sobrescribirán los datos actuales.')) {
                    this.students = data.students || [];
                    this.exams = data.exams || [];
                    this.activityLog = data.activityLog || [];
                    this.saveToStorage();
                    this.updateUI();
                    this.showToast('Datos importados exitosamente', 'success');
                    this.logActivity('Datos importados desde archivo JSON', 'info');
                }
            } catch (error) {
                this.showToast('Error al importar archivo: formato inválido', 'error');
            }
        };
        reader.readAsText(file);
        
        // Actualizar nombre del archivo
        document.getElementById('import-filename').textContent = file.name;
    }

    // Mostrar notificación toast
    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            </div>
            <div class="toast-content">
                <p>${message}</p>
            </div>
            <button class="toast-close">&times;</button>
        `;

        toastContainer.appendChild(toast);

        // Auto-remover después de 5 segundos
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 5000);

        // Cerrar manualmente
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        });
    }
}

// Inicializar la aplicación cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    window.studentManager = new StudentManager();
});