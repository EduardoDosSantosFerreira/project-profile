function escrevendoLetra() {
  function ativaLetra(elemento: HTMLElement) {
    const arrTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }

  const titulo = document.querySelector(".digitando") as HTMLElement;
  ativaLetra(titulo);
}

function ativacaoMenu() {
  const ativaMenu = document.querySelector(".fa-bars") as HTMLElement;
  const navMenu = document.querySelector("header .navegacao-primaria") as HTMLElement;

  ativaMenu.addEventListener("click", () => {
    ativaMenu.classList.toggle("fa-x");
    navMenu.classList.toggle("ativado");
  });
}

ativacaoMenu();

function sobreMim() {
  const experiencia = document.querySelectorAll(".experience_content div") as NodeListOf<HTMLElement>;
  const botao = document.querySelectorAll(".experience_content ul li") as NodeListOf<HTMLElement>;
  const education = document.querySelectorAll(".education_content div") as NodeListOf<HTMLElement>;
  const botaoEducation = document.querySelectorAll(".education_content ul li") as NodeListOf<HTMLElement>;

  experiencia[0].classList.add("ativo");
  botao[0].classList.add("ativo");
  education[0].classList.add("ativo");
  botaoEducation[0].classList.add("ativo");

  function slideShow(index: number) {
    experiencia.forEach((divisao) => {
      divisao.classList.remove("ativo");
    });
    botao.forEach((item) => {
      item.classList.remove("ativo");
    });
    experiencia[index].classList.add("ativo");
    botao[index].classList.add("ativo");
  }

  function slideShow2(index: number) {
    education.forEach((divisao) => {
      divisao.classList.remove("ativo");
    });
    botaoEducation.forEach((item) => {
      item.classList.remove("ativo");
    });
    education[index].classList.add("ativo");
    botaoEducation[index].classList.add("ativo");
  }

  botao.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShow(index);
    });
  });

  botaoEducation.forEach((div, index) => {
    div.addEventListener("click", () => {
      slideShow2(index);
    });
  });
}

sobreMim();

const listaALL = document.querySelectorAll(".projects_armazenamento ul li") as NodeListOf<HTMLElement>;
const buttonGeral = document.querySelectorAll(".project_navegacao li") as NodeListOf<HTMLElement>;
const buttonALL = document.querySelector(".project_models .all") as HTMLElement;

listaALL.forEach((item) => {
  item.classList.add("ativo");
});

function removeClick(index: number) {
  buttonGeral.forEach((item) => {
    item.classList.remove("ativo");
  });
  buttonGeral[index].classList.add("ativo");
}

buttonGeral.forEach((event, index) => {
  event.addEventListener("click", () => {
    removeClick(index);
  });
});

function showLista(lista: NodeListOf<HTMLElement>, buttom: string = "all") {
  lista.forEach((item) => {
    item.classList.remove("ativo");
  });

  if (buttom == "design") {
    lista[0].classList.add("ativo");
    lista[1].classList.add("ativo");
  }
  if (buttom == "graphic") {
    lista[2].classList.add("ativo");
    lista[3].classList.add("ativo");
  }

  if (buttom == "website") {
    lista[4].classList.add("ativo");
    lista[5].classList.add("ativo");
    lista[6].classList.add("ativo");
    lista[7].classList.add("ativo");
  }

  if (buttom == "all") {
    lista[0].classList.add("ativo");
    lista[1].classList.add("ativo");
    lista[2].classList.add("ativo");
    lista[3].classList.add("ativo");
    lista[4].classList.add("ativo");
    lista[5].classList.add("ativo");
    lista[6].classList.add("ativo");
    lista[7].classList.add("ativo");
  }
}

buttonGeral.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeClick(index);
  });
});

const toTop = document.querySelector(".to-top") as HTMLElement;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
