const { createApp } = Vue

createApp({
    data() {
        return {
            currentView: 'dashboard', // dashboard, revision, exam, calendar
            notifications: [1, 2],
            
            // Decks Data
            decks: [
                {
                    id: 1,
                    name: "Administration Réseau (AD DS)",
                    category: "BTS SIO - SISR",
                    count: 45,
                    exercises: 12,
                    mastery: 72,
                    cards: [
                        {
                            question: "Quel rôle Windows Server est indispensable avant l'installation de l'Active Directory ?",
                            answer: "Le rôle DNS (Domain Name System).",
                            context: "L'IA note : DNS est le cœur de la résolution de nom pour AD. Sans DNS, les clients ne peuvent pas localiser les contrôleurs de domaine (requêtes SRV)."
                        },
                        {
                            question: "Quelle est la commande Powershell pour ajouter un utilisateur dans l'AD ?",
                            answer: "New-ADUser",
                            context: "L'IA ajoute : Pense à importer le module ActiveDirectory si tu écris un script complet (`Import-Module ActiveDirectory`)."
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Programmation Orientée Objet (Java)",
                    category: "BTS SIO - SLAM",
                    count: 89,
                    exercises: 25,
                    mastery: 45,
                    cards: [
                        {
                            question: "Quelle est la différence entre une Classe et un Objet ?",
                            answer: "La classe est le moule/plan, l'objet est l'instance de ce plan.",
                            context: "L'IA explique : Imagine que la Classe est le plan de construction d'une maison d'architecte. L'Objet est la maison construite dans laquelle on peut physiquement entrer."
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Culture Économique et Juridique",
                    category: "Matière Générale",
                    count: 120,
                    exercises: 4,
                    mastery: 91,
                    cards: [
                        {
                            question: "Définissez le contrat synallagmatique",
                            answer: "C'est un contrat dans lequel les parties s'obligent réciproquement l'une envers l'autre.",
                            context: "Exemple BTS : Le contrat de travail en est la parfaite illustration (fourniture d'un travail contre versement d'un salaire)."
                        }
                    ]
                }
            ],
            
            // Revision State
            activeDeck: null,
            currentCardIndex: 0,
            isCardFlipped: false,

            // Exam State
            examStarted: false,
            examLevel: 'medium',

            // Calendar state
            activeDays: ['Lun', 'Mer', 'Jeu', 'Sam']
        }
    },
    computed: {
        currentCard() {
            if(this.activeDeck && this.activeDeck.cards[this.currentCardIndex]) {
                return this.activeDeck.cards[this.currentCardIndex];
            }
            return { question: '', answer: '', context: '' };
        }
    },
    methods: {
        startRevision(deck) {
            this.activeDeck = deck;
            this.currentCardIndex = 0;
            this.isCardFlipped = false;
            this.currentView = 'revision';
        },
        startExam(deck) {
            this.activeDeck = deck;
            this.examStarted = false;
            this.currentView = 'exam';
        },
        nextCard(feedback) {
            // Dans une vraie app, l'IA et l'algorithme Spaced Repetition gèrent la carte en fonction du feedback.
            console.log(`Carte marquée comme: ${feedback}`);
            
            this.isCardFlipped = false;
            
            // Delai pour l'animation CSS flip avant de changer les données
            setTimeout(() => {
                if (this.currentCardIndex < this.activeDeck.cards.length - 1) {
                    this.currentCardIndex++;
                } else {
                    alert("Session de révision terminée ! L'algorithme a mis a jour ton espacement.");
                    this.currentView = 'dashboard';
                }
            }, 300);
        },
        toggleDay(day) {
            const index = this.activeDays.indexOf(day);
            if(index > -1) {
                this.activeDays.splice(index, 1);
            } else {
                this.activeDays.push(day);
            }
        }
    }
}).mount('#app')
