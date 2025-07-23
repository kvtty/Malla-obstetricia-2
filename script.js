let ramosEstado = {};

function crearMalla(estructura) {
  const malla = document.getElementById("malla");

  for (let s in estructura.semestres) {
    const semDiv = document.createElement("div");
    semDiv.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${s}`;
    semDiv.appendChild(titulo);

    estructura.semestres[s].forEach((ramo) => {
      const div = document.createElement("div");
      div.className = "ramo bloqueado";
      div.textContent = ramo.nombre;
      div.dataset.nombre = ramo.nombre;
      semDiv.appendChild(div);

      ramosEstado[ramo.nombre] = {
        aprobado: false,
        desbloqueado: estructura.prerrequisitos[ramo.nombre]?.length ? false : true,
        element: div,
        prerrequisitos: estructura.prerrequisitos[ramo.nombre] || [],
        desbloquea: ramo.desbloquea
      };

      div.addEventListener("click", () => toggleRamo(ramo.nombre));
    });

    malla.appendChild(semDiv);
  }

  actualizarColores();
}

function toggleRamo(nombre) {
  const ramo = ramosEstado[nombre];

  if (!ramo.desbloqueado) return;

  ramo.aprobado = !ramo.aprobado;

  for (let desbloqueado of ramo.desbloquea) {
    const otrosPrerreq = ramosEstado[desbloqueado].prerrequisitos;
    const todosAprobados = otrosPrerreq.every((r) => ramosEstado[r]?.aprobado);
    ramosEstado[desbloqueado].desbloqueado = todosAprobados;
  }

  actualizarColores();
}

function actualizarColores() {
  for (let nombre in ramosEstado) {
    const ramo = ramosEstado[nombre];
    const el = ramo.element;
    el.classList.remove("aprobado", "bloqueado");

    if (ramo.aprobado) {
      el.classList.add("aprobado");
    } else if (!ramo.desbloqueado) {
      el.classList.add("bloqueado");
    }
  }
}

crearMalla(estructura);
