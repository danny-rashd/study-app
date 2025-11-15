import {
    IonBadge,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import {useState} from 'react';
import {mockTasks} from '../data/mockData';

const Planner: React.FC = () => {
    const [tasks, setTasks] = useState(mockTasks);
    const [searchText, setSearchText] = useState('');

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high':
                return 'danger';
            case 'medium':
                return 'warning';
            case 'low':
                return 'success';
            default:
                return 'medium';
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Study Planner</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonSearchbar
                    value={searchText}
                    onIonChange={(e) => setSearchText(e.detail.value!)}
                    placeholder="Search tasks..."
                />

                <IonList>
                    {filteredTasks.map((task) => (
                        <IonItem key={task.id}>
                            <IonCheckbox
                                slot="start"
                                checked={task.completed}
                                onIonChange={() => toggleTask(task.id)}
                            />
                            <IonLabel className={task.completed ? 'ion-text-wrap' : ''}>
                                <h2 style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                                    {task.title}
                                </h2>
                                <p>Due: {task.due}</p>
                            </IonLabel>
                            <IonBadge slot="end" color={getPriorityColor(task.priority)}>
                                {task.priority}
                            </IonBadge>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Planner;