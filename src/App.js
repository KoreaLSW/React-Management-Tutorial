import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
    {
        id: '1',
        image: 'https://placeimg.com/64/64/1',
        name: '홍길동',
        birthday: '961222',
        gender: '남자',
        job: '대학생',
    },
    {
        id: '2',
        image: 'https://placeimg.com/64/64/2',
        name: '이몽룡',
        birthday: '960101',
        gender: '남자',
        job: '대학생',
    },
    {
        id: '3',
        image: 'https://placeimg.com/64/64/3',
        name: '성춘향',
        birthday: '021202',
        gender: '여자',
        job: '대학생',
    },
];

function App() {
    return (
        <>
            {customers.map((customer) => {
                return (
                    <Customer
                        key={customer.id}
                        id={customer.id}
                        image={customer.image}
                        name={customer.name}
                        birthday={customer.birthday}
                        gender={customer.gender}
                        job={customer.job}
                    />
                );
            })}
        </>
    );
}

export default App;
