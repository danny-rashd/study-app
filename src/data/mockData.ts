export interface Document {
    id: number;
    name: string;
    type: 'pdf' | 'doc' | 'txt';
    date: string;
    size: string;
}

export interface Flashcard {
    id: number;
    front: string;
    back: string;
    subject: string;
}

export interface Task {
    id: number;
    title: string;
    due: string;
    completed: boolean;
    priority: 'high' | 'medium' | 'low';
}

export interface SuggestedNote {
    id: number;
    title: string;
    subject: string;
    description: string;
}

export const mockDocuments: Document[] = [
    {id: 1, name: 'Biology_Chapter_3.pdf', type: 'pdf', date: '2025-11-10', size: '2.4 MB'},
    {id: 2, name: 'Math_Formulas.docx', type: 'doc', date: '2025-11-12', size: '1.2 MB'},
    {id: 3, name: 'History_Notes.pdf', type: 'pdf', date: '2025-11-13', size: '3.1 MB'},
    {id: 4, name: 'Chemistry_Lab.txt', type: 'txt', date: '2025-11-14', size: '0.5 MB'},
];

export const mockFlashcards: Flashcard[] = [
    {
        id: 1,
        front: 'What is Photosynthesis?',
        back: 'The process by which green plants use sunlight to synthesize nutrients from carbon dioxide and water.',
        subject: 'Biology'
    },
    {
        id: 2,
        front: 'What is the Pythagorean Theorem?',
        back: 'a² + b² = c², where c is the hypotenuse of a right triangle.',
        subject: 'Mathematics'
    },
    {
        id: 3,
        front: 'When did World War II end?',
        back: 'September 2, 1945',
        subject: 'History'
    },
    {
        id: 4,
        front: 'What is the chemical formula for water?',
        back: 'H₂O - Two hydrogen atoms bonded to one oxygen atom',
        subject: 'Chemistry'
    },
    {
        id: 5,
        front: 'Define Mitosis',
        back: 'A type of cell division that results in two daughter cells with the same number of chromosomes as the parent.',
        subject: 'Biology'
    },
];

export const mockTasks: Task[] = [
    {id: 1, title: 'Review Biology Chapter 3', due: '2025-11-16', completed: false, priority: 'high'},
    {id: 2, title: 'Complete Math Problem Set', due: '2025-11-17', completed: false, priority: 'high'},
    {id: 3, title: 'History Essay Draft', due: '2025-11-20', completed: true, priority: 'medium'},
    {id: 4, title: 'Chemistry Lab Report', due: '2025-11-18', completed: false, priority: 'medium'},
    {id: 5, title: 'Study for Physics Quiz', due: '2025-11-19', completed: false, priority: 'low'},
];

export const mockSuggestedNotes: SuggestedNote[] = [
    {
        id: 1,
        title: 'Foundations of Family Enterprise',
        subject: 'BPMEK 3043 Family Business',
        description: 'Core principles of family-owned businesses, including governance, succession, and conflict management.'
    },
    {
        id: 2,
        title: 'Creativity & Innovation Techniques',
        subject: 'BPMEK 2023 Creativity Innovation',
        description: 'Practical frameworks and methods to generate ideas, enhance creativity, and drive innovation.'
    },
    {
        id: 3,
        title: 'Business Intelligence Essentials',
        subject: 'BPMNK 2033 Business Intelligence and Data Analytics',
        description: 'Overview of BI concepts, data analytics workflows, dashboards, and decision-making using data.'
    },
    {
        id: 4,
        title: 'Understanding Industrial Relations',
        subject: 'BPMHK 3103 Industrial Relations',
        description: 'Key aspects of labour relations, collective bargaining, trade unions, and dispute resolution.'
    },
    {
        id: 5,
        title: 'Organizational Behaviour Overview',
        subject: 'BPMNK 2023 Organizational Behaviour',
        description: 'Study of human behaviour in organizations, including motivation, leadership, and team dynamics.'
    },
];