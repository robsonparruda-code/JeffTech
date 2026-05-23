export const WA_NUMBER = "5581995421078";
export const WA_LINK = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const HERO_SLIDES = [
  {
    eyebrow: "01 · Assistência técnica em Paulista, PE",
    title: ["Tecnologia que ", "funciona —", "\nconfiança que dura."],
    sub: "Mais de 25 anos cuidando do desempenho, da segurança e da vida útil de notebooks e desktops, com diagnóstico transparente e atendimento humano.",
    src: "/assets/jefftech-logo.png",
    alt: "Logomarca da JeffTech Informática",
    variant: "logo",
  },
  {
    eyebrow: "02 · Diagnóstico antes do orçamento",
    title: ["Você só aprova\nquando entende ", "o quê", ",\npor ", "quê", " e por ", "quanto", "."],
    sub: "Avaliamos o equipamento, explicamos a causa do problema e só iniciamos o reparo após sua aprovação. Sem surpresas no fim do atendimento.",
    src: "/assets/hero-02-diagnostico.png",
    alt: "Mãos anotando o diagnóstico em um tablet ao lado de um notebook aberto na bancada",
  },
  {
    eyebrow: "03 · Upgrades que valem o investimento",
    title: ["SSD, memória, limpeza —\n", "desempenho", " em vez\nde equipamento novo."],
    sub: "Antes de trocar o computador, descubra o quanto ele ainda pode entregar. Upgrades com peças confiáveis e ganho real de velocidade.",
    src: "/assets/hero-03-upgrade.png",
    alt: "Close-up das mãos instalando um SSD M.2 e memória RAM em uma placa-mãe de notebook",
  },
];

export const DIFFS = [
  { icon: "handshake", title: "Atendimento personalizado", body: "Cada equipamento e cada cliente recebem atenção dedicada — não somos uma esteira." },
  { icon: "eye",       title: "Diagnóstico transparente", body: "Você entende o que está acontecendo antes de aprovar qualquer reparo ou troca." },
  { icon: "award",     title: "25+ anos de bancada",      body: "Experiência prática em hardware e software que evita retrabalho e desperdício." },
  { icon: "shield",    title: "Cuidado com seus dados",   body: "Backup orientado antes da formatação e tratamento sigiloso de arquivos pessoais." },
  { icon: "clock",     title: "Prazo combinado, prazo cumprido", body: "Estimativa realista após o diagnóstico — e atualizações durante o serviço." },
  { icon: "truck",     title: "Busca e entrega",          body: "Comodidade real: combinamos retirada e devolução do equipamento via moto Uber." },
];

export const SERVICES = [
  {
    id: "manutencao",
    tab: "Manutenção & Reparo",
    title: "Manutenção preventiva e corretiva",
    lead: "Identificamos falhas em hardware, fazemos limpeza interna completa, trocamos peças com qualidade comprovada e devolvemos o equipamento estável e silencioso.",
    features: [
      "Limpeza interna + troca de pasta térmica",
      "Reparo em hardware (placa-mãe, fonte, tela, teclado, dobradiças)",
      "Diagnóstico de falhas intermitentes e superaquecimento",
      "Substituição de peças com garantia de procedência",
    ],
    extras: [
      ["Diagnóstico completo", "incluso"],
      ["Limpeza interna", "preventiva"],
      ["Troca de peças", "sob aprovação"],
      ["Teste final", "antes da entrega"],
    ],
  },
  {
    id: "upgrade",
    tab: "Upgrade de Desempenho",
    title: "SSD, memória e otimização",
    lead: "Antes de trocar o computador, descubra o quanto ele ainda pode render. Upgrades direcionados que entregam ganho real de velocidade, com custo-benefício honesto.",
    features: [
      "Instalação de SSD (M.2 NVMe ou SATA) com clonagem do sistema",
      "Aumento de memória RAM dimensionado ao uso real",
      "Reinstalação otimizada do sistema operacional",
      "Boot, abertura de programas e renderização visivelmente mais rápidos",
    ],
    extras: [
      ["SSD", "ganho até 8×"],
      ["RAM", "dimensionada ao uso"],
      ["Clonagem", "sem perder dados"],
      ["Avaliação prévia", "sem custo"],
    ],
  },
  {
    id: "software",
    tab: "Software & Sistema",
    title: "Formatação, vírus e otimização",
    lead: "Instalação limpa do sistema, remoção de vírus e malware, configuração de programas essenciais e ajuste fino para que o computador volte a iniciar e responder como novo.",
    features: [
      "Formatação completa com configuração personalizada",
      "Remoção de vírus, malware, adware e ransomware",
      "Instalação de programas legítimos (Office, navegadores, drivers)",
      "Otimização de inicialização e desempenho geral",
    ],
    extras: [
      ["Formatação", "Windows / Linux"],
      ["Drivers", "atualizados"],
      ["Antivírus", "configurado"],
      ["Boot rápido", "incluso"],
    ],
  },
  {
    id: "dados",
    tab: "Dados & Segurança",
    title: "Backup e recuperação de arquivos",
    lead: "Atuamos com sigilo total e orientamos o backup antes de qualquer formatação. Quando o problema é HD ou SSD danificado, buscamos a melhor rota de recuperação possível.",
    features: [
      "Backup orientado antes de formatações e upgrades",
      "Tentativa de recuperação em HDs e SSDs com falha lógica",
      "Organização e migração de arquivos para novo equipamento",
      "Sigilo total: nada é compartilhado, nada é mantido após a entrega",
    ],
    extras: [
      ["Backup", "orientado"],
      ["Recuperação", "casos viáveis"],
      ["Sigilo", "total"],
      ["Migração", "para novo PC"],
    ],
  },
  {
    id: "empresas",
    tab: "Suporte Empresarial",
    title: "Suporte para empresas e profissionais",
    lead: "Manutenção de parque, padronização de máquinas, planos de prevenção e atendimento prioritário para times que não podem parar. Atendemos do consultório à pequena indústria.",
    features: [
      "Atendimento prioritário com prazo combinado",
      "Manutenção preventiva agendada (mensal / trimestral)",
      "Padronização de configurações e softwares por equipe",
      "Consultoria técnica antes de novas aquisições",
    ],
    extras: [
      ["Atendimento", "prioritário"],
      ["Plano preventivo", "sob medida"],
      ["Consultoria", "técnica"],
      ["Cobertura", "Paulista + RMR"],
    ],
  },
];

export const PROCESS_STEPS = [
  { title: "Atendimento",       body: "Conversamos para entender o problema e os sinais que o equipamento apresenta." },
  { title: "Diagnóstico",       body: "Análise técnica detalhada para encontrar a causa real, não só o sintoma." },
  { title: "Orçamento aprovado",body: "Você recebe escopo, prazo e custo. O serviço só começa após o seu OK." },
  { title: "Execução cuidadosa",body: "Reparo, upgrade ou formatação feitos com atenção a cada detalhe e peça." },
  { title: "Testes + entrega",  body: "Bateria de testes garante estabilidade, desempenho e segurança antes da devolução." },
];

export const TESTI = [
  {
    quote: "Meu notebook estava insuportável de lento. Em dois dias o Jeff resolveu, instalou SSD e a máquina virou outra. Atendimento direto, sem enrolação, preço justo.",
    name: "Marcos Vinícius",
    role: "Designer freelancer · Paulista, PE",
    tag: "SSD + reinstalação",
    initials: "MV",
  },
  {
    quote: "Atendemos o consultório com três computadores parando o tempo todo. A JeffTech criou uma rotina de manutenção e simplesmente os problemas pararam de aparecer.",
    name: "Dra. Camila Borges",
    role: "Clínica odontológica · Olinda, PE",
    tag: "Suporte empresarial",
    initials: "CB",
  },
  {
    quote: "Perdi acesso aos arquivos da empresa depois de um vírus. O Jeff recuperou tudo, formatou direito e ainda me orientou sobre backup. Profissional de confiança.",
    name: "Ricardo Albuquerque",
    role: "Contador autônomo · Recife, PE",
    tag: "Recuperação de dados",
    initials: "RA",
  },
  {
    quote: "Já indiquei para meio mundo. Diagnóstico honesto, sem empurrar serviço, e o computador volta funcionando como o primeiro dia. Vale cada centavo.",
    name: "Luana Pereira",
    role: "Professora · Paulista, PE",
    tag: "Manutenção completa",
    initials: "LP",
  },
];

export const FAQS = [
  { q: "Quais tipos de equipamentos a JeffTech atende?", a: "Atendemos notebooks e desktops de todas as marcas, lidando com problemas de hardware, software, lentidão, vírus, upgrades e manutenção preventiva." },
  { q: "A JeffTech faz formatação e backup de arquivos?", a: "Sim. Realizamos formatação completa, instalação de sistemas e programas, além de backup e recuperação de arquivos importantes sempre que possível, com sigilo total." },
  { q: "Quanto tempo demora para o equipamento ficar pronto?", a: "O prazo varia conforme o tipo de problema e do serviço necessário. Após o diagnóstico técnico, informamos o tempo estimado para conclusão — e cumprimos." },
  { q: "A JeffTech faz busca e entrega de equipamentos?", a: "Sim. A retirada e devolução podem ser combinadas via moto Uber, oferecendo mais comodidade sem que você precise sair de casa ou da empresa." },
  { q: "Vale a pena fazer upgrade em vez de comprar outro computador?", a: "Em muitos casos, sim. Upgrades como SSD e mais memória RAM melhoram bastante o desempenho com ótimo custo-benefício. Fazemos a avaliação honesta antes de recomendar." },
  { q: "Como funciona o orçamento?", a: "Você só paga após aprovar. Fazemos o diagnóstico, explicamos o que foi encontrado e enviamos o orçamento. O serviço só começa após sua autorização." },
];
