const estructura = {
  semestres: {
    "1": [
      {
        nombre: "Biología Celular e Histología",
        desbloquea: ["Fisiología General", "Microbiología y Parasitología"]
      },
      {
        nombre: "Anatomía General",
        desbloquea: ["Anatomía Aplicada a la Matronería", "Fundamentos de Enfermería"]
      },
      {
        nombre: "Química y Bioquímica",
        desbloquea: ["Farmacología"]
      },
      {
        nombre: "Matemáticas",
        desbloquea: ["Fundamentos de Enfermería"]
      },
      {
        nombre: "Introducción a la Matronería",
        desbloquea: ["Psicología General y del Desarrollo"]
      },
      {
        nombre: "Electivo de Comunicación",
        desbloquea: ["Electivo de Desarrollo del Pensamiento"]
      }
    ],
    "2": [
      {
        nombre: "Fisiología General",
        desbloquea: ["Fisiopatología", "Enfermería Médico Quirúrgico"]
      },
      {
        nombre: "Anatomía Aplicada a la Matronería",
        desbloquea: ["Embriología y Genética"]
      },
      {
        nombre: "Microbiología y Parasitología",
        desbloquea: ["Bioestadística"]
      },
      {
        nombre: "Psicología General y del Desarrollo",
        desbloquea: []
      },
      {
        nombre: "Fundamentos de Enfermería",
        desbloquea: ["Educación para Salud", "Enfermería Médico Quirúrgico"]
      },
      {
        nombre: "Electivo de Desarrollo del Pensamiento",
        desbloquea: ["Electivo de Comunicación"]
      }
    ]
  },
  prerrequisitos: {
    "Fisiología General": ["Biología Celular e Histología"],
    "Microbiología y Parasitología": ["Biología Celular e Histología"],
    "Anatomía Aplicada a la Matronería": ["Anatomía General"],
    "Farmacología": ["Química y Bioquímica"],
    "Psicología General y del Desarrollo": ["Introducción a la Matronería"],
    "Fundamentos de Enfermería": ["Anatomía General", "Matemáticas"],
    "Electivo de Desarrollo del Pensamiento": ["Electivo de Comunicación"],
    "Fisiopatología": ["Fisiología General"],
    "Enfermería Médico Quirúrgico": ["Fisiología General", "Fundamentos de Enfermería"],
    "Embriología y Genética": ["Anatomía Aplicada a la Matronería"],
    "Bioestadística": ["Microbiología y Parasitología"],
    "Educación para Salud": ["Fundamentos de Enfermería"],
    "Electivo de Comunicación": ["Electivo de Desarrollo del Pensamiento"]
  }
};
