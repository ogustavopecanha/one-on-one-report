const DORES = [
  {d: "Falta de Processo de Vendas", q: 3, desc: "Nao ha um playbook ou guia de como conduzir as calls de diagnostico."},
  {d: "Indefinicao de Produto/Ticket", q: 3, desc: "As vendedoras nao sabem exatamente o que estao vendendo ou por quanto."},
  {d: "Desalinhamento da Lideranca", q: 3, desc: "Instrucoes conflitantes entre Duarte e Pecanha geram inseguranca."},
  {d: "Opacidade nas Comissoes", q: 2, desc: "Falta de clareza sobre como e quando os bonus sao calculados."},
  {d: "Baixa Qualidade dos Leads", q: 2, desc: "Muitos leads frios que nao condizem com a urgencia de fechamento."}
  ];

const RISCOS = [
  {n: "Taise", c: "amber", r: "Medio", d: "Pilar do time, mas sente-se sobrecarregada e sem suporte estrategico."},
  {n: "Andressa", c: "green", r: "Baixo", d: "Muito leal e esforcada, mas precisa de clareza para performar melhor."},
  {n: "Leticia", c: "red", r: "Alto", d: "Sente a falta de estrutura e pode ser atraida por propostas mais solidas."}
  ];

const V = [
  {
            nome: "Taise", cargo: "Senior SDR / Closer", st: "amber", stL: "Atencao",
            auto: "Sente que faz milagre com as ferramentas que tem. Leal, mas exausta pela falta de definicao de produto.",
            fortes: ["Dominio do BilhonOS", "Resiliencia extrema", "Lideranca natural do time"],
            dores: [
              {t: "Conflito de Lideranca", p: "alta", d: "Duarte diz uma coisa, Pecanha diz outra."},
              {t: "Produto Fantasma", p: "alta", d: "Vende sem saber se a entrega esta garantida."}
                      ],
            recs: ["Definir autonomia de agenda", "Clarificar comissionamento", "Validar o produto final"]
  },
  {
            nome: "Andressa", cargo: "SDR", st: "green", stL: "Estavel",
            auto: "Gosta da empresa e do ambiente, mas se sente perdida nas calls de diagnostico.",
            fortes: ["Organizacao", "Vontade de aprender", "Boa comunicacao"],
            dores: [
              {t: "Falta de Script", p: "media", d: "Nao tem um roteiro claro para o diagnostico."},
              {t: "Feedbacks Escassos", p: "alta", d: "Nao sabe se esta no caminho certo."}
                      ],
            recs: ["Treinamento de produto", "Sessoes de Roleplay", "Feedback semanal estruturado"]
  },
  {
            nome: "Leticia", cargo: "SDR", st: "amber", stL: "Atencao",
            auto: "Questionadora e analitica. Percebe rapidamente os gargalos processuais.",
            fortes: ["Visao critica", "Agilidade", "Foco em resultados"],
            dores: [
              {t: "Inseguranca Financeira", p: "alta", d: "Nao entende a regra do jogo das comissoes."},
              {t: "Processo Travado", p: "media", d: "Sente que poderia produzir mais com menos burocracia."}
                      ],
            recs: ["Transparencia total em KPIs", "Plano de carreira claro", "Ouvir sugestoes de melhoria"]
  }
  ];

const PLANO = {
      i: [
        {a: "Alinhamento de Lideranca", p: "Critica", d: "Duarte e Pecanha precisam falar a mesma lingua.", r: "Diretoria"},
        {a: "Definicao de Ticket Medio", p: "Alta", d: "Fixar valores e pacotes de servico.", r: "Estrategia"}
            ],
      c: [
        {a: "Playbook de Vendas", p: "Media", d: "Criar script para diagnostico e fechamento.", r: "Gestao"},
        {a: "Quadro de Comissoes", p: "Alta", d: "Expor regras de bonus de forma transparente.", r: "RH/Financeiro"}
            ],
      m: [
        {a: "Escalabilidade", p: "Baixa", d: "Contratacao de novos SDRs com onboarding pronto.", r: "Expansao"},
        {a: "Feedback 360", p: "Media", d: "Implementar cultura de feedback continuo.", r: "Time"}
            ]
};
