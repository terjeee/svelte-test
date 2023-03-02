export const load = () => {
  const subscriptions = [
    {
      id: "buy_workflow",
      title: "Workflow",
      priceMonth: 19,
      priceYear: 190,
      features: [
        "Unlimited Clients & Projects",
        "Proposals",
        "Contracts",
        "Invoicing & Payments",
        "Client CRM",
        "Project Management",
        "Task & Time Tracking",
        "IOS, Android, Mac & PC",
      ],
    },
    {
      id: "buy_workflow_plus",
      title: "Workflow Plus",
      priceMonth: 29,
      priceYear: 290,
      features: [
        "Everything in Workflow, plus:",
        "White-labelled Client Experience",
        "Client Forms & Questionnaires",
        "Workflow Automations",
        "Subcontracting (client-mode)",
        "Caledly Integration",
        "Client Portal",
        "Priority Support",
      ],
    },
  ];

  return { subscriptions };
};
