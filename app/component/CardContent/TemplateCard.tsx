import React from "react";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "../components/ui/minimal-card";
const TemplateCard = () => {
  const cards = [
    {
      title: "Sick title",
      image:
        "https://i.pinimg.com/1200x/24/e9/f8/24e9f8ddd447184d0e1022b3cf319306.jpg",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      image:
        "https://i.pinimg.com/736x/ea/01/5a/ea015a2ef411979d94656a9f0d39c3e5.jpg",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      image:
        "https://i.pinimg.com/736x/93/38/08/9338083c22a862818fe873a03dc946b8.jpg",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
  ];

  return (
    <div className="w-full max-w-4xl">
      <div className="p-2">
        <h3 className="text-xl font-semibold">MinimalCard</h3>
      </div>
      <div className="min-h-[500px] p-4  flex flex-col justify-center border border-dashed rounded-lg space-y-4">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, key) => (
            <MinimalCard key={key}>
              <MinimalCardImage key={key} src={card.image} alt="Image01" />

              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardDescription>
                {card.description}
              </MinimalCardDescription>
            </MinimalCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
