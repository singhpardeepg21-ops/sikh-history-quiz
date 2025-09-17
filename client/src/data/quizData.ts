export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Level {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

export const quizLevels: Level[] = [
  {
    id: "sikh-history",
    title: "Sikh History",
    description: "Learn about the rich history of Sikhism and its founders",
    icon: "📚",
    questions: [
      {
        id: "q1",
        question: "Who was the first Guru of Sikhism?",
        options: ["Guru Nanak Dev Ji", "Guru Angad Dev Ji", "Guru Ram Das Ji", "Guru Arjan Dev Ji"],
        correctAnswer: 0
      },
      {
        id: "q2",
        question: "In which year was Guru Nanak Dev Ji born?",
        options: ["1465", "1469", "1475", "1480"],
        correctAnswer: 1
      },
      {
        id: "q3",
        question: "How many Gurus were there in total in Sikhism?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 2
      },
      {
        id: "q4",
        question: "Who was the last human Guru of Sikhism?",
        options: ["Guru Tegh Bahadur Ji", "Guru Gobind Singh Ji", "Guru Har Krishan Ji", "Guru Har Rai Ji"],
        correctAnswer: 1
      },
      {
        id: "q5",
        question: "What is the holy book of Sikhism called?",
        options: ["Vedas", "Quran", "Guru Granth Sahib", "Bible"],
        correctAnswer: 2
      },
      {
        id: "q6",
        question: "Where was Guru Nanak Dev Ji born?",
        options: ["Amritsar", "Talwandi", "Kartarpur", "Lahore"],
        correctAnswer: 1
      },
      {
        id: "q7",
        question: "What does 'Sikh' mean?",
        options: ["Teacher", "Student", "Warrior", "Helper"],
        correctAnswer: 1
      },
      {
        id: "q8",
        question: "Who compiled the first version of Guru Granth Sahib?",
        options: ["Guru Nanak Dev Ji", "Guru Arjan Dev Ji", "Guru Gobind Singh Ji", "Guru Angad Dev Ji"],
        correctAnswer: 1
      },
      {
        id: "q9",
        question: "What are the three pillars of Sikhism?",
        options: ["Naam Japna, Kirat Karni, Vand Chakna", "Pray, Work, Share", "Faith, Hope, Charity", "Truth, Love, Service"],
        correctAnswer: 0
      },
      {
        id: "q10",
        question: "In which city is the Golden Temple located?",
        options: ["Delhi", "Chandigarh", "Amritsar", "Ludhiana"],
        correctAnswer: 2
      },
      {
        id: "q11",
        question: "Who established the city of Amritsar?",
        options: ["Guru Nanak Dev Ji", "Guru Ram Das Ji", "Guru Arjan Dev Ji", "Guru Hargobind Ji"],
        correctAnswer: 1
      },
      {
        id: "q12",
        question: "What is the name of the community kitchen in Gurdwaras?",
        options: ["Prasad", "Langar", "Kirtan", "Sangat"],
        correctAnswer: 1
      },
      {
        id: "q13",
        question: "Who was known as the 'Warrior Guru'?",
        options: ["Guru Hargobind Ji", "Guru Gobind Singh Ji", "Guru Tegh Bahadur Ji", "Guru Har Rai Ji"],
        correctAnswer: 0
      },
      {
        id: "q14",
        question: "What is the Sikh greeting?",
        options: ["Namaste", "Sat Sri Akal", "Salaam", "Hello"],
        correctAnswer: 1
      },
      {
        id: "q15",
        question: "Who were the Panj Pyare?",
        options: ["Five Gurus", "Five beloved ones", "Five disciples", "Five warriors"],
        correctAnswer: 1
      },
      {
        id: "q16",
        question: "What festival celebrates the birth of Guru Nanak Dev Ji?",
        options: ["Diwali", "Holi", "Guru Nanak Dev Ji Jayanti", "Baisakhi"],
        correctAnswer: 2
      },
      {
        id: "q17",
        question: "What are the five Ks in Sikhism?",
        options: ["Kesh, Kara, Kanga, Kachera, Kirpan", "Five sacred symbols", "Five prayers", "Five pillars"],
        correctAnswer: 0
      },
      {
        id: "q18",
        question: "Who founded the Khalsa?",
        options: ["Guru Nanak Dev Ji", "Guru Gobind Singh Ji", "Guru Hargobind Ji", "Guru Tegh Bahadur Ji"],
        correctAnswer: 1
      },
      {
        id: "q19",
        question: "What year was the Khalsa founded?",
        options: ["1650", "1675", "1699", "1708"],
        correctAnswer: 2
      },
      {
        id: "q20",
        question: "What is the name of the Sikh flag?",
        options: ["Kesari", "Nishan Sahib", "Khalsa Flag", "Guru Flag"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "punjab-history",
    title: "Punjab History",
    description: "Explore the historical heritage of Punjab",
    icon: "🏛️",
    questions: [
      {
        id: "q1",
        question: "What is Punjab known as?",
        options: ["Land of Rivers", "Land of Five Rivers", "Land of Wheat", "Land of Warriors"],
        correctAnswer: 1
      },
      {
        id: "q2",
        question: "Which river is NOT one of the five rivers of Punjab?",
        options: ["Sutlej", "Ganga", "Ravi", "Chenab"],
        correctAnswer: 1
      },
      {
        id: "q3",
        question: "What is the capital of Punjab state in India?",
        options: ["Amritsar", "Ludhiana", "Chandigarh", "Jalandhar"],
        correctAnswer: 2
      },
      {
        id: "q4",
        question: "Who was the famous Maharaja of Punjab?",
        options: ["Maharaja Ranjit Singh", "Maharaja Hari Singh", "Maharaja Gulab Singh", "Maharaja Duleep Singh"],
        correctAnswer: 0
      },
      {
        id: "q5",
        question: "In which year was Punjab divided?",
        options: ["1945", "1947", "1950", "1948"],
        correctAnswer: 1
      },
      {
        id: "q6",
        question: "What was the Sikh Empire's capital?",
        options: ["Amritsar", "Lahore", "Chandigarh", "Patiala"],
        correctAnswer: 1
      },
      {
        id: "q7",
        question: "Which famous massacre happened in Punjab in 1919?",
        options: ["Red Fort Massacre", "Jallianwala Bagh Massacre", "Golden Temple Massacre", "Lahore Massacre"],
        correctAnswer: 1
      },
      {
        id: "q8",
        question: "What is Punjab famous for in agriculture?",
        options: ["Rice", "Wheat", "Cotton", "Sugarcane"],
        correctAnswer: 1
      },
      {
        id: "q9",
        question: "Which festival is most popular in Punjab?",
        options: ["Diwali", "Holi", "Baisakhi", "Karva Chauth"],
        correctAnswer: 2
      },
      {
        id: "q10",
        question: "What is the traditional dance of Punjab?",
        options: ["Kathak", "Bhangra", "Odissi", "Bharatanatyam"],
        correctAnswer: 1
      },
      {
        id: "q11",
        question: "Which city is known as the 'Manchester of India'?",
        options: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala"],
        correctAnswer: 1
      },
      {
        id: "q12",
        question: "What language is primarily spoken in Punjab?",
        options: ["Hindi", "Urdu", "Punjabi", "English"],
        correctAnswer: 2
      },
      {
        id: "q13",
        question: "Which script is used to write Punjabi?",
        options: ["Devanagari", "Gurmukhi", "Arabic", "Roman"],
        correctAnswer: 1
      },
      {
        id: "q14",
        question: "What is the state bird of Punjab?",
        options: ["Peacock", "Sparrow", "Baaz (Northern Goshawk)", "Parrot"],
        correctAnswer: 2
      },
      {
        id: "q15",
        question: "Which British officer was responsible for the Jallianwala Bagh massacre?",
        options: ["General Dyer", "Lord Curzon", "Lord Mountbatten", "General Roberts"],
        correctAnswer: 0
      },
      {
        id: "q16",
        question: "What is the area of Punjab state in India (approximately)?",
        options: ["40,000 sq km", "50,394 sq km", "60,000 sq km", "70,000 sq km"],
        correctAnswer: 1
      },
      {
        id: "q17",
        question: "Which city has the largest grain market in Asia?",
        options: ["Amritsar", "Ludhiana", "Khanna", "Jalandhar"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "guru-nanak-travels",
    title: "Guru Nanak Dev Ji Travels",
    description: "Learn about Guru Nanak Dev Ji's spiritual journeys",
    icon: "🚶‍♂️",
    questions: [
      {
        id: "q1",
        question: "How many major spiritual journeys (Udasis) did Guru Nanak Dev Ji undertake?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswer: 1
      },
      {
        id: "q2",
        question: "Who was Guru Nanak Dev Ji's constant companion during his travels?",
        options: ["Bhai Lehna", "Mardana", "Bala", "Kalu"],
        correctAnswer: 1
      },
      {
        id: "q3",
        question: "What instrument did Mardana play?",
        options: ["Tabla", "Harmonium", "Rabab", "Flute"],
        correctAnswer: 2
      },
      {
        id: "q4",
        question: "Which holy city did Guru Nanak Dev Ji visit during his travels?",
        options: ["Jerusalem", "Mecca", "Vatican", "Tibet"],
        correctAnswer: 1
      },
      {
        id: "q5",
        question: "In which direction did Guru Nanak Dev Ji travel during his first Udasi?",
        options: ["North", "South", "East", "West"],
        correctAnswer: 2
      },
      {
        id: "q6",
        question: "Which country did Guru Nanak Dev Ji visit during his travels?",
        options: ["China", "Sri Lanka", "Burma", "All of these"],
        correctAnswer: 1
      },
      {
        id: "q7",
        question: "Where did Guru Nanak Dev Ji establish Kartarpur?",
        options: ["India", "Pakistan", "Both banks of Ravi", "Afghanistan"],
        correctAnswer: 1
      },
      {
        id: "q8",
        question: "What was the main purpose of Guru Nanak Dev Ji's travels?",
        options: ["Trade", "Pilgrimage", "Spreading divine message", "Adventure"],
        correctAnswer: 2
      },
      {
        id: "q9",
        question: "Which river did Guru Nanak Dev Ji cross multiple times during travels?",
        options: ["Ganges", "Indus", "Ravi", "Yamuna"],
        correctAnswer: 2
      },
      {
        id: "q10",
        question: "In which city did Guru Nanak Dev Ji have a famous dialogue about prayer direction?",
        options: ["Mecca", "Medina", "Baghdad", "Damascus"],
        correctAnswer: 0
      },
      {
        id: "q11",
        question: "How many years did Guru Nanak Dev Ji spend traveling approximately?",
        options: ["10 years", "15 years", "20 years", "25 years"],
        correctAnswer: 2
      },
      {
        id: "q12",
        question: "Which mountain ranges did Guru Nanak Dev Ji cross during travels?",
        options: ["Himalayas", "Hindu Kush", "Karakoram", "All of these"],
        correctAnswer: 0
      },
      {
        id: "q13",
        question: "What did Guru Nanak Dev Ji emphasize during his travels?",
        options: ["Ritual worship", "One God for all", "Caste system", "Material wealth"],
        correctAnswer: 1
      },
      {
        id: "q14",
        question: "Which age was Guru Nanak Dev Ji when he started his travels?",
        options: ["25", "30", "35", "40"],
        correctAnswer: 1
      },
      {
        id: "q15",
        question: "Where did Guru Nanak Dev Ji spend his final years?",
        options: ["Talwandi", "Kartarpur", "Sultanpur", "Eminabad"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "sikh-war-history",
    title: "Sikh War History",
    description: "Learn about the brave warriors and battles in Sikh history",
    icon: "⚔️",
    questions: [
      {
        id: "q1",
        question: "How many Anglo-Sikh Wars were fought?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: 1
      },
      {
        id: "q2",
        question: "When was the First Anglo-Sikh War fought?",
        options: ["1845-46", "1848-49", "1850-51", "1843-44"],
        correctAnswer: 0
      },
      {
        id: "q3",
        question: "Who led the Sikh army during the Anglo-Sikh Wars?",
        options: ["Maharaja Ranjit Singh", "Maharaja Duleep Singh", "Lal Singh", "Tej Singh"],
        correctAnswer: 1
      },
      {
        id: "q4",
        question: "Which battle was the decisive battle of the First Anglo-Sikh War?",
        options: ["Battle of Mudki", "Battle of Ferozeshah", "Battle of Sobraon", "Battle of Aliwal"],
        correctAnswer: 2
      },
      {
        id: "q5",
        question: "Who was known as the 'Lion of Punjab'?",
        options: ["Maharaja Duleep Singh", "Maharaja Ranjit Singh", "Hari Singh Nalwa", "Sham Singh Attariwala"],
        correctAnswer: 1
      },
      {
        id: "q6",
        question: "Which Sikh general was famous for his victories in Afghanistan?",
        options: ["Hari Singh Nalwa", "Sham Singh Attariwala", "Chattar Singh", "Tej Singh"],
        correctAnswer: 0
      },
      {
        id: "q7",
        question: "When was the Second Anglo-Sikh War fought?",
        options: ["1845-46", "1848-49", "1850-51", "1852-53"],
        correctAnswer: 1
      },
      {
        id: "q8",
        question: "What happened to Punjab after the Second Anglo-Sikh War?",
        options: ["It became independent", "It was annexed by British", "It joined Pakistan", "It became a princely state"],
        correctAnswer: 1
      },
      {
        id: "q9",
        question: "Who was the youngest Maharaja of Punjab?",
        options: ["Maharaja Ranjit Singh", "Maharaja Kharak Singh", "Maharaja Duleep Singh", "Maharaja Sher Singh"],
        correctAnswer: 2
      },
      {
        id: "q10",
        question: "Which fort was captured by Hari Singh Nalwa?",
        options: ["Jamrud Fort", "Attock Fort", "Multan Fort", "Peshawar Fort"],
        correctAnswer: 0
      },
      {
        id: "q11",
        question: "What was the Khalsa army also known as?",
        options: ["Sikh Army", "Punjab Army", "Dal Khalsa", "Sarkar-e-Khalsa"],
        correctAnswer: 2
      },
      {
        id: "q12",
        question: "Who betrayed the Sikh army during the Anglo-Sikh Wars?",
        options: ["Gulab Singh", "Lal Singh and Tej Singh", "Chattar Singh", "Sham Singh"],
        correctAnswer: 1
      },
      {
        id: "q13",
        question: "Which battle saw the heroic last stand of Sham Singh Attariwala?",
        options: ["Battle of Sobraon", "Battle of Chillianwala", "Battle of Gujrat", "Battle of Mudki"],
        correctAnswer: 0
      },
      {
        id: "q14",
        question: "What was the fate of Maharaja Duleep Singh after the wars?",
        options: ["He was executed", "He was exiled to England", "He became a British ally", "He fled to Afghanistan"],
        correctAnswer: 1
      },
      {
        id: "q15",
        question: "Which river was crossed by the British to start the First Anglo-Sikh War?",
        options: ["Ravi", "Sutlej", "Chenab", "Beas"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "chaar-sahibzaade",
    title: "Chaar Sahibzaade",
    description: "Learn about the four brave sons of Guru Gobind Singh Ji",
    icon: "👑",
    questions: [
      {
        id: "q1",
        question: "How many sons did Guru Gobind Singh Ji have?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswer: 1
      },
      {
        id: "q2",
        question: "What does 'Sahibzaade' mean?",
        options: ["Princes", "Warriors", "Students", "Leaders"],
        correctAnswer: 1
      },
      {
        id: "q3",
        question: "Who was the eldest of the four Sahibzaade?",
        options: ["Sahibzada Jujhar Singh", "Sahibzada Ajit Singh", "Sahibzada Zorawar Singh", "Sahibzada Fateh Singh"],
        correctAnswer: 1
      },
      {
        id: "q4",
        question: "At what age did Sahibzada Ajit Singh attain martyrdom?",
        options: ["16 years", "17 years", "18 years", "19 years"],
        correctAnswer: 2
      },
      {
        id: "q5",
        question: "Which battle saw the martyrdom of the elder two Sahibzaade?",
        options: ["Battle of Anandpur", "Battle of Chamkaur", "Battle of Muktsar", "Battle of Sirhind"],
        correctAnswer: 1
      },
      {
        id: "q6",
        question: "Who was the youngest of the four Sahibzaade?",
        options: ["Sahibzada Zorawar Singh", "Sahibzada Fateh Singh", "Sahibzada Jujhar Singh", "Sahibzada Ajit Singh"],
        correctAnswer: 1
      },
      {
        id: "q7",
        question: "How old was Sahibzada Fateh Singh when he was martyred?",
        options: ["6 years", "7 years", "8 years", "9 years"],
        correctAnswer: 1
      },
      {
        id: "q8",
        question: "Where were the younger Sahibzaade martyred?",
        options: ["Chamkaur", "Anandpur", "Sirhind", "Muktsar"],
        correctAnswer: 2
      },
      {
        id: "q9",
        question: "Who was the cruel governor who ordered the martyrdom of the younger Sahibzaade?",
        options: ["Wazir Khan", "Aurangzeb", "Ahmad Shah", "Mir Mannu"],
        correctAnswer: 0
      },
      {
        id: "q10",
        question: "What was the method of martyrdom of the younger Sahibzaade?",
        options: ["Sword", "Bricked alive", "Hanging", "Arrows"],
        correctAnswer: 1
      },
      {
        id: "q11",
        question: "Who betrayed and captured the younger Sahibzaade?",
        options: ["Gangu", "Wazir Khan", "Aurangzeb", "Ahmad Shah"],
        correctAnswer: 0
      },
      {
        id: "q12",
        question: "What did the younger Sahibzaade refuse to do to save their lives?",
        options: ["Fight in battle", "Convert to Islam", "Leave Punjab", "Bow to the emperor"],
        correctAnswer: 1
      },
      {
        id: "q13",
        question: "Which Sahibzada fought alongside his elder brother in the Battle of Chamkaur?",
        options: ["Sahibzada Zorawar Singh", "Sahibzada Fateh Singh", "Sahibzada Jujhar Singh", "None of them"],
        correctAnswer: 2
      }
    ]
  }
];
