export interface Document {
    id: number;
    filename: string;
    type: 'pdf' | 'doc' | 'txt';
    date: string;
    size: string;
    subject: string;
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

// PDF files mapping - using public directory paths
// Files should be located in: public/data/
export const pdfFiles: Record<string, string> = {
    'family_business.pdf': '/data/family_business.pdf',
    'creativity.pdf': '/data/creativity.pdf',
    'descriptive_analysis.pdf': '/data/descriptive_analysis.pdf',
    'industrial_relation.pdf': '/data/industrial_relation.pdf',
    'leadership.pdf': '/data/leadership.pdf',
};

export const mockDocuments: Document[] = [
    {
        id: 1,
        filename: 'family_business.pdf',
        subject: 'BPMEK 3043 Family Business',
        type: 'pdf',
        date: '2025-11-10',
        size: '2.4 MB'
    },
    {
        id: 2,
        filename: 'creativity.pdf',
        subject: 'BPMEK 2023 Creativity Innovation',
        type: 'pdf',
        date: '2025-11-12',
        size: '1.2 MB'
    },
    {
        id: 3,
        filename: 'descriptive_analysis.pdf',
        subject: 'BPMNK 2033 Business Intelligence and Data Analytics',
        type: 'pdf',
        date: '2025-11-13',
        size: '3.1 MB'
    },
    {
        id: 4,
        filename: 'industrial_relation.pdf',
        subject: 'BPMHK 3103 Industrial Relations',
        type: 'pdf',
        date: '2025-11-14',
        size: '0.5 MB'
    },
    {
        id: 5,
        filename: 'leadership.pdf',
        subject: 'BPMNK 2023 Organizational Behaviour',
        type: 'pdf',
        date: '2025-11-14',
        size: '0.5 MB'
    },
];

export const mockFlashcards: Flashcard[] = [
    {
        id: 1,
        front: 'What is Photosynthesis?',
        back: 'The process by which green plants use sunlight to synthesize nutrients from carbon dioxide and water.',
        subject: 'BPMEK 3043 Family Business'
    },
    {
        id: 2,
        front: 'What is the Pythagorean Theorem?',
        back: 'a² + b² = c², where c is the hypotenuse of a right triangle.',
        subject: 'BPMEK 2023 Creativity Innovation'
    },
    {
        id: 3,
        front: 'When did World War II end?',
        back: 'September 2, 1945',
        subject: 'BPMNK 2033 Business Intelligence and Data Analytics'
    },
    {
        id: 4,
        front: 'What is the chemical formula for water?',
        back: 'H₂O - Two hydrogen atoms bonded to one oxygen atom',
        subject: 'BPMHK 3103 Industrial Relations'
    },
    {
        id: 5,
        front: 'Define Mitosis',
        back: 'A type of cell division that results in two daughter cells with the same number of chromosomes as the parent.',
        subject: 'BPMNK 2023 Organizational Behaviour'
    },
];

export const mockTasks: Task[] = [
    {id: 1, title: 'BPMEK 3043 Family Business', due: '2025-11-16', completed: false, priority: 'high'},
    {id: 2, title: 'BPMEK 2023 Creativity Innovation', due: '2025-11-17', completed: false, priority: 'high'},
    {
        id: 3,
        title: 'BPMNK 2033 Business Intelligence and Data Analytics',
        due: '2025-11-20',
        completed: false,
        priority: 'medium'
    },
    {id: 4, title: 'BPMHK 3103 Industrial Relations', due: '2025-11-18', completed: false, priority: 'medium'},
    {id: 5, title: 'BPMNK 2023 Organizational Behaviour', due: '2025-11-19', completed: false, priority: 'low'},
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