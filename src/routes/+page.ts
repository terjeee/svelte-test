export const load = () => {
  const subscriptions = [
    {
      id: "buy_workflow",
      title: "Workflow",
      price: 19,
      discountPercentageYearly: 10,
      features: [
        "Unlimited Clients & Projects",
        "Proposals",
        "Contracts",
        "Invoicing & Payments",
        "Client CRM",
        "Project Management",
        "Task & Time Tracking",
        "IOS, Android, Chrome & Mac Apps",
      ],
    },
    {
      id: "buy_workflow_plus",
      title: "Workflow Plus",
      price: 29,
      discountPercentageYearly: 10,
      features: [
        "Everything in Workflow, plus...",
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
