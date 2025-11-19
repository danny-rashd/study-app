import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonLoading,
    IonPage,
    IonText,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import {useState} from 'react';
import {useHistory} from 'react-router';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const history = useHistory();

    const handleLogin = async () => {
        if (email && password) {
            setShowLoading(true);
            // Simulate API call
            setTimeout(() => {
                setShowLoading(false);
                // Store user in localStorage (mock)
                localStorage.setItem('user', JSON.stringify({email}));
                history.push('/tabs/home');
            }, 1500);
        } else {
            alert('Please enter email and password');
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Study App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Welcome Back</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel position="stacked">Email</IonLabel>
                            <IonInput
                                type="email"
                                value={email}
                                onIonInput={(e) => setEmail(e.detail.value!)}
                                placeholder="username@email.com"
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Password</IonLabel>
                            <IonInput
                                type="password"
                                value={password}
                                onIonInput={(e) => setPassword(e.detail.value!)}
                                placeholder="Password"
                            />
                        </IonItem>
                        <IonButton expand="block" onClick={handleLogin} className="ion-margin-top">
                            Login
                        </IonButton>
                        <IonText className="ion-text-center ion-margin-top">
                            Don't have an account? <a href="/signup">Sign up</a>
                        </IonText>
                    </IonCardContent>
                </IonCard>
                <IonLoading
                    isOpen={showLoading}
                    message={'Logging in...'}
                />
            </IonContent>
        </IonPage>
    );
};

export default Login;