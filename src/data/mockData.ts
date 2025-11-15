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
        title: 'Cell Biology Fundamentals',
        subject: 'Biology',
        description: 'Comprehensive overview of cell structure and functions'
    },
    {
        id: 2,
        title: 'Algebra Shortcuts',
        subject: 'Mathematics',
        description: 'Quick tips for solving algebraic equations'
    },
    {
        id: 3,
        title: 'World War II Timeline',
        subject: 'History',
        description: 'Key events and dates from 1939-1945'
    },
    {
        id: 4,
        title: 'Chemical Reactions Guide',
        subject: 'Chemistry',
        description: 'Common reaction types and examples'
    },
];