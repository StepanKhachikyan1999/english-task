const data = [
    {
    number: 1,
    question: "Ինչպես կթարգմանեք՝ «կարողություն» բառը",
    answer: "ability",
    options: [
      "ability",
      "sailor",
      "facility",
      "deftness"
    ]
  },
  {
    number: 2,
    question: "Ինչպես կթարգմանեք՝ «գեղարվեստական» բառը",
    answer: "fiction",
    options: [
      "ability",
      "retired",
      "fiction",
      "deftness"
    ]
  },
  {
    number: 3,
    question: "Ինչպես կթարգմանեք՝ «վայելել» բառը",
    answer: "enjoy",
    options: [
      "between",
      "mirror",
      "grow",
      "enjoy"
    ]
  },
  {
    number: 4,
    question: "Ինչպես կթարգմանեք՝ «Հորեղբայր» բառը",
    answer: "uncle",
    options: [
      "uncle",
      "foreign",
      "headphones",
      "notebook"
    ]
  },

  {
    number: 5,
    question: "Ինչպես կթարգմանեք՝ «զրույց» բառը",
    answer: "conversation",
    options: [
      "penny",
      "pocket",
      "conversation",
      "snake"
    ]
  },

  {
    number: 6,
    question: "Ինչպես կթարգմանեք՝ «գիտելիք» բառը",
    answer: "knowledge",
    options: [
      "spoken",
      "papers",
      "without",
      "knowledge"
    ]
  },

  {
    number: 7,
    question: "Ինչպես կթարգմանեք՝ «թղթեր» բառը",
    answer: "papers",
    options: [
      "papers",
      "unhappy",
      "bookshelf",
      "grandchild"
    ]
  },

  {
    number: 8,
    question: "Ինչպես կթարգմանեք՝ «օտար» բառը",
    answer: "foreign",
    options: [
      "each",
      "common",
      "foreign",
      "satellite"
    ]
  },
  {
    number: 9,
    question: "Ինչպես կթարգմանեք՝ «արբանյակ» բառը",
    answer: "satellite",
    options: [
      "different",
      "common",
      "foreign",
      "satellite"
    ]
  },
  {
    number: 10,
    question: "Ինչպես կթարգմանեք՝ «լսել» բառը",
    answer: "hear",
    options: [
      "different",
      "hear",
      "common",
      "conversation"
    ]
  },
  {
    number: 11,
    question: "Ինչպես կթարգմանեք՝ «կարճ» բառը",
    answer: "short",
    options: [
      "short",
      "hear",
      "without",
      "modern"
    ]
  },
  {
    number: 12,
    question: "Ինչպես կթարգմանեք՝ «քայլել» բառը",
    answer: "walk",
    options: [
      "has",
      "hear",
      "walk",
      "chute"
    ]
  },
  {
    number: 13,
    question: "Ինչպես կթարգմանեք՝ «ապրել» բառը",
    answer: "live",
    options: [
      "like",
      "heating",
      "live",
      "near"
    ]
  },
  {
    number: 14,
    question: "Ինչպես կթարգմանեք՝ «ժամանակակից» բառը",
    answer: "modern",
    options: [
      "camping",
      "modern",
      "nurse",
      "pain"
    ]
  },

  {
    number: 15,
    question: "Ինչպես կթարգմանեք՝ «աղբատար խողովակ» բառը",
    answer: "chute",
    options: [
      "toothache",
      "dentist",
      "chemist",
      "chute"
    ]
  },
  {
    number: 16,
    question: "Ինչպես կթարգմանեք՝ «սանհանգույց» բառը",
    answer: "bathroom",
    options: [
      "corridor",
      "dentist",
      "bathroom",
      "hall"
    ]
  },
  {
    number: 17,
    question: "Ինչպես կթարգմանեք՝ «պաստառ» բառը",
    answer: "wallpaper",
    options: [
      "wallpaper",
      "pattern",
      "bathroom",
      "chairs"
    ]
  },
  {
    number: 18,
    question: "Ինչպես կթարգմանեք՝ «տարբեր» բառը",
    answer: "different",
    options: [
      "around it",
      "pattern",
      "nice",
      "different"
    ]
  },
  {
    number: 19,
    question: "Ինչպես կթարգմանեք՝ «հարմարավետ» բառը",
    answer: "cosy",
    options: [
      "nice",
      "bookcase",
      "cosy",
      "a desk"
    ]
  },
];

const chooseRandom = (data, num = 1) => {
    const res = [];
    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * data.length);
       if(res.indexOf(data[random]) !== -1){
          continue;
       };
       res.push(data[random]);
       i++;
    };
    return res;
 };

const questions = chooseRandom(data, 7);